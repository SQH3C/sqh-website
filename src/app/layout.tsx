import type { Metadata } from 'next';
import './globals.css';
import { I18nProvider } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LiveChat from '@/components/LiveChat';
import ParticleBackground from '@/components/ParticleBackground';

export const metadata: Metadata = {
  title: 'SQH | High-Performance PC Components',
  description: 'SQH (sqhpc.com) - Global leader in high-performance PC hardware manufacturing & export. CPUs, GPUs, Memory, SSDs, and more.',
  keywords: ['PC components', 'CPU', 'GPU', 'memory', 'SSD', 'motherboard', 'hardware', 'export', 'wholesale'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#0a0e27] text-white min-h-screen">
        <I18nProvider>
          <ParticleBackground />
          <Navbar />
          <main className="relative z-10">
            {children}
          </main>
          <Footer />
          <LiveChat />
        </I18nProvider>
      </body>
    </html>
  );
}
