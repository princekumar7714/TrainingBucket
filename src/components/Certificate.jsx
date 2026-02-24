import React, { useState } from "react";
import certificate from "../assets/certification/certificate.webp";

const API_BASE = "/api";

function Certificate() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", courseName: "", completionDate: "" });
  const [status, setStatus] = useState({ type: null, text: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({});
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/certificate-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStatus({ type: "success", text: data.message || "Request submitted!" });
        setForm({ name: "", email: "", phone: "", courseName: "", completionDate: "" });
        setTimeout(() => setShowForm(false), 1500);
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
    <>
      <div className="bg-purple-100 flex flex-col items-center py-10">
        <h1 className="font-bold text-blue-500 text-2xl text-center">
          IT Certification by Training Basket
        </h1>

        <p className="p-5 text-center max-w-3xl">
          Our IT certificates are more than just a document—it's proof that you
          have taken a significant step toward mastering your domain.
        </p>

        <img
          src={certificate}
          alt="IT Certification"
          className="p-4 max-w-full"
        />

        <button
          type="button"
          onClick={() => setShowForm(true)}
          className="p-3 bg-blue-500 rounded-2xl font-bold mt-4 text-white
          hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500
          transition-all duration-300"
        >
          Get Your Certification NOW!
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={() => setShowForm(false)}>
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold text-blue-600 mb-4">Request Certificate</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input required placeholder="Full Name *" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} className="w-full px-4 py-2 rounded-xl border" />
              <input required type="email" placeholder="Email *" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} className="w-full px-4 py-2 rounded-xl border" />
              <input required type="tel" placeholder="Phone *" value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} className="w-full px-4 py-2 rounded-xl border" />
              <input required placeholder="Course Name *" value={form.courseName} onChange={(e) => setForm((p) => ({ ...p, courseName: e.target.value }))} className="w-full px-4 py-2 rounded-xl border" />
              <input placeholder="Completion Date (optional)" value={form.completionDate} onChange={(e) => setForm((p) => ({ ...p, completionDate: e.target.value }))} className="w-full px-4 py-2 rounded-xl border" />
              {status.text && <p className={`text-sm ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>{status.text}</p>}
              <div className="flex gap-2">
                <button type="submit" disabled={loading} className="flex-1 py-2 rounded-xl bg-blue-600 text-white font-semibold disabled:opacity-70">Submit</button>
                <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 rounded-xl border">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Certificate;
