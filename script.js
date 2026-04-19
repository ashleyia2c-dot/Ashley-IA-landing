/* Ashley IA — Landing page JS
 * Responsibility: language switcher (EN/ES/FR) with localStorage persistence
 * and smooth auto-detection of browser language on first visit.
 */

const TRANSLATIONS = {
  en: {
    meta_title:        "Ashley — AI Desktop Companion",
    meta_description:  "An AI desktop companion with personality. She talks, sees your screen, and acts on your PC. One-time purchase, lifetime use.",

    hero_title:        "Meet Ashley",
    hero_subtitle:     "Your AI desktop companion with personality.",
    hero_tagline:      "She talks. She sees your screen. She acts on your PC.",
    hero_cta:          "Get Ashley — €19.99",
    hero_footnote:     "One-time purchase · Lifetime use · No subscriptions",

    video_title:       "See her in action",
    video_sub:         "A quick look at what Ashley can do.",
    video_placeholder: "Demo video coming soon",

    features_title:    "What she does",
    feat1_title:       "Real conversation",
    feat1_desc:        "Powered by Grok. She remembers you, your projects, your habits. Never starts from zero.",
    feat2_title:       "Voice in and out",
    feat2_desc:        "Dictate by microphone (offline Whisper) or let her speak with premium ElevenLabs voices.",
    feat3_title:       "She sees your screen",
    feat3_desc:        "Enable vision and Ashley sees what you see. She reacts, comments, and helps in context.",
    feat4_title:       "She acts on your PC",
    feat4_desc:        "Open apps, close tabs, control volume, type text, run shortcuts. Your hands-free assistant.",

    why_title:         "Why Ashley",
    why1_title:        "One-time purchase",
    why1_desc:         "€19.99, lifetime use. No subscriptions, no renewals, no BS.",
    why2_title:        "Bring your own key",
    why2_desc:         "Use your own Grok API key. You pay xAI directly — no middleman markup.",
    why3_title:        "Your data stays local",
    why3_desc:         "Chat, memories, facts — all stored on your PC. Never sent to third parties.",

    pricing_title:     "Get Ashley",
    pricing_product:   "Ashley — AI Desktop Companion",
    pricing_note:      "One-time · Lifetime · 3 PCs",
    price_feat1:       "✓ Unlimited conversations",
    price_feat2:       "✓ Voice input & output",
    price_feat3:       "✓ Screen vision",
    price_feat4:       "✓ System actions (apps, volume, etc.)",
    price_feat5:       "✓ Long-term memory of you",
    price_feat6:       "✓ Achievements & affection system",
    price_feat7:       "✓ Install on up to 3 PCs",
    price_feat8:       "✓ Free updates forever",
    pricing_cta:       "Buy Ashley — €19.99",
    pricing_secure:    "🔒 Secure checkout powered by Lemon Squeezy",

    faq_title:         "Frequently asked",
    faq1_q:            "What exactly is Ashley?",
    faq1_a:            "Ashley is a Windows desktop app with a character-driven AI inside. She has her own personality, remembers you long-term, and can control your PC (open apps, search the web, adjust volume, etc.). Think of her as a personal assistant with more character than Alexa and more capability than ChatGPT on your desktop.",
    faq2_q:            "Do I need a Grok account?",
    faq2_a:            "Yes. Ashley runs on xAI's Grok model. You need a free xAI account and an API key (paid per use — typically €1-3/month for regular use). This setup means you never pay us a subscription; you pay xAI only for what you use, and Ashley is yours forever after one payment.",
    faq3_q:            "Which operating systems are supported?",
    faq3_a:            "Windows 10 and 11 are fully supported. macOS and Linux builds are planned for after launch — if that's critical for you, drop us an email before buying.",
    faq4_q:            "Can I use her on multiple PCs?",
    faq4_a:            "Yes. Your license allows activation on up to 3 devices (desktop + laptop + 1 spare for reinstalls). You can deactivate a slot from one PC to free it for another.",
    faq5_q:            "Refund policy?",
    faq5_a:            "We refund you, no questions asked, under two conditions: (1) within 14 days of purchase, and (2) fewer than 40 messages sent. Ashley is experimental and not everyone will click with her — 40 messages is more than enough to decide if she's for you. Email us to request it.",
    faq6_q:            "Is my data private?",
    faq6_a:            "Your chat history, memories, and preferences stay on your PC in an encrypted folder. We never receive any of that. The only data sent out is your messages directly to xAI (Grok), under their privacy policy, using your own API key.",

    footer_tagline:    "Your AI desktop companion",
    footer_contact:    "Contact",
    footer_buy:        "Buy",
    footer_privacy:    "Privacy",
    footer_terms:      "Terms",
    footer_copy:       "© 2026 Ashley IA · Made with care by an indie dev",
  },

  es: {
    meta_title:        "Ashley — Compañera IA de escritorio",
    meta_description:  "Una compañera IA de escritorio con personalidad. Habla, ve tu pantalla y actúa en tu PC. Compra única, uso de por vida.",

    hero_title:        "Conoce a Ashley",
    hero_subtitle:     "Tu compañera de IA de escritorio con personalidad propia.",
    hero_tagline:      "Habla. Ve tu pantalla. Actúa en tu PC.",
    hero_cta:          "Consigue a Ashley — €19,99",
    hero_footnote:     "Compra única · De por vida · Sin suscripciones",

    video_title:       "Mírala en acción",
    video_sub:         "Un vistazo rápido a lo que Ashley puede hacer.",
    video_placeholder: "Vídeo demo próximamente",

    features_title:    "Qué hace",
    feat1_title:       "Conversación real",
    feat1_desc:        "Impulsada por Grok. Se acuerda de ti, de tus proyectos, de tus hábitos. Nunca empieza de cero.",
    feat2_title:       "Voz de ida y vuelta",
    feat2_desc:        "Dícta por micrófono (Whisper offline) o deja que ella hable con voces premium de ElevenLabs.",
    feat3_title:       "Ve tu pantalla",
    feat3_desc:        "Activa la visión y Ashley verá lo que tú ves. Reacciona, comenta y te ayuda en contexto.",
    feat4_title:       "Actúa en tu PC",
    feat4_desc:        "Abre apps, cierra pestañas, controla el volumen, escribe texto, ejecuta atajos. Tu asistente manos libres.",

    why_title:         "Por qué Ashley",
    why1_title:        "Compra única",
    why1_desc:         "€19,99, uso de por vida. Sin suscripciones, sin renovaciones, sin tonterías.",
    why2_title:        "Tu propia API",
    why2_desc:         "Usa tu propia API key de Grok. Le pagas a xAI directamente — sin sobrecoste de intermediario.",
    why3_title:        "Tus datos se quedan en tu PC",
    why3_desc:         "Chat, recuerdos, hechos — todo guardado en tu equipo. Nunca se envía a terceros.",

    pricing_title:     "Consigue a Ashley",
    pricing_product:   "Ashley — Compañera IA de escritorio",
    pricing_note:      "Única · De por vida · 3 PCs",
    price_feat1:       "✓ Conversaciones ilimitadas",
    price_feat2:       "✓ Voz de entrada y salida",
    price_feat3:       "✓ Visión de pantalla",
    price_feat4:       "✓ Acciones del sistema (apps, volumen, etc.)",
    price_feat5:       "✓ Memoria a largo plazo sobre ti",
    price_feat6:       "✓ Logros y sistema de afecto",
    price_feat7:       "✓ Instálala en hasta 3 PCs",
    price_feat8:       "✓ Actualizaciones gratis para siempre",
    pricing_cta:       "Comprar Ashley — €19,99",
    pricing_secure:    "🔒 Pago seguro con Lemon Squeezy",

    faq_title:         "Preguntas frecuentes",
    faq1_q:            "¿Qué es Ashley exactamente?",
    faq1_a:            "Ashley es una app de escritorio para Windows con una IA con personaje dentro. Tiene su propia personalidad, te recuerda a largo plazo y puede controlar tu PC (abrir apps, buscar en la web, ajustar el volumen, etc.). Piénsala como una asistente personal con más carácter que Alexa y más capacidad que ChatGPT en tu escritorio.",
    faq2_q:            "¿Necesito cuenta de Grok?",
    faq2_a:            "Sí. Ashley funciona con el modelo Grok de xAI. Necesitas una cuenta gratuita de xAI y una API key (de pago por uso — típicamente €1-3/mes para uso normal). Así nunca nos pagas una suscripción; solo le pagas a xAI por lo que uses, y Ashley es tuya para siempre tras un único pago.",
    faq3_q:            "¿Qué sistemas operativos se soportan?",
    faq3_a:            "Windows 10 y 11 están totalmente soportados. Las versiones para macOS y Linux están planeadas para después del lanzamiento — si eso te bloquea, escríbenos antes de comprar.",
    faq4_q:            "¿Puedo usarla en varios PCs?",
    faq4_a:            "Sí. Tu licencia permite activación en hasta 3 equipos (sobremesa + portátil + 1 extra para reinstalaciones). Puedes desactivar una ranura desde un PC para liberarla en otro.",
    faq5_q:            "¿Política de devoluciones?",
    faq5_a:            "Te devolvemos el dinero, sin preguntas, bajo dos condiciones: (1) dentro de los 14 días tras la compra, y (2) con menos de 40 mensajes enviados. Ashley es un producto experimental y no todo el mundo conecta con ella — 40 mensajes son más que suficientes para saber si te gusta. Escríbenos para solicitarlo.",
    faq6_q:            "¿Mis datos están protegidos?",
    faq6_a:            "Tu historial de chat, recuerdos y preferencias se quedan en tu PC en una carpeta cifrada. Nosotros no recibimos nada de eso. Lo único que sale hacia fuera son tus mensajes directamente a xAI (Grok), bajo su política de privacidad, usando tu propia API key.",

    footer_tagline:    "Tu compañera IA de escritorio",
    footer_contact:    "Contacto",
    footer_buy:        "Comprar",
    footer_privacy:    "Privacidad",
    footer_terms:      "Términos",
    footer_copy:       "© 2026 Ashley IA · Hecho con cariño por un dev indie",
  },

  fr: {
    meta_title:        "Ashley — Compagne IA de bureau",
    meta_description:  "Une compagne IA de bureau avec de la personnalité. Elle parle, voit votre écran et agit sur votre PC. Achat unique, utilisation à vie.",

    hero_title:        "Rencontrez Ashley",
    hero_subtitle:     "Votre compagne IA de bureau avec de la personnalité.",
    hero_tagline:      "Elle parle. Elle voit votre écran. Elle agit sur votre PC.",
    hero_cta:          "Obtenir Ashley — 19,99 €",
    hero_footnote:     "Achat unique · À vie · Sans abonnement",

    video_title:       "Voyez-la en action",
    video_sub:         "Un aperçu rapide de ce qu'Ashley peut faire.",
    video_placeholder: "Vidéo de démo bientôt disponible",

    features_title:    "Ce qu'elle fait",
    feat1_title:       "Vraie conversation",
    feat1_desc:        "Propulsée par Grok. Elle se souvient de vous, de vos projets, de vos habitudes. Jamais de zéro.",
    feat2_title:       "Voix entrante et sortante",
    feat2_desc:        "Dictez au micro (Whisper hors ligne) ou laissez-la parler avec les voix premium ElevenLabs.",
    feat3_title:       "Elle voit votre écran",
    feat3_desc:        "Activez la vision et Ashley verra ce que vous voyez. Elle réagit, commente et vous aide en contexte.",
    feat4_title:       "Elle agit sur votre PC",
    feat4_desc:        "Ouvrir des apps, fermer des onglets, contrôler le volume, taper du texte, exécuter des raccourcis. Votre assistante mains libres.",

    why_title:         "Pourquoi Ashley",
    why1_title:        "Achat unique",
    why1_desc:         "19,99 €, utilisation à vie. Pas d'abonnement, pas de renouvellement, pas de surprise.",
    why2_title:        "Votre propre clé API",
    why2_desc:         "Utilisez votre propre clé API Grok. Vous payez xAI directement — pas d'intermédiaire.",
    why3_title:        "Vos données restent chez vous",
    why3_desc:         "Chat, souvenirs, faits — tout est stocké sur votre PC. Jamais envoyé à des tiers.",

    pricing_title:     "Obtenir Ashley",
    pricing_product:   "Ashley — Compagne IA de bureau",
    pricing_note:      "Unique · À vie · 3 PCs",
    price_feat1:       "✓ Conversations illimitées",
    price_feat2:       "✓ Entrée et sortie vocales",
    price_feat3:       "✓ Vision de l'écran",
    price_feat4:       "✓ Actions système (apps, volume, etc.)",
    price_feat5:       "✓ Mémoire longue durée de vous",
    price_feat6:       "✓ Succès et système d'affection",
    price_feat7:       "✓ Installable sur jusqu'à 3 PCs",
    price_feat8:       "✓ Mises à jour gratuites à vie",
    pricing_cta:       "Acheter Ashley — 19,99 €",
    pricing_secure:    "🔒 Paiement sécurisé via Lemon Squeezy",

    faq_title:         "Questions fréquentes",
    faq1_q:            "Qu'est-ce qu'Ashley exactement ?",
    faq1_a:            "Ashley est une application de bureau Windows avec une IA à personnalité. Elle a son propre caractère, se souvient de vous sur le long terme, et peut contrôler votre PC (ouvrir des apps, chercher sur le web, ajuster le volume, etc.). Voyez-la comme une assistante personnelle avec plus de caractère qu'Alexa et plus de capacités que ChatGPT sur votre bureau.",
    faq2_q:            "Ai-je besoin d'un compte Grok ?",
    faq2_a:            "Oui. Ashley fonctionne avec le modèle Grok de xAI. Il vous faut un compte xAI gratuit et une clé API (paiement à l'usage — généralement 1-3 €/mois en usage régulier). Ainsi vous ne nous payez aucun abonnement ; vous payez xAI uniquement pour ce que vous utilisez, et Ashley est à vous à vie après un seul paiement.",
    faq3_q:            "Quels systèmes d'exploitation sont supportés ?",
    faq3_a:            "Windows 10 et 11 sont entièrement supportés. Les versions macOS et Linux sont prévues après le lancement — si c'est critique pour vous, contactez-nous avant d'acheter.",
    faq4_q:            "Puis-je l'utiliser sur plusieurs PCs ?",
    faq4_a:            "Oui. Votre licence permet l'activation sur jusqu'à 3 appareils (bureau + portable + 1 réserve pour les réinstallations). Vous pouvez désactiver un emplacement d'un PC pour le libérer sur un autre.",
    faq5_q:            "Politique de remboursement ?",
    faq5_a:            "On vous rembourse, sans question, sous deux conditions : (1) dans les 14 jours suivant l'achat, et (2) avec moins de 40 messages envoyés. Ashley est expérimentale et elle ne plaira pas à tout le monde — 40 messages, c'est largement assez pour savoir si elle vous convient. Contactez-nous pour le demander.",
    faq6_q:            "Mes données sont-elles privées ?",
    faq6_a:            "Votre historique de chat, vos souvenirs et préférences restent sur votre PC dans un dossier chiffré. Nous n'y accédons jamais. La seule donnée qui sort, ce sont vos messages envoyés directement à xAI (Grok), sous leur politique de confidentialité, avec votre propre clé API.",

    footer_tagline:    "Votre compagne IA de bureau",
    footer_contact:    "Contact",
    footer_buy:        "Acheter",
    footer_privacy:    "Confidentialité",
    footer_terms:      "Conditions",
    footer_copy:       "© 2026 Ashley IA · Fait avec soin par un dev indépendant",
  },
};

const SUPPORTED_LANGS = ["en", "es", "fr"];
const STORAGE_KEY = "ashley_landing_lang";
const DEFAULT_LANG = "en";

function detectInitialLang() {
  // 1. Preferencia explícita del user (localStorage)
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored;

  // 2. Idioma del navegador si coincide con alguno soportado
  const browser = (navigator.language || navigator.userLanguage || "").toLowerCase();
  for (const code of SUPPORTED_LANGS) {
    if (browser.startsWith(code)) return code;
  }

  return DEFAULT_LANG;
}

function applyLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;
  const dict = TRANSLATIONS[lang];

  // Actualiza todos los nodos con data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (value === undefined) return;
    // <meta> usa content; el resto usa textContent
    if (el.tagName === "META") {
      el.setAttribute("content", value);
    } else {
      el.textContent = value;
    }
  });

  // <html lang="...">
  document.documentElement.setAttribute("lang", lang);

  // Botones activos
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  localStorage.setItem(STORAGE_KEY, lang);
}

// Click handlers para los botones de idioma
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLang(btn.getAttribute("data-lang"));
  });
});

// Arranque
applyLang(detectInitialLang());
