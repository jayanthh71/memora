import Link from "next/link";

export default function Navbar() {
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
          <Link
            href="/login"
            className="rounded-lg bg-accent px-3 py-1.5 text-lg transition-colors duration-200 hover:bg-accentlight"
          >
            Get started
          </Link>
        </div>
      </nav>
    </header>
  );
}
