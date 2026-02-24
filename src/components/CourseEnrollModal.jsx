import React, { useEffect, useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { CiCalendar, CiUser } from "react-icons/ci";

const WHATSAPP_NUMBER = "919015887887";
const API_BASE = "/api";

function CourseEnrollModal({ course, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState({ type: null, text: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // Server: record "View Program" when modal opens
  useEffect(() => {
    if (!course?.title) return;
    fetch(`${API_BASE}/program-view`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ courseId: course.id, courseTitle: course.title }),
    }).catch(() => {});
  }, [course?.id, course?.title]);

  if (!course) return null;

  const recordWhatsAppClick = (enrollmentId) => {
    fetch(`${API_BASE}/whatsapp-click`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        courseId: course.id,
        courseTitle: course.title,
        enrollmentId: enrollmentId || "",
      }),
    }).catch(() => {});
  };

  const buildWhatsAppMessage = (userName) => {
    const intro = userName
      ? `Hi, I'm *${userName}*. I want to *enroll* in *${course.title}*.\n\n`
      : `Hi, I want to *enroll* in *${course.title}*.\n\n`;
    return (
      intro +
      `Category: ${course.category}\n` +
      `Duration: ${course.duration}\n` +
      `Mode: ${Array.isArray(course.mode) ? course.mode.join(", ") : course.mode}\n\n` +
      `Please share enrollment details and fee structure.`
    );
  };

  const handleEnrollAndWhatsApp = async (e) => {
    e.preventDefault();
    setStatus({});
    const { name, email, phone } = form;
    if (!name?.trim() || !email?.trim()) {
      setStatus({ type: "error", text: "Name and email are required." });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/enroll`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseId: course.id,
          courseTitle: course.title,
          name: name.trim(),
          email: email.trim(),
          phone: phone?.trim() || "",
        }),
      });
      const data = await res.json().catch(() => ({}));
      const message = encodeURIComponent(buildWhatsAppMessage(name.trim()));
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
      if (res.ok) {
        recordWhatsAppClick(data.enrollmentId);
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        setStatus({ type: "success", text: "Saved! Opening WhatsApp..." });
      } else {
        recordWhatsAppClick();
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        setStatus({ type: "error", text: data.error || "Could not save. Opening WhatsApp." });
      }
    } catch {
      setStatus({ type: "error", text: "Network error. Opening WhatsApp..." });
      recordWhatsAppClick();
      const message = encodeURIComponent(buildWhatsAppMessage(form.name.trim()));
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover rounded-t-3xl"
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-gray-700 font-bold text-xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          <span className="text-sm font-medium text-blue-500">{course.category}</span>
          <h2 className="text-2xl font-bold text-gray-900 mt-1">{course.title}</h2>

          <div className="flex flex-wrap gap-4 mt-4 text-gray-600">
            <div className="flex items-center gap-2">
              <CiCalendar className="h-5 w-5" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <CiUser className="h-5 w-5" />
              <span>{Array.isArray(course.mode) ? course.mode.join(" / ") : course.mode}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500">{"⭐".repeat(Math.round(course.rating || 0))}</span>
            <span className="text-gray-500 text-sm">Rating {course.rating}</span>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <FaRupeeSign className="text-blue-600 text-xl" />
            <span className="text-blue-600 text-2xl font-bold">{course.price?.toLocaleString?.() ?? course.price}</span>
          </div>

          <p className="text-gray-600 text-sm mt-4">
            Enter your details. We'll save your interest and open WhatsApp to complete enrollment.
          </p>

          <form onSubmit={handleEnrollAndWhatsApp} className="mt-4 space-y-3">
            <input
              type="text"
              placeholder="Your Name *"
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email *"
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            <input
              type="tel"
              placeholder="Phone (optional)"
              value={form.phone}
              onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            {status.text && (
              <p className={`text-sm ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
                {status.text}
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="mt-4 flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-lg shadow-lg transition disabled:opacity-70"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.436 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {loading ? "Saving..." : "Enroll & Chat on WhatsApp"}
            </button>
          </form>

          <p className="text-center text-gray-500 text-xs mt-3">
            Opens WhatsApp • +91 9015 887 887
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseEnrollModal;
