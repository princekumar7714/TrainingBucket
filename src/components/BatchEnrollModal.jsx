import React, { useState } from "react";

const API_BASE = "/api";

export default function BatchEnrollModal({ batch, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState({ type: null, text: "" });
  const [loading, setLoading] = useState(false);

  if (!batch) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({});
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/batch-enroll`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          batchId: batch.id || batch.course,
          batchCourse: batch.course,
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStatus({ type: "success", text: data.message || "Enrollment request submitted!" });
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
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-bold text-gray-900 mb-1">Enroll in Batch</h2>
        <p className="text-gray-600 text-sm mb-4">{batch.course} • {batch.startDate}</p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input required placeholder="Your Name *" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} className="w-full px-4 py-2 rounded-xl border" />
          <input required type="email" placeholder="Email *" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} className="w-full px-4 py-2 rounded-xl border" />
          <input required type="tel" placeholder="Phone *" value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} className="w-full px-4 py-2 rounded-xl border" />
          <textarea placeholder="Message (optional)" rows={2} value={form.message} onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))} className="w-full px-4 py-2 rounded-xl border" />
          {status.text && <p className={`text-sm ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>{status.text}</p>}
          <div className="flex gap-2">
            <button type="submit" disabled={loading} className="flex-1 py-2 rounded-xl bg-yellow-400 text-black font-semibold disabled:opacity-70">Submit</button>
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-xl border">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
