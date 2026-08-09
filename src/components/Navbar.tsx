'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n, type Locale } from '@/lib/i18n';

export default function Navbar() {
  const { t, locale, setLocale, locales } = useI18n();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const categories = [
    { key: 'cpu-cooler', label: t('cat.cpu-cooler'), subs: [
      { key: 'air-cooler', label: t('sub.air-cooler') },
      { key: 'aio-water-cooler', label: t('sub.aio-water-cooler') },
      { key: 'pc-case-fan', label: t('sub.pc-case-fan') },
    ]},
    { key: 'server-cooler', label: t('cat.server-cooler'), subs: [
      { key: 'air-server-cooler', label: t('sub.air-server-cooler') },
      { key: 'water-server-cooler', label: t('sub.water-server-cooler') },
    ]},
    { key: 'pc-case', label: t('cat.pc-case') },
    { key: 'power-supply', label: t('cat.power-supply') },
    { key: 'laptop-cooling', label: t('cat.laptop-cooling') },
    { key: 'accessories', label: t('cat.accessories') },
  ];

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/products', label: t('nav.products'), hasDropdown: true },
    { href: '/about', label: t('nav.about') },
    { href: '/news', label: t('nav.news') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const localeEntries = Object.entries(locales) as [Locale, string][];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#6c5ce7] flex items-center justify-center font-display font-bold text-[#0a0e27] text-xs group-hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-shadow">
              SQH
            </div>
            <span className="font-display font-bold text-lg text-white tracking-wider">
              S<span className="text-[#00d4ff]">QH</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative">
                <Link
                  href={link.href}
                  onMouseEnter={() => link.hasDropdown && setProductsOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setProductsOpen(false)}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? 'text-[#00d4ff] bg-[rgba(0,212,255,0.1)]'
                      : 'text-[#8892b0] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg className={`w-3 h-3 transition-transform ${productsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {/* Products Dropdown */}
                {link.hasDropdown && productsOpen && (
                  <div
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                    className="absolute top-full left-0 mt-1 w-56 glass-strong rounded-lg overflow-hidden shadow-xl border border-white/10 py-2"
                  >
                    <Link
                      href="/products"
                      className="block px-4 py-2 text-sm text-[#00d4ff] hover:bg-white/5 transition-all font-medium"
                    >
                      {t('nav.products')} →
                    </Link>
                    <div className="border-t border-white/5 my-1" />
                    {categories.map((cat) => (
                      <div key={cat.key}>
                        <Link
                          href={`/products?category=${cat.key}`}
                          className="block px-4 py-2 text-sm text-[#8892b0] hover:text-white hover:bg-white/5 transition-all font-medium"
                        >
                          {cat.label}
                        </Link>
                        {'subs' in cat && cat.subs && (
                          <div className="ml-4">
                            {cat.subs.map((sub) => (
                              <Link
                                key={sub.key}
                                href={`/products?category=${cat.key}&sub=${sub.key}`}
                                className="block px-4 py-1.5 text-xs text-[#6b7fa3] hover:text-[#00d4ff] hover:bg-white/5 transition-all"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-[#8892b0] hover:text-white hover:bg-white/5 transition-all border border-white/10"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 014 9 14.5 14.5 0 01-4 9 14.5 14.5 0 01-4-9 14.5 14.5 0 014-9z" />
                </svg>
                {locales[locale]}
                <svg className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-40 glass-strong rounded-lg overflow-hidden shadow-xl">
                  {localeEntries.map(([key, name]) => (
                    <button
                      key={key}
                      onClick={() => { setLocale(key); setLangOpen(false); }}
                      className={`block w-full text-left px-4 py-2.5 text-sm transition-all ${
                        locale === key ? 'text-[#00d4ff] bg-[rgba(0,212,255,0.1)]' : 'text-[#8892b0] hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#6c5ce7] text-[#0a0e27] font-semibold text-sm hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all duration-300"
            >
              {t('nav.getQuote')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#8892b0] hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden glass-strong border-t border-white/5">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    pathname === link.href
                      ? 'text-[#00d4ff] bg-[rgba(0,212,255,0.1)]'
                      : 'text-[#8892b0] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-6 space-y-0.5">
                    {categories.map((cat) => (
                      <div key={cat.key}>
                        <Link
                          href={`/products?category=${cat.key}`}
                          className="block px-4 py-2 text-xs text-[#8892b0] hover:text-[#00d4ff] transition-all font-medium"
                        >
                          {cat.label}
                        </Link>
                        {'subs' in cat && cat.subs && (
                          <div className="pl-4">
                            {cat.subs.map((sub) => (
                              <Link
                                key={sub.key}
                                href={`/products?category=${cat.key}&sub=${sub.key}`}
                                className="block px-4 py-1.5 text-[10px] text-[#6b7fa3] hover:text-[#00d4ff] transition-all"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-white/5">
              <div className="flex flex-wrap gap-2 mb-3">
                {localeEntries.map(([key, name]) => (
                  <button
                    key={key}
                    onClick={() => setLocale(key)}
                    className={`px-3 py-1.5 rounded text-xs transition-all ${
                      locale === key ? 'text-[#00d4ff] bg-[rgba(0,212,255,0.15)] border border-[#00d4ff]/30' : 'text-[#8892b0] hover:text-white border border-white/10'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
              <Link
                href="/contact"
                className="block w-full text-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#6c5ce7] text-[#0a0e27] font-semibold text-sm"
              >
                {t('nav.getQuote')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
