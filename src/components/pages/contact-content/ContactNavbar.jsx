function ContactNavbar() {
  return (
    <nav className="bg-black text-white py-4 px-6 flex justify-between items-center">
      <h1 className="font-bold text-xl text-yellow-400">
        Training Basket
      </h1>

      <div className="flex items-center gap-4 text-sm">
        <span className="hidden sm:block">📞 +91 9015 887 887</span>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
          Contact Us
        </button>
      </div>
    </nav>
  );
}

export default ContactNavbar;
