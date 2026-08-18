'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export type Locale = 'en' | 'zh' | 'ja' | 'es' | 'ar';

const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
  es: 'Español',
  ar: 'العربية',
};

type TranslationMap = Record<string, Record<Locale, string>>;

const translations: TranslationMap = {
  // Navbar
  'nav.home': { en: 'Home', zh: '首页', ja: 'ホーム', es: 'Inicio', ar: 'الرئيسية' },
  'nav.products': { en: 'Products', zh: '产品', ja: '製品', es: 'Productos', ar: 'المنتجات' },
  'nav.about': { en: 'About Us', zh: '关于我们', ja: '会社概要', es: 'Sobre Nosotros', ar: 'من نحن' },
  'nav.news': { en: 'News', zh: '新闻', ja: 'ニュース', es: 'Noticias', ar: 'الأخبار' },
  'nav.contact': { en: 'Contact', zh: '联系我们', ja: 'お問い合わせ', es: 'Contacto', ar: 'اتصل بنا' },
  'nav.getQuote': { en: 'Get Quote', zh: '获取报价', ja: '見積もり', es: 'Cotizar', ar: 'طلب عرض سعر' },
  'nav.onlineService': { en: 'Online Service', zh: '在线客服', ja: 'オンライン', es: 'Servicio Online', ar: 'خدمة مباشرة' },

  // Hero
  'hero.badge': { en: 'Professional PC Components Manufacturer', zh: '专业电脑配件制造商', ja: 'プロフェッショナルPC部品メーカー', es: 'Fabricante Profesional de Componentes PC', ar: 'مصنع مكونات الحاسوب المحترف' },
  'hero.title1': { en: 'NEXT-GEN', zh: '下一代', ja: '次世代', es: 'NUEVA GENERACIÓN', ar: 'الجيل القادم' },
  'hero.title2': { en: 'PC COMPONENTS', zh: '电脑配件', ja: 'PCパーツ', es: 'COMPONENTES PC', ar: 'مكونات الحاسوب' },
  'hero.subtitle': { en: 'Global leader in high-performance PC hardware manufacturing & export. Powering 120+ countries with cutting-edge technology.', zh: '全球高性能电脑硬件制造与出口领导者，为120多个国家提供尖端技术。', ja: '高性能PCハードウェアのグローバルリーダー。120カ国以上に最先端技術を提供。', es: 'Líder global en fabricación y exportación de hardware PC de alto rendimiento.', ar: 'رائد عالمي في تصنيع وتصدير مكونات الحاسوب عالية الأداء.' },
  'hero.cta1': { en: 'Get Quote', zh: '获取报价', ja: '見積もり依頼', es: 'Cotizar', ar: 'طلب عرض سعر' },
  'hero.cta2': { en: 'Browse Products', zh: '浏览产品', ja: '製品を見る', es: 'Ver Productos', ar: 'تصفح المنتجات' },
  'hero.browseProducts': { en: 'Browse Products', zh: '浏览产品', ja: '製品を見る', es: 'Ver Productos', ar: 'تصفح المنتجات' },
  'hero.getQuote': { en: 'Get Quote', zh: '获取报价', ja: '見積もり依頼', es: 'Cotizar', ar: 'طلب عرض سعر' },

  // Stats
  'stats.years': { en: 'Years Export', zh: '年出口经验', ja: '年の輸出', es: 'Años Exportando', ar: 'سنوات التصدير' },
  'stats.countries': { en: 'Countries Served', zh: '合作国家', ja: '取引国数', es: 'Países Atendidos', ar: 'دولة نخدمها' },
  'stats.products': { en: 'Product Lines', zh: '产品线', ja: '製品ライン', es: 'Líneas de Productos', ar: 'خط إنتاج' },
  'stats.clients': { en: 'Global Clients', zh: '全球客户', ja: 'グローバル顧客', es: 'Clientes Globales', ar: 'عميل عالمي' },

  // Home
  'home.featuredTitle': { en: 'Featured Products', zh: '精选产品', ja: '注目製品', es: 'Productos Destacados', ar: 'منتجات مميزة' },
  'home.featuredSubtitle': { en: 'Discover our most popular PC components trusted by professionals worldwide', zh: '探索全球专业人士信赖的热门电脑配件', ja: '世界中のプロフェッショナルに信頼される人気PCパーツ', es: 'Descubre nuestros componentes PC más populares', ar: 'اكتشف مكونات الحاسوب الأكثر شعبية' },
  'home.viewAll': { en: 'View All Products', zh: '查看全部产品', ja: '全製品を見る', es: 'Ver Todos los Productos', ar: 'عرض جميع المنتجات' },
  'home.ctaTitle': { en: 'Ready to Build Your Next System?', zh: '准备好打造你的下一套系统了吗？', ja: '次のシステムを構築する準備はできましたか？', es: '¿Listo para Construir tu Próximo Sistema?', ar: 'هل أنت مستعد لبناء نظامك التالي؟' },
  'home.ctaSubtitle': { en: 'Contact our team for custom solutions, bulk pricing, and technical support', zh: '联系我们的团队获取定制方案、批量报价和技术支持', ja: 'カスタムソリューション、大量注文価格、技術サポートについてはお問い合わせください', es: 'Contacta a nuestro equipo para soluciones personalizadas', ar: 'تواصل مع فريقنا للحصول على حلول مخصصة' },
  'home.ctaButton': { en: 'Contact Us', zh: '联系我们', ja: 'お問い合わせ', es: 'Contáctenos', ar: 'اتصل بنا' },

  // Products
  'products.title': { en: 'Product Catalog', zh: '产品目录', ja: '製品カタログ', es: 'Catálogo de Productos', ar: 'كتالوج المنتجات' },
  'products.subtitle': { en: 'Explore our comprehensive range of high-performance PC components', zh: '探索我们全面的高性能电脑配件系列', ja: '高性能PCパーツの包括的なラインナップをご覧ください', es: 'Explore nuestra gama completa de componentes PC de alto rendimiento', ar: 'استكشف مجموعتنا الشاملة من مكونات الحاسوب عالية الأداء' },
  'products.all': { en: 'All', zh: '全部', ja: 'すべて', es: 'Todos', ar: 'الكل' },
  'products.inquiry': { en: 'Inquiry', zh: '立即询价', ja: 'お問い合わせ', es: 'Consultar', ar: 'استفسار' },
  'products.specs': { en: 'Specifications', zh: '规格参数', ja: '仕様', es: 'Especificaciones', ar: 'المواصفات' },
  'products.viewDetails': { en: 'View Details', zh: '查看详情', ja: '詳細を見る', es: 'Ver Detalles', ar: 'عرض التفاصيل' },
  'products.backToCatalog': { en: 'Back to Catalog', zh: '返回产品目录', ja: 'カタログに戻る', es: 'Volver al Catálogo', ar: 'العودة للكتالوج' },
  'products.specifications': { en: 'Specifications', zh: '产品规格', ja: '製品仕様', es: 'Especificaciones', ar: 'المواصفات' },
  'products.browseMore': { en: 'Browse More', zh: '浏览更多', ja: 'もっと見る', es: 'Ver Más', ar: 'تصفح المزيد' },
  'products.detailedSpecs': { en: 'Detailed Specifications', zh: '详细规格参数', ja: '詳細仕様', es: 'Especificaciones Detalladas', ar: 'المواصفات التفصيلية' },
  'products.relatedProducts': { en: 'Related Products', zh: '相关产品', ja: '関連製品', es: 'Productos Relacionados', ar: 'منتجات ذات صلة' },

  // Product categories
  'cat.cpu-cooler': { en: 'CPU Cooler', zh: 'CPU散热器', ja: 'CPUクーラー', es: 'Enfriador CPU', ar: 'مبرد المعالج' },
  'cat.server-cooler': { en: 'Server Cooler', zh: '服务器散热器', ja: 'サーバークーラー', es: 'Enfriador de Servidor', ar: 'مبرد الخادم' },
  'cat.pc-case': { en: 'PC Case', zh: '机箱', ja: 'PCケース', es: 'Gabinete PC', ar: 'صندوق الحاسوب' },
  'cat.power-supply': { en: 'Power Supply', zh: '电源', ja: '電源', es: 'Fuente de Poder', ar: 'مزود الطاقة' },
  'cat.laptop-cooling': { en: 'Laptop Cooling', zh: '笔记本散热', ja: 'ノートPC冷却', es: 'Enfriador Laptop', ar: 'تبريد اللابتوب' },
  'cat.accessories': { en: 'Accessories', zh: '配件', ja: 'アクセサリー', es: 'Accesorios', ar: 'الإكسسوارات' },
  'sub.air-cooler': { en: 'Air Cooler', zh: '风冷散热器', ja: '空冷クーラー', es: 'Refrigeración por Aire', ar: 'مبرد هوائي' },
  'sub.aio-water-cooler': { en: 'AIO Water Cooler', zh: '一体式水冷', ja: '簡易水冷', es: 'Refrigeración Líquida AIO', ar: 'مبرد مائي AIO' },
  'sub.pc-case-fan': { en: 'PC Case Fan', zh: '机箱风扇', ja: 'ケースファン', es: 'Ventilador de Gabinete', ar: 'مروحة الصندوق' },
  'sub.air-server-cooler': { en: 'Air Server Cooler', zh: '风冷服务器散热器', ja: '空冷サーバークーラー', es: 'Enfriador de Servidor por Aire', ar: 'مبرد خادم هوائي' },
  'sub.water-server-cooler': { en: 'Water Server Cooler', zh: '水冷服务器散热器', ja: '水冷サーバークーラー', es: 'Enfriador de Servidor por Agua', ar: 'مبرد خادم مائي' },

  // About
  'about.title': { en: 'About SQH', zh: '关于SQH', ja: 'SQHについて', es: 'Sobre SQH', ar: 'عن SQH' },
  'about.subtitle': { en: 'Pioneering PC hardware excellence since 2008', zh: '自2008年起引领电脑硬件卓越之路', ja: '2008年からPCハードウェアの卓越性を牽引', es: 'Pioneros en excelencia de hardware PC desde 2008', ar: 'ريادة التميز في مكونات الحاسوب منذ 2008' },
  'about.desc': { en: 'SQH is a leading global manufacturer and exporter of high-performance PC components. With state-of-the-art facilities spanning 50,000 square meters and a team of 800+ engineers, we deliver cutting-edge hardware solutions to over 120 countries worldwide.', zh: 'SQH是全球领先的高性能电脑配件制造商和出口商。拥有50,000平方米的先进设施和800多名工程师团队，我们为120多个国家提供尖端硬件解决方案。', ja: 'SQHは、高性能PCパーツの世界的なメーカーです。50,000平方メートルの施設と800名以上のエンジニアチームで、120カ国以上にソリューションを提供。', es: 'SQH es un fabricante y exportador líder mundial de componentes PC de alto rendimiento.', ar: 'SQH هي شركة رائدة عالمياً في تصنيع وتصدير مكونات الحاسوب عالية الأداء.' },
  'about.timeline': { en: 'Our Journey', zh: '发展历程', ja: '沿革', es: 'Nuestra Trayectoria', ar: 'مسيرتنا' },
  'about.certs': { en: 'Certifications', zh: '认证资质', ja: '認証', es: 'Certificaciones', ar: 'الشهادات' },
  'about.factory': { en: 'Our Factory', zh: '工厂实力', ja: '工場', es: 'Nuestra Fábrica', ar: 'مصنعنا' },

  // News
  'news.title': { en: 'Latest News', zh: '新闻动态', ja: '最新ニュース', es: 'Últimas Noticias', ar: 'آخر الأخبار' },
  'news.subtitle': { en: 'Stay updated with industry insights and company announcements', zh: '了解行业洞察与公司动态', ja: '業界の洞察と会社のお知らせをご確認ください', es: 'Manténgase actualizado con las últimas noticias', ar: 'ابق على اطلاع بآخر الأخبار' },
  'news.readMore': { en: 'Read More', zh: '阅读更多', ja: '続きを読む', es: 'Leer Más', ar: 'اقرأ المزيد' },

  // Contact
  'contact.title': { en: 'Contact Us', zh: '联系我们', ja: 'お問い合わせ', es: 'Contáctenos', ar: 'اتصل بنا' },
  'contact.subtitle': { en: 'Get in touch for quotes, partnerships, or any inquiries', zh: '联系我们获取报价、合作或任何咨询', ja: 'お見積もり、パートナーシップ、お問い合わせはこちらから', es: 'Contáctenos para cotizaciones y consultas', ar: 'تواصل معنا للحصول على عروض الأسعار' },
  'contact.name': { en: 'Full Name', zh: '姓名', ja: 'お名前', es: 'Nombre Completo', ar: 'الاسم الكامل' },
  'contact.email': { en: 'Email Address', zh: '邮箱地址', ja: 'メールアドレス', es: 'Correo Electrónico', ar: 'البريد الإلكتروني' },
  'contact.company': { en: 'Company', zh: '公司名称', ja: '会社名', es: 'Empresa', ar: 'الشركة' },
  'contact.country': { en: 'Country', zh: '国家', ja: '国', es: 'País', ar: 'البلد' },
  'contact.category': { en: 'Product Category', zh: '产品类别', ja: '製品カテゴリ', es: 'Categoría de Producto', ar: 'فئة المنتج' },
  'contact.quantity': { en: 'Estimated Quantity', zh: '需求数量', ja: '予定数量', es: 'Cantidad Estimada', ar: 'الكمية المقدرة' },
  'contact.message': { en: 'Message', zh: '留言', ja: 'メッセージ', es: 'Mensaje', ar: 'الرسالة' },
  'contact.submit': { en: 'Submit Inquiry', zh: '提交询盘', ja: '送信', es: 'Enviar Consulta', ar: 'إرسال الاستفسار' },
  'contact.submitting': { en: 'Sending...', zh: '发送中...', ja: '送信中...', es: 'Enviando...', ar: 'جارٍ الإرسال...' },
  'contact.success': { en: 'Thank you! Your inquiry has been submitted successfully. We will get back to you within 24 hours.', zh: '感谢！您的询盘已成功提交。我们将在24小时内回复您。', ja: 'ありがとうございます！お問い合わせを受け付けました。24時間以内にご返信します。', es: '¡Gracias! Su consulta ha sido enviada. Le responderemos en 24 horas.', ar: 'شكراً لك! تم إرسال استفسارك بنجاح. سنرد عليك خلال 24 ساعة.' },
  'contact.address': { en: 'Address', zh: '地址', ja: '住所', es: 'Dirección', ar: 'العنوان' },
  'contact.addressValue': { en: '888 Innovation Road, High-Tech Zone, Shenzhen, Guangdong, China', zh: '中国广东省深圳市高新区创新路888号', ja: '中国广东省深圳市高新区創新路888号', es: '888 Innovation Road, Zona de Alta Tecnología, Shenzhen, China', ar: '888 Innovation Road، منطقة التكنولوجيا العالية، شنتشن، الصين' },
  'contact.phone': { en: 'Phone', zh: '电话', ja: '電話', es: 'Teléfono', ar: 'الهاتف' },
  'contact.required': { en: 'Required', zh: '必填', ja: '必須', es: 'Requerido', ar: 'مطلوب' },
  'contact.emailInvalid': { en: 'Invalid email format', zh: '邮箱格式不正确', ja: 'メール形式が正しくありません', es: 'Formato de correo inválido', ar: 'تنسيق البريد غير صالح' },

  // Footer
  'footer.desc': { en: 'Leading global manufacturer and exporter of high-performance PC components since 2008.', zh: '自2008年起，全球领先的高性能电脑配件制造商和出口商。', ja: '2008年から高性能PCパーツのグローバルメーカー。', es: 'Fabricante y exportador líder de componentes PC desde 2008.', ar: 'شركة رائدة في تصنيع وتصدير مكونات الحاسوب منذ 2008.' },
  'footer.quickLinks': { en: 'Quick Links', zh: '快速链接', ja: 'クイックリンク', es: 'Enlaces Rápidos', ar: 'روابط سريعة' },
  'footer.followUs': { en: 'Follow Us', zh: '关注我们', ja: 'フォロー', es: 'Síguenos', ar: 'تابعنا' },
  'footer.rights': { en: 'All Rights Reserved', zh: '版权所有', ja: '全著作権所有', es: 'Todos los Derechos Reservados', ar: 'جميع الحقوق محفوظة' },
  'footer.privacy': { en: 'Privacy Policy', zh: '隐私政策', ja: 'プライバシーポリシー', es: 'Política de Privacidad', ar: 'سياسة الخصوصية' },
  'footer.terms': { en: 'Terms of Service', zh: '服务条款', ja: '利用規約', es: 'Términos de Servicio', ar: 'شروط الخدمة' },

  // Chat
  'chat.welcome': { en: 'Hello! Welcome to SQH. How can I help you today?', zh: '您好！欢迎来到SQH。有什么可以帮您的？', ja: 'こんにちは！SQHへようこそ。何かお手伝いできますか？', es: '¡Hola! Bienvenido a SQH. ¿Cómo puedo ayudarle?', ar: 'مرحباً! أهلاً بك في SQH. كيف يمكنني مساعدتك؟' },
  'chat.placeholder': { en: 'Type your message...', zh: '输入您的消息...', ja: 'メッセージを入力...', es: 'Escriba su mensaje...', ar: 'اكتب رسالتك...' },
  'chat.send': { en: 'Send', zh: '发送', ja: '送信', es: 'Enviar', ar: 'إرسال' },
  'chat.autoReply1': { en: 'Thank you for your interest! Our team will respond shortly. Meanwhile, feel free to browse our product catalog.', zh: '感谢您的关注！我们的团队将很快回复。同时，欢迎浏览我们的产品目录。', ja: 'ありがとうございます！チームがすぐに対応します。', es: '¡Gracias por su interés! Nuestro equipo responderá pronto.', ar: 'شكراً لاهتمامك! سيرد فريقنا قريباً.' },
  'chat.autoReply2': { en: 'I understand your question. Let me connect you with a specialist who can provide detailed information.', zh: '我了解您的问题。让我为您连接专家获取详细信息。', ja: 'ご質問を理解しました。専門家に接続します。', es: 'Entiendo su pregunta. Le conectaré con un especialista.', ar: 'أفهم سؤالك. سأوصلك بمتخصص.' },
  'chat.title': { en: 'SQH Support', zh: 'SQH 客服', ja: 'SQH サポート', es: 'Soporte SQH', ar: 'دعم SQH' },
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  locales: typeof localeNames;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  const t = useCallback((key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[locale] || entry.en || key;
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, locales: localeNames }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
