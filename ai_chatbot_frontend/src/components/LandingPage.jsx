// src/pages/LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const userRole = localStorage.getItem("user_role"); // 'admin' or 'user'

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Empowering Internal Communication with AI
        </h1>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Welcome to the Urban Systems AI Chatbot. Built with LLM technology, this system streamlines internal knowledge-sharing and enables efficient information retrieval across departments.
        </p>
        <Link
          to="/main"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Go to Chatbot
        </Link>
      </section>

      {/* Blogs Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">📚 Featured Blogs</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg mb-2">Blog Title {i}</h3>
              <p className="text-gray-600 text-sm">
                Short description about blog content {i}. Useful insights and updates inside.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Admin Only Section */}
      {userRole === "admin" && (
        <section>
          <h2 className="text-2xl font-bold mb-6 text-red-700">🛠️ Admin Tools</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              to="/admin-dashboard"
              className="bg-white border-l-4 border-blue-500 p-4 shadow hover:shadow-lg rounded"
            >
              <h4 className="font-semibold mb-2">Admin Dashboard</h4>
              <p className="text-sm text-gray-700">Monitor chatbot usage and manage users.</p>
            </Link>

            <Link
              to="/add-markdown-page"
              className="bg-white border-l-4 border-green-500 p-4 shadow hover:shadow-lg rounded"
            >
              <h4 className="font-semibold mb-2">Add Markdown Page</h4>
              <p className="text-sm text-gray-700">Create or edit informational pages with markdown.</p>
            </Link>

            <Link
              to="/EventForm"
              className="bg-white border-l-4 border-purple-500 p-4 shadow hover:shadow-lg rounded"
            >
              <h4 className="font-semibold mb-2">Event Form</h4>
              <p className="text-sm text-gray-700">Post updates and announcements internally.</p>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default LandingPage;
