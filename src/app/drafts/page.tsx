"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import StatusBadge from "@/components/StatusBadge";
import AutosaveIndicator from "@/components/AutosaveIndicator";

const draftDocuments = [
  {
    id: 1,
    title: "Motion for Summary Judgment",
    matter: "Smith v. Johnson",
    status: "draft" as const,
    lastEdited: "2 hours ago",
  },
  {
    id: 2,
    title: "Discovery Requests",
    matter: "Garcia Employment Dispute",
    status: "review" as const,
    lastEdited: "1 day ago",
  },
  {
    id: 3,
    title: "Settlement Agreement",
    matter: "Davis Contract Review",
    status: "completed" as const,
    lastEdited: "3 days ago",
  },
];

export default function DraftsPage() {
  const [selectedDraft, setSelectedDraft] = useState<number | null>(null);
  const [editorContent, setEditorContent] = useState(
    "Start writing your document here...",
  );
  const [saving, setSaving] = useState(false);

  const handleEditorChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditorContent(e.target.value);
    setSaving(true);
    setTimeout(() => setSaving(false), 500);
  };

  return (
    <>
      <PageHeader
        title="Draft Workspace"
        description="Create and edit legal documents."
        actions={
          <button className="px-4 py-2 bg-sky-500/80 text-white text-sm font-medium rounded-xl hover:bg-sky-400/80 transition-all backdrop-blur-sm shadow-lg shadow-sky-500/20">
            + New Draft
          </button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Document List */}
        <div className="lg:col-span-1">
          <Card>
            <h2 className="text-sm font-semibold text-white/70 mb-3">
              Documents
            </h2>
            <div className="space-y-2">
              {draftDocuments.map((doc) => (
                <button
                  key={doc.id}
                  onClick={() => setSelectedDraft(doc.id)}
                  className={`w-full text-left p-3 rounded-xl border transition-all ${
                    selectedDraft === doc.id
                      ? "border-sky-400/40 bg-sky-500/20"
                      : "border-white/10 hover:bg-white/8"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-white/80 text-sm truncate">
                      {doc.title}
                    </span>
                    <StatusBadge status={doc.status} />
                  </div>
                  <p className="text-xs text-white/45">{doc.matter}</p>
                  <p className="text-xs text-white/30 mt-1">
                    Edited {doc.lastEdited}
                  </p>
                </button>
              ))}
            </div>
          </Card>
        </div>

        {/* Editor */}
        <div className="lg:col-span-2">
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-white/70">
                {selectedDraft
                  ? draftDocuments.find((d) => d.id === selectedDraft)?.title
                  : "Select a document"}
              </h2>
              <AutosaveIndicator saving={saving} />
            </div>
            <textarea
              value={editorContent}
              onChange={handleEditorChange}
              className="w-full h-96 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white/75 placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400/50 resize-y font-mono leading-relaxed"
              placeholder="Select a document to begin editing..."
            />
            <div className="flex justify-end gap-3 mt-4">
              <button className="px-4 py-2 text-sm font-medium text-white/60 border border-white/15 rounded-xl hover:bg-white/8 transition-all">
                Export PDF
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-sky-500/80 rounded-xl hover:bg-sky-400/80 transition-all shadow-lg shadow-sky-500/20">
                Submit for Review
              </button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
