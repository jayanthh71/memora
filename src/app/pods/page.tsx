import { auth } from "@/auth";
import CreatePod from "@/components/ui/CreatePod";
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
        <h1 className="font-body text-4xl font-bold">Hello, {name} </h1>
        <p className="font-body text-lg">({email})</p>
      </div>
      <div className="space-y-8">
        <h2 className="font-body text-3xl font-bold">
          Upcoming Pods ({podsDue}):
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <CreatePod />
          <Pod />
          <Pod />
          <Pod />
        </div>
      </div>
    </div>
  );
}
