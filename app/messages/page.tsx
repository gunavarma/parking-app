"use client";

import Navbar from "../components/Navbar";
import { useState } from "react";

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState(1);

  const chats = [
    {
      id: 1,
      name: "Nexus Management",
      role: "Verified Operator",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBMpRFVrVndCmsg6tE8-SpyNWR7i_9x45H0pmS_dPtdB4yk_rx_Eqp0NLvI5Tqb9v_el4uqOLDbSc3pODhe8TiM2oeEQWZIFbDXGhReQkkeFoXlUR7aW5duTwXmx9HXjoQJHRqcA13mf-WfmKL961I32QyuOI6NuI_sHi4WRBRk2ZsLvDiNI9-lNeGA5x3iLnuWtFTXKQofuyLfBCIzjMgyoynkQiWhynjZSbmOqQu4I5QcntfSYBs0AgS3eb8udANnjJmouYf6kMqV",
      lastMessage: "Please arrive 10 mins early for the best spot.",
      time: "2m ago",
      unread: 2,
    },
    {
      id: 2,
      name: "John Doe",
      role: "Renter",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCw8wKWpywGHmtqa5gKFXCsuT4Z90jD2OJ5svn8voixOMm0i-PPONuk8SfUvSwTNHG_wFhcYumVOKojueRXlzwVogDDEoJi0EE70CWzVs-4nUztxLU6o5fLILDBjCfgXdoXZtD2c8Zoi5Y5oZncPRVhiPaQYHe2ezgn-d7aYhTDmk-9g7YIlKZzybh0TVriSBGvF1NoAj5D9w-aDlXy7kutPOZVuF9UJ4sF23l0S9GrmvB8ypQFYXpr-qiIu9u78HPc2CkeagUnKXVy",
      lastMessage: "Is the garage covered?",
      time: "1h ago",
      unread: 0,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "other",
      content: "Hello! Thanks for booking with Nexus Management.",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "me",
      content: "Hi, I have a question about the entrance height.",
      time: "10:32 AM",
    },
    {
      id: 3,
      sender: "other",
      content:
        "Sure, the clearance is 6ft 8in. Does that work for your vehicle?",
      time: "10:33 AM",
    },
    {
      id: 4,
      sender: "me",
      content: "Yes, that's perfect. Thanks!",
      time: "10:35 AM",
    },
    {
      id: 5,
      sender: "other",
      content:
        "Great. Please arrive 10 mins early for the best spot on Level 1.",
      time: "10:36 AM",
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-zinc-900 dark:text-white transition-colors duration-200 flex flex-col font-display">
      <Navbar />

      <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 md:px-8 py-6 h-[calc(100vh-80px)]">
        <div className="flex h-full bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-white/10 overflow-hidden">
          {/* Chat List Sidebar */}
          <div className="w-full md:w-80 lg:w-96 border-r border-zinc-200 dark:border-white/10 flex flex-col bg-zinc-50 dark:bg-black/20">
            <div className="p-4 border-b border-zinc-200 dark:border-white/10">
              <h2 className="text-xl font-bold mb-4">Messages</h2>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Search chats..."
                  className="w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 placeholder:text-zinc-500"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setActiveChat(chat.id)}
                  className={`p-4 flex gap-3 cursor-pointer transition-colors border-b border-zinc-100 dark:border-white/5 ${
                    activeChat === chat.id
                      ? "bg-white dark:bg-white/10 border-l-4 border-l-secondary"
                      : "hover:bg-white/50 dark:hover:bg-white/5 border-l-4 border-l-transparent"
                  }`}
                >
                  <div className="relative shrink-0">
                    <img
                      src={chat.avatar}
                      alt={chat.name}
                      className="size-12 rounded-full object-cover"
                    />
                    {chat.unread > 0 && (
                      <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white dark:border-zinc-900">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-0.5">
                      <h3
                        className={`font-bold text-sm truncate ${activeChat === chat.id ? "text-zinc-900 dark:text-white" : "text-zinc-700 dark:text-zinc-300"}`}
                      >
                        {chat.name}
                      </h3>
                      <span className="text-[10px] text-zinc-400 whitespace-nowrap">
                        {chat.time}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 truncate">
                      {chat.lastMessage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Chat Area */}
          <div className="flex-1 flex flex-col hidden md:flex bg-white dark:bg-zinc-900">
            {/* Chat Header */}
            <div className="p-4 border-b border-zinc-200 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={chats[0].avatar}
                    alt="Current Chat"
                    className="size-10 rounded-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 size-2.5 bg-green-500 rounded-full border-2 border-white dark:border-zinc-900"></div>
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                    {chats[0].name}
                    <span
                      className="material-symbols-outlined text-secondary text-lg"
                      title="Verified"
                    >
                      verified
                    </span>
                  </h3>
                  <p className="text-xs text-zinc-500">{chats[0].role}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="size-9 flex items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-white/10 text-zinc-500 transition-colors">
                  <span className="material-symbols-outlined">call</span>
                </button>
                <button className="size-9 flex items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-white/10 text-zinc-500 transition-colors">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Date Separator */}
              <div className="flex justify-center">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest bg-zinc-100 dark:bg-white/5 px-3 py-1 rounded-full">
                  Today
                </span>
              </div>

              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] rounded-2xl px-5 py-3 ${
                      msg.sender === "me"
                        ? "bg-secondary text-[#111811] rounded-tr-none"
                        : "bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-zinc-100 rounded-tl-none"
                    }`}
                  >
                    <p className="text-sm font-medium leading-relaxed">
                      {msg.content}
                    </p>
                    <p
                      className={`text-[10px] mt-1 text-right ${msg.sender === "me" ? "text-black/50" : "text-zinc-400"}`}
                    >
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-zinc-200 dark:border-white/10">
              <div className="flex items-end gap-2 bg-zinc-50 dark:bg-white/5 p-2 rounded-2xl border border-zinc-200 dark:border-white/10 focus-within:border-secondary/50 focus-within:ring-1 focus-within:ring-secondary/50 transition-all">
                <button className="size-10 flex items-center justify-center rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors shrink-0">
                  <span className="material-symbols-outlined">add_circle</span>
                </button>
                <textarea
                  placeholder="Type a message..."
                  rows={1}
                  className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-3 px-2 max-h-32 resize-none text-zinc-900 dark:text-white placeholder:text-zinc-400"
                />
                <button className="size-10 flex items-center justify-center rounded-full bg-secondary text-[#111811] hover:brightness-110 active:scale-95 transition-all shadow-sm shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    send
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
