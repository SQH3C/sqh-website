'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { products, productCategories } from '@/lib/data';

export default function ProductsPage() {
  const { t } = useI18n();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  const categories = ['all', ...productCategories] as const;

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="py-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00d4ff]/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            {t('products.title')}
          </h1>
          <p className="text-[#8892b0] max-w-2xl mx-auto text-lg">{t('products.subtitle')}</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#00d4ff] to-[#6c5ce7] text-[#0a0e27] shadow-[0_0_20px_rgba(0,212,255,0.3)]'
                  : 'glass text-[#8892b0] hover:text-white hover:border-[#00d4ff]/30'
              }`}
            >
              {cat === 'all' ? t('products.all') : t(`cat.${cat}`)}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
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

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
                    className="text-[#00d4ff] text-sm font-medium hover:underline flex items-center gap-1"
                  >
                    {t('products.specs')}
                    <svg
                      className={`w-4 h-4 transition-transform ${expandedProduct === product.id ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <a
                    href="/contact"
                    className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#6c5ce7] text-[#0a0e27] text-sm font-semibold hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
                  >
                    {t('products.inquiry')}
                  </a>
                </div>

                {/* Specs Panel */}
                {expandedProduct === product.id && (
                  <div className="mt-4 pt-4 border-t border-white/10 animate-fade-in-up">
                    <table className="w-full text-sm">
                      <tbody>
                        {Object.entries(product.specs).map(([key, value]) => (
                          <tr key={key} className="border-b border-white/5 last:border-0">
                            <td className="py-2 text-[#8892b0] pr-4 whitespace-nowrap">{key}</td>
                            <td className="py-2 text-white font-medium">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#8892b0] text-lg">No products found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
}
