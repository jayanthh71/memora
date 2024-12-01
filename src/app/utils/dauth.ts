import { redirect } from "next/navigation";

export default async function DAuth() {
  redirect(
    `https://auth.delta.nitt.edu/authorize?client_id=${process.env.DAUTH_ID}&redirect_uri=${process.env.DAUTH_REDIRECT}&scope=user`,
  );
}
