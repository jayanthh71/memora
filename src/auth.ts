import { connectDB } from "@/lib/database";
import DAuth from "@/lib/dauth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, DAuth],
  adapter: MongoDBAdapter(connectDB()),
  callbacks: {},
});
