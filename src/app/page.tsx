'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { products } from '@/lib/data';
import CountUp from '@/components/CountUp';

export default function HomePage() {
  const { t } = useI18n();

  const featuredProducts = products.filter(p =>
    ['sqha02-360', 'sqha01-120', 'sqha02-240', 'case-01'].includes(p.id)
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff]/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#6c5ce7]/8 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.03)_0%,transparent_70%)]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff] text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
            {t('hero.badge')}
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            {t('hero.title1')}
            <br />
            <span className="bg-gradient-to-r from-[#00d4ff] to-[#6c5ce7] bg-clip-text text-transparent">
              {t('hero.title2')}
            </span>
          </h1>

          <p className="text-[#8892b0] text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group relative px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#6c5ce7] text-[#0a0e27] font-semibold text-base transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:scale-105"
            >
              <span className="relative z-10">{t('hero.cta1')}</span>
            </Link>
            <Link
              href="/products"
              className="px-8 py-3.5 rounded-lg border border-[#00d4ff]/30 text-[#00d4ff] font-semibold text-base transition-all hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/60 hover:scale-105"
            >
              {t('hero.cta2')}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#00d4ff]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 border-y border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27] via-[#0d1333] to-[#0a0e27]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 15, suffix: '+', label: t('stats.years') },
              { value: 120, suffix: '+', label: t('stats.countries') },
              { value: 500, suffix: '+', label: t('stats.products') },
              { value: 10000, suffix: '+', label: t('stats.clients') },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-display font-bold bg-gradient-to-r from-[#00d4ff] to-[#6c5ce7] bg-clip-text text-transparent mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[#8892b0] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="relative py-24">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6c5ce7]/5 rounded-full blur-[150px]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              {t('home.featuredTitle')}
            </h2>
            <p className="text-[#8892b0] max-w-2xl mx-auto">
              {t('home.featuredSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group relative rounded-xl bg-[rgba(15,23,42,0.8)] backdrop-blur-sm border border-white/5 overflow-hidden transition-all duration-300 hover:border-[#00d4ff]/30 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] hover:-translate-y-1"
              >
                <div className="relative h-48 bg-gradient-to-br from-[#0d1333] to-[#0a0e27] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold mb-1 line-clamp-1">{product.name}</h3>
                  <p className="text-[#8892b0] text-sm line-clamp-2">{product.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-[#00d4ff]/30 text-[#00d4ff] font-semibold transition-all hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/60"
            >
              {t('home.viewAll')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27] via-[#0d1333] to-[#0a0e27]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00d4ff]/5 rounded-full blur-[200px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            {t('home.ctaTitle')}
          </h2>
          <p className="text-[#8892b0] text-lg mb-10 max-w-2xl mx-auto">
            {t('home.ctaSubtitle')}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#6c5ce7] text-[#0a0e27] font-bold text-lg transition-all hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] hover:scale-105"
          >
            {t('home.ctaButton')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
