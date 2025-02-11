import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex w-screen flex-col items-center justify-center gap-3 text-center">
      <h1 className="text-primary font-sans text-8xl font-bold">404</h1>
      <h2 className="font-body text-text text-3xl">There was a problem.</h2>
      <p className="font-body text-text">
        We could not find the page you were looking for.
      </p>
      <p className="font-body text-text">
        Go back to the{" "}
        <Link href="/" className="text-primary underline">
          Home Page
        </Link>
      </p>
    </main>
  );
}
