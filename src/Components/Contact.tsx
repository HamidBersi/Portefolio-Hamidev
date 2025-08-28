import ContactForm from "./ContactForm";
import MediaCard from "./MediaCard";

function Contact() {
  return (
    <div
      className="flex flex-col justify-center items-center mb-20"
      id="contact"
    >
      <h2 className="text-2xl font-bold text-blue-700 my-6 mt-8">Contact</h2>
      <div className="flex justify-center items-center gap-20">
        <ContactForm />
        <MediaCard />
      </div>
    </div>
  );
}

export default Contact;
