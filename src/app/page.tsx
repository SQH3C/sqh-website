'use client';

import { useI18n } from '@/lib/i18n';
import Link from 'next/link';
import CountUp from '@/components/CountUp';
import { products } from '@/lib/data';

export default function HomePage() {
  const { t } = useI18n();

  const stats = [
    { value: 16, suffix: '+', label: t('stats.years') },
    { value: 120, suffix: '+', label: t('stats.countries') },
    { value: 50, suffix: '+', label: t('stats.products') },
    { value: 3000, suffix: '+', label: t('stats.clients') },
  ];

  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#6c5ce7]/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-20">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/5 text-[#00d4ff] text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
              PC Components Manufacturer & Exporter
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6">
              <span className="text-white">{t('hero.title').split(' ')[0]} </span>
              <span className="gradient-text">{t('hero.title').split(' ').slice(1).join(' ')}</span>
            </h1>

            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-[#8892b0] leading-relaxed mb-10">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#6c5ce7] text-[#0a0e27] font-bold text-base hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] transition-all duration-300 hover:-translate-y-0.5"
              >
                {t('hero.getQuote')}
              </Link>
              <Link
                href="/products"
                className="px-8 py-3.5 rounded-lg border border-[#00d4ff]/30 text-[#00d4ff] font-semibold text-base hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                {t('hero.browseProducts')}
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass rounded-xl p-6 text-center hover:border-[#00d4ff]/30 transition-all duration-300 group"
              >
                <div className="text-3xl sm:text-4xl font-display font-bold text-[#00d4ff] mb-2 group-hover:glow-text-cyan transition-all">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[#8892b0] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-[#00d4ff]/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-[#00d4ff]/50 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              {t('products.title')}
            </h2>
            <p className="text-[#8892b0] max-w-2xl mx-auto">{t('products.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="glass rounded-xl overflow-hidden group hover:border-[#00d4ff]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] to-transparent opacity-60" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff] text-xs font-medium">
                    {t(`cat.${product.category}`)}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold text-base mb-1 group-hover:text-[#00d4ff] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[#8892b0] text-sm mb-4">{product.description}</p>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-1.5 text-[#00d4ff] text-sm font-medium hover:gap-3 transition-all"
                  >
                    {t('products.viewDetails')}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-[#00d4ff]/30 text-[#00d4ff] font-semibold hover:bg-[#00d4ff]/10 transition-all"
            >
              {t('hero.browseProducts')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00d4ff]/[0.02] to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Why Choose <span className="gradient-text">SQH</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                title: 'Quality Assured',
                desc: 'ISO 9001 certified with rigorous QC processes. Every product undergoes 100+ stress tests before shipping.',
              },
              {
                icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                title: 'Global Reach',
                desc: 'Serving 120+ countries with regional warehouses for fast delivery. Local support teams in key markets.',
              },
              {
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                title: 'Cutting-Edge R&D',
                desc: '200+ patents in thermal management and power delivery. Dedicated R&D center with 100+ engineers.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass rounded-xl p-8 text-center group hover:border-[#00d4ff]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#6c5ce7]/20 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] transition-shadow">
                  <svg className="w-7 h-7 text-[#00d4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-[#8892b0] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-2xl p-12 sm:p-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/50 to-transparent" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#6c5ce7]/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#00d4ff]/20 rounded-full blur-[80px]" />

            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 relative z-10">
              Ready to <span className="gradient-text">Power Up</span>?
            </h2>
            <p className="text-[#8892b0] max-w-xl mx-auto mb-8 relative z-10">
              Get competitive pricing for bulk orders. Our team responds within 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#6c5ce7] text-[#0a0e27] font-bold hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] transition-all duration-300 relative z-10"
            >
              {t('hero.getQuote')}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
