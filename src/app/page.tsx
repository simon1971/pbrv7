import Link from "next/link";
import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import StatusBadge from "@/components/StatusBadge";

const recentMatters = [
  {
    id: 1,
    name: "Smith v. Johnson",
    status: "active" as const,
    updated: "2 hours ago",
  },
  {
    id: 2,
    name: "Estate of Williams",
    status: "pending" as const,
    updated: "1 day ago",
  },
  {
    id: 3,
    name: "Garcia Employment Dispute",
    status: "review" as const,
    updated: "3 days ago",
  },
];

const stats = [
  { label: "Active Matters", value: "12", icon: "📋" },
  { label: "Pending Intake", value: "5", icon: "📥" },
  { label: "Evidence Items", value: "47", icon: "🔍" },
  { label: "Draft Documents", value: "8", icon: "📝" },
];

export default function Dashboard() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Welcome to the PBR Drafting App. Here's an overview of your workspace."
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{stat.icon}</span>
              <div>
                <p className="text-2xl font-bold text-white/90">{stat.value}</p>
                <p className="text-sm text-white/45">{stat.label}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            href: "/matters",
            label: "View Matters",
            icon: "📋",
            color:
              "bg-sky-500/15 hover:bg-sky-500/25 text-sky-300 border border-sky-400/20",
          },
          {
            href: "/intake",
            label: "New Intake",
            icon: "📥",
            color:
              "bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-400/20",
          },
          {
            href: "/evidence",
            label: "Evidence Workspace",
            icon: "🔍",
            color:
              "bg-blue-500/15 hover:bg-blue-500/25 text-blue-300 border border-blue-400/20",
          },
          {
            href: "/drafts",
            label: "Draft Workspace",
            icon: "📝",
            color:
              "bg-teal-500/15 hover:bg-teal-500/25 text-teal-300 border border-teal-400/20",
          },
        ].map((action) => (
          <Link
            key={action.href}
            href={action.href}
            className={`flex items-center gap-3 p-4 rounded-2xl font-medium transition-all duration-200 hover:-translate-y-0.5 ${action.color}`}
            style={{
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <span className="text-xl">{action.icon}</span>
            {action.label}
          </Link>
        ))}
      </div>

      {/* Recent Matters */}
      <Card>
        <h2 className="text-lg font-semibold text-white/85 mb-4">
          Recent Matters
        </h2>
        <div className="divide-y divide-white/8">
          {recentMatters.map((matter) => (
            <div
              key={matter.id}
              className="flex items-center justify-between py-3"
            >
              <div>
                <Link
                  href={`/matters`}
                  className="font-medium text-white/80 hover:text-sky-300 transition-colors"
                >
                  {matter.name}
                </Link>
                <p className="text-sm text-white/40">
                  Updated {matter.updated}
                </p>
              </div>
              <StatusBadge status={matter.status} />
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
