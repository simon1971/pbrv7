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
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Client Name
              </label>
              <input
                type="text"
                id="clientName"
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter client name"
              />
            </div>

            <div>
              <label
                htmlFor="contactEmail"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="client@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="contactPhone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone
              </label>
              <input
                type="tel"
                id="contactPhone"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label
                htmlFor="matterType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Matter Type
              </label>
              <select
                id="matterType"
                name="matterType"
                value={formData.matterType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select type...</option>
                <option value="civil">Civil Litigation</option>
                <option value="criminal">Criminal Defense</option>
                <option value="family">Family Law</option>
                <option value="corporate">Corporate Law</option>
                <option value="ip">Intellectual Property</option>
                <option value="employment">Employment Law</option>
                <option value="probate">Probate / Estate</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="urgency"
              className="block text-sm font-medium text-gray-700 mb-1"
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
                    className="text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-sm text-gray-700 capitalize">
                    {level}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-y"
              placeholder="Describe the matter details..."
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Save Draft
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Submit Intake
            </button>
          </div>
        </form>
      </Card>
    </>
  );
}
