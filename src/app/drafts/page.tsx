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
          <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
            + New Draft
          </button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Document List */}
        <div className="lg:col-span-1">
          <Card>
            <h2 className="text-sm font-semibold text-gray-900 mb-3">
              Documents
            </h2>
            <div className="space-y-2">
              {draftDocuments.map((doc) => (
                <button
                  key={doc.id}
                  onClick={() => setSelectedDraft(doc.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedDraft === doc.id
                      ? "border-indigo-300 bg-indigo-50"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-gray-900 text-sm truncate">
                      {doc.title}
                    </span>
                    <StatusBadge status={doc.status} />
                  </div>
                  <p className="text-xs text-gray-500">{doc.matter}</p>
                  <p className="text-xs text-gray-400 mt-1">
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
              <h2 className="text-sm font-semibold text-gray-900">
                {selectedDraft
                  ? draftDocuments.find((d) => d.id === selectedDraft)?.title
                  : "Select a document"}
              </h2>
              <AutosaveIndicator saving={saving} />
            </div>
            <textarea
              value={editorContent}
              onChange={handleEditorChange}
              className="w-full h-96 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-y font-mono leading-relaxed"
              placeholder="Select a document to begin editing..."
            />
            <div className="flex justify-end gap-3 mt-4">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Export PDF
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
                Submit for Review
              </button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
