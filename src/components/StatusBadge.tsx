type Status = "active" | "pending" | "completed" | "draft" | "review";

const statusStyles: Record<Status, string> = {
  active: "bg-green-50 text-green-700 ring-green-600/20",
  pending: "bg-yellow-50 text-yellow-700 ring-yellow-600/20",
  completed: "bg-blue-50 text-blue-700 ring-blue-600/20",
  draft: "bg-gray-50 text-gray-700 ring-gray-600/20",
  review: "bg-purple-50 text-purple-700 ring-purple-600/20",
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
