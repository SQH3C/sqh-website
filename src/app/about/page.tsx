'use client';

import { useI18n } from '@/lib/i18n';
import { timelineData, certifications } from '@/lib/data';

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="py-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6c5ce7]/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            {t('about.title')}
          </h1>
          <p className="text-[#8892b0] max-w-2xl mx-auto text-lg">{t('about.subtitle')}</p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
              Pioneering <span className="gradient-text">PC Hardware</span> Excellence
            </h2>
            <p className="text-[#8892b0] leading-relaxed mb-6">{t('about.desc')}</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '50,000', unit: 'm²', label: 'Factory Area' },
                { value: '800', unit: '+', label: 'Engineers' },
                { value: '200', unit: '+', label: 'Patents' },
                { value: '99.8', unit: '%', label: 'QC Pass Rate' },
              ].map((item, i) => (
                <div key={i} className="glass rounded-lg p-4 text-center">
                  <div className="text-2xl font-display font-bold text-[#00d4ff]">
                    {item.value}<span className="text-base">{item.unit}</span>
                  </div>
                  <div className="text-[#8892b0] text-xs mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="glass rounded-xl p-2 glow-border">
              <img
                src="https://placehold.co/600x400/0a0e27/00d4ff?text=SQH+Factory"
                alt="SQH Factory"
                className="w-full rounded-lg"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#6c5ce7]/20 rounded-full blur-[40px]" />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-white text-center mb-12">
          {t('about.timeline')}
        </h2>
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff]/50 via-[#6c5ce7]/50 to-transparent hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff]/50 via-[#6c5ce7]/50 to-transparent md:hidden" />

          <div className="space-y-8">
            {timelineData.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex items-center gap-6 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#00d4ff] shadow-[0_0_10px_rgba(0,212,255,0.5)] z-10" />

                {/* Content */}
                <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="glass rounded-xl p-5 hover:border-[#00d4ff]/30 transition-all duration-300">
                    <span className="text-[#00d4ff] font-display font-bold text-lg">{item.year}</span>
                    <h3 className="text-white font-semibold mt-1">{item.title}</h3>
                    <p className="text-[#8892b0] text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-white text-center mb-12">
          {t('about.certs')}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="glass rounded-xl p-6 text-center hover:border-[#00d4ff]/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#6c5ce7]/20 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-shadow">
                <svg className="w-6 h-6 text-[#00d4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.589l2.16-1.441a3.42 3.42 0 013.838 0l2.16 1.441c.606.405 1.363.555 2.07.42l2.582-.516a3.42 3.42 0 013.996 2.313l.714 2.562c.2.716.066 1.486-.362 2.086l-1.566 2.193c-.426.595-.563 1.36-.362 2.086l.714 2.562a3.42 3.42 0 01-2.313 3.996l-2.582.516a3.42 3.42 0 01-2.07-.42l-2.16-1.441a3.42 3.42 0 00-3.838 0l-2.16 1.441a3.42 3.42 0 01-2.07.42l-2.582-.516a3.42 3.42 0 01-2.313-3.996l-.714-2.562a3.42 3.42 0 01.362-2.086l1.566-2.193c.426-.595.563-1.36.362-2.086l-.714-2.562a3.42 3.42 0 012.313-3.996l2.582-.516z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-sm">{cert.name}</h3>
              <p className="text-[#8892b0] text-xs mt-1">{cert.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Factory Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-white text-center mb-12">
          {t('about.factory')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: 'SMT Production Line', color: '00d4ff' },
            { label: 'Quality Testing Lab', color: '6c5ce7' },
            { label: 'Warehouse & Logistics', color: '00d4ff' },
          ].map((item, i) => (
            <div key={i} className="glass rounded-xl overflow-hidden group hover:border-[#00d4ff]/30 transition-all duration-300">
              <img
                src={`https://placehold.co/600x400/0a0e27/${item.color}?text=${encodeURIComponent(item.label)}`}
                alt={item.label}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4">
                <p className="text-white font-medium text-sm">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
