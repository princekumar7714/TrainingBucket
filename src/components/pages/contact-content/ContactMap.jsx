function ContactMap() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Map Container */}
        <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-3xl shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0814966305607!2d77.36986667550065!3d28.627319475667466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5021036334f%3A0x1ce8a0146e76f7cb!2sTraining%20Basket%20-%20Best%20IT%20Training%20Institute%20in%20Noida!5e0!3m2!1sen!2sin!4v1770272141886!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Training Basket Location"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default ContactMap;
