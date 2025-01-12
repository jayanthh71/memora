import Link from "next/link";

export default function NewPod() {
  return (
    <div className="flex h-80 w-72 min-w-min flex-col items-center justify-center space-y-5 rounded-xl border-2 border-accent bg-secondary p-4 text-center text-text transition-shadow hover:shadow-[0_0_25px_5px_rgba(0,0,0,0.2)] hover:shadow-accent">
      <h1 className="font-heading text-xl">Create New Pod</h1>
      <Link
        className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-text"
        href="/pods/new"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </Link>
    </div>
  );
}
