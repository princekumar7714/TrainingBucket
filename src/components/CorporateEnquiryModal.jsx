import React, { useState } from "react";

const API_BASE = "/api";

export default function CorporateEnquiryModal({ onClose }) {
  const [form, setForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    message: "",
    employeeCount: "",
    trainingType: "",
  });
  const [status, setStatus] = useState({ type: null, text: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({});
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/corporate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStatus({ type: "success", text: data.message || "Request submitted!" });
        setForm({ companyName: "", contactPerson: "", email: "", phone: "", message: "", employeeCount: "", trainingType: "" });
        setTimeout(onClose, 1500);
      } else {
        setStatus({ type: "error", text: data.error || "Failed to submit." });
      }
    } catch {
      setStatus({ type: "error", text: "Network error. Try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-bold text-blue-600 mb-4">Corporate Enquiry</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input required placeholder="Company Name *" value={form.companyName} onChange={(e) => setForm((p) => ({ ...p, companyName: e.target.value }))} className="w-full px-4 py-2 rounded-xl border" />
          <input required placeholder="Contact Person *" value={form.contactPerson} onChange={(e) => setForm((p) => ({ ...p, contactPerson: e.target.value }))} className="w-full px-4 py-2 rounded-xl border" />
          <input required type="email" placeholder="Email *" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} className="w-full px-4 py-2 rounded-xl border" />
          <input required type="tel" placeholder="Phone *" value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} className="w-full px-4 py-2 rounded-xl border" />
          <input placeholder="No. of employees (optional)" value={form.employeeCount} onChange={(e) => setForm((p) => ({ ...p, employeeCount: e.target.value }))} className="w-full px-4 py-2 rounded-xl border" />
          <select value={form.trainingType} onChange={(e) => setForm((p) => ({ ...p, trainingType: e.target.value }))} className="w-full px-4 py-2 rounded-xl border">
            <option value="">Training type (optional)</option>
            <option value="Online">Online</option>
            <option value="Onsite">Onsite</option>
            <option value="Hybrid">Hybrid</option>
          </select>
          <textarea placeholder="Message (optional)" rows={3} value={form.message} onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))} className="w-full px-4 py-2 rounded-xl border" />
          {status.text && <p className={`text-sm ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>{status.text}</p>}
          <div className="flex gap-2">
            <button type="submit" disabled={loading} className="flex-1 py-2 rounded-xl bg-blue-600 text-white font-semibold disabled:opacity-70">Submit</button>
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-xl border">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
