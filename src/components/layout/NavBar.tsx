import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav>
        <div className="mx-auto max-w-7xl p-6">
          <div className="flex h-20 items-center justify-between font-heading text-text">
            <Link href="/" className="text-6xl">
              Memora
            </Link>
            <div className="space-x-7 text-lg">
              <Link href="/features" className="p-1.5 hover:text-primary">
                Features
              </Link>
              <Link href="/memories" className="p-1.5 hover:text-primary">
                My Memories
              </Link>
              <Link href="/dashboard" className="p-1.5 hover:text-primary">
                Dashboard
              </Link>
              <button className="rounded-lg bg-accent p-1.5 px-3 hover:bg-accentlight">
                Get started
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
