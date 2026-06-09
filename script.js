/* Ashley IA — Landing page JS (v0.22.43, content actualizado al estado real)
 * Responsibility: language switcher (7 idiomas) with localStorage persistence
 * and smooth auto-detection of browser language on first visit.
 *
 * v0.22.43 — Reescritura del copy:
 *  · Precio público actualizado a $14.99
 *  · Hero ahora destaca pet mode + presencia 2D/3D en escritorio
 *  · Features y pricing actualizados con voz en pet, visión, acciones y trial
 *  · FAQ reescrita para BYOK real: xAI/OpenRouter/Ollama y capacidades por modelo
 */

const TRANSLATIONS = {
  en: {
    meta_title:        "Ashley — AI Desktop Companion",
    meta_description:  "AI desktop companion for Windows with memory, voice, vision, 2D/3D pet mode, and optional PC control. One-time purchase, lifetime use.",

    hero_title:        "Meet Ashley",
    hero_subtitle:     "Your AI companion for Windows, now with desktop pet mode.",
    hero_tagline:      "She remembers you, talks by voice, reacts in 2D/3D, sees your screen when allowed, and can help control your PC.",
    hero_cta:          "Get Ashley — $14.99",
    hero_footnote:     "One-time purchase · Lifetime use · Free trial included",

    video_title:       "See her in action",
    video_sub:         "A quick look at what Ashley can do.",
    video_placeholder: "Demo video coming soon",

    features_title:    "What she does",
    feat1_title:       "Desktop pet mode",
    feat1_desc:        "Minimize Ashley and she stays with you as a floating 2D or 3D companion. Chat from the pet window, use voice, and bring the full app back any time.",
    feat2_title:       "Voice and wake word",
    feat2_desc:        "Say \"Ashley\" or tap the mic. Wake word detection and speech recognition run locally, and she can answer with Windows, Kokoro, VoiceVox, or premium TTS voices.",
    feat3_title:       "Memory and relationship",
    feat3_desc:        "She remembers facts, preferences, goals, reminders, and your shared history. Her mood and affection react to how you treat her.",
    feat4_title:       "She sees your screen",
    feat4_desc:        "Enable vision and Ashley can understand screenshots, images, or your current screen. Vision is separate from PC control, so you decide exactly what she can access.",
    feat5_title:       "She acts on your PC",
    feat5_desc:        "When Actions are enabled, Ashley can open apps, manage browser tabs, control volume, use hotkeys, type text, take screenshots, search, play media, and set reminders.",
    feat6_title:       "Choose your AI",
    feat6_desc:        "Use xAI Grok, OpenRouter models, or local Ollama. Ashley explains what each model can do, including vision, web search, speed, and local-only tradeoffs.",

    why_title:         "Why Ashley",
    why1_title:        "One-time purchase",
    why1_desc:         "$14.99, lifetime use. No subscriptions, no renewals, no monthly bill from us. Ever.",
    why2_title:        "Cloud or 100% local",
    why2_desc:         "Bring your own xAI or OpenRouter key, or run local Ollama for free. Cloud model costs depend on the model you choose.",
    why3_title:        "Privacy by default",
    why3_desc:         "Chat history, memories, diary, preferences — encrypted in your user folder. We don't have servers; we literally can't see your data.",

    pricing_title:     "Get Ashley",
    pricing_product:   "Ashley — AI Desktop Companion",
    pricing_note:      "One-time · Lifetime · 3 PCs · Free trial",
    price_feat1:       "✓ 2D/3D desktop pet mode with chat, voice, and wake word",
    price_feat2:       "✓ Long-term memory, diary, reminders, goals, and important notes",
    price_feat3:       "✓ Voice in (local Whisper) & out (Windows / Kokoro / VoiceVox / ElevenLabs)",
    price_feat4:       "✓ Screen and image vision when you allow it",
    price_feat5:       "✓ Optional PC actions: apps, tabs, volume, hotkeys, typing, media, search",
    price_feat6:       "✓ xAI Grok, OpenRouter, or Ollama local models",
    price_feat7:       "✓ Affection, moods, 2D portraits, and 3D facial expressions",
    price_feat8:       "✓ 7 UI languages: English, Spanish, French, Japanese, German, Russian, Korean",
    pricing_cta:       "Buy Ashley — $14.99",
    pricing_secure:    "🔒 Secure checkout powered by Lemon Squeezy",

    faq_title:         "Frequently asked",
    faq1_q:            "What exactly is Ashley?",
    faq1_a:            "A Windows desktop app with a character-driven AI companion inside. Ashley chats naturally, remembers you, reacts with moods and affection, can appear as a 2D/3D desktop pet, and can control your PC when you enable Actions.",
    faq2_q:            "Which AI model does she use?",
    faq2_a:            "Your choice. Ashley supports xAI Grok, OpenRouter, and local Ollama. You bring your own key for cloud providers, or run Ollama locally for free. Capabilities such as vision, web search, speed, and language quality depend on the model you select.",
    faq3_q:            "Does she really wake up by voice?",
    faq3_a:            "Yes. Wake word detection runs locally on your PC using openWakeWord — no cloud microphone stream. Say \"Ashley\" or click the mic in the main app or pet mode. You can disable it any time.",
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
    meta_description:  "Compañera IA para Windows con memoria, voz, visión, modo pet 2D/3D y control opcional del PC. Compra única, uso de por vida.",

    hero_title:        "Conoce a Ashley",
    hero_subtitle:     "Tu compañera IA para Windows, ahora con modo pet de escritorio.",
    hero_tagline:      "Te recuerda, habla por voz, reacciona en 2D/3D, ve tu pantalla cuando lo permites y puede ayudarte a controlar tu PC.",
    hero_cta:          "Consigue a Ashley — $14.99",
    hero_footnote:     "Compra única · De por vida · Prueba gratis incluida",

    video_title:       "Mírala en acción",
    video_sub:         "Un vistazo rápido a lo que Ashley puede hacer.",
    video_placeholder: "Vídeo demo próximamente",

    features_title:    "Qué hace",
    feat1_title:       "Modo pet de escritorio",
    feat1_desc:        "Minimiza Ashley y se queda contigo como compañera flotante en 2D o 3D. Puedes chatear desde la ventana pet, usar voz y volver a la app completa cuando quieras.",
    feat2_title:       "Voz y wake word",
    feat2_desc:        "Di \"Ashley\" o toca el micro. La wake word y la transcripción corren localmente, y ella puede responder con Windows, Kokoro, VoiceVox o voces premium.",
    feat3_title:       "Memoria y relación",
    feat3_desc:        "Recuerda hechos, gustos, metas, recordatorios y vuestra historia. Su mood y afecto reaccionan a cómo la tratas.",
    feat4_title:       "Ve tu pantalla",
    feat4_desc:        "Activa la visión y Ashley puede entender capturas, imágenes o tu pantalla actual. La visión está separada del control del PC, así que tú decides qué puede ver.",
    feat5_title:       "Actúa en tu PC",
    feat5_desc:        "Con Actions activado, Ashley puede abrir apps, manejar pestañas, controlar volumen, usar hotkeys, escribir texto, sacar capturas, buscar, poner música y crear recordatorios.",
    feat6_title:       "Elige tu IA",
    feat6_desc:        "Usa xAI Grok, modelos de OpenRouter u Ollama local. Ashley explica qué puede hacer cada modelo: visión, búsqueda web, velocidad y límites locales.",

    why_title:         "Por qué Ashley",
    why1_title:        "Compra única",
    why1_desc:         "$14.99, uso de por vida. Sin suscripciones, sin renovaciones, sin que te pasemos cuota mensual. Nunca.",
    why2_title:        "Cloud o 100% local",
    why2_desc:         "Trae tu propia key de xAI u OpenRouter, o usa Ollama local gratis. El coste cloud depende del modelo que elijas.",
    why3_title:        "Privacidad por defecto",
    why3_desc:         "Historial, recuerdos, diario, preferencias — cifrados en tu carpeta de usuario. No tenemos servidores; literalmente no podemos ver tus datos.",

    pricing_title:     "Consigue a Ashley",
    pricing_product:   "Ashley — Compañera IA de escritorio",
    pricing_note:      "Única · De por vida · 3 PCs · Prueba gratis",
    price_feat1:       "✓ Modo pet 2D/3D con chat, voz y wake word",
    price_feat2:       "✓ Memoria, diario, recordatorios, metas y notas importantes",
    price_feat3:       "✓ Voz: entrada local con Whisper y salida con Windows / Kokoro / VoiceVox / ElevenLabs",
    price_feat4:       "✓ Visión de pantalla e imágenes cuando lo permites",
    price_feat5:       "✓ Acciones opcionales: apps, pestañas, volumen, hotkeys, escritura, música, búsqueda",
    price_feat6:       "✓ xAI Grok, OpenRouter u Ollama local",
    price_feat7:       "✓ Afecto, moods, retratos 2D y expresiones faciales 3D",
    price_feat8:       "✓ 7 idiomas de interfaz: inglés, español, francés, japonés, alemán, ruso y coreano",
    pricing_cta:       "Comprar Ashley — $14.99",
    pricing_secure:    "🔒 Pago seguro con Lemon Squeezy",

    faq_title:         "Preguntas frecuentes",
    faq1_q:            "¿Qué es Ashley exactamente?",
    faq1_a:            "Una app de escritorio para Windows con una compañera IA de personaje dentro. Ashley conversa natural, te recuerda, reacciona con moods y afecto, puede aparecer como pet 2D/3D en el escritorio y controla tu PC cuando activas Actions.",
    faq2_q:            "¿Qué modelo de IA usa?",
    faq2_a:            "El que tú elijas. Ashley soporta xAI Grok, OpenRouter y Ollama local. Traes tu propia key para proveedores cloud, o usas Ollama local gratis. Capacidades como visión, búsqueda web, velocidad y calidad de idioma dependen del modelo que selecciones.",
    faq3_q:            "¿De verdad se despierta por voz?",
    faq3_a:            "Sí. La wake word corre localmente en tu PC con openWakeWord — sin stream del micro a la nube. Di \"Ashley\" o pulsa el micro en la app principal o en el modo pet. Puedes desactivarlo cuando quieras.",
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
    meta_description:  "Compagne IA pour Windows avec mémoire, voix, vision, mode pet 2D/3D et contrôle optionnel du PC. Achat unique, utilisation à vie.",

    hero_title:        "Rencontrez Ashley",
    hero_subtitle:     "Votre compagne IA pour Windows, maintenant avec mode pet de bureau.",
    hero_tagline:      "Elle se souvient de toi, parle par la voix, réagit en 2D/3D, voit ton écran quand tu l'autorises et peut t'aider à contrôler ton PC.",
    hero_cta:          "Obtenir Ashley — $14.99",
    hero_footnote:     "Achat unique · À vie · Essai gratuit inclus",

    video_title:       "Voyez-la en action",
    video_sub:         "Un aperçu rapide de ce qu'Ashley peut faire.",
    video_placeholder: "Vidéo de démo bientôt disponible",

    features_title:    "Ce qu'elle fait",
    feat1_title:       "Mode pet de bureau",
    feat1_desc:        "Minimise Ashley et elle reste avec toi comme compagne flottante en 2D ou 3D. Discute depuis la fenêtre pet, utilise la voix et reviens à l'app complète quand tu veux.",
    feat2_title:       "Voix et mot d'activation",
    feat2_desc:        "Dis \"Ashley\" ou touche le micro. Le wake word et la transcription tournent localement, et elle peut répondre avec Windows, Kokoro, VoiceVox ou des voix premium.",
    feat3_title:       "Mémoire et relation",
    feat3_desc:        "Elle retient faits, préférences, objectifs, rappels et votre histoire. Son humeur et son affection réagissent à la façon dont tu la traites.",
    feat4_title:       "Voit ton écran",
    feat4_desc:        "Active la vision et Ashley peut comprendre captures d'écran, images ou ton écran actuel. La vision est séparée du contrôle du PC : tu choisis exactement ce qu'elle peut voir.",
    feat5_title:       "Agit sur ton PC",
    feat5_desc:        "Quand Actions est activé, Ashley peut ouvrir des apps, gérer les onglets, contrôler le volume, utiliser des raccourcis, taper du texte, prendre des captures, chercher, lancer des médias et créer des rappels.",
    feat6_title:       "Choisis ton IA",
    feat6_desc:        "Utilise xAI Grok, des modèles OpenRouter ou Ollama en local. Ashley explique ce que chaque modèle peut faire : vision, recherche web, vitesse et limites locales.",

    why_title:         "Pourquoi Ashley",
    why1_title:        "Achat unique",
    why1_desc:         "$14.99, utilisation à vie. Pas d'abonnement, pas de renouvellement, pas de facture mensuelle. Jamais.",
    why2_title:        "Cloud ou 100% local",
    why2_desc:         "Apporte ta propre clé xAI ou OpenRouter, ou utilise Ollama localement et gratuitement. Le coût cloud dépend du modèle que tu choisis.",
    why3_title:        "Privacy par défaut",
    why3_desc:         "Historique, souvenirs, journal, préférences — chiffrés dans ton dossier utilisateur. On n'a pas de serveurs ; on ne peut littéralement pas voir tes données.",

    pricing_title:     "Obtenir Ashley",
    pricing_product:   "Ashley — Compagne IA de bureau",
    pricing_note:      "Unique · À vie · 3 PCs · Essai gratuit",
    price_feat1:       "✓ Mode pet 2D/3D avec chat, voix et wake word",
    price_feat2:       "✓ Mémoire, journal, rappels, objectifs et notes importantes",
    price_feat3:       "✓ Voix : entrée locale Whisper et sortie Windows / Kokoro / VoiceVox / ElevenLabs",
    price_feat4:       "✓ Vision de l'écran et des images quand tu l'autorises",
    price_feat5:       "✓ Actions optionnelles : apps, onglets, volume, raccourcis, frappe, médias, recherche",
    price_feat6:       "✓ xAI Grok, OpenRouter ou modèles Ollama locaux",
    price_feat7:       "✓ Affection, humeurs, portraits 2D et expressions faciales 3D",
    price_feat8:       "✓ 7 langues d'interface : anglais, espagnol, français, japonais, allemand, russe, coréen",
    pricing_cta:       "Acheter Ashley — $14.99",
    pricing_secure:    "🔒 Paiement sécurisé via Lemon Squeezy",

    faq_title:         "Questions fréquentes",
    faq1_q:            "Qu'est-ce qu'Ashley exactement ?",
    faq1_a:            "Une application Windows avec une compagne IA à personnalité. Ashley discute naturellement, se souvient de toi, réagit avec humeurs et affection, peut apparaître comme pet 2D/3D sur le bureau et contrôler ton PC quand tu actives Actions.",
    faq2_q:            "Quel modèle d'IA utilise-t-elle ?",
    faq2_a:            "À toi de choisir. Ashley supporte xAI Grok, OpenRouter et Ollama local. Tu apportes ta propre clé pour les fournisseurs cloud, ou tu utilises Ollama localement gratuitement. Les capacités comme la vision, la recherche web, la vitesse et la qualité linguistique dépendent du modèle choisi.",
    faq3_q:            "Elle se réveille vraiment par la voix ?",
    faq3_a:            "Oui. Le mot d'activation tourne localement sur ton PC avec openWakeWord — pas de flux micro vers le cloud. Dis \"Ashley\" ou clique le micro dans l'app principale ou le mode pet. Tu peux le désactiver quand tu veux.",
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
    meta_description:  "記憶、音声、ビジョン、2D/3Dペットモード、任意のPC操作を備えたWindows向けAIコンパニオン。買い切り、永久使用。",

    hero_title:        "Ashleyに会う",
    hero_subtitle:     "デスクトップペットモードを備えたWindows向けAIコンパニオン。",
    hero_tagline:      "あなたを覚え、声で話し、2D/3Dで反応し、許可した時だけ画面を見て、PC操作も手伝える。",
    hero_cta:          "Ashleyを入手 — $14.99",
    hero_footnote:     "買い切り · 永久使用 · 無料トライアル付き",

    video_title:       "動いているところを見る",
    video_sub:         "Ashleyにできることのクイックビュー。",
    video_placeholder: "デモ動画は近日公開",

    features_title:    "できること",
    feat1_title:       "デスクトップペットモード",
    feat1_desc:        "Ashleyを最小化すると、2Dまたは3Dのフローティングコンパニオンとして残る。ペット画面からチャット、音声操作、フルアプリへの復帰ができる。",
    feat2_title:       "音声とウェイクワード",
    feat2_desc:        "「Ashley」と言うかマイクを押すだけ。ウェイクワードと音声認識はローカルで動作し、Windows、Kokoro、VoiceVox、プレミアム音声で返事できる。",
    feat3_title:       "記憶と関係性",
    feat3_desc:        "事実、好み、目標、リマインダー、あなたとの履歴を覚える。扱い方に応じてムードと好感度も変わる。",
    feat4_title:       "画面を見る",
    feat4_desc:        "ビジョンを有効にすると、スクリーンショット、画像、現在の画面を理解できる。ビジョンとPC操作は別々なので、何を許可するかはあなたが決める。",
    feat5_title:       "PCで操作する",
    feat5_desc:        "Actionsを有効にすると、アプリ起動、タブ管理、音量、ショートカット、入力、スクリーンショット、検索、メディア再生、リマインダー作成ができる。",
    feat6_title:       "AIを選ぶ",
    feat6_desc:        "xAI Grok、OpenRouterモデル、ローカルOllamaを使用可能。ビジョン、Web検索、速度、ローカル運用の違いをAshleyが説明する。",

    why_title:         "なぜAshley",
    why1_title:        "買い切り",
    why1_desc:         "$14.99で永久使用。サブスクリプションなし、更新なし、月額請求なし。永遠に。",
    why2_title:        "クラウドまたは100%ローカル",
    why2_desc:         "xAIまたはOpenRouterの自分のキーを使うか、Ollamaをローカルで無料利用。クラウド費用は選ぶモデル次第。",
    why3_title:        "デフォルトでプライバシー",
    why3_desc:         "チャット履歴、思い出、日記、設定 — ユーザーフォルダで暗号化。サーバーがないので、文字通りあなたのデータを見ることができない。",

    pricing_title:     "Ashleyを購入",
    pricing_product:   "Ashley — AIデスクトップコンパニオン",
    pricing_note:      "買い切り · 永久 · 3 PC · 無料トライアル",
    price_feat1:       "✓ チャット、音声、ウェイクワード対応の2D/3Dペットモード",
    price_feat2:       "✓ 記憶、日記、リマインダー、目標、重要メモ",
    price_feat3:       "✓ 音声: ローカルWhisper入力 + Windows / Kokoro / VoiceVox / ElevenLabs出力",
    price_feat4:       "✓ 許可した時だけ画面と画像のビジョン",
    price_feat5:       "✓ 任意のPC操作: アプリ、タブ、音量、ホットキー、入力、メディア、検索",
    price_feat6:       "✓ xAI Grok、OpenRouter、ローカルOllamaモデル",
    price_feat7:       "✓ 好感度、ムード、2Dポートレート、3D表情",
    price_feat8:       "✓ 多言語: 7言語 (英語、スペイン語、フランス語、日本語、ドイツ語、ロシア語、韓国語)",
    pricing_cta:       "Ashleyを買う — $14.99",
    pricing_secure:    "🔒 Lemon Squeezyによるセキュアな決済",

    faq_title:         "よくある質問",
    faq1_q:            "Ashleyとは正確には何ですか?",
    faq1_a:            "キャラクター性のあるAIコンパニオンが入ったWindowsデスクトップアプリ。Ashleyは自然に会話し、あなたを覚え、ムードと好感度で反応し、2D/3Dデスクトップペットとして表示でき、Actionsを有効にするとPC操作もできる。",
    faq2_q:            "どのAIモデルを使いますか?",
    faq2_a:            "あなたが選べる。AshleyはxAI Grok、OpenRouter、ローカルOllamaをサポート。クラウドは自分のキーを使い、Ollamaは無料でローカル実行できる。ビジョン、Web検索、速度、言語品質は選んだモデルに依存する。",
    faq3_q:            "本当に声で起きますか?",
    faq3_a:            "はい。ウェイクワード検出はopenWakeWordでPC上ローカルに動作し、クラウドへマイクを流さない。「Ashley」と言うか、メインアプリやペットモードのマイクを押せばよい。いつでも無効化できる。",
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
    meta_description:  "KI-Begleiterin für Windows mit Gedächtnis, Stimme, Vision, 2D/3D-Pet-Modus und optionaler PC-Steuerung. Einmalkauf, lebenslange Nutzung.",

    hero_title:        "Lerne Ashley kennen",
    hero_subtitle:     "Deine KI-Begleiterin für Windows, jetzt mit Desktop-Pet-Modus.",
    hero_tagline:      "Sie erinnert sich an dich, spricht per Stimme, reagiert in 2D/3D, sieht deinen Bildschirm nur mit Erlaubnis und kann dir beim Steuern deines PCs helfen.",
    hero_cta:          "Ashley holen — $14.99",
    hero_footnote:     "Einmalkauf · Lebenslange Nutzung · Gratis-Test inklusive",

    video_title:       "Sieh sie in Aktion",
    video_sub:         "Ein kurzer Blick auf das, was Ashley kann.",
    video_placeholder: "Demo-Video bald verfügbar",

    features_title:    "Was sie macht",
    feat1_title:       "Desktop-Pet-Modus",
    feat1_desc:        "Minimiere Ashley und sie bleibt als schwebende 2D- oder 3D-Begleiterin bei dir. Chatte im Pet-Fenster, nutze Stimme und öffne jederzeit wieder die volle App.",
    feat2_title:       "Stimme und Wake-Wort",
    feat2_desc:        "Sag \"Ashley\" oder tippe auf das Mikro. Wake-Wort und Spracherkennung laufen lokal, und sie kann mit Windows, Kokoro, VoiceVox oder Premium-Stimmen antworten.",
    feat3_title:       "Gedächtnis und Beziehung",
    feat3_desc:        "Sie merkt sich Fakten, Vorlieben, Ziele, Erinnerungen und eure gemeinsame Geschichte. Stimmung und Zuneigung reagieren darauf, wie du sie behandelst.",
    feat4_title:       "Sieht deinen Bildschirm",
    feat4_desc:        "Aktiviere Vision und Ashley versteht Screenshots, Bilder oder deinen aktuellen Bildschirm. Vision und PC-Steuerung sind getrennt, also entscheidest du genau, was sie sehen darf.",
    feat5_title:       "Handelt auf deinem PC",
    feat5_desc:        "Wenn Actions aktiv ist, kann Ashley Apps öffnen, Tabs verwalten, Lautstärke steuern, Hotkeys nutzen, Text tippen, Screenshots machen, suchen, Medien starten und Erinnerungen setzen.",
    feat6_title:       "Wähle deine KI",
    feat6_desc:        "Nutze xAI Grok, OpenRouter-Modelle oder lokales Ollama. Ashley erklärt, was jedes Modell kann: Vision, Websuche, Geschwindigkeit und lokale Grenzen.",

    why_title:         "Warum Ashley",
    why1_title:        "Einmalkauf",
    why1_desc:         "$14.99, lebenslange Nutzung. Keine Abos, keine Verlängerungen, keine monatliche Rechnung von uns. Niemals.",
    why2_title:        "Cloud oder 100% lokal",
    why2_desc:         "Bring deinen eigenen xAI- oder OpenRouter-Key mit, oder nutze Ollama lokal kostenlos. Cloud-Kosten hängen vom gewählten Modell ab.",
    why3_title:        "Privatsphäre standardmäßig",
    why3_desc:         "Chat-Verlauf, Erinnerungen, Tagebuch, Einstellungen — verschlüsselt in deinem Benutzerordner. Wir haben keine Server; wir können deine Daten buchstäblich nicht sehen.",

    pricing_title:     "Ashley holen",
    pricing_product:   "Ashley — KI-Desktop-Begleiterin",
    pricing_note:      "Einmalig · Lebenslang · 3 PCs · Gratis-Test",
    price_feat1:       "✓ 2D/3D-Desktop-Pet-Modus mit Chat, Stimme und Wake-Wort",
    price_feat2:       "✓ Gedächtnis, Tagebuch, Erinnerungen, Ziele und wichtige Notizen",
    price_feat3:       "✓ Stimme: lokales Whisper rein, Windows / Kokoro / VoiceVox / ElevenLabs raus",
    price_feat4:       "✓ Bildschirm- und Bild-Vision, wenn du es erlaubst",
    price_feat5:       "✓ Optionale PC-Actions: Apps, Tabs, Lautstärke, Hotkeys, Tippen, Medien, Suche",
    price_feat6:       "✓ xAI Grok, OpenRouter oder lokale Ollama-Modelle",
    price_feat7:       "✓ Zuneigung, Stimmungen, 2D-Portraits und 3D-Gesichtsausdrücke",
    price_feat8:       "✓ Mehrsprachig: 7 Sprachen (EN, ES, FR, JA, DE, RU, KO)",
    pricing_cta:       "Ashley kaufen — $14.99",
    pricing_secure:    "🔒 Sichere Bezahlung über Lemon Squeezy",

    faq_title:         "Häufig gefragt",
    faq1_q:            "Was genau ist Ashley?",
    faq1_a:            "Eine Windows-Desktop-App mit einer charaktergetriebenen KI-Begleiterin. Ashley chattet natürlich, erinnert sich an dich, reagiert mit Stimmungen und Zuneigung, kann als 2D/3D-Desktop-Pet erscheinen und deinen PC steuern, wenn du Actions aktivierst.",
    faq2_q:            "Welches KI-Modell nutzt sie?",
    faq2_a:            "Du entscheidest. Ashley unterstützt xAI Grok, OpenRouter und lokales Ollama. Für Cloud-Provider bringst du deinen eigenen Key mit, oder du nutzt Ollama lokal kostenlos. Fähigkeiten wie Vision, Websuche, Geschwindigkeit und Sprachqualität hängen vom gewählten Modell ab.",
    faq3_q:            "Wacht sie wirklich per Stimme auf?",
    faq3_a:            "Ja. Die Wake-Wort-Erkennung läuft lokal auf deinem PC mit openWakeWord — kein Mikro-Stream in die Cloud. Sag \"Ashley\" oder klicke das Mikro in der Haupt-App oder im Pet-Modus. Du kannst es jederzeit deaktivieren.",
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
    meta_description:  "ИИ-компаньон для Windows с памятью, голосом, зрением, pet-режимом 2D/3D и опциональным управлением ПК. Единоразовая покупка, использование на всю жизнь.",

    hero_title:        "Познакомься с Ashley",
    hero_subtitle:     "Твой ИИ-компаньон для Windows, теперь с pet-режимом на рабочем столе.",
    hero_tagline:      "Она помнит тебя, говорит голосом, реагирует в 2D/3D, видит экран только с разрешения и помогает управлять ПК.",
    hero_cta:          "Получить Ashley — $14.99",
    hero_footnote:     "Единоразовая покупка · На всю жизнь · Бесплатная пробная версия",

    video_title:       "Посмотри её в действии",
    video_sub:         "Краткий взгляд на то, что умеет Ashley.",
    video_placeholder: "Демо-видео скоро",

    features_title:    "Что она делает",
    feat1_title:       "Pet-режим на рабочем столе",
    feat1_desc:        "Сверни Ashley, и она останется рядом как плавающий 2D или 3D компаньон. Общайся из pet-окна, используй голос и возвращай полное приложение в любой момент.",
    feat2_title:       "Голос и wake word",
    feat2_desc:        "Скажи «Ashley» или нажми микрофон. Wake word и распознавание речи работают локально, а отвечать она может голосами Windows, Kokoro, VoiceVox или премиум TTS.",
    feat3_title:       "Память и отношения",
    feat3_desc:        "Она помнит факты, предпочтения, цели, напоминания и вашу историю. Настроение и привязанность меняются от того, как ты к ней относишься.",
    feat4_title:       "Видит твой экран",
    feat4_desc:        "Включи зрение, и Ashley сможет понимать скриншоты, изображения или текущий экран. Зрение отдельно от управления ПК, так что ты сам решаешь, что ей доступно.",
    feat5_title:       "Действует на твоём ПК",
    feat5_desc:        "Когда Actions включены, Ashley может открывать приложения, управлять вкладками, громкостью, горячими клавишами, печатать текст, делать скриншоты, искать, запускать медиа и создавать напоминания.",
    feat6_title:       "Выбери свой ИИ",
    feat6_desc:        "Используй xAI Grok, модели OpenRouter или локальный Ollama. Ashley объясняет возможности каждой модели: зрение, веб-поиск, скорость и локальные ограничения.",

    why_title:         "Почему Ashley",
    why1_title:        "Единоразовая покупка",
    why1_desc:         "$14.99, использование на всю жизнь. Без подписок, без продлений, без ежемесячных счетов от нас. Никогда.",
    why2_title:        "Облако или 100% локально",
    why2_desc:         "Принеси свой ключ xAI или OpenRouter, либо используй локальный Ollama бесплатно. Стоимость облака зависит от выбранной модели.",
    why3_title:        "Приватность по умолчанию",
    why3_desc:         "История чата, воспоминания, дневник, настройки — зашифрованы в твоей папке пользователя. У нас нет серверов; мы буквально не можем видеть твои данные.",

    pricing_title:     "Получить Ashley",
    pricing_product:   "Ashley — ИИ-компаньон для рабочего стола",
    pricing_note:      "Единоразово · На всю жизнь · 3 ПК · Бесплатная проба",
    price_feat1:       "✓ Pet-режим 2D/3D с чатом, голосом и wake word",
    price_feat2:       "✓ Память, дневник, напоминания, цели и важные заметки",
    price_feat3:       "✓ Голос: локальный Whisper на входе и Windows / Kokoro / VoiceVox / ElevenLabs на выходе",
    price_feat4:       "✓ Зрение экрана и изображений, когда ты разрешаешь",
    price_feat5:       "✓ Опциональные действия ПК: приложения, вкладки, громкость, хоткеи, ввод, медиа, поиск",
    price_feat6:       "✓ xAI Grok, OpenRouter или локальные модели Ollama",
    price_feat7:       "✓ Привязанность, настроения, 2D-портреты и 3D-мимика",
    price_feat8:       "✓ Многоязычность: 7 языков (EN, ES, FR, JA, DE, RU, KO)",
    pricing_cta:       "Купить Ashley — $14.99",
    pricing_secure:    "🔒 Безопасная оплата через Lemon Squeezy",

    faq_title:         "Часто задаваемые вопросы",
    faq1_q:            "Что такое Ashley?",
    faq1_a:            "Windows-приложение с ИИ-компаньоном внутри. Ashley естественно общается, помнит тебя, реагирует настроением и привязанностью, может быть 2D/3D pet на рабочем столе и управлять ПК, когда ты включаешь Actions.",
    faq2_q:            "Какую модель ИИ она использует?",
    faq2_a:            "На твой выбор. Ashley поддерживает xAI Grok, OpenRouter и локальный Ollama. Для облачных провайдеров нужен твой ключ, а Ollama можно запускать локально бесплатно. Зрение, веб-поиск, скорость и качество языка зависят от выбранной модели.",
    faq3_q:            "Она правда просыпается по голосу?",
    faq3_a:            "Да. Wake word работает локально на твоём ПК через openWakeWord — без потока микрофона в облако. Скажи «Ashley» или нажми микрофон в основной app или pet-режиме. Можно отключить в любой момент.",
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
    meta_description:  "기억, 음성, 비전, 2D/3D 펫 모드, 선택적 PC 제어를 갖춘 Windows용 AI 컴패니언. 일회성 구매, 평생 사용.",

    hero_title:        "Ashley를 만나봐",
    hero_subtitle:     "이제 데스크톱 펫 모드까지 갖춘 Windows용 AI 컴패니언.",
    hero_tagline:      "너를 기억하고, 음성으로 말하고, 2D/3D로 반응하고, 허락할 때 화면을 보며, PC 제어도 도와줘.",
    hero_cta:          "Ashley 받기 — $14.99",
    hero_footnote:     "일회성 구매 · 평생 사용 · 무료 체험 포함",

    video_title:       "활동하는 모습 보기",
    video_sub:         "Ashley가 할 수 있는 것에 대한 빠른 미리보기.",
    video_placeholder: "데모 영상 곧 공개",

    features_title:    "그녀가 하는 일",
    feat1_title:       "데스크톱 펫 모드",
    feat1_desc:        "Ashley를 최소화하면 2D 또는 3D 플로팅 컴패니언으로 곁에 남아. 펫 창에서 채팅하고, 음성을 쓰고, 언제든 전체 앱으로 돌아올 수 있어.",
    feat2_title:       "음성과 웨이크 워드",
    feat2_desc:        "「Ashley」라고 말하거나 마이크를 눌러. 웨이크 워드와 음성 인식은 로컬에서 동작하고, Windows, Kokoro, VoiceVox 또는 프리미엄 TTS로 답해.",
    feat3_title:       "기억과 관계",
    feat3_desc:        "사실, 취향, 목표, 리마인더, 너와의 기록을 기억해. 네가 대하는 방식에 따라 무드와 호감도도 반응해.",
    feat4_title:       "화면을 봐",
    feat4_desc:        "비전을 켜면 스크린샷, 이미지, 현재 화면을 이해할 수 있어. 비전은 PC 제어와 분리되어 있어서 무엇을 허락할지 네가 정해.",
    feat5_title:       "PC에서 작동",
    feat5_desc:        "Actions를 켜면 앱 열기, 탭 관리, 볼륨, 단축키, 텍스트 입력, 스크린샷, 검색, 미디어 재생, 리마인더 생성까지 할 수 있어.",
    feat6_title:       "AI를 선택해",
    feat6_desc:        "xAI Grok, OpenRouter 모델 또는 로컬 Ollama를 사용할 수 있어. Ashley가 각 모델의 비전, 웹 검색, 속도, 로컬 한계를 알려줘.",

    why_title:         "왜 Ashley",
    why1_title:        "일회성 구매",
    why1_desc:         "$14.99, 평생 사용. 구독 없음, 갱신 없음, 우리에게서 월별 청구 없음. 영원히.",
    why2_title:        "클라우드 또는 100% 로컬",
    why2_desc:         "자기 xAI 또는 OpenRouter 키를 쓰거나, Ollama를 로컬에서 무료로 사용해. 클라우드 비용은 선택한 모델에 따라 달라.",
    why3_title:        "기본적으로 프라이버시",
    why3_desc:         "채팅 기록, 추억, 일기, 환경설정 — 사용자 폴더에 암호화. 우리는 서버가 없어; 너의 데이터를 볼 수가 없어.",

    pricing_title:     "Ashley 받기",
    pricing_product:   "Ashley — AI 데스크톱 컴패니언",
    pricing_note:      "일회성 · 평생 · 3 PC · 무료 체험",
    price_feat1:       "✓ 채팅, 음성, 웨이크 워드가 있는 2D/3D 데스크톱 펫 모드",
    price_feat2:       "✓ 기억, 일기, 리마인더, 목표, 중요한 메모",
    price_feat3:       "✓ 음성: 로컬 Whisper 입력 + Windows / Kokoro / VoiceVox / ElevenLabs 출력",
    price_feat4:       "✓ 허락할 때 화면과 이미지 비전",
    price_feat5:       "✓ 선택적 PC 액션: 앱, 탭, 볼륨, 핫키, 입력, 미디어, 검색",
    price_feat6:       "✓ xAI Grok, OpenRouter 또는 로컬 Ollama 모델",
    price_feat7:       "✓ 호감도, 무드, 2D 초상화, 3D 얼굴 표정",
    price_feat8:       "✓ 다국어: 7개 언어 (EN, ES, FR, JA, DE, RU, KO)",
    pricing_cta:       "Ashley 사기 — $14.99",
    pricing_secure:    "🔒 Lemon Squeezy 안전 결제",

    faq_title:         "자주 묻는 질문",
    faq1_q:            "Ashley는 정확히 무엇이야?",
    faq1_a:            "캐릭터 중심 AI 컴패니언이 들어있는 Windows 데스크톱 앱이야. Ashley는 자연스럽게 대화하고, 너를 기억하고, 무드와 호감도로 반응하고, 2D/3D 데스크톱 펫으로 나타날 수 있으며, Actions를 켜면 PC도 제어해.",
    faq2_q:            "어떤 AI 모델을 써?",
    faq2_a:            "네 선택. Ashley는 xAI Grok, OpenRouter, 로컬 Ollama를 지원해. 클라우드 제공자는 자기 키를 쓰고, Ollama는 로컬에서 무료로 실행할 수 있어. 비전, 웹 검색, 속도, 언어 품질은 선택한 모델에 따라 달라.",
    faq3_q:            "정말 목소리로 깨어나?",
    faq3_a:            "응. 웨이크 워드는 openWakeWord로 PC에서 로컬 동작하고, 마이크를 클라우드로 스트리밍하지 않아. 「Ashley」라고 말하거나 메인 앱/펫 모드의 마이크를 누르면 돼. 언제든 끌 수 있어.",
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
