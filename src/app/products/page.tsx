'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useI18n } from '@/lib/i18n';
import { products, productCategories, productSubcategories } from '@/lib/data';

export default function ProductsPage() {
  const { t } = useI18n();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeSubcategory, setActiveSubcategory] = useState<string>('all');

  useEffect(() => {
    const cat = searchParams.get('category');
    const sub = searchParams.get('sub');
    if (cat && productCategories.includes(cat as typeof productCategories[number])) {
      setActiveCategory(cat);
      if (sub) setActiveSubcategory(sub);
    }
  }, [searchParams]);

  const filteredProducts = products.filter((p) => {
    if (activeCategory !== 'all' && p.category !== activeCategory) return false;
    if (activeSubcategory !== 'all' && p.subcategory !== activeSubcategory) return false;
    return true;
  });

  const currentSubs = activeCategory !== 'all' ? (productSubcategories[activeCategory] || []) : [];

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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { setActiveCategory('all'); setActiveSubcategory('all'); }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-[#00d4ff] to-[#6c5ce7] text-[#0a0e27] shadow-[0_0_20px_rgba(0,212,255,0.3)]'
                : 'glass text-[#8892b0] hover:text-white hover:border-[#00d4ff]/30'
            }`}
          >
            {t('products.all')}
          </button>
          {productCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setActiveSubcategory('all'); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#00d4ff] to-[#6c5ce7] text-[#0a0e27] shadow-[0_0_20px_rgba(0,212,255,0.3)]'
                  : 'glass text-[#8892b0] hover:text-white hover:border-[#00d4ff]/30'
              }`}
            >
              {t(`cat.${cat}`)}
            </button>
          ))}
        </div>
      </section>

      {/* Subcategory Filter */}
      {currentSubs.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveSubcategory('all')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                activeSubcategory === 'all'
                  ? 'bg-[#00d4ff]/20 text-[#00d4ff] border border-[#00d4ff]/30'
                  : 'text-[#6b7fa3] hover:text-white border border-transparent'
              }`}
            >
              {t('products.all')}
            </button>
            {currentSubs.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubcategory(sub)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                  activeSubcategory === sub
                    ? 'bg-[#00d4ff]/20 text-[#00d4ff] border border-[#00d4ff]/30'
                    : 'text-[#6b7fa3] hover:text-white border border-transparent'
                }`}
              >
                {t(`sub.${sub}`)}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="glass rounded-xl overflow-hidden group hover:border-[#00d4ff]/30 transition-all duration-300 hover:-translate-y-1 block"
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
                  <span className="text-[#00d4ff] text-sm font-medium flex items-center gap-1">
                    {t('products.viewDetails')}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <span
                    onClick={(e) => { e.preventDefault(); }}
                    className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#6c5ce7] text-[#0a0e27] text-sm font-semibold hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
                  >
                    {t('products.inquiry')}
                  </span>
                </div>
              </div>
            </Link>
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
