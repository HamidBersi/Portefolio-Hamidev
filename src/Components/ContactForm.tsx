function ContactForm() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-blue-50  shadow-lg rounded-2xl">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Envoyez-moi un message
      </h3>

      <form action="" className="space-y-4">
        <div className="flex flex-col justify-center items-center gap-4">
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
            className="mt-1 w-full border-0 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white py-4"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col justify-center items-center gap-4 ">
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
            className="mt-1 w-full border-0 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white py-4"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col justify-center items-center gap-4">
          <label
            htmlFor="mgassage"
            className="block text-md font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Parlez-moi de votre projet..."
            rows={4}
            className="mt-1 w-full border-0 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white"
          ></textarea>
        </div>

        {/* Bouton */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors my-5"
          >
            Envoyer le message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
