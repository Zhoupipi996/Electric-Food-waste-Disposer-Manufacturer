/* ============================================================
   SHIHAO INTELLIGENT – main.js
   ============================================================ */

// ── MOBILE NAV TOGGLE ──
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
  // Close on link click
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileNav.classList.remove('open'));
  });
}

// ── ACTIVE NAV LINK ──
(function() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// ── FAQ ACCORDION ──
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ── PRODUCT FILTER ──
const filterBtns = document.querySelectorAll('[data-filter]');
const productCards = document.querySelectorAll('[data-series]');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const val = btn.dataset.filter;
    productCards.forEach(card => {
      card.style.display = (val === 'all' || card.dataset.series === val) ? '' : 'none';
    });
  });
});

// ── CONTACT FORM ──
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    contactForm.style.display = 'none';
    const msg = document.getElementById('form-success');
    if (msg) msg.classList.add('show');
  });
}

// ── MULTILANG ──
const TRANSLATIONS = {
  en: {
    nav_home: 'Home', nav_about: 'About Us', nav_products: 'Products',
    nav_cases: 'Case Studies', nav_faq: 'FAQ', nav_contact: 'Contact',
    hero_badge: 'B2B Manufacturer · OEM / ODM · Est. 2020',
    hero_h1a: 'PRECISION-BUILT', hero_h1b: 'FOOD WASTE DISPOSERS',
    hero_sub: 'PSE · ETL · CE · CB · KC · ERP Certified',
    hero_p: 'From compact 2L countertop models to heavy-duty 5.5L family units — engineered for OEM/ODM partners across 6 global markets.',
    hero_btn1: 'Explore Product Lines →', hero_btn2: 'Request OEM Quote',
    cert_label: 'Certifications',
    footer_copy: '© 2026 Guangdong Shihao Intelligent Technology Co., Ltd. All rights reserved.',
    contact_title: 'Submit a B2B Inquiry',
    contact_name: 'Your Name', contact_company: 'Company Name',
    contact_email: 'Email Address', contact_msg: 'Requirements & Notes',
    contact_submit: 'Send Inquiry',
    success_title: 'Inquiry Received',
    success_msg: 'Our B2B team will respond within 1 business day.',
  },
  ja: {
    nav_home: 'ホーム', nav_about: '会社概要', nav_products: '製品一覧',
    nav_cases: 'ケーススタディ', nav_faq: 'よくある質問', nav_contact: 'お問い合わせ',
    hero_badge: 'B2Bメーカー · OEM / ODM · 2020年設立',
    hero_h1a: '精密製造', hero_h1b: '生ゴミ処理機',
    hero_sub: 'PSE · ETL · CE · CB · KC · ERP 認証取得',
    hero_p: 'コンパクトな2Lから大容量5.5Lまで、世界6市場のOEM/ODMパートナー向けに設計。',
    hero_btn1: '製品ラインを見る →', hero_btn2: 'OEM見積もりを依頼',
    cert_label: '認証取得',
    footer_copy: '© 2026 広東史豪智能科技有限公司 All rights reserved.',
    contact_title: 'B2Bお問い合わせ',
    contact_name: 'お名前', contact_company: '会社名',
    contact_email: 'メールアドレス', contact_msg: 'ご要望・備考',
    contact_submit: '送信する',
    success_title: 'お問い合わせを受け付けました',
    success_msg: '営業日1日以内にご返信いたします。',
  },
  es: {
    nav_home: 'Inicio', nav_about: 'Nosotros', nav_products: 'Productos',
    nav_cases: 'Casos de éxito', nav_faq: 'Preguntas frecuentes', nav_contact: 'Contacto',
    hero_badge: 'Fabricante B2B · OEM / ODM · Desde 2020',
    hero_h1a: 'PROCESADORES DE', hero_h1b: 'RESIDUOS ALIMENTARIOS',
    hero_sub: 'Certificaciones: PSE · ETL · CE · CB · KC · ERP',
    hero_p: 'Desde modelos compactos de 2L hasta unidades de alta capacidad de 5.5L para socios OEM/ODM en 6 mercados globales.',
    hero_btn1: 'Ver líneas de productos →', hero_btn2: 'Solicitar cotización OEM',
    cert_label: 'Certificaciones',
    footer_copy: '© 2026 Guangdong Shihao Intelligent Technology Co., Ltd. Todos los derechos reservados.',
    contact_title: 'Enviar consulta B2B',
    contact_name: 'Su nombre', contact_company: 'Empresa',
    contact_email: 'Correo electrónico', contact_msg: 'Requisitos y notas',
    contact_submit: 'Enviar consulta',
    success_title: 'Consulta recibida',
    success_msg: 'Nuestro equipo responderá en 1 día hábil.',
  },
  de: {
    nav_home: 'Startseite', nav_about: 'Über uns', nav_products: 'Produkte',
    nav_cases: 'Fallstudien', nav_faq: 'FAQ', nav_contact: 'Kontakt',
    hero_badge: 'B2B-Hersteller · OEM / ODM · Seit 2020',
    hero_h1a: 'PRÄZISIONSGEFERTIGTE', hero_h1b: 'LEBENSMITTELENTSORGUNGSGERÄTE',
    hero_sub: 'Zertifizierungen: PSE · ETL · CE · CB · KC · ERP',
    hero_p: 'Von kompakten 2-Liter-Geräten bis hin zu leistungsstarken 5,5-Liter-Einheiten – entwickelt für OEM/ODM-Partner in 6 globalen Märkten.',
    hero_btn1: 'Produktlinien erkunden →', hero_btn2: 'OEM-Angebot anfordern',
    cert_label: 'Zertifizierungen',
    footer_copy: '© 2026 Guangdong Shihao Intelligent Technology Co., Ltd. Alle Rechte vorbehalten.',
    contact_title: 'B2B-Anfrage senden',
    contact_name: 'Ihr Name', contact_company: 'Unternehmen',
    contact_email: 'E-Mail-Adresse', contact_msg: 'Anforderungen & Anmerkungen',
    contact_submit: 'Anfrage senden',
    success_title: 'Anfrage erhalten',
    success_msg: 'Unser B2B-Team antwortet innerhalb eines Werktages.',
  }
};

const langSelect = document.getElementById('lang-select');
function applyLang(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS['en'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = t[key];
      else el.textContent = t[key];
    }
  });
  document.documentElement.lang = lang;
  localStorage.setItem('sh_lang', lang);
}

if (langSelect) {
  const saved = localStorage.getItem('sh_lang') || 'en';
  langSelect.value = saved;
  applyLang(saved);
  langSelect.addEventListener('change', () => applyLang(langSelect.value));
}
