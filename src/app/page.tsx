import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col items-center justify-center">
      <div className="absolute -left-0 -translate-x-1/2">
        <Image
          className="animate-gear-spin"
          src="/gear.svg"
          width={500}
          height={500}
          alt="Spinning gear wheel"
        />
      </div>
      <div className="absolute right-0 translate-x-1/2">
        <Image
          className="animate-gear-spin-counter"
          src="/gear.svg"
          width={500}
          height={500}
          alt="Spinning gear wheel"
        />
      </div>
      <div className="flex w-2/3 flex-col gap-6 text-center font-body text-text">
        <p className="text-3xl font-bold">
          Capture your most meaningful moments today and relive them anytime.
        </p>
        <p className="text-xl">
          Memora helps you create digital time capsules filled with thoughts,
          photos and videos, all securely stored for the future. Whether
          it&apos;s a heartfelt letter to your future self, a collection of
          memories for your loved ones, or a simple reminder of who you were at
          a certain time, Memora ensures your stories stand the test of time.
        </p>
      </div>
    </main>
  );
}
