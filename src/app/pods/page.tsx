import { auth } from "@/auth";
import NewPod from "@/components/ui/NewPod";
import Pod from "@/components/ui/Pod";
import { redirect } from "next/navigation";

// Sample data
const podsDue = 3;

export default async function Pods() {
  const session = await auth();
  if (!session) redirect("/login");
  const { name, email } = session.user!;

  return (
    <div className="mx-auto flex max-w-7xl flex-col items-start space-y-10 p-8 text-text">
      <div className="space-y-2">
        <h1 className="font-heading text-4xl">Hello, {name} </h1>
        <p className="font-body text-lg">({email})</p>
      </div>
      <div className="space-y-8">
        <h2 className="font-heading text-3xl">Upcoming Pods ( {podsDue} ):</h2>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <NewPod />
          <Pod />
          <Pod />
          <Pod />
        </div>
      </div>
    </div>
  );
}
