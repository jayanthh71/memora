import { auth } from "@/auth";
import Pod from "@/components/ui/Pod";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();
  if (!session) redirect("/login");
  const { name, email } = session.user!;

  return (
    <div className="mx-auto flex flex-col items-center text-text">
      <h1 className="p-5 font-heading text-4xl">Hello, {name} </h1>
      <p className="font-body text-lg">({email})</p>
      <div className="flex flex-wrap justify-center gap-10 p-10"></div>
    </div>
  );
}
