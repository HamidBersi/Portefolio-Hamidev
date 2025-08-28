import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_jk5857n",
        "template_wn84f5i",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "q2NMfTKVj5ClykRsh"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message envoyé avec succès !");
          setFormData({ name: "", email: "", message: "" }); // reset
        },
        (error) => {
          console.error(error.text);
          toast.error("Une erreur est survenue. Réessayez.");
        }
      );
  };

  return (
    <div className="h-145 w-[80%] md:w-[45%]  mx-auto mt-10 p-6 shadow-2xl rounded-2xl text-center bg-blue-50">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Envoyez-moi un message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nom */}
        <div>
          <label
            htmlFor="name"
            className="block text-md font-medium text-gray-700"
          >
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            placeholder="Votre nom complet"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full border-0 rounded-lg p-4 bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-md font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Votre@email.com"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full border-0 rounded-lg p-4 bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-md font-medium text-gray-700"
          >
            Message
          </label>

          <textarea
            id="message"
            placeholder="Parlez-moi de votre projet..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 w-full border-0 rounded-lg p-2 bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
            required
          ></textarea>
        </div>

        {/* Bouton */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors"
          >
            Envoyer le message
          </button>
        </div>
      </form>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}

export default ContactForm;
