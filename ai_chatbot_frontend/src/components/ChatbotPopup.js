import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import chatIcon from "../Assets/chat-icon.png"; // Ensure correct path & lowercase folder

const ChatbotPopup = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);
  const sessionId = useRef(sessionStorage.getItem("chatSessionId") || Math.random().toString(36).substring(7));

  useEffect(() => {
    sessionStorage.setItem("chatSessionId", sessionId.current);
    fetchChatHistory();
  }, []);

  const fetchChatHistory = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/chat/history/?session_id=${sessionId.current}`);
      if (res.data.history) {
        setMessages(res.data.history);
      }
    } catch (error) {
      console.error("Error fetching chat history:", error);
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newUserMessage = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:8000/api/chat/", {
        query: input,
        session_id: sessionId.current,
        user_id: "user-1234",
        timestamp: new Date().toISOString(),
      });
      const botMessage = { sender: "bot", text: res.data.response || "No response from AI" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div>
      {/* Floating Chat Icon */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-5 right-5 bg-red-600 text-white p-3 rounded-full shadow-lg hover:shadow-2xl transition-all"
        onClick={() => setChatOpen(!chatOpen)}
      >
        <img src={chatIcon} alt="Chat" className="w-10 h-10" />
      </motion.button>

      {/* Chatbot Popup */}
      {chatOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-16 right-5 w-80 shadow-2xl bg-white text-black rounded-2xl p-5 border border-gray-300"
        >
          <div className="bg-red-600 p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center">
              <h3 className="text-lg font-bold text-white">Chat with Us</h3>
            </div>
            <button onClick={() => setChatOpen(false)} className="text-white text-lg">✖</button>
          </div>
          <div className="h-56 overflow-y-auto border p-3 bg-gray-100 rounded-b-lg">
            {messages.map((msg, i) => (
              <div key={i} className={`p-3 my-2 rounded-xl text-sm font-medium ${msg.sender === "user" ? "bg-red-500 text-white self-end" : "bg-white text-black self-start"}`}>
                {msg.text}
              </div>
            ))}
            {loading && <p className="text-center text-gray-500">Thinking...</p>}
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={handleSend} className="flex mt-3 p-2">
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="Ask me a question..." 
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 bg-white text-black"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="ml-3 bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-all"
              type="submit"
            >
              <FiSend size={20} />
            </motion.button>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default ChatbotPopup;
