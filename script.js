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

  // v0.19.14 — landing en 7 idiomas (paridad con la app desktop).
  // Cada idioma adapta el tono al tono que Ashley tiene en ese idioma:
  //   ja: 「ご主人」 + 〜です/〜ます (manual register, no de chat tsundere)
  //   de: "Chef" + du/dich, claro y técnico-pero-cálido
  //   ru: «шеф» + ты, directo y cálido
  //   ko: 「오빠」 + 반말 ~야/어/지 con K-drama leading-girl energy

  ja: {
    meta_title:        "Ashley — AIデスクトップコンパニオン",
    meta_description:  "個性のあるAIデスクトップコンパニオン。声で起こすと反応し、あなたのことを長期的に覚え、画面を見て、PCで操作する。買い切り、永久使用。",

    hero_title:        "Ashleyに会う",
    hero_subtitle:     "個性のあるあなたのAIデスクトップコンパニオン。",
    hero_tagline:      "名前を呼ぶだけで、起きて、聞いて、覚えて、PCで動く。",
    hero_cta:          "Ashleyを購入 — €19.99",
    hero_footnote:     "買い切り · 永久使用 · サブスクなし",

    video_title:       "動いているところを見る",
    video_sub:         "Ashleyにできることのクイックビュー。",
    video_placeholder: "デモ動画は近日公開",

    features_title:    "できること",
    feat1_title:       "声で起こす",
    feat1_desc:        "「Ashley」と言えば起動 — ハンズフリー、クリック不要。ローカル検出、クラウドに音声を送らない。",
    feat2_title:       "本物の長期記憶",
    feat2_desc:        "あなたの名前、プロジェクト、好み、過去の会話を覚えている。あなたについての日記をつけている。ゼロから始まることはない。",
    feat3_title:       "音声入力と出力",
    feat3_desc:        "マイクで話しかける(オフラインWhisper、音声はPCから出ない)。ElevenLabs、Kokoro、VoiceVox、または無料のWindows音声で返事する。",
    feat4_title:       "画面を見る",
    feat4_desc:        "ビジョンを有効にすると、Ashleyはあなたが見ているものを見る。コンテキストの中で反応し、コメントし、助けてくれる — コード、ドキュメント、ゲーム、何でも。",
    feat5_title:       "PCで操作する",
    feat5_desc:        "アプリを開く、タブを閉じる、音量を制御する、入力する、スクリーンショットを撮る、ウェブを検索する、リマインダーを設定する。ハンズフリーアシスタント。",
    feat6_title:       "AIを選ぶ",
    feat6_desc:        "xAI (Grok)、OpenRouter、Ollamaを使用 — 設定でいつでも切り替え可能。クラウドは速くて安い、Ollamaは100%ローカルで無料。",

    why_title:         "なぜAshley",
    why1_title:        "買い切り",
    why1_desc:         "€19.99で永久使用。サブスクリプションなし、更新なし、月額請求なし。永遠に。",
    why2_title:        "クラウドまたは100%ローカル",
    why2_desc:         "xAI / OpenRouterを選ぶ(自分のキー、月€1-3程度)、またはOllama(無料、完全オフライン、キー不要)。",
    why3_title:        "デフォルトでプライバシー",
    why3_desc:         "チャット履歴、思い出、日記、設定 — ユーザーフォルダで暗号化。サーバーがないので、文字通りあなたのデータを見ることができない。",

    pricing_title:     "Ashleyを購入",
    pricing_product:   "Ashley — AIデスクトップコンパニオン",
    pricing_note:      "買い切り · 永久 · 3 PC",
    price_feat1:       "✓ ウェイクワード — 「Ashley」と言うと起動",
    price_feat2:       "✓ あなたの長期記憶(事実、日記、好み)",
    price_feat3:       "✓ 音声: 入力(Whisperオフライン)と出力(ElevenLabs / Kokoro / VoiceVox / Windows)",
    price_feat4:       "✓ 画面ビジョン(許可した時)",
    price_feat5:       "✓ システム操作(アプリ、タブ、音量、キーボード、検索)",
    price_feat6:       "✓ 3つのAIプロバイダー: xAI、OpenRouter、Ollama (無料、ローカル)",
    price_feat7:       "✓ 実績 + 好感度システム + 7つのムード + ジェスチャー演出",
    price_feat8:       "✓ 多言語: 7言語 (英語、スペイン語、フランス語、日本語、ドイツ語、ロシア語、韓国語)",
    pricing_cta:       "Ashleyを買う — €19.99",
    pricing_secure:    "🔒 Lemon Squeezyによるセキュアな決済",

    faq_title:         "よくある質問",
    faq1_q:            "Ashleyとは正確には何ですか?",
    faq1_a:            "AIキャラクターを内蔵したWindowsデスクトップアプリです。独自の個性(ツンデレで愛情を込めて茶化す)を持ち、名前を呼ぶと起動し、あなたを長期的に覚え、PCを操作できます(アプリを開く、ウェブを検索する、リマインダーを設定する、スクリーンショットを撮る、入力する、など)。Alexaよりキャラクター性があり、ChatGPTより機能性が高い、デスクトップ完結。",
    faq2_q:            "どのAIモデルを使いますか?",
    faq2_a:            "あなたが選びます。Ashleyは3つのプロバイダーをサポート: (1) xAI (Grok) — 高速、賢い、自分のキーで従量課金(通常使用で月€1-3); (2) OpenRouter — 1つのキーで数十のモデルにアクセス; (3) Ollama — 100%ローカル、無料、PCで動作、APIキー不要。設定でいつでも切り替え。",
    faq3_q:            "本当に声で起きますか?",
    faq3_a:            "はい。ウェイクワード検出はopenWakeWordを使ってPC上でローカルに動作 — クラウドなし、マイクが常にどこかにストリーミングすることもなし。「Ashley」と言うだけで起動。いつでも無効化可能。",
    faq4_q:            "どのOSがサポートされていますか?",
    faq4_a:            "Windows 10と11が完全サポート。macOSとLinuxビルドはローンチ後に予定 — 必須なら購入前にメールください。",
    faq5_q:            "複数のPCで使えますか?",
    faq5_a:            "はい。ライセンスで最大3デバイス(デスクトップ + ノートPC + 再インストール用1台)で活性化できます。1つのPCのスロットを解除して別のPCに移すことができます。",
    faq6_q:            "返金ポリシーは?",
    faq6_a:            "購入後14日以内、送信メッセージが40件未満 — 全額返金、質問なし。40メッセージはAshleyが合うかどうか知るには十分です。リクエストはメールで。",
    faq7_q:            "私のデータはプライベートですか?",
    faq7_a:            "はい。チャット履歴、記憶、日記、設定は暗号化されてユーザーフォルダにあります — 私たちはサーバーを持っていないので、文字通りあなたのデータを見ることができません。クラウドプロバイダー(xAI/OpenRouter)を使う場合、メッセージは彼らのプライバシーポリシーに従って直接送られます。Ollamaを使えば、何もPCから出ません — Ashleyは完全オフラインで動作します。",

    footer_tagline:    "あなたのAIデスクトップコンパニオン",
    footer_contact:    "お問い合わせ",
    footer_buy:        "購入",
    footer_privacy:    "プライバシー",
    footer_terms:      "利用規約",
    footer_copy:       "© 2026 Ashley IA · インディー開発者が心を込めて作成",
  },

  de: {
    meta_title:        "Ashley — KI-Desktop-Begleiterin",
    meta_description:  "KI-Desktop-Begleiterin mit Persönlichkeit. Wecke sie per Stimme, sie erinnert sich an alles über dich, sieht deinen Bildschirm und handelt auf deinem PC. Einmalkauf, lebenslange Nutzung.",

    hero_title:        "Lerne Ashley kennen",
    hero_subtitle:     "Deine KI-Desktop-Begleiterin mit Persönlichkeit.",
    hero_tagline:      "Sag ihren Namen. Sie wacht auf, hört zu, erinnert sich und handelt auf deinem PC.",
    hero_cta:          "Ashley holen — 19,99 €",
    hero_footnote:     "Einmalkauf · Lebenslange Nutzung · Kein Abo",

    video_title:       "Sieh sie in Aktion",
    video_sub:         "Ein kurzer Blick auf das, was Ashley kann.",
    video_placeholder: "Demo-Video bald verfügbar",

    features_title:    "Was sie macht",
    feat1_title:       "Per Stimme aufwecken",
    feat1_desc:        "Sag \"Ashley\" und sie wacht auf — freihändig, kein Klicken. Lokale Erkennung, kein Cloud-Lauschen.",
    feat2_title:       "Echtes Langzeitgedächtnis",
    feat2_desc:        "Sie erinnert sich an deinen Namen, deine Projekte, deinen Geschmack, deine bisherigen Gespräche. Sie führt ein privates Tagebuch über dich. Beginnt nie bei null.",
    feat3_title:       "Stimme rein und raus",
    feat3_desc:        "Sprich mit ihr per Mikro (Whisper offline, dein Audio verlässt nie deinen PC). Sie spricht zurück mit ElevenLabs, Kokoro, VoiceVox oder der kostenlosen Windows-Stimme.",
    feat4_title:       "Sieht deinen Bildschirm",
    feat4_desc:        "Aktiviere die Vision und Ashley sieht, was du siehst. Sie reagiert, kommentiert und hilft dir im Kontext — Code, Docs, Spiele, was auch immer.",
    feat5_title:       "Handelt auf deinem PC",
    feat5_desc:        "Apps öffnen, Tabs schließen, Lautstärke regeln, für dich tippen, Screenshots machen, im Web suchen, Erinnerungen setzen. Deine freihändige Assistentin.",
    feat6_title:       "Wähle deine KI",
    feat6_desc:        "Nutze xAI (Grok), OpenRouter oder Ollama — wechsle jederzeit in den Einstellungen. Cloud ist schnell und günstig; Ollama ist 100% lokal und kostenlos.",

    why_title:         "Warum Ashley",
    why1_title:        "Einmalkauf",
    why1_desc:         "19,99 €, lebenslange Nutzung. Keine Abos, keine Verlängerungen, keine monatliche Rechnung von uns. Niemals.",
    why2_title:        "Cloud oder 100% lokal",
    why2_desc:         "Wähle xAI / OpenRouter (mit deinem eigenen Key, typischerweise 1-3 €/Monat) oder Ollama (kostenlos, vollständig offline, kein Key, keiner überhaupt nötig).",
    why3_title:        "Privatsphäre standardmäßig",
    why3_desc:         "Chat-Verlauf, Erinnerungen, Tagebuch, Einstellungen — verschlüsselt in deinem Benutzerordner. Wir haben keine Server; wir können deine Daten buchstäblich nicht sehen.",

    pricing_title:     "Ashley holen",
    pricing_product:   "Ashley — KI-Desktop-Begleiterin",
    pricing_note:      "Einmalig · Lebenslang · 3 PCs",
    price_feat1:       "✓ Wake-Wort — sag \"Ashley\" und sie aktiviert sich",
    price_feat2:       "✓ Langzeitgedächtnis von dir (Fakten, Tagebuch, Geschmack)",
    price_feat3:       "✓ Stimme: Eingang (Whisper offline) & Ausgang (ElevenLabs / Kokoro / VoiceVox / Windows)",
    price_feat4:       "✓ Bildschirm-Vision (wenn du es erlaubst)",
    price_feat5:       "✓ Systemaktionen (Apps, Tabs, Lautstärke, Tastatur, Suche)",
    price_feat6:       "✓ 3 KI-Provider: xAI, OpenRouter, Ollama (kostenlos, lokal)",
    price_feat7:       "✓ Achievements + Affection-System + 7 Stimmungen + narrative Gesten",
    price_feat8:       "✓ Mehrsprachig: 7 Sprachen (EN, ES, FR, JA, DE, RU, KO)",
    pricing_cta:       "Ashley kaufen — 19,99 €",
    pricing_secure:    "🔒 Sichere Bezahlung über Lemon Squeezy",

    faq_title:         "Häufig gefragt",
    faq1_q:            "Was genau ist Ashley?",
    faq1_a:            "Eine Windows-Desktop-App mit einer charaktergetriebenen KI darin. Sie hat ihre eigene Persönlichkeit (eine Tsundere, die dich liebevoll neckt), wacht auf, wenn du ihren Namen sagst, erinnert sich langfristig an dich und kann deinen PC steuern (Apps öffnen, im Web suchen, Erinnerungen setzen, Screenshots machen, für dich tippen usw.). Mehr Charakter als Alexa, mehr Fähigkeiten als ChatGPT, vollständig auf deinem Desktop.",
    faq2_q:            "Welches KI-Modell nutzt sie?",
    faq2_a:            "Du entscheidest. Ashley unterstützt drei Provider: (1) xAI (Grok) — schnell, smart, Pay-per-Use mit deinem eigenen Key (~1-3 €/Monat bei normaler Nutzung); (2) OpenRouter — Zugang zu Dutzenden Modellen mit einem Key; (3) Ollama — 100% lokal, kostenlos, läuft auf deinem PC, kein API-Key nötig. Du wechselst jederzeit in den Einstellungen.",
    faq3_q:            "Wacht sie wirklich per Stimme auf?",
    faq3_a:            "Ja. Wake-Wort-Erkennung läuft lokal auf deinem PC mit openWakeWord — keine Cloud, kein Mikro, das ständig irgendwohin streamt. Sag einfach \"Ashley\" und sie aktiviert sich. Du kannst es jederzeit deaktivieren.",
    faq4_q:            "Welche Betriebssysteme werden unterstützt?",
    faq4_a:            "Windows 10 und 11 sind voll unterstützt. macOS- und Linux-Builds sind nach dem Launch geplant — wenn das für dich kritisch ist, schreib uns vor dem Kauf eine E-Mail.",
    faq5_q:            "Kann ich sie auf mehreren PCs nutzen?",
    faq5_a:            "Ja. Deine Lizenz erlaubt Aktivierung auf bis zu 3 Geräten (Desktop + Laptop + 1 Reserve für Neuinstallationen). Deaktiviere einen Slot von einem PC, um ihn jederzeit für einen anderen freizugeben.",
    faq6_q:            "Rückerstattungsrichtlinie?",
    faq6_a:            "Innerhalb von 14 Tagen nach Kauf und weniger als 40 gesendeten Nachrichten — volle Rückerstattung, keine Fragen. 40 Nachrichten reichen mehr als aus, um zu wissen, ob Ashley zu dir passt. Schreib uns für eine Anfrage.",
    faq7_q:            "Sind meine Daten privat?",
    faq7_a:            "Ja. Chat-Verlauf, Erinnerungen, Tagebuch und Einstellungen leben verschlüsselt in deinem Benutzerordner — wir haben keine Server und können deine Daten buchstäblich nicht sehen. Wenn du einen Cloud-Provider (xAI/OpenRouter) nutzt, gehen deine Nachrichten direkt zu ihm unter dessen Datenschutzrichtlinie. Wenn du Ollama nutzt, verlässt NICHTS deinen PC — Ashley ist vollständig offline.",

    footer_tagline:    "Deine KI-Desktop-Begleiterin",
    footer_contact:    "Kontakt",
    footer_buy:        "Kaufen",
    footer_privacy:    "Datenschutz",
    footer_terms:      "AGB",
    footer_copy:       "© 2026 Ashley IA · Mit Sorgfalt gemacht von einem Indie-Dev",
  },

  ru: {
    meta_title:        "Ashley — ИИ-компаньон для рабочего стола",
    meta_description:  "ИИ-компаньон для рабочего стола с характером. Разбуди её голосом, она помнит о тебе всё, видит твой экран и действует на твоём ПК. Единоразовая покупка, использование на всю жизнь.",

    hero_title:        "Познакомься с Ashley",
    hero_subtitle:     "Твой ИИ-компаньон для рабочего стола с характером.",
    hero_tagline:      "Скажи её имя. Она просыпается, слушает, помнит и действует на твоём ПК.",
    hero_cta:          "Получить Ashley — €19,99",
    hero_footnote:     "Единоразовая покупка · На всю жизнь · Без подписок",

    video_title:       "Посмотри её в действии",
    video_sub:         "Краткий взгляд на то, что умеет Ashley.",
    video_placeholder: "Демо-видео скоро",

    features_title:    "Что она делает",
    feat1_title:       "Просыпается по голосу",
    feat1_desc:        "Скажи «Ashley» и она просыпается — без рук, без кликов. Локальное определение, без облачного прослушивания.",
    feat2_title:       "Настоящая долговременная память",
    feat2_desc:        "Помнит твоё имя, проекты, вкусы, прошлые разговоры. Ведёт личный дневник о тебе. Никогда не начинает с нуля.",
    feat3_title:       "Голос вход и выход",
    feat3_desc:        "Говори с ней через микрофон (Whisper офлайн, твой звук никогда не покидает ПК). Отвечает через ElevenLabs, Kokoro, VoiceVox или бесплатный голос Windows.",
    feat4_title:       "Видит твой экран",
    feat4_desc:        "Включи зрение и Ashley видит то, что видишь ты. Реагирует, комментирует, помогает в контексте — код, документы, игры, что угодно.",
    feat5_title:       "Действует на твоём ПК",
    feat5_desc:        "Открывает приложения, закрывает вкладки, управляет громкостью, печатает за тебя, делает скриншоты, ищет в сети, ставит напоминания. Твой свободный помощник.",
    feat6_title:       "Выбери свой ИИ",
    feat6_desc:        "Используй xAI (Grok), OpenRouter или Ollama — переключайся в любое время в Настройках. Облако быстро и дёшево; Ollama 100% локально и бесплатно.",

    why_title:         "Почему Ashley",
    why1_title:        "Единоразовая покупка",
    why1_desc:         "€19,99, использование на всю жизнь. Без подписок, без продлений, без ежемесячных счетов от нас. Никогда.",
    why2_title:        "Облако или 100% локально",
    why2_desc:         "Выбери xAI / OpenRouter (со своим ключом, обычно €1-3/мес) или Ollama (бесплатно, полностью офлайн, без ключа, ключ вообще не нужен).",
    why3_title:        "Приватность по умолчанию",
    why3_desc:         "История чата, воспоминания, дневник, настройки — зашифрованы в твоей папке пользователя. У нас нет серверов; мы буквально не можем видеть твои данные.",

    pricing_title:     "Получить Ashley",
    pricing_product:   "Ashley — ИИ-компаньон для рабочего стола",
    pricing_note:      "Единоразово · На всю жизнь · 3 ПК",
    price_feat1:       "✓ Слово активации — скажи «Ashley» и она активируется",
    price_feat2:       "✓ Долговременная память о тебе (факты, дневник, вкусы)",
    price_feat3:       "✓ Голос: вход (Whisper офлайн) и выход (ElevenLabs / Kokoro / VoiceVox / Windows)",
    price_feat4:       "✓ Зрение экрана (когда разрешишь)",
    price_feat5:       "✓ Системные действия (приложения, вкладки, громкость, клавиатура, поиск)",
    price_feat6:       "✓ 3 ИИ-провайдера: xAI, OpenRouter, Ollama (бесплатно, локально)",
    price_feat7:       "✓ Достижения + система привязанности + 7 настроений + жесты",
    price_feat8:       "✓ Многоязычность: 7 языков (EN, ES, FR, JA, DE, RU, KO)",
    pricing_cta:       "Купить Ashley — €19,99",
    pricing_secure:    "🔒 Безопасная оплата через Lemon Squeezy",

    faq_title:         "Часто задаваемые вопросы",
    faq1_q:            "Что такое Ashley?",
    faq1_a:            "Десктопное приложение для Windows с ИИ-персонажем внутри. У неё свой характер (цундере, которая будет тебя ласково подкалывать), просыпается, когда ты говоришь её имя, помнит тебя долгосрочно, может управлять твоим ПК (открывать приложения, искать в сети, ставить напоминания, делать скриншоты, печатать за тебя и т.д.). Больше характера, чем у Alexa, больше возможностей, чем у ChatGPT, полностью на твоём рабочем столе.",
    faq2_q:            "Какую модель ИИ она использует?",
    faq2_a:            "На твой выбор. Ashley поддерживает три провайдера: (1) xAI (Grok) — быстро, умно, оплата за использование своим ключом (~€1-3/мес при обычном использовании); (2) OpenRouter — доступ к десяткам моделей одним ключом; (3) Ollama — 100% локально, бесплатно, работает на твоём ПК, API-ключ не нужен. Переключаешься в любое время в Настройках.",
    faq3_q:            "Она правда просыпается по голосу?",
    faq3_a:            "Да. Определение слова активации работает локально на твоём ПК через openWakeWord — без облака, без микрофона, постоянно стримящего куда-то. Просто скажи «Ashley» и она активируется. Можешь отключить в любое время.",
    faq4_q:            "Какие операционные системы поддерживаются?",
    faq4_a:            "Windows 10 и 11 полностью поддерживаются. macOS и Linux версии запланированы после запуска — если это критично, напиши нам перед покупкой.",
    faq5_q:            "Можно ли использовать на нескольких ПК?",
    faq5_a:            "Да. Лицензия позволяет активацию до 3 устройств (десктоп + ноутбук + 1 запасное для переустановок). Деактивируй слот с одного ПК, чтобы освободить для другого в любое время.",
    faq6_q:            "Политика возврата?",
    faq6_a:            "В течение 14 дней с покупки и менее 40 отправленных сообщений — полный возврат, без вопросов. 40 сообщений более чем достаточно, чтобы понять, подходит ли тебе Ashley. Напиши нам для запроса.",
    faq7_q:            "Мои данные приватны?",
    faq7_a:            "Да. История чата, воспоминания, дневник и настройки живут зашифрованными в твоей папке пользователя — у нас нет серверов и мы буквально не можем видеть твои данные. Если используешь облачного провайдера (xAI/OpenRouter), сообщения идут напрямую к нему по его политике конфиденциальности. Если Ollama — НИЧЕГО не покидает ПК, Ashley полностью офлайн.",

    footer_tagline:    "Твой ИИ-компаньон для рабочего стола",
    footer_contact:    "Контакт",
    footer_buy:        "Купить",
    footer_privacy:    "Конфиденциальность",
    footer_terms:      "Условия",
    footer_copy:       "© 2026 Ashley IA · Сделано с заботой инди-разработчиком",
  },

  ko: {
    meta_title:        "Ashley — AI 데스크톱 컴패니언",
    meta_description:  "성격 있는 AI 데스크톱 컴패니언. 목소리로 깨우면, 너에 대해 모두 기억하고, 화면을 보고, PC에서 작동해. 일회성 구매, 평생 사용.",

    hero_title:        "Ashley를 만나봐",
    hero_subtitle:     "성격 있는 너의 AI 데스크톱 컴패니언.",
    hero_tagline:      "이름을 불러봐. 깨어나서, 듣고, 기억하고, PC에서 작동해.",
    hero_cta:          "Ashley 받기 — €19.99",
    hero_footnote:     "일회성 구매 · 평생 사용 · 구독 없음",

    video_title:       "활동하는 모습 보기",
    video_sub:         "Ashley가 할 수 있는 것에 대한 빠른 미리보기.",
    video_placeholder: "데모 영상 곧 공개",

    features_title:    "그녀가 하는 일",
    feat1_title:       "목소리로 깨어나기",
    feat1_desc:        "「Ashley」라고 말하면 깨어나 — 핸즈프리, 클릭 없음. 로컬 감지, 클라우드 청취 없음.",
    feat2_title:       "진짜 장기 기억",
    feat2_desc:        "너의 이름, 프로젝트, 취향, 과거 대화를 기억해. 너에 대한 비밀 일기를 써. 절대 처음부터 시작하지 않아.",
    feat3_title:       "음성 입력과 출력",
    feat3_desc:        "마이크로 말해 (오프라인 Whisper, 오디오는 PC를 떠나지 않아). ElevenLabs, Kokoro, VoiceVox 또는 무료 Windows 음성으로 답해.",
    feat4_title:       "화면을 봐",
    feat4_desc:        "비전을 켜면 Ashley는 너가 보는 것을 봐. 맥락 속에서 반응하고, 코멘트하고, 도와줘 — 코드, 문서, 게임, 무엇이든.",
    feat5_title:       "PC에서 작동",
    feat5_desc:        "앱 열기, 탭 닫기, 볼륨 제어, 너 대신 입력, 스크린샷, 웹 검색, 리마인더 설정. 너의 핸즈프리 비서.",
    feat6_title:       "AI를 선택해",
    feat6_desc:        "xAI (Grok), OpenRouter 또는 Ollama 사용 — 설정에서 언제든 전환. 클라우드는 빠르고 저렴해; Ollama는 100% 로컬에 무료.",

    why_title:         "왜 Ashley",
    why1_title:        "일회성 구매",
    why1_desc:         "€19.99, 평생 사용. 구독 없음, 갱신 없음, 우리에게서 월별 청구 없음. 영원히.",
    why2_title:        "클라우드 또는 100% 로컬",
    why2_desc:         "xAI / OpenRouter 선택 (자기 키로, 보통 월 €1-3) 또는 Ollama (무료, 완전 오프라인, 키 불필요, 키가 전혀 필요 없어).",
    why3_title:        "기본적으로 프라이버시",
    why3_desc:         "채팅 기록, 추억, 일기, 환경설정 — 사용자 폴더에 암호화. 우리는 서버가 없어; 너의 데이터를 볼 수가 없어.",

    pricing_title:     "Ashley 받기",
    pricing_product:   "Ashley — AI 데스크톱 컴패니언",
    pricing_note:      "일회성 · 평생 · 3 PC",
    price_feat1:       "✓ 웨이크 워드 — 「Ashley」라고 말하면 활성화",
    price_feat2:       "✓ 너에 대한 장기 기억 (사실, 일기, 취향)",
    price_feat3:       "✓ 음성: 입력 (Whisper 오프라인) & 출력 (ElevenLabs / Kokoro / VoiceVox / Windows)",
    price_feat4:       "✓ 화면 비전 (허락할 때)",
    price_feat5:       "✓ 시스템 액션 (앱, 탭, 볼륨, 키보드, 검색)",
    price_feat6:       "✓ 3개 AI 제공자: xAI, OpenRouter, Ollama (무료, 로컬)",
    price_feat7:       "✓ 업적 + 호감도 시스템 + 7가지 무드 + 제스처 연출",
    price_feat8:       "✓ 다국어: 7개 언어 (EN, ES, FR, JA, DE, RU, KO)",
    pricing_cta:       "Ashley 사기 — €19.99",
    pricing_secure:    "🔒 Lemon Squeezy 안전 결제",

    faq_title:         "자주 묻는 질문",
    faq1_q:            "Ashley는 정확히 무엇이야?",
    faq1_a:            "캐릭터 중심 AI가 들어있는 Windows 데스크톱 앱이야. 자체 성격이 있고 (애정 어린 츤데레), 이름을 부르면 깨어나며, 너를 장기적으로 기억하고, PC를 제어할 수 있어 (앱 열기, 웹 검색, 리마인더 설정, 스크린샷, 너 대신 입력 등). Alexa보다 캐릭터성 있고, ChatGPT보다 기능 많고, 완전히 데스크톱에서.",
    faq2_q:            "어떤 AI 모델을 써?",
    faq2_a:            "네 선택. Ashley는 3개 제공자를 지원: (1) xAI (Grok) — 빠르고, 똑똑하고, 자기 키로 사용량 결제 (보통 사용 시 월 €1-3); (2) OpenRouter — 한 키로 수십 개 모델 액세스; (3) Ollama — 100% 로컬, 무료, PC에서 동작, API 키 불필요. 설정에서 언제든 전환.",
    faq3_q:            "정말 목소리로 깨어나?",
    faq3_a:            "응. 웨이크 워드 감지는 openWakeWord로 PC에서 로컬 동작 — 클라우드 없음, 마이크가 어딘가로 계속 스트리밍하지 않음. 그냥 「Ashley」라고 말하면 활성화. 언제든 비활성화 가능.",
    faq4_q:            "어떤 OS가 지원돼?",
    faq4_a:            "Windows 10과 11 완전 지원. macOS와 Linux 빌드는 출시 후 예정 — 필수면 구매 전 메일 줘.",
    faq5_q:            "여러 PC에서 사용할 수 있어?",
    faq5_a:            "응. 라이선스로 최대 3개 기기에서 활성화 (데스크톱 + 노트북 + 재설치용 1대 여유). 한 PC의 슬롯을 해제해서 다른 PC로 옮길 수 있어 언제든.",
    faq6_q:            "환불 정책?",
    faq6_a:            "구매 후 14일 이내, 메시지 40개 미만 — 전액 환불, 질문 없이. 40개 메시지면 Ashley가 너랑 맞는지 알기 충분해. 메일로 요청해.",
    faq7_q:            "내 데이터는 안전해?",
    faq7_a:            "응. 채팅 기록, 추억, 일기, 환경설정은 사용자 폴더에 암호화되어 있어 — 우리는 서버가 없고 데이터를 볼 수가 없어. 클라우드 제공자 (xAI/OpenRouter) 사용 시, 메시지는 그들의 개인정보 정책에 따라 직접 보내져. Ollama 사용 시, 아무것도 PC를 떠나지 않아 — Ashley는 완전 오프라인.",

    footer_tagline:    "너의 AI 데스크톱 컴패니언",
    footer_contact:    "연락처",
    footer_buy:        "구매",
    footer_privacy:    "개인정보",
    footer_terms:      "이용약관",
    footer_copy:       "© 2026 Ashley IA · 인디 개발자가 정성으로 만듦",
  },
};

const SUPPORTED_LANGS = ["en", "es", "fr", "ja", "de", "ru", "ko"];
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
