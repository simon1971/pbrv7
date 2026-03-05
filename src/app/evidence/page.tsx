import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import StatusBadge from "@/components/StatusBadge";

const evidenceItems = [
  {
    id: 1,
    name: "Medical Records - Dr. Thompson",
    type: "Document",
    matter: "Smith v. Johnson",
    dateAdded: "2025-02-15",
    status: "review" as const,
    size: "2.4 MB",
  },
  {
    id: 2,
    name: "Witness Statement - Jane Doe",
    type: "Statement",
    matter: "Smith v. Johnson",
    dateAdded: "2025-02-18",
    status: "active" as const,
    size: "156 KB",
  },
  {
    id: 3,
    name: "Employment Contract",
    type: "Document",
    matter: "Garcia Employment Dispute",
    dateAdded: "2025-02-22",
    status: "active" as const,
    size: "890 KB",
  },
  {
    id: 4,
    name: "Email Correspondence",
    type: "Communication",
    matter: "Garcia Employment Dispute",
    dateAdded: "2025-02-25",
    status: "pending" as const,
    size: "1.2 MB",
  },
  {
    id: 5,
    name: "Property Deed",
    type: "Document",
    matter: "Estate of Williams",
    dateAdded: "2025-03-01",
    status: "completed" as const,
    size: "3.1 MB",
  },
  {
    id: 6,
    name: "Photo Evidence - Scene",
    type: "Image",
    matter: "Smith v. Johnson",
    dateAdded: "2025-03-02",
    status: "draft" as const,
    size: "8.5 MB",
  },
];

export default function EvidencePage() {
  return (
    <>
      <PageHeader
        title="Evidence Workspace"
        description="Organize and review evidence across all matters."
        actions={
          <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
            + Upload Evidence
          </button>
        }
      />

      {/* Filter bar */}
      <Card className="mb-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="text"
            placeholder="Search evidence..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <div className="flex gap-2">
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">All Types</option>
              <option value="document">Document</option>
              <option value="statement">Statement</option>
              <option value="communication">Communication</option>
              <option value="image">Image</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">All Matters</option>
              <option value="smith">Smith v. Johnson</option>
              <option value="williams">Estate of Williams</option>
              <option value="garcia">Garcia Employment Dispute</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Evidence Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-2 font-medium text-gray-500">
                  Name
                </th>
                <th className="text-left py-3 px-2 font-medium text-gray-500 hidden sm:table-cell">
                  Type
                </th>
                <th className="text-left py-3 px-2 font-medium text-gray-500 hidden md:table-cell">
                  Matter
                </th>
                <th className="text-left py-3 px-2 font-medium text-gray-500 hidden lg:table-cell">
                  Date Added
                </th>
                <th className="text-left py-3 px-2 font-medium text-gray-500">
                  Status
                </th>
                <th className="text-right py-3 px-2 font-medium text-gray-500 hidden sm:table-cell">
                  Size
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {evidenceItems.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-2">
                    <span className="font-medium text-gray-900">
                      {item.name}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-gray-500 hidden sm:table-cell">
                    {item.type}
                  </td>
                  <td className="py-3 px-2 text-gray-500 hidden md:table-cell">
                    {item.matter}
                  </td>
                  <td className="py-3 px-2 text-gray-500 hidden lg:table-cell">
                    {item.dateAdded}
                  </td>
                  <td className="py-3 px-2">
                    <StatusBadge status={item.status} />
                  </td>
                  <td className="py-3 px-2 text-right text-gray-500 hidden sm:table-cell">
                    {item.size}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
