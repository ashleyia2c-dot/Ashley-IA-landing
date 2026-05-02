/* Ashley IA — Landing page JS (v0.16.14, content actualizado al estado real)
 * Responsibility: language switcher (EN/ES/FR) with localStorage persistence
 * and smooth auto-detection of browser language on first visit.
 *
 * v0.16.14 — Reescritura del copy:
 *  · Hero ahora destaca el WAKE WORD como hook principal
 *  · 6 features (antes 4): añadidos wake word + multi-provider
 *  · "Why Ashley" actualizado: choose-your-AI (cloud OR Ollama local)
 *  · FAQ reescrita con multi-provider, wake word, multi-idioma
 *  · price_feat lista ampliada con wake word + 3 providers + multi-idioma
 */

const TRANSLATIONS = {
  en: {
    meta_title:        "Ashley — AI Desktop Companion",
    meta_description:  "AI desktop companion with personality. Wake her by voice, she remembers everything about you, sees your screen, and acts on your PC. One-time purchase, lifetime use.",

    hero_title:        "Meet Ashley",
    hero_subtitle:     "Your AI desktop companion with personality.",
    hero_tagline:      "Say her name. She wakes, listens, remembers, and acts on your PC.",
    hero_cta:          "Get Ashley — €19.99",
    hero_footnote:     "One-time purchase · Lifetime use · No subscriptions",

    video_title:       "See her in action",
    video_sub:         "A quick look at what Ashley can do.",
    video_placeholder: "Demo video coming soon",

    features_title:    "What she does",
    feat1_title:       "Wake by voice",
    feat1_desc:        "Say \"Ashley\" and she wakes up — hands-free, no clicking. Local detection, no cloud listening.",
    feat2_title:       "Real long-term memory",
    feat2_desc:        "She remembers your name, your projects, your taste, your past conversations. She keeps a private diary about you. Never starts from zero.",
    feat3_title:       "Voice in and out",
    feat3_desc:        "Talk to her by mic (offline Whisper, your audio never leaves your PC). She speaks back with ElevenLabs, Kokoro, VoiceVox or your free Windows voice.",
    feat4_title:       "She sees your screen",
    feat4_desc:        "Enable vision and Ashley sees what you see. She reacts, comments, and helps you in context — code, docs, games, whatever.",
    feat5_title:       "She acts on your PC",
    feat5_desc:        "Open apps, close tabs, control volume, type for you, take screenshots, search the web, set reminders. Your hands-free assistant.",
    feat6_title:       "Choose your AI",
    feat6_desc:        "Use xAI (Grok), OpenRouter or Ollama — switch any time in Settings. Cloud is fast and cheap; Ollama is 100% local and free.",

    why_title:         "Why Ashley",
    why1_title:        "One-time purchase",
    why1_desc:         "€19.99, lifetime use. No subscriptions, no renewals, no monthly bill from us. Ever.",
    why2_title:        "Cloud or 100% local",
    why2_desc:         "Pick xAI / OpenRouter (you bring your own key, ~€1-3/month) or Ollama (free, fully offline, no key, no key needed at all).",
    why3_title:        "Privacy by default",
    why3_desc:         "Chat history, memories, diary, preferences — encrypted in your user folder. We don't have servers; we literally can't see your data.",

    pricing_title:     "Get Ashley",
    pricing_product:   "Ashley — AI Desktop Companion",
    pricing_note:      "One-time · Lifetime · 3 PCs",
    price_feat1:       "✓ Wake word — say \"Ashley\" and she activates",
    price_feat2:       "✓ Long-term memory of you (facts, diary, taste)",
    price_feat3:       "✓ Voice in (Whisper offline) & out (ElevenLabs / Kokoro / VoiceVox / Windows)",
    price_feat4:       "✓ Screen vision (when you allow it)",
    price_feat5:       "✓ System actions (apps, tabs, volume, keyboard, search)",
    price_feat6:       "✓ 3 AI providers: xAI, OpenRouter, Ollama (free, local)",
    price_feat7:       "✓ Achievements + affection system + 7 moods + narrative gestures",
    price_feat8:       "✓ Multi-language: English, Spanish, French",
    pricing_cta:       "Buy Ashley — €19.99",
    pricing_secure:    "🔒 Secure checkout powered by Lemon Squeezy",

    faq_title:         "Frequently asked",
    faq1_q:            "What exactly is Ashley?",
    faq1_a:            "A Windows desktop app with a character-driven AI inside. She has her own personality (a tsundere who'll tease you affectionately), wakes up when you say her name, remembers you long-term, and can control your PC (open apps, search the web, set reminders, take screenshots, type for you, etc.). More character than Alexa, more capability than ChatGPT, fully on your desktop.",
    faq2_q:            "Which AI model does she use?",
    faq2_a:            "Your choice. Ashley supports three providers: (1) xAI (Grok) — fast, smart, paid per-use with your own key (~€1-3/month for normal use); (2) OpenRouter — access to dozens of models with one key; (3) Ollama — 100% local, free, runs on your PC, no API key needed. You switch between them anytime in Settings.",
    faq3_q:            "Does she really wake up by voice?",
    faq3_a:            "Yes. Wake word detection runs locally on your PC using openWakeWord — no cloud, no microphone constantly streaming somewhere. Just say \"Ashley\" and she activates. You can disable it any time.",
    faq4_q:            "Which operating systems are supported?",
    faq4_a:            "Windows 10 and 11 are fully supported. macOS and Linux builds are planned for after launch — if that's critical for you, drop us an email before buying.",
    faq5_q:            "Can I use her on multiple PCs?",
    faq5_a:            "Yes. Your license allows activation on up to 3 devices (desktop + laptop + 1 spare for reinstalls). Deactivate a slot from one PC to free it for another any time.",
    faq6_q:            "Refund policy?",
    faq6_a:            "Within 14 days of purchase and fewer than 40 messages sent — full refund, no questions asked. 40 messages is more than enough to know if Ashley clicks with you. Email us to request it.",
    faq7_q:            "Is my data private?",
    faq7_a:            "Yes. Chat history, memories, diary and preferences live encrypted in your user folder — we don't have any servers and literally cannot see your data. If you use a cloud provider (xAI/OpenRouter), your messages go directly to them under their privacy policy. If you use Ollama, NOTHING leaves your PC — Ashley is fully offline.",

    footer_tagline:    "Your AI desktop companion",
    footer_contact:    "Contact",
    footer_buy:        "Buy",
    footer_privacy:    "Privacy",
    footer_terms:      "Terms",
    footer_copy:       "© 2026 Ashley IA · Made with care by an indie dev",
  },

  es: {
    meta_title:        "Ashley — Compañera IA de escritorio",
    meta_description:  "Compañera IA de escritorio con personalidad. La llamas por voz, te recuerda todo, ve tu pantalla y actúa en tu PC. Compra única, uso de por vida.",

    hero_title:        "Conoce a Ashley",
    hero_subtitle:     "Tu compañera de IA de escritorio con personalidad propia.",
    hero_tagline:      "Di su nombre. Se despierta, te escucha, te recuerda y actúa en tu PC.",
    hero_cta:          "Consigue a Ashley — €19,99",
    hero_footnote:     "Compra única · De por vida · Sin suscripciones",

    video_title:       "Mírala en acción",
    video_sub:         "Un vistazo rápido a lo que Ashley puede hacer.",
    video_placeholder: "Vídeo demo próximamente",

    features_title:    "Qué hace",
    feat1_title:       "Se despierta por voz",
    feat1_desc:        "Di \"Ashley\" y se activa — sin tocar nada. Detección 100% local, no envía tu audio a ningún servidor.",
    feat2_title:       "Memoria real a largo plazo",
    feat2_desc:        "Recuerda tu nombre, tus proyectos, tus gustos, vuestras conversaciones. Lleva un diario privado sobre ti. Nunca empieza de cero.",
    feat3_title:       "Voz de ida y vuelta",
    feat3_desc:        "Háblale por micro (Whisper offline, tu audio nunca sale de tu PC). Te responde con ElevenLabs, Kokoro, VoiceVox o la voz gratuita de Windows.",
    feat4_title:       "Ve tu pantalla",
    feat4_desc:        "Activa la visión y Ashley ve lo que tú ves. Reacciona, comenta y te ayuda en contexto — código, docs, juegos, lo que sea.",
    feat5_title:       "Actúa en tu PC",
    feat5_desc:        "Abre apps, cierra pestañas, controla el volumen, escribe por ti, captura pantalla, busca en internet, te pone recordatorios. Tu asistente manos libres.",
    feat6_title:       "Elige tu IA",
    feat6_desc:        "Usa xAI (Grok), OpenRouter u Ollama — cambias cuando quieras desde Ajustes. Cloud es rápido y barato; Ollama es 100% local y gratis.",

    why_title:         "Por qué Ashley",
    why1_title:        "Compra única",
    why1_desc:         "€19,99, uso de por vida. Sin suscripciones, sin renovaciones, sin que te pasemos cuota mensual. Nunca.",
    why2_title:        "Cloud o 100% local",
    why2_desc:         "Elige xAI / OpenRouter (con tu propia clave, típicamente €1-3/mes) o Ollama (gratis, totalmente offline, sin clave, sin que necesites una).",
    why3_title:        "Privacidad por defecto",
    why3_desc:         "Historial, recuerdos, diario, preferencias — cifrados en tu carpeta de usuario. No tenemos servidores; literalmente no podemos ver tus datos.",

    pricing_title:     "Consigue a Ashley",
    pricing_product:   "Ashley — Compañera IA de escritorio",
    pricing_note:      "Única · De por vida · 3 PCs",
    price_feat1:       "✓ Wake word — di \"Ashley\" y se activa",
    price_feat2:       "✓ Memoria a largo plazo sobre ti (hechos, diario, gustos)",
    price_feat3:       "✓ Voz: entrada (Whisper offline) y salida (ElevenLabs / Kokoro / VoiceVox / Windows)",
    price_feat4:       "✓ Visión de pantalla (cuando lo autorizas)",
    price_feat5:       "✓ Acciones del sistema (apps, pestañas, volumen, teclado, búsqueda)",
    price_feat6:       "✓ 3 proveedores de IA: xAI, OpenRouter, Ollama (gratis, local)",
    price_feat7:       "✓ Logros + sistema de afecto + 7 moods + narrativa con gestos",
    price_feat8:       "✓ Multi-idioma: español, inglés, francés",
    pricing_cta:       "Comprar Ashley — €19,99",
    pricing_secure:    "🔒 Pago seguro con Lemon Squeezy",

    faq_title:         "Preguntas frecuentes",
    faq1_q:            "¿Qué es Ashley exactamente?",
    faq1_a:            "Una app de escritorio para Windows con una IA de personaje dentro. Tiene su propia personalidad (una tsundere que te pica con cariño), se despierta cuando dices su nombre, te recuerda a largo plazo y puede controlar tu PC (abrir apps, buscar en la web, ponerte recordatorios, capturar pantalla, escribir por ti, etc.). Más carácter que Alexa, más capacidad que ChatGPT, todo en tu escritorio.",
    faq2_q:            "¿Qué modelo de IA usa?",
    faq2_a:            "El que tú elijas. Ashley soporta 3 proveedores: (1) xAI (Grok) — rápido, listo, pago por uso con tu propia clave (~€1-3/mes para uso normal); (2) OpenRouter — acceso a decenas de modelos con una sola clave; (3) Ollama — 100% local, gratis, corre en tu PC, sin clave necesaria. Cambias entre ellos cuando quieras desde Ajustes.",
    faq3_q:            "¿De verdad se despierta por voz?",
    faq3_a:            "Sí. La detección de la wake word corre localmente en tu PC usando openWakeWord — sin cloud, sin micro streamando a ningún sitio. Solo di \"Ashley\" y se activa. Puedes desactivarlo cuando quieras.",
    faq4_q:            "¿Qué sistemas operativos están soportados?",
    faq4_a:            "Windows 10 y 11 totalmente soportados. Las versiones macOS y Linux están planeadas para después del lanzamiento — si te bloquea, escríbenos antes de comprar.",
    faq5_q:            "¿Puedo usarla en varios PCs?",
    faq5_a:            "Sí. Tu licencia permite activación en hasta 3 equipos (sobremesa + portátil + 1 extra para reinstalaciones). Puedes desactivar una ranura de un PC para liberarla en otro cuando quieras.",
    faq6_q:            "¿Política de devoluciones?",
    faq6_a:            "Dentro de los 14 días tras la compra y con menos de 40 mensajes enviados — devolución completa, sin preguntas. 40 mensajes son más que suficientes para saber si Ashley conecta contigo. Escríbenos para solicitarlo.",
    faq7_q:            "¿Mis datos están protegidos?",
    faq7_a:            "Sí. Historial, recuerdos, diario y preferencias viven cifrados en tu carpeta de usuario — no tenemos servidores y literalmente no podemos ver tus datos. Si usas un proveedor cloud (xAI/OpenRouter), tus mensajes van directamente a ellos bajo su política de privacidad. Si usas Ollama, NADA sale de tu PC — Ashley funciona totalmente offline.",

    footer_tagline:    "Tu compañera IA de escritorio",
    footer_contact:    "Contacto",
    footer_buy:        "Comprar",
    footer_privacy:    "Privacidad",
    footer_terms:      "Términos",
    footer_copy:       "© 2026 Ashley IA · Hecho con cariño por un dev indie",
  },

  fr: {
    meta_title:        "Ashley — Compagne IA de bureau",
    meta_description:  "Compagne IA de bureau avec de la personnalité. Réveille-la par la voix, elle se souvient de tout, voit ton écran et agit sur ton PC. Achat unique, utilisation à vie.",

    hero_title:        "Rencontrez Ashley",
    hero_subtitle:     "Votre compagne IA de bureau avec de la personnalité.",
    hero_tagline:      "Dis son nom. Elle se réveille, t'écoute, se souvient de toi et agit sur ton PC.",
    hero_cta:          "Obtenir Ashley — 19,99 €",
    hero_footnote:     "Achat unique · À vie · Sans abonnement",

    video_title:       "Voyez-la en action",
    video_sub:         "Un aperçu rapide de ce qu'Ashley peut faire.",
    video_placeholder: "Vidéo de démo bientôt disponible",

    features_title:    "Ce qu'elle fait",
    feat1_title:       "Se réveille par la voix",
    feat1_desc:        "Dis \"Ashley\" et elle s'active — sans toucher à rien. Détection 100% locale, ton audio ne quitte jamais ton PC.",
    feat2_title:       "Vraie mémoire long terme",
    feat2_desc:        "Elle se souvient de ton nom, tes projets, tes goûts, vos conversations. Elle tient un journal privé sur toi. Jamais de zéro.",
    feat3_title:       "Voix entrante et sortante",
    feat3_desc:        "Parle-lui au micro (Whisper hors-ligne, ton audio reste sur ton PC). Elle te répond avec ElevenLabs, Kokoro, VoiceVox ou la voix Windows gratuite.",
    feat4_title:       "Voit ton écran",
    feat4_desc:        "Active la vision et Ashley voit ce que tu vois. Elle réagit, commente et t'aide en contexte — code, docs, jeux, n'importe quoi.",
    feat5_title:       "Agit sur ton PC",
    feat5_desc:        "Ouvre des apps, ferme des onglets, contrôle le volume, tape pour toi, capture l'écran, cherche sur le web, te pose des rappels. Ton assistante mains libres.",
    feat6_title:       "Choisis ton IA",
    feat6_desc:        "Utilise xAI (Grok), OpenRouter ou Ollama — switche quand tu veux dans les Réglages. Cloud rapide et abordable ; Ollama 100% local et gratuit.",

    why_title:         "Pourquoi Ashley",
    why1_title:        "Achat unique",
    why1_desc:         "19,99 €, utilisation à vie. Pas d'abonnement, pas de renouvellement, pas de facture mensuelle. Jamais.",
    why2_title:        "Cloud ou 100% local",
    why2_desc:         "Choisis xAI / OpenRouter (avec ta propre clé, typiquement 1-3 €/mois) ou Ollama (gratuit, totalement hors-ligne, sans clé, pas même besoin d'en avoir une).",
    why3_title:        "Privacy par défaut",
    why3_desc:         "Historique, souvenirs, journal, préférences — chiffrés dans ton dossier utilisateur. On n'a pas de serveurs ; on ne peut littéralement pas voir tes données.",

    pricing_title:     "Obtenir Ashley",
    pricing_product:   "Ashley — Compagne IA de bureau",
    pricing_note:      "Unique · À vie · 3 PCs",
    price_feat1:       "✓ Wake word — dis \"Ashley\" et elle s'active",
    price_feat2:       "✓ Mémoire long terme de toi (faits, journal, goûts)",
    price_feat3:       "✓ Voix : entrée (Whisper hors-ligne) et sortie (ElevenLabs / Kokoro / VoiceVox / Windows)",
    price_feat4:       "✓ Vision de l'écran (quand tu l'autorises)",
    price_feat5:       "✓ Actions système (apps, onglets, volume, clavier, recherche)",
    price_feat6:       "✓ 3 fournisseurs d'IA : xAI, OpenRouter, Ollama (gratuit, local)",
    price_feat7:       "✓ Succès + système d'affection + 7 humeurs + narration avec gestes",
    price_feat8:       "✓ Multilingue : français, anglais, espagnol",
    pricing_cta:       "Acheter Ashley — 19,99 €",
    pricing_secure:    "🔒 Paiement sécurisé via Lemon Squeezy",

    faq_title:         "Questions fréquentes",
    faq1_q:            "Qu'est-ce qu'Ashley exactement ?",
    faq1_a:            "Une application de bureau Windows avec une IA à personnalité. Elle a son propre caractère (une tsundere qui te taquine avec affection), se réveille quand tu dis son nom, se souvient de toi sur le long terme et peut contrôler ton PC (ouvrir des apps, chercher sur le web, te poser des rappels, capturer l'écran, taper pour toi, etc.). Plus de caractère qu'Alexa, plus de capacités que ChatGPT, le tout sur ton bureau.",
    faq2_q:            "Quel modèle d'IA utilise-t-elle ?",
    faq2_a:            "À toi de choisir. Ashley supporte 3 fournisseurs : (1) xAI (Grok) — rapide, intelligent, paiement à l'usage avec ta propre clé (~1-3 €/mois en usage normal) ; (2) OpenRouter — accès à des dizaines de modèles avec une seule clé ; (3) Ollama — 100% local, gratuit, tourne sur ton PC, sans clé. Tu switches entre eux quand tu veux dans les Réglages.",
    faq3_q:            "Elle se réveille vraiment par la voix ?",
    faq3_a:            "Oui. La détection du mot d'activation tourne localement sur ton PC avec openWakeWord — pas de cloud, pas de micro qui streame quelque part. Dis juste \"Ashley\" et elle s'active. Tu peux le désactiver quand tu veux.",
    faq4_q:            "Quels systèmes d'exploitation sont supportés ?",
    faq4_a:            "Windows 10 et 11 entièrement supportés. Les versions macOS et Linux sont prévues après le lancement — si c'est critique pour toi, contacte-nous avant d'acheter.",
    faq5_q:            "Puis-je l'utiliser sur plusieurs PCs ?",
    faq5_a:            "Oui. Ta licence permet l'activation sur jusqu'à 3 appareils (bureau + portable + 1 réserve pour les réinstallations). Désactive un emplacement d'un PC pour le libérer ailleurs quand tu veux.",
    faq6_q:            "Politique de remboursement ?",
    faq6_a:            "Dans les 14 jours après l'achat et avec moins de 40 messages envoyés — remboursement complet, sans question. 40 messages, c'est largement assez pour savoir si Ashley te plaît. Contacte-nous pour demander.",
    faq7_q:            "Mes données sont-elles privées ?",
    faq7_a:            "Oui. Historique, souvenirs, journal et préférences vivent chiffrés dans ton dossier utilisateur — on n'a pas de serveurs et on ne peut littéralement pas voir tes données. Si tu utilises un fournisseur cloud (xAI/OpenRouter), tes messages vont directement chez eux sous leur politique de confidentialité. Si tu utilises Ollama, RIEN ne quitte ton PC — Ashley fonctionne 100% hors-ligne.",

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
  // 1. Preferencia explícita del user (localStorage) — única fuente de cambio
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored;

  // 2. Default fijo a inglés.
  // v0.16.14 — quitada la auto-detección por idioma del navegador. Antes,
  // si el browser estaba en español/francés, la landing arrancaba en ese
  // idioma. Eso confundía a usuarios bilingües que esperan que un producto
  // anglosajón se presente primero en inglés. Ahora el comportamiento es
  // explícito: arranca SIEMPRE en EN, y el user puede cambiar manualmente
  // (su elección sí se persiste en localStorage para visitas futuras).
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
