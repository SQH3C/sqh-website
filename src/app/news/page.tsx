'use client';

import { useI18n } from '@/lib/i18n';
import { newsItems } from '@/lib/data';

export default function NewsPage() {
  const { t } = useI18n();

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="py-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00d4ff]/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            {t('news.title')}
          </h1>
          <p className="text-[#8892b0] max-w-2xl mx-auto text-lg">{t('news.subtitle')}</p>
        </div>
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Article */}
        <div className="mb-12">
          <div className="glass rounded-xl overflow-hidden group hover:border-[#00d4ff]/30 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={newsItems[0].image}
                  alt={newsItems[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0e27]/50 hidden lg:block" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-md bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff] text-xs font-medium">
                    {newsItems[0].category}
                  </span>
                  <span className="text-[#8892b0] text-sm">{newsItems[0].date}</span>
                </div>
                <h2 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors">
                  {newsItems[0].title}
                </h2>
                <p className="text-[#8892b0] leading-relaxed mb-6">{newsItems[0].excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#00d4ff] font-medium hover:gap-3 transition-all"
                >
                  {t('news.readMore')}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.slice(1).map((item) => (
            <article
              key={item.id}
              className="glass rounded-xl overflow-hidden group hover:border-[#00d4ff]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] to-transparent opacity-60" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#6c5ce7]/10 border border-[#6c5ce7]/20 text-[#6c5ce7] text-xs font-medium">
                    {item.category}
                  </span>
                  <span className="text-[#8892b0] text-xs">{item.date}</span>
                </div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-[#00d4ff] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-[#8892b0] text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-[#00d4ff] text-sm font-medium hover:gap-3 transition-all"
                >
                  {t('news.readMore')}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
