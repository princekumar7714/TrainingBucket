function ContactSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* CONTACT FORM */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-blue-500 mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-400/30 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-400/30 outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-400/30 outline-none"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-400/30 outline-none"
            ></textarea>

            <button className="w-full bg-blue-500 text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition">
              Submit Message
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
