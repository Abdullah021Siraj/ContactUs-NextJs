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
    <>
      <div className="container mx-auto bg-gray-100 rounded-lg overflow-hidden flex justify-center items-center min-h-screen">
        <div
          className="relative"
          style={{ filter: "drop-shadow(3px 3px 5px rgba(0,0,0,0.2))" }}
        >
          <form
            onSubmit={handleSubmit}
            className="py-4 mt-4 border-t flex flex-col gap-5 p-6"
          >
            <div className="p-4">
              <h1 className="text-3xl font-bold">Contact Me</h1>
              <p>Please fill in the form below</p>
            </div>
            <div className="relative">
              <label htmlFor="fullname" className="text-gray-700">
                Full Name
              </label>
              <input
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
                type="text"
                id="fullname"
                placeholder="John Doe"
                className="w-full px-3 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="relative">
              <label htmlFor="email" className="text-gray-700">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                id="email"
                placeholder="john@gmail.com"
                className="w-full px-3 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="relative">
              <label htmlFor="message" className="text-gray-700">
                Your Message
              </label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="w-full h-11 px-3 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:border-blue-500"
                id="message"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <div className="flex justify-center">
              <div
                class="button w-20 h-10 bg-blue-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    border-b-[1px] border-blue-400
  "
              >
                <span class="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
                  <button type="submit">Send</button>
                </span>
              </div>
            </div>
            <div className="bg-gray-100">
              {error &&
                error.map((e, index) => (
                  <div
                    key={index}
                    className={`${
                      success ? "text-green-800" : "text-red-600"
                    } px-5 py-2`}
                  >
                    {e}
                  </div>
                ))}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
