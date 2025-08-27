import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="flex flex-col justify-center items-center mb-20">
      <h2 className="text-2xl font-bold text-blue-700 my-6 mt-8">Contact</h2>
      <div className="flex flex-col justify-center items-center">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
