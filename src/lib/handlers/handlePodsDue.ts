"use server";

import { neon } from "@neondatabase/serverless";

export default async function handlePodsDue(email: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error("Environment variable for database is not set");
  }

  const sql = neon(process.env.DATABASE_URL);
  const podsDue = await sql`SELECT * FROM pods WHERE email = ${email}`;
  return podsDue;
}
