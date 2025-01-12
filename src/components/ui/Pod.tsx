// Sample Pod
const pod = {
  id: "09bjb13B32",
  email: "example@example.com",
  name: "My Pod",
  description: "This is my memory which happened in the past",
  date_created: "2025-01-01",
  date_due: "2025-02-14",
  content: "#This is a pod\n\n##My Memory...",
};

export default function Pod() {
  return (
    <div className="flex h-80 w-72 min-w-min cursor-pointer flex-col items-center justify-between rounded-xl border-2 border-accent bg-secondary p-4 text-center text-text transition-shadow hover:shadow-[0_0_25px_5px_rgba(0,0,0,0.2)] hover:shadow-accent">
      <h1 className="line-clamp-2 font-heading text-xl">{pod.name}</h1>
      <p className="line-clamp-5 font-body text-lg">{pod.description}</p>
      <p className="font-body text-lg">Due Date: {pod.date_due}</p>
    </div>
  );
}
