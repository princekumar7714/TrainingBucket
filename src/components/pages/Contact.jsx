import Footer from "../Footer";
import Footerlinks from "../Footerlinks";
import ContactHero from "./contact-content/ContactHero";
import ContactMap from "./contact-content/ContactMap";
import ContactNavbar from "./contact-content/ContactNavbar";
import ContactSection from "./contact-content/ContactSection";


function Contact() {
  return (
    <>
      <ContactNavbar />
      <ContactHero />
      <ContactSection />
      <ContactMap />
      <Footerlinks/>
      <Footer/>
    </>
  );
}

export default Contact;
