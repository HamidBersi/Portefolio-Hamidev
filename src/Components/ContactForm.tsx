import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);

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
          toast.success(t("contact.form.success"));
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error.text);
          toast.error(t("contact.form.error"));
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="h-145 w-[80%] md:w-[45%] mx-auto mt-10 p-6 bg-blue-50 shadow-lg rounded-2xl">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        {t("contact.form.title")}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-md font-medium text-gray-700"
          >
            {t("contact.form.name")}
          </label>
          <input
            type="text"
            id="name"
            placeholder={t("contact.form.namePlaceholder")}
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full bg-white border-0 rounded-lg p-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-md font-medium text-gray-700"
          >
            {t("contact.form.email")}
          </label>
          <input
            type="email"
            id="email"
            placeholder={t("contact.form.emailPlaceholder")}
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full bg-white borde-0 rounded-lg p-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-md font-medium text-gray-700"
          >
            {t("contact.form.message")}
          </label>
          <textarea
            id="message"
            placeholder={t("contact.form.messagePlaceholder")}
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 w-full bg-white resize-none border-0 rounded-lg p-4 focus:ring-2 focus:ring-blue-400 focus:outline-none mb-5"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-lg font-medium text-lg transition-colors ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isLoading ? t("contact.form.sending") : t("contact.form.send")}
          </button>
        </div>
      </form>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}

export default ContactForm;
