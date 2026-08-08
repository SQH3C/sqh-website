'use client';

import { useState } from 'react';

export default function HomePage() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('sales@sqh3c.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff]/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#6c5ce7]/8 rounded-full blur-[150px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.03)_0%,transparent_70%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00d4ff]/20 to-[#6c5ce7]/20 border border-[#00d4ff]/30 mb-6">
            <span className="text-2xl font-display font-bold bg-gradient-to-r from-[#00d4ff] to-[#6c5ce7] bg-clip-text text-transparent">
              SQH
            </span>
          </div>
        </div>

        {/* Coming Soon */}
        <h1 className="text-5xl sm:text-7xl font-display font-bold text-white mb-4 tracking-tight">
          Coming <span className="bg-gradient-to-r from-[#00d4ff] to-[#6c5ce7] bg-clip-text text-transparent">Soon</span>
        </h1>

        <p className="text-[#8892b0] text-lg sm:text-xl max-w-xl mx-auto mb-4">
          Our new website is under construction.
        </p>
        <p className="text-[#6b7fa3] text-base sm:text-lg max-w-xl mx-auto mb-12">
          We are working hard to bring you the best PC components shopping experience.
        </p>

        {/* Contact Info */}
        <div className="glass rounded-2xl p-8 max-w-lg mx-auto mb-8">
          <h2 className="text-white font-semibold text-lg mb-6">Get In Touch</h2>

          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center justify-between gap-4 p-3 rounded-xl bg-[#0a0e27]/60 border border-[#00d4ff]/10 hover:border-[#00d4ff]/30 transition-colors group">
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#00d4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left min-w-0">
                  <p className="text-[#6b7fa3] text-xs">Email</p>
                  <p className="text-white text-sm font-medium truncate">sales@sqh3c.com</p>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#00d4ff]/10 text-[#00d4ff] hover:bg-[#00d4ff]/20 transition-colors"
              >
                {emailCopied ? 'Copied!' : 'Copy'}
              </button>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/8613800138000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-[#0a0e27]/60 border border-[#00d4ff]/10 hover:border-[#25D366]/40 transition-colors group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="text-left min-w-0">
                <p className="text-[#6b7fa3] text-xs">WhatsApp</p>
                <p className="text-white text-sm font-medium">Chat with us</p>
              </div>
              <svg className="w-4 h-4 text-[#6b7fa3] ml-auto flex-shrink-0 group-hover:text-[#25D366] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer */}
        <p className="text-[#4a5568] text-sm">
          &copy; 2025 SQH (sqh3c.com). All rights reserved.
        </p>
      </div>
    </div>
  );
}
