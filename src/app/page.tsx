import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col items-center justify-center">
      <div className="absolute -left-0 -z-10 -translate-x-1/2">
        <Image
          className="animate-gear-spin"
          src="/gear.svg"
          width={350}
          height={350}
          alt="Spinning gear wheel"
        />
      </div>
      <div className="absolute right-0 -z-10 translate-x-1/2">
        <Image
          className="animate-gear-spin-counter"
          src="/gear.svg"
          width={350}
          height={350}
          alt="Spinning gear wheel"
        />
      </div>
      <div className="font-body text-text flex w-2/3 flex-col gap-6 text-center">
        <p className="text-3xl font-bold">
          Capture your most meaningful moments today and relive them anytime.
        </p>
        <p className="text-xl">
          Memora helps you create digital time capsules filled with your
          thoughts securely stored for the future. Whether it&apos;s a heartfelt
          letter to your future self, a collection of memories for your loved
          ones, or a simple reminder of who you were at a certain time, Memora
          ensures your stories stand the test of time.
        </p>
        <Link
          href="/pods"
          className="bg-accent hover:bg-accentlight mx-auto w-40 rounded-lg px-3 py-1.5 text-lg font-bold transition-colors duration-200"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
}
