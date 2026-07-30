'use client';

import { useState, useRef, useEffect } from 'react';
import { useI18n } from '@/lib/i18n';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

export default function LiveChat() {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const replyCount = useRef(0);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ id: 1, text: t('chat.welcome'), isUser: false }]);
    }
  }, [isOpen, messages.length, t]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), text: input.trim(), isUser: true };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      replyCount.current += 1;
      const reply = replyCount.current % 2 === 1 ? t('chat.autoReply1') : t('chat.autoReply2');
      setMessages((prev) => [...prev, { id: Date.now(), text: reply, isUser: false }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? 'bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/30'
            : 'bg-gradient-to-r from-[#00d4ff] to-[#6c5ce7] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] animate-pulse-glow'
        }`}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] glass-strong rounded-xl overflow-hidden shadow-2xl shadow-black/50 animate-fade-in-up">
          {/* Header */}
          <div className="px-4 py-3 bg-gradient-to-r from-[#00d4ff]/20 to-[#6c5ce7]/20 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#6c5ce7] flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{t('chat.title')}</p>
                <p className="text-[#00d4ff] text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  Online
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                    msg.isUser
                      ? 'bg-gradient-to-r from-[#00d4ff] to-[#6c5ce7] text-white rounded-br-sm'
                      : 'bg-white/10 text-white rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t('chat.placeholder')}
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-[#8892b0] focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
              />
              <button
                onClick={handleSend}
                className="px-3 py-2 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#6c5ce7] text-white text-sm font-medium hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
              >
                {t('chat.send')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
