"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, Mic, Paperclip } from "lucide-react";
import Image from "next/image";

import { sendMessageToAI } from "@/lib/api";

import ReactMarkdown from "react-markdown";

type Message = {
  id: string;
  sender: "user" | "ai";
  text: string;
  items?: any[];
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      text: "Hello! Welcome to Bhukkadh. How can I help you today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: inputValue.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await sendMessageToAI(userMessage.text);

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: response.reply,
        items: response.items,
      };
      
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-2 h-20 w-20 md:h-32 md:w-32 flex items-center justify-center cursor-pointer drop-shadow-2xl z-[9999]"
          >
            <Image
              src="/images/chat_bot.png"
              alt="Chat Bot"
              width={128}
              height={128}
              className="object-contain w-full h-full drop-shadow-lg"
            />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed z-[9999] bg-white flex flex-col overflow-hidden shadow-2xl transition-all
                       bottom-0 right-0 w-full h-[100dvh] rounded-none
                       md:bottom-6 md:right-6 md:w-[400px] md:h-[650px] md:rounded-2xl md:border md:border-gray-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#4eb902] text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 overflow-hidden">
                    <Image
                      src="/images/chat_bot.png"
                      alt="Bhukkadh AI"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#4eb902] rounded-full"></span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-[15px] leading-tight">Bhukkadh AI</h3>
                  <p className="text-[11px] text-gray-300">Powered by AI</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-300" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-white flex flex-col gap-4 scrollbar-hide">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start gap-2"
                  }`}
                >
                  {msg.sender === "ai" && (
                    <div className="w-8 h-8 shrink-0 rounded-full bg-gray-100 flex items-center justify-center p-1 border border-gray-200 overflow-hidden mt-1">
                      <Image
                        src="/images/chat_bot.png"
                        alt="Bot"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      msg.sender === "user"
                        ? "bg-gray-800 text-white rounded-tr-sm"
                        : "bg-[#f5f5f5] text-gray-800 rounded-tl-sm"
                    }`}
                  >
                    <div className="text-[14px] leading-relaxed break-words">
                      <ReactMarkdown
                        components={{
                          p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                          strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
                          ul: ({ node, ...props }) => <ul className="list-disc ml-5 mb-2 space-y-1" {...props} />,
                          ol: ({ node, ...props }) => <ol className="list-decimal ml-5 mb-2 space-y-1" {...props} />,
                          li: ({ node, ...props }) => <li className="pl-1 marker:text-gray-600 [&>p]:inline" {...props} />,
                          a: ({ node, ...props }) => (
                            <a className="text-blue-500 underline hover:text-blue-600" {...props} />
                          ),
                        }}
                      >
                        {msg.text}
                      </ReactMarkdown>
                    </div>

                    {/* Render optional items if AI provides them */}
                    {msg.items && msg.items.length > 0 && (
                      <div className="mt-3 flex flex-col gap-2">
                        {msg.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="bg-white border border-gray-200 rounded-xl p-3 text-sm shadow-sm"
                          >
                            {item.name && (
                              <h4 className="font-semibold text-gray-900">{item.name}</h4>
                            )}
                            {item.restaurantName && (
                              <h4 className="font-semibold text-gray-900">
                                {item.restaurantName}
                              </h4>
                            )}
                            {item.description && (
                              <p className="text-gray-600 text-xs mt-1">{item.description}</p>
                            )}
                            {item.price && (
                              <p className="text-gray-900 font-medium mt-1">₹{item.price}</p>
                            )}
                            {item.rating && (
                              <p className="text-yellow-600 text-xs mt-1 flex items-center gap-1">
                                <span>⭐</span> {item.rating}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start gap-2">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-gray-100 flex items-center justify-center p-1 border border-gray-200 overflow-hidden mt-1">
                    <Image
                      src="/images/chat_bot.png"
                      alt="Bot"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-[#f5f5f5] rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5 h-10 mt-1">
                    <span
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100 shrink-0">
              <form onSubmit={handleSendMessage} className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full pl-5 pr-12 py-3.5 border border-gray-300 rounded-full text-[14px] outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 text-gray-800 bg-white"
                  disabled={isLoading}
                />
                <div className="absolute right-2 flex items-center gap-0.5">
                  <button
                    type="submit"
                    disabled={!inputValue.trim() || isLoading}
                    className="p-2 text-[#4eb902] hover:text-green-600 disabled:opacity-50 disabled:hover:text-[#4eb902] transition-colors"
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </form>
              <p className="text-[10px] text-center text-gray-500 mt-3 px-2 leading-tight">
                AI content can be inaccurate, can do mistakes
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
