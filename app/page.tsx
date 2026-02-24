"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now just simulate success
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      
      <h1 className="text-4xl sm:text-5xl font-bold mb-6">
        Lernova Globe
      </h1>

      <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mb-8">
        An AI-powered learning assistant that helps your little ones 
        understand their homework, master concepts, and study independently.
        <br /><br />
        Upload a chapter or exercise and get clear explanations,
        step-by-step solutions, and practice questions — designed to build confidence, not dependence.
      </p>

      {!submitted ? (
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
        >
          <input
            type="email"
            required
            placeholder="Enter your email for early access"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-black text-white rounded-lg hover:opacity-90 transition"
          >
            Get Early Access
          </button>
        </form>
      ) : (
        <div className="text-green-600 font-medium mt-4">
          Thank you! We’ll notify you soon.
        </div>
      )}

      <div className="mt-12 text-sm text-gray-400">
        Built for parents who want their children to think, not just get answers.
      </div>
    </main>
  );
}