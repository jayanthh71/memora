import handleDeletePod from "@/lib/handlers/handleDeletePod";

export default function PodCard(props: {
  id: string;
  name: string;
  description: string;
  dateDue: string;
}) {
  return (
    <div className="group flex h-80 w-72 min-w-min flex-col items-center justify-between rounded-xl border-2 border-accent bg-secondary p-4 text-center text-text transition-shadow hover:shadow-[0_0_25px_5px_rgba(0,0,0,0.2)] hover:shadow-accent">
      <button
        onClick={async () => {
          "use server";
          await handleDeletePod(props.id);
        }}
        className="absolute hidden self-end rounded-xl bg-accent p-2 text-text transition-shadow hover:shadow-[0_0_25px_5px_rgba(0,0,0,0.2)] group-hover:block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 461 512.13"
        >
          <path
            fill="currentColor"
            d="M163.67 244.38c0-10.89 8.84-19.73 19.74-19.73 10.9 0 19.74 8.84 19.74 19.73v146.23c0 10.9-8.84 19.74-19.74 19.74-10.9 0-19.74-8.84-19.74-19.74V244.38zm265.08-82.76l-20.21 267.66c-1.72 22.82-11.36 43.71-26.39 58.75-14.88 14.87-34.93 24.1-57.85 24.1H136.7c-22.84 0-42.86-9.22-57.78-24.1l-.07-.07c-15.05-15.08-24.67-35.93-26.39-58.68L32.25 161.62H0v-57.49c0-13.8 6.8-19.07 20.17-19.07h94.78V44.98c0-12.39 5.06-23.65 13.2-31.79C136.28 5.06 147.54 0 159.93 0h141.14c12.39 0 23.65 5.06 31.78 13.2 8.14 8.14 13.2 19.4 13.2 31.78v40.08h97.32c1.45 0 2.53.03 3.98.26 7.33 1.17 12.92 7.11 13.55 14.55.07.81.1 1.57.1 2.37v59.38h-32.25zm-39.59.72H71.84l19.94 264c1 13.33 6.44 25.34 14.89 33.79l.08.08c7.68 7.68 18.07 12.45 29.95 12.45h187.6c11.82 0 22.21-4.8 29.94-12.53 8.52-8.52 13.99-20.53 14.98-33.79l19.94-264zm-93.35-77.28V50.24H165.19v34.82h130.62zm-37.96 159.32c0-10.89 8.84-19.73 19.74-19.73 10.9 0 19.74 8.84 19.74 19.73v146.23c0 10.9-8.84 19.74-19.74 19.74-10.9 0-19.74-8.84-19.74-19.74V244.38z"
          />
        </svg>
      </button>
      <h1 className="line-clamp-2 font-heading text-xl">{props.name}</h1>
      <p className="line-clamp-5 font-body text-lg">{props.description}</p>
      <p className="font-body text-lg">Due Date: {props.dateDue}</p>
    </div>
  );
}
