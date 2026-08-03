'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { products, productSubcategories } from '@/lib/data';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { t } = useI18n();
  const [activeImage, setActiveImage] = useState(0);

  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0a0e27] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Product Not Found</h1>
          <Link href="/products" className="text-[#00d4ff] hover:underline">
            {t('products.backToCatalog')}
          </Link>
        </div>
      </div>
    );
  }

  const allImages = product.images && product.images.length > 0 ? product.images : [product.image];
  const subs = productSubcategories[product.category] || [];

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center gap-2 text-sm text-[#8892b0]">
          <Link href="/" className="hover:text-[#00d4ff] transition-colors">{t('nav.home')}</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#00d4ff] transition-colors">{t('nav.products')}</Link>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[#8892b0] hover:text-[#00d4ff] transition-colors mb-8 group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t('products.backToCatalog')}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="glass rounded-xl overflow-hidden mb-4">
              <div className="relative aspect-square bg-[#0d1333] flex items-center justify-center">
                <img
                  src={allImages[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>

            {/* Thumbnails */}
            {allImages.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {allImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`glass rounded-lg overflow-hidden aspect-square transition-all duration-200 ${
                      activeImage === index
                        ? 'border-2 border-[#00d4ff] shadow-[0_0_15px_rgba(0,212,255,0.3)]'
                        : 'border-2 border-transparent hover:border-[#00d4ff]/30'
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div>
            {/* Category Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-md bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff] text-sm font-medium">
                {t(`cat.${product.category}`)}
              </span>
              {product.subcategory && subs.length > 0 && (
                <span className="px-3 py-1 rounded-md bg-[#6c5ce7]/10 border border-[#6c5ce7]/20 text-[#a78bfa] text-sm font-medium">
                  {t(`sub.${product.subcategory}`)}
                </span>
              )}
            </div>

            {/* Product Name */}
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-orbitron">
              {product.name}
            </h1>

            {/* Description */}
            <p className="text-[#8892b0] text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Quick Specs */}
            {product.specs && Object.keys(product.specs).length > 0 && (
              <div className="glass rounded-xl p-6 mb-8">
                <h2 className="text-xl font-semibold text-white mb-4 font-orbitron">
                  {t('products.specifications')}
                </h2>
                <div className="space-y-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                      <span className="text-[#8892b0] text-sm">{key}</span>
                      <span className="text-white text-sm font-medium text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="flex-1 text-center px-8 py-4 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#6c5ce7] text-[#0a0e27] font-bold text-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all duration-300"
              >
                {t('products.inquiry')}
              </a>
              <Link
                href="/products"
                className="flex-1 text-center px-8 py-4 rounded-xl glass text-white font-semibold text-lg hover:border-[#00d4ff]/30 transition-all duration-300"
              >
                {t('products.browseMore')}
              </Link>
            </div>
          </div>
        </div>

        {/* Full Specs Table (below on mobile, side by side on large screens) */}
        {product.specs && Object.keys(product.specs).length > 6 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8 font-orbitron text-center">
              {t('products.detailedSpecs')}
            </h2>
            <div className="glass rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {Object.entries(product.specs).map(([key, value], index) => (
                  <div
                    key={key}
                    className={`p-5 flex justify-between items-center ${
                      index % 2 === 0 ? 'sm:border-r border-white/5' : ''
                    } ${index < Object.entries(product.specs).length - (Object.entries(product.specs).length % 2 === 0 ? 2 : 1) ? 'border-b border-white/5' : ''}`}
                  >
                    <span className="text-[#8892b0] text-sm">{key}</span>
                    <span className="text-white text-sm font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-8 font-orbitron text-center">
            {t('products.relatedProducts')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.id !== product.id && (p.category === product.category || p.subcategory === product.subcategory))
              .slice(0, 4)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.id}`}
                  className="glass rounded-xl overflow-hidden group hover:border-[#00d4ff]/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] to-transparent opacity-60" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-medium text-sm group-hover:text-[#00d4ff] transition-colors truncate">
                      {p.name}
                    </h3>
                    <p className="text-[#8892b0] text-xs mt-1 truncate">{p.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
