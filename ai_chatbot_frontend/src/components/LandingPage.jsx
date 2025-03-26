// import React from "react";
// import { Link } from "react-router-dom";
// import { Player } from "@lottiefiles/react-lottie-player"; // Optional alternative to lottie-react
// import chatbotAnimation from "../Assets/chatbot.json"; // Use your path

// const LandingPage = () => {
//   const userRole = localStorage.getItem("user_role");

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-pink-100 py-12 px-4 text-center">
//       {/* Animated Bot */}
//       <div className="w-full flex justify-center mb-4">
//         <Player
//           autoplay
//           loop
//           src={chatbotAnimation}
//           style={{ height: "220px", width: "220px" }}
//         />
//       </div>

//       {/* Title + Description */}
//       <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">
//         Welcome to Urban Systems
//       </h1>
//       <p className="max-w-2xl mx-auto text-gray-700 text-lg mb-6">
//         Revolutionizing internal knowledge sharing with an AI-powered LLM Chatbot.
//         Get insights, solve problems, and stay connected — instantly.
//       </p>

//       {/* Chatbot CTA */}
//       <Link
//         to="/main"
//         className="inline-block mb-12 px-6 py-3 bg-indigo-600 text-white rounded-full text-lg font-semibold shadow hover:bg-indigo-700 transition"
//       >
//         🤖 Launch Chatbot
//       </Link>

//       {/* Blogs */}
//       <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
//         <Link
//           to="/main"
//           className="bg-yellow-200 p-6 rounded-xl shadow-md hover:shadow-xl transition"
//         >
//           <h3 className="text-2xl font-bold text-yellow-800 mb-2">Chatbot Insights</h3>
//           <p className="text-yellow-900">
//             Learn how our LLM chatbot transformed communication. Click to chat!
//           </p>
//         </Link>

//         <Link
//           to="/blogs"
//           className="bg-green-200 p-6 rounded-xl shadow-md hover:shadow-xl transition"
//         >
//           <h3 className="text-2xl font-bold text-green-800 mb-2">Company Blogs</h3>
//           <p className="text-green-900">
//             Explore internal blogs, stories, and knowledge updates.
//           </p>
//         </Link>
//       </div>

//       {/* Admin Only */}
//       {userRole === "admin" && (
//         <div className="mt-16">
//           <Link
//             to="/admin-dashboard"
//             className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-bold shadow hover:bg-red-700 transition"
//           >
//             🔧 Admin Dashboard
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LandingPage;



import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRobot, FaBookOpen, FaUserShield } from "react-icons/fa";

const LandingPage = () => {
  const [role, setRole] = useState("user"); // Default to 'user'
  const navigate = useNavigate();

  useEffect(() => {
    // You can replace this with a real role fetch (API or auth token)
    const storedRole = localStorage.getItem("user_role") || "user";
    setRole(storedRole);
  }, []);


      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow text-center px-4 py-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Urban Systems</h2>
        <p className="text-lg text-gray-700 max-w-2xl mb-10">
          Revolutionizing internal knowledge sharing with an AI-powered LLM Chatbot.
          Get insights, solve problems, and stay connected — instantly.
        </p>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Chatbot Insights */}
          <Link
            to="/chat"
            className="bg-white hover:bg-blue-50 border border-blue-200 p-6 rounded-2xl shadow-xl transition-all"
          >
            <FaRobot size={40} className="text-blue-500 mb-3 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-700">Chatbot Insights</h3>
            <p className="text-sm text-gray-600 mt-2">
              Learn how our LLM chatbot transformed communication. Click to chat!
            </p>
          </Link>

          {/* Company Blogs */}
          <Link
            to="/blogs"
            className="bg-white hover:bg-purple-50 border border-purple-200 p-6 rounded-2xl shadow-xl transition-all"
          >
            <FaBookOpen size={40} className="text-purple-500 mb-3 mx-auto" />
            <h3 className="text-xl font-semibold text-purple-700">Company Blogs</h3>
            <p className="text-sm text-gray-600 mt-2">
              Explore internal blogs, stories, and knowledge updates.
            </p>
          </Link>

          {/* Admin Dashboard (Only for Admins) */}
          {role === "admin" && (
            <Link
              to="/admin"
              className="bg-white hover:bg-green-50 border border-green-200 p-6 rounded-2xl shadow-xl transition-all"
            >
              <FaUserShield size={40} className="text-green-500 mb-3 mx-auto" />
              <h3 className="text-xl font-semibold text-green-700">Admin Dashboard</h3>
              <p className="text-sm text-gray-600 mt-2">
                Manage chatbot data, users, and internal resources.
              </p>
            </Link>
          )}
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
