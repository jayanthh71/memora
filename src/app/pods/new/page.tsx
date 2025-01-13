import Tiptap from "@/components/ui/Tiptap";

// Sample Pod
const pod = {
  id: "",
  email: "",
  name: "",
  description: "",
  date_created: "",
  date_due: "",
  content: "",
};

export default function NewPod() {
  return (
    <div className="mx-auto flex min-w-full max-w-7xl flex-col items-center gap-8 p-8 text-text">
      <h1 className="font-heading text-4xl">Create a new Pod</h1>
      <div className="flex h-5/6 w-5/6 flex-col items-center justify-between rounded-xl border-2 border-accent bg-secondary p-4">
        <div className="w-3/5 space-y-5 p-4">
          <div className="flex min-w-full items-start justify-between gap-3">
            <h1 className="font-body text-2xl font-bold">Pod Name:</h1>
            <input
              className="w-96 rounded-md border bg-secondary p-1.5 font-body text-xl focus:outline-none"
              type="text"
              autoFocus={true}
            />
          </div>
          <div className="flex min-w-full items-start justify-between gap-3">
            <h1 className="font-body text-2xl font-bold">Description:</h1>
            <Tiptap content={pod.description} />
          </div>
          <div className="flex min-w-full items-start justify-between gap-3">
            <h1 className="font-body text-2xl font-bold">Due Date:</h1>
            <input
              className="w-96 rounded-md border bg-secondary p-1.5 font-body text-lg focus:outline-none"
              type="date"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
          <div className="flex min-w-full items-start justify-between gap-3">
            <h1 className="font-body text-2xl font-bold">Content:</h1>
            <Tiptap content={pod.content} />
          </div>
        </div>
        <div className="flex justify-center pb-4">
          <button className="w-40 rounded-lg bg-accent px-3 py-1.5 font-body text-lg font-bold">
            Create Pod
          </button>
        </div>
      </div>
    </div>
  );
}
