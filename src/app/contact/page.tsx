'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { productCategories } from '@/lib/data';

export default function ContactPage() {
  const { t, locale } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    category: '',
    quantity: '',
    message: '',
  });

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = t('contact.required');
    if (!form.email.trim()) newErrors.email = t('contact.required');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = t('contact.emailInvalid');
    if (!form.message.trim()) newErrors.message = t('contact.required');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/ammie.lin@sqh3c.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          country: form.country,
          category: form.category,
          quantity: form.quantity,
          message: form.message,
          _subject: `New Inquiry from ${form.name} - ${form.company || 'Unknown Company'}`,
          _template: 'table',
        }),
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Submission failed. Please try again or contact us directly.');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const inputClass = (field: string) =>
    `w-full bg-white/5 border ${errors[field] ? 'border-red-500/50' : 'border-white/10'} rounded-lg px-4 py-3 text-sm text-white placeholder-[#8892b0] focus:outline-none focus:border-[#00d4ff]/50 transition-colors`;

  if (submitted) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center animate-fade-in-up">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#6c5ce7]/20 flex items-center justify-center glow-cyan">
            <svg className="w-10 h-10 text-[#00d4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-display font-bold text-white mb-4">{t('contact.success')}</h2>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', country: '', category: '', quantity: '', message: '' }); }}
            className="mt-6 px-6 py-2.5 rounded-lg border border-[#00d4ff]/30 text-[#00d4ff] font-medium hover:bg-[#00d4ff]/10 transition-all"
          >
            {t('nav.contact')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="py-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6c5ce7]/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-[#8892b0] max-w-2xl mx-auto text-lg">{t('contact.subtitle')}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="glass rounded-xl p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-sm text-[#8892b0] mb-1.5">{t('contact.name')} *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={inputClass('name')}
                    placeholder={t('contact.name')}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-[#8892b0] mb-1.5">{t('contact.email')} *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={inputClass('email')}
                    placeholder={t('contact.email')}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm text-[#8892b0] mb-1.5">{t('contact.company')}</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    className={inputClass('company')}
                    placeholder={t('contact.company')}
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm text-[#8892b0] mb-1.5">{t('contact.country')}</label>
                  <input
                    type="text"
                    value={form.country}
                    onChange={(e) => handleChange('country', e.target.value)}
                    className={inputClass('country')}
                    placeholder={t('contact.country')}
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm text-[#8892b0] mb-1.5">{t('contact.category')}</label>
                  <select
                    value={form.category}
                    onChange={(e) => handleChange('category', e.target.value)}
                    className={inputClass('category')}
                  >
                    <option value="" className="bg-[#0a0e27]">--</option>
                    {productCategories.map((cat) => (
                      <option key={cat} value={cat} className="bg-[#0a0e27]">{t(`cat.${cat}`)}</option>
                    ))}
                  </select>
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-sm text-[#8892b0] mb-1.5">{t('contact.quantity')}</label>
                  <input
                    type="text"
                    value={form.quantity}
                    onChange={(e) => handleChange('quantity', e.target.value)}
                    className={inputClass('quantity')}
                    placeholder="e.g. 500 pcs"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mt-5">
                <label className="block text-sm text-[#8892b0] mb-1.5">{t('contact.message')} *</label>
                <textarea
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  rows={5}
                  className={inputClass('message')}
                  placeholder={t('contact.message')}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 w-full sm:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#6c5ce7] text-[#0a0e27] font-bold hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? t('contact.submitting') || 'Sending...' : t('contact.submit')}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#00d4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {t('contact.address')}
              </h3>
              <p className="text-[#8892b0] text-sm leading-relaxed">{t('contact.addressValue')}</p>
            </div>

            <div className="glass rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#00d4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t('contact.phone')}
              </h3>
              <p className="text-[#8892b0] text-sm">+86 755 8888 6666</p>
              <p className="text-[#8892b0] text-sm mt-1">+86 755 8888 6667 (WhatsApp)</p>
            </div>

            <div className="glass rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#00d4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </h3>
              <p className="text-[#8892b0] text-sm">sales@sqh3c.com</p>
              <p className="text-[#8892b0] text-sm mt-1">support@sqh3c.com</p>
            </div>

            {/* Map placeholder */}
            <div className="glass rounded-xl overflow-hidden">
              <div className="h-48 bg-[#0a0e27] flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#00d4ff" strokeWidth="0.5" opacity="0.3" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                <div className="text-center z-10">
                  <svg className="w-8 h-8 text-[#00d4ff] mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-[#8892b0] text-xs">Shenzhen, Guangdong, China</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
