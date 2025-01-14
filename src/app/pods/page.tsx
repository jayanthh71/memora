import { auth } from "@/auth";
import CreatePod from "@/components/ui/CreatePod";
import Pod from "@/components/ui/Pod";
import handlePodsDue from "@/lib/handlers/handlePodsDue";
import { redirect } from "next/navigation";

export default async function Pods() {
  const session = await auth();
  if (!session) redirect("/login");

  if (!session.user?.name || !session.user?.email) {
    throw new Error("User data is required");
  }
  const { name, email } = session.user;
  const podsDue = await handlePodsDue(email);

  return (
    <div className="mx-auto flex max-w-7xl flex-col items-start space-y-10 p-8 text-text">
      <div className="space-y-2">
        <h1 className="font-body text-4xl font-bold">Hello, {name} </h1>
        <p className="font-body text-lg">({email})</p>
      </div>
      <div className="space-y-8">
        <h2 className="font-body text-3xl font-bold">
          Upcoming Pods ({podsDue.length}):
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <CreatePod />
          {podsDue.map((pod) => (
            <Pod
              key={pod.id}
              id={pod.id}
              name={pod.name}
              description={pod.description}
              dateDue={pod.date_due}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
