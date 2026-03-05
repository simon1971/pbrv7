"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import AutosaveIndicator from "@/components/AutosaveIndicator";

export default function IntakePage() {
  const [formData, setFormData] = useState({
    clientName: "",
    contactEmail: "",
    contactPhone: "",
    matterType: "",
    description: "",
    urgency: "normal",
  });
  const [saving, setSaving] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Autosave stub
    setSaving(true);
    setTimeout(() => setSaving(false), 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit stub
  };

  return (
    <>
      <PageHeader
        title="Intake"
        description="Submit a new matter intake form."
        actions={<AutosaveIndicator saving={saving} />}
      />

      <Card>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="clientName"
                className="block text-sm font-medium text-white/60 mb-1"
              >
                Client Name
              </label>
              <input
                type="text"
                id="clientName"
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white/8 border border-white/15 rounded-xl text-sm text-white/80 placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400/50"
                placeholder="Enter client name"
              />
            </div>

            <div>
              <label
                htmlFor="contactEmail"
                className="block text-sm font-medium text-white/60 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white/8 border border-white/15 rounded-xl text-sm text-white/80 placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400/50"
                placeholder="client@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="contactPhone"
                className="block text-sm font-medium text-white/60 mb-1"
              >
                Phone
              </label>
              <input
                type="tel"
                id="contactPhone"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white/8 border border-white/15 rounded-xl text-sm text-white/80 placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400/50"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label
                htmlFor="matterType"
                className="block text-sm font-medium text-white/60 mb-1"
              >
                Matter Type
              </label>
              <select
                id="matterType"
                name="matterType"
                value={formData.matterType}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white/8 border border-white/15 rounded-xl text-sm text-white/70 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400/50"
              >
                <option value="" className="bg-slate-800">
                  Select type...
                </option>
                <option value="civil" className="bg-slate-800">
                  Civil Litigation
                </option>
                <option value="criminal" className="bg-slate-800">
                  Criminal Defense
                </option>
                <option value="family" className="bg-slate-800">
                  Family Law
                </option>
                <option value="corporate" className="bg-slate-800">
                  Corporate Law
                </option>
                <option value="ip" className="bg-slate-800">
                  Intellectual Property
                </option>
                <option value="employment" className="bg-slate-800">
                  Employment Law
                </option>
                <option value="probate" className="bg-slate-800">
                  Probate / Estate
                </option>
                <option value="other" className="bg-slate-800">
                  Other
                </option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="urgency"
              className="block text-sm font-medium text-white/60 mb-1"
            >
              Urgency
            </label>
            <div className="flex gap-4">
              {["low", "normal", "high", "urgent"].map((level) => (
                <label key={level} className="flex items-center gap-1.5">
                  <input
                    type="radio"
                    name="urgency"
                    value={level}
                    checked={formData.urgency === level}
                    onChange={handleChange}
                    className="text-sky-400 focus:ring-sky-400"
                  />
                  <span className="text-sm text-white/60 capitalize">
                    {level}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-white/60 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white/8 border border-white/15 rounded-xl text-sm text-white/80 placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400/50 resize-y"
              placeholder="Describe the matter details..."
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-white/60 border border-white/15 rounded-xl hover:bg-white/8 transition-all"
            >
              Save Draft
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-sky-500/80 rounded-xl hover:bg-sky-400/80 transition-all shadow-lg shadow-sky-500/20"
            >
              Submit Intake
            </button>
          </div>
        </form>
      </Card>
    </>
  );
}
