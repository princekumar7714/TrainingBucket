import { useState } from "react";

const API_BASE = "/api";

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState({ type: null, text: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({});
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus({ type: "success", text: data.message || "Message sent successfully!" });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({ type: "error", text: data.error || "Failed to send message." });
      }
    } catch {
      setStatus({ type: "error", text: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* CONTACT FORM */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-blue-500 mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-400/30 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-400/30 outline-none"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-400/30 outline-none"
            />

            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-400/30 outline-none"
            />

            {status.text && (
              <p className={`text-sm ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
                {status.text}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition disabled:opacity-70"
            >
              {loading ? "Sending..." : "Submit Message"}
            </button>
          </form>
        </div>

        {/* CONTACT INFO */}
        <div className="flex flex-col justify-center gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-lg text-blue-500">
              📍 Office Address
            </h3>
            <p className="text-gray-600 mt-2">
              Training Basket, India <br />
              Blogic Software Technology Pvt. Ltd.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-lg text-blue-500">
              📞 Phone
            </h3>
            <p className="text-gray-600 mt-2">
              +91 9015 887 887
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-lg text-blue-500">
              ✉ Email
            </h3>
            <p className="text-gray-600 mt-2">
              support@trainingbasket.in
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactSection;
