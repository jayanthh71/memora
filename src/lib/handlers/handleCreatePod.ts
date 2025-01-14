"use server";

import { auth } from "@/auth";
import { FormFields, Pod } from "@/lib/types";
import { randomUUID } from "crypto";
import { redirect } from "next/navigation";

export default async function handleCreatePod(data: FormFields) {
  const session = await auth();
  if (!session) redirect("/login");
  const { email } = session.user!;

  const pod: Pod = {
    id: randomUUID(),
    email: email!,
    name: data.name,
    description: data.description,
    dateCreated: new Date().toISOString().split("T")[0],
    dateDue: data.dueDate,
    content: data.content,
  };

  console.log(pod);
}
