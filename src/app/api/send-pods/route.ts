import { neon } from "@neondatabase/serverless";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET(req: NextRequest) {
  try {
    const url = req.url;
    const params = new URLSearchParams(url?.split("?")[1]);
    const key = params.get("key");
    if (key !== process.env.EMAIL_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!process.env.DATABASE_URL) {
      throw new Error("Environment variable for database is not set");
    }

    const sql = neon(process.env.DATABASE_URL);

    const now = new Date();
    const currentDate = now.toISOString().split("T")[0];

    const result =
      await sql`SELECT * FROM pods WHERE date_due = ${currentDate}`;

    if (!result.length) {
      return NextResponse.json(
        { message: "No emails to send today." },
        { status: 200 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    for (const { id, email, content } of result) {
      try {
        await transporter.sendMail({
          from: `"Memora" <${process.env.EMAIL_USER}>`,
          to: email,
          subject: "Your Memora Pod is Here!",
          text: content,
        });

        await sql`DELETE FROM pods WHERE id = ${id}`;
      } catch (err) {
        console.error(`Failed to send email to ${email}:`, err);
      }
    }

    return NextResponse.json({ message: "Emails processed." }, { status: 200 });
  } catch (error) {
    console.error("Error processing emails:", error);
    return NextResponse.json(
      { error: "Failed to process emails." },
      { status: 500 },
    );
  }
}
