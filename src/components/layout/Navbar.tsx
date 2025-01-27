import { auth, signOut } from "@/lib/auth";
import Link from "next/link";

export default async function Navbar() {
  const session = await auth();
  const signedIn = session?.user ? true : false;

  return (
    <header className="sticky top-0 z-20 border-b border-b-gray-700/50 backdrop-blur-sm">
      <nav className="text-text mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <button className="font-heading text-4xl">
          <Link href="/">Memora</Link>
        </button>
        <div className="flex items-center gap-7">
          <Link
            href="/pods"
            className="font-body hover:text-primary text-lg font-bold transition-colors duration-200"
          >
            Pods
          </Link>
          {!signedIn ? (
            <Link
              href="/login"
              className="bg-accent font-body hover:bg-accentlight rounded-lg px-3 py-1.5 text-lg font-bold transition-colors duration-200"
            >
              Sign in
            </Link>
          ) : (
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button
                className="bg-accent font-body hover:bg-accentlight rounded-lg px-3 py-1.5 text-lg font-bold transition-colors duration-200"
                type="submit"
              >
                Sign out
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
}
