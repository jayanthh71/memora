import { auth, signIn } from "@/auth";

export default async function Dashboard() {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-5 font-heading text-3xl font-bold text-text">
      <h1>Hello {user ? user.name : "Person"}</h1>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button className="rounded-lg bg-accent p-2" type="submit">
          Google
        </button>
      </form>
    </div>
  );
}
