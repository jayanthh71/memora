import Gears from "@/components/layout/Gears";

export default function Home() {
  return (
    <>
      <Gears />
      <div className="mb-16 flex h-screen flex-col items-center gap-12">
        <p className="mt-40 w-[72vh] text-center text-3xl font-bold">
          Capture your most meaningful moments today and relive them anytime.
        </p>
        <p className="w-[72vh] text-center text-xl">
          Memora helps you create digital time capsules filled with thoughts,
          photos and videos, all securely stored for the future. Whether it's a
          heartfelt letter to your future self, a collection of memories for
          your loved ones, or a simple reminder of who you were at a certian
          time, Memora ensures your stories stand the test of time.
        </p>
      </div>
    </>
  );
}
