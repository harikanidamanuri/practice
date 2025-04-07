import React, { useState } from "react";
import { Form } from "react-router-dom";

const EmailSignup = () => {
  const [email, setEmail] = useState("");



  return (
    <div className="w-full bg-gray-100 py-12 px-6 text-center bg-gray">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-4">Want First Dibs?</h2>

      {/* Description */}
      <p className="max-w-2xl mx-auto mb-6">
        Join our email list and be the first to know about new limited edition products, 
        material innovations, and lots of other fun updates.
      </p>
      <form>
        <input
          type="email"
          placeholder="Enter Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className=" shadow-md w-full max-w-lg md:w-2/3 border border-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-800 mr-4"
        />
        <button 
          type="submit" 
          className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition"
        >
          SIGN UP
        </button>
      </form>

      {/* Privacy Note */}
      <p className="text-sm text-gray-500 mt-4">
        Note: You can opt-out at any time. See our 
        <a href="#" className="underline mx-1 font-bold">Privacy Policy</a> and 
        <a href="#" className="underline mx-1 font-bold">Terms</a>.
      </p>
    </div>
  );
};

export default EmailSignup;