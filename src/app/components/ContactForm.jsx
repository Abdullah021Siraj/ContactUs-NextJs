"use client";

import { useState } from "react";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 flex justify-center items-center min-h-screen p-6">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Contact Me
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Please fill in the form below
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullname" className="block text-gray-700 font-medium">
              Full Name
            </label>
            <input
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
              type="text"
              id="fullname"
              placeholder="John Doe"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              placeholder="john@gmail.com"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium">
              Your Message
            </label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              id="message"
              placeholder="Type your message here..."
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-24"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
        {error.length > 0 && (
          <div className="mt-4">
            {error.map((e, index) => (
              <p key={index} className={`text-center ${success ? "text-green-600" : "text-red-600"} font-medium`}>
                {e}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
