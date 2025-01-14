"use server";

import { neon } from "@neondatabase/serverless";
import { redirect } from "next/navigation";

export default async function handleDeletePod(id: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error("Environment variable for database is not set");
  }

  const sql = neon(process.env.DATABASE_URL);
  await sql`DELETE FROM pods WHERE id = ${id}`;

  redirect("/pods");
}
