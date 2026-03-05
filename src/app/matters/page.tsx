import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import StatusBadge from "@/components/StatusBadge";

const matters = [
  {
    id: 1,
    name: "Smith v. Johnson",
    client: "John Smith",
    type: "Civil Litigation",
    status: "active" as const,
    dateOpened: "2025-01-15",
    description: "Personal injury case involving automobile accident.",
  },
  {
    id: 2,
    name: "Estate of Williams",
    client: "Williams Family",
    type: "Probate",
    status: "pending" as const,
    dateOpened: "2025-02-01",
    description: "Estate planning and probate administration.",
  },
  {
    id: 3,
    name: "Garcia Employment Dispute",
    client: "Maria Garcia",
    type: "Employment Law",
    status: "review" as const,
    dateOpened: "2025-02-20",
    description: "Wrongful termination and discrimination claim.",
  },
  {
    id: 4,
    name: "Tech Corp IP Filing",
    client: "Tech Corp Inc.",
    type: "Intellectual Property",
    status: "draft" as const,
    dateOpened: "2025-03-01",
    description: "Patent filing for software innovation.",
  },
  {
    id: 5,
    name: "Davis Contract Review",
    client: "Robert Davis",
    type: "Contract Law",
    status: "completed" as const,
    dateOpened: "2024-11-10",
    description: "Commercial lease agreement review and negotiation.",
  },
];

export default function MattersPage() {
  return (
    <>
      <PageHeader
        title="Matter Overview"
        description="View and manage all active and past matters."
        actions={
          <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
            + New Matter
          </button>
        }
      />

      <div className="grid gap-4">
        {matters.map((matter) => (
          <Card key={matter.id}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-semibold text-gray-900 truncate">
                    {matter.name}
                  </h3>
                  <StatusBadge status={matter.status} />
                </div>
                <p className="text-sm text-gray-500 mb-2">
                  {matter.description}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
                  <span>
                    <strong className="text-gray-700">Client:</strong>{" "}
                    {matter.client}
                  </span>
                  <span>
                    <strong className="text-gray-700">Type:</strong>{" "}
                    {matter.type}
                  </span>
                  <span>
                    <strong className="text-gray-700">Opened:</strong>{" "}
                    {matter.dateOpened}
                  </span>
                </div>
              </div>
              <button className="self-start px-3 py-1.5 text-sm text-indigo-600 border border-indigo-200 rounded-md hover:bg-indigo-50 transition-colors whitespace-nowrap">
                View Details
              </button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
