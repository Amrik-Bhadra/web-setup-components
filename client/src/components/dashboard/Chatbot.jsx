import React, { useState } from "react";
import { MdChat, MdClose, MdSend } from "react-icons/md";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you?", sender: "bot" },
    { text: "Feel free to ask me anything!", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  return (
    <div className="fixed bottom-9 right-9 flex flex-col items-end">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <MdChat className="w-7 h-7" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[22vw] bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Chatbot</h3>
            <button onClick={() => setIsOpen(false)}>
              <MdClose className="w-6 h-6" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="h-80 overflow-y-auto p-3 space-y-3 bg-gray-100">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg max-w-[80%] text-sm ${
                  msg.sender === "user" ? "bg-blue-500 text-white ml-auto" : "bg-gray-300"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="flex items-center border-t border-gray-200 p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 p-3 border rounded-lg text-sm"
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              className="ml-3 p-3 bg-blue-600 text-white rounded-lg"
            >
              <MdSend className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
