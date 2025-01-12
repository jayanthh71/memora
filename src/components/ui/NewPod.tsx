import Link from "next/link";

export default function NewPod() {
  return (
    <Link
      className="flex h-80 w-72 min-w-min flex-col items-center justify-center rounded-xl border-2 border-accent bg-secondary p-4 text-center text-text transition-shadow hover:shadow-[0_0_25px_5px_rgba(0,0,0,0.2)] hover:shadow-accent"
      href="/pods/new"
    >
      <h1 className="font-heading text-xl">Create New Pod</h1>
    </Link>
  );
}
