import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();
  if (!session) redirect("/login");
  const user = session?.user;

  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-5 text-2xl font-bold text-text">
      <h1>Hello {user ? user.name : "Person"}</h1>
      {user && (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="rounded-lg bg-accent p-2 text-lg" type="submit">
            Sign out
          </button>
        </form>
      )}
    </div>
  );
}
