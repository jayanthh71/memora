"use server";

import { auth } from "@/lib/auth";
import { FormFields, Pod } from "@/lib/types";
import { neon } from "@neondatabase/serverless";
import { randomUUID } from "crypto";
import { redirect } from "next/navigation";

export default async function handleCreatePod(data: FormFields) {
  const session = await auth();
  if (!session) redirect("/login");
  if (!session.user?.email) {
    throw new Error("User email is required");
  }
  const { email } = session.user;

  const pod: Pod = {
    id: randomUUID(),
    email: email,
    name: data.name,
    description: data.description,
    dateCreated: new Date().toISOString().split("T")[0],
    dateDue: data.dueDate,
    content: data.content,
  };

  if (!process.env.DATABASE_URL) {
    throw new Error("Environment variable for database is not set");
  }

  const sql = neon(process.env.DATABASE_URL);
  try {
    await sql`
      INSERT INTO pods (id, email, name, description, date_created, date_due, content)
      VALUES (${pod.id}, ${pod.email}, ${pod.name}, ${pod.description}, ${pod.dateCreated}, ${pod.dateDue}, ${pod.content})
    `;
  } catch (error) {
    console.error("Failed to create pod:", error);
    throw new Error("Error saving pod to the database");
  }

  redirect("/pods");
}
