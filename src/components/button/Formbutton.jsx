import React, { useState } from "react";

const API_BASE = "/api";

function Formbutton() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", branch: "" });
  const [status, setStatus] = useState({ type: null, text: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({});
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/career-enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStatus({ type: "success", text: data.message || "Submitted! We'll get in touch." });
        setForm({ name: "", phone: "", email: "", course: "", branch: "" });
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
    <div className="flex items-center justify-center px-7 w-150 mt-10">
      <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.3)] overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
          <h1 className="text-2xl font-bold text-white tracking-wide">
            Become Job Ready 🚀
          </h1>
          <p className="text-sm text-blue-100 mt-2">
            Start your learning journey today
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6">
          <input
            type="text"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            className="p-3 rounded-xl border border-gray-300 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          />
          <input
            type="tel"
            placeholder="Contact Number"
            required
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
            className="p-3 rounded-xl border border-gray-300 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            className="p-3 rounded-xl border border-gray-300 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          />
          <select
            required
            value={form.course}
            onChange={(e) => setForm((p) => ({ ...p, course: e.target.value }))}
            className="p-3 rounded-xl border border-gray-300 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          >
            <option value="">Select Course</option>
            <option value="MERN Stack">MERN Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Data Science">Data Science</option>
            <option value="DevOps">DevOps</option>
          </select>
          <select
            value={form.branch}
            onChange={(e) => setForm((p) => ({ ...p, branch: e.target.value }))}
            className="p-3 rounded-xl border border-gray-300 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          >
            <option value="">Select Branch</option>
            <option value="Noida Sec-1">Noida Sec-1</option>
            <option value="Noida Sec-62">Noida Sec-62</option>
          </select>
          {status.text && (
            <p className={`text-sm ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>{status.text}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-[1.03] active:scale-95 transition-all duration-200 disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Get in Touch"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Formbutton;
