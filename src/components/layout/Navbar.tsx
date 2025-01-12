import { auth, signOut } from "@/auth";
import Link from "next/link";

export default async function Navbar() {
  const session = await auth();
  const signedIn = session?.user ? true : false;

  return (
    <header className="sticky top-0 z-20 border-b border-b-gray-700/50 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8 font-heading text-text">
        <button className="text-4xl">
          <Link href="/">Memora</Link>
        </button>
        <div className="flex items-center gap-7">
          <Link
            href="/features"
            className="text-lg transition-colors duration-200 hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="/dashboard"
            className="text-lg transition-colors duration-200 hover:text-primary"
          >
            Dashboard
          </Link>
          {!signedIn ? (
            <Link
              href="/login"
              className="rounded-lg bg-accent px-3 py-1.5 text-lg transition-colors duration-200 hover:bg-accentlight"
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
                className="rounded-lg bg-accent px-3 py-1.5 text-lg transition-colors duration-200 hover:bg-accentlight"
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
