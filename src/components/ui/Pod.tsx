export default function PodCard(props: {
  name: string;
  description: string;
  dateDue: string;
}) {
  return (
    <div className="flex h-80 w-72 min-w-min flex-col items-center justify-between rounded-xl border-2 border-accent bg-secondary p-4 text-center text-text transition-shadow hover:shadow-[0_0_25px_5px_rgba(0,0,0,0.2)] hover:shadow-accent">
      <h1 className="line-clamp-2 font-heading text-xl">{props.name}</h1>
      <p className="line-clamp-5 font-body text-lg">{props.description}</p>
      <p className="font-body text-lg">Due Date: {props.dateDue}</p>
    </div>
  );
}
