type Status = "active" | "pending" | "completed" | "draft" | "review";

const statusStyles: Record<Status, string> = {
  active: "bg-emerald-400/15 text-emerald-300 ring-emerald-400/30",
  pending: "bg-amber-400/15 text-amber-300 ring-amber-400/30",
  completed: "bg-sky-400/15 text-sky-300 ring-sky-400/30",
  draft: "bg-slate-400/15 text-slate-300 ring-slate-400/30",
  review: "bg-sky-400/15 text-sky-300 ring-sky-400/30",
};

interface StatusBadgeProps {
  status: Status;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${statusStyles[status]}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}
