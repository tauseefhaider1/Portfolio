import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 py-16 px-6">
      <div className="max-w-4xl lg:max-w-5xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-2xl">
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 text-center border-b-2 border-blue-500 inline-block pb-2 animate-fadeIn">
          Contact Me
        </h2>
        <p className="text-gray-600 text-center mb-12 text-lg md:text-xl animate-fadeIn delay-100">
          Have a question, project idea, or just want to say hello? 🚀  
          Fill out the form below and I'll get back to you as soon as possible.
        </p>

        {/* Form */}
        <form className="space-y-6 animate-fadeIn delay-200">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 shadow-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 shadow-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 shadow-sm"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl shadow-xl hover:scale-105 hover:from-blue-600 hover:to-cyan-500 transition transform duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
