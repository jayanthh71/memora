import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-b-gray-700/50 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8 font-heading text-text">
        <h1 className="text-4xl">Memora</h1>
        <div className="flex items-center gap-7">
          <Link
            href="/"
            className="text-lg transition-colors duration-200 hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="text-lg transition-colors duration-200 hover:text-primary"
          >
            Dashboard
          </Link>
          <Link
            href="/memories"
            className="text-lg transition-colors duration-200 hover:text-primary"
          >
            Memories
          </Link>
          <button className="rounded-lg bg-accent px-3 py-1.5 text-lg transition-colors duration-200 hover:bg-accentlight">
            Get started
          </button>
        </div>
      </nav>
    </header>
  );
}
