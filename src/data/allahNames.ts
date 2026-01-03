export interface AllahName {
  id: number;
  arabic: string;
  transliteration: string;
  meaning: string;
  explanation: string;
  invocation: {
    arabic: string;
    transliteration: string;
    translation: string;
  };
  authenticDuas?: {
    arabic: string;
    transliteration: string;
    translation: string;
    source: string;
  }[];
  category: string[];
}

export const allahNames: AllahName[] = [
  {
    id: 1,
    arabic: "الرَّحْمَنُ",
    transliteration: "Ar-Rahman",
    meaning: "The Most Compassionate",
    explanation: "He is the possessor of immense mercy that covers all creation, believers and non-believers alike. His Rahma is perfect, endless, and will never be outdone. The word encompasses every kind of affection and kindness.",
    invocation: {
      arabic: "اللَّهُمَّ يَا رَحْمَنُ، اغْمُرْنِي بِرَحْمَتِكَ الْوَاسِعَةِ",
      transliteration: "Allahumma ya Rahman, ighmurni birahmatika al-wasi'ah",
      translation: "O Allah, O Most Compassionate, envelop me in Your vast mercy"
    },
    authenticDuas: [
      {
        arabic: "رَبَّنَا وَسِعْتَ كُلَّ شَيْءٍ رَحْمَةً وَعِلْمًا",
        transliteration: "Rabbana wasi'ta kulla shay'in rahmatan wa 'ilma",
        translation: "Our Lord, You have encompassed all things in mercy and knowledge",
        source: "Quran 40:7"
      }
    ],
    category: ["mercy", "compassion"]
  },
  {
    id: 2,
    arabic: "الرَّحِيمُ",
    transliteration: "Ar-Raheem",
    meaning: "The Most Merciful",
    explanation: "His specialty mercy is continuous for those who believe, act with sincerity, and seek Him. Ar-Raheem provides His gentle care, forgiveness, and shelter to those who call to Him.",
    invocation: {
      arabic: "اللَّهُمَّ يَا رَحِيمُ، شُمِّلْنِي بِرَحْمَتِكَ الْخَاصَّةِ وَاغْفِرْ لِي زَلَّاتِي",
      transliteration: "Allahumma ya Raheem, shamilni birahmatika al-khasa wa'ghfir li zalati",
      translation: "O Allah, O Most Merciful, include me in Your special mercy and forgive my mistakes"
    },
    authenticDuas: [
      {
        arabic: "رَبِّ اغْفِرْ وَارْحَمْ وَأَنتَ خَيْرُ الرَّاحِمِينَ",
        transliteration: "Rabbighfir warham wa anta khayrur rahimin",
        translation: "My Lord, forgive and have mercy, and You are the best of the merciful",
        source: "Quran 23:118"
      }
    ],
    category: ["mercy", "forgiveness"]
  },
  {
    id: 3,
    arabic: "الْمَلِكُ",
    transliteration: "Al-Malik",
    meaning: "The Eternal Lord",
    explanation: "The King, The Sovereign Lord, The One with complete dominion over all things. He is the Master of everything, owning all sovereignty and authority.",
    invocation: {
      arabic: "اللَّهُمَّ يَا مَلِكُ، مَلِّكْنِي نَفْسِي وَأَعِنِّي عَلَى طَاعَتِكَ",
      transliteration: "Allahumma ya Malik, mallikni nafsi wa a'inni 'ala ta'atik",
      translation: "O Allah, O Sovereign, grant me control over myself and help me in Your obedience"
    },
    authenticDuas: [
      {
        arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ الْمَلِكُ الْحَقُّ الْمُبِينُ",
        transliteration: "La ilaha illallah al-Malik al-Haqq al-Mubin",
        translation: "There is no god but Allah, the True and Manifest King",
        source: "Hadith - Sahih"
      }
    ],
    category: ["sovereignty", "power"]
  },
  {
    id: 4,
    arabic: "الْقُدُّوسُ",
    transliteration: "Al-Quddus",
    meaning: "The Most Sacred",
    explanation: "The Pure One, The Most Holy. He is free from all imperfections, deficiencies, and from anything that does not befit His Majesty.",
    invocation: {
      arabic: "سُبُّوحٌ قُدُّوسٌ رَبُّ الْمَلَائِكَةِ وَالرُّوحِ",
      transliteration: "Subbuhun Quddusun Rabbul-mala'ikati war-ruh",
      translation: "Glory be to Him, The Most Holy, Lord of the angels and the Spirit"
    },
    authenticDuas: [
      {
        arabic: "سُبُّوحٌ قُدُّوسٌ رَبُّ الْمَلَائِكَةِ وَالرُّوحِ",
        transliteration: "Subbuhun Quddusun Rabbul-mala'ikati war-ruh",
        translation: "Glory be to Him, The Most Holy, Lord of the angels and the Spirit",
        source: "Sahih Muslim"
      }
    ],
    category: ["purity", "holiness"]
  },
  {
    id: 5,
    arabic: "السَّلَامُ",
    transliteration: "As-Salaam",
    meaning: "The Source of Peace",
    explanation: "The Giver of Peace and Security. He is the One who is free from all defects and the One who grants peace to His creation.",
    invocation: {
      arabic: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
      transliteration: "Allahumma antas-salam wa minkas-salam, tabarakta ya dhal-jalali wal-ikram",
      translation: "O Allah, You are Peace and from You comes peace. Blessed are You, O Owner of Majesty and Honor"
    },
    authenticDuas: [
      {
        arabic: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ",
        transliteration: "Allahumma antas-salam wa minkas-salam",
        translation: "O Allah, You are Peace and from You comes peace",
        source: "Sahih Muslim"
      }
    ],
    category: ["peace", "security"]
  },
  {
    id: 6,
    arabic: "الْمُؤْمِنُ",
    transliteration: "Al-Mu'min",
    meaning: "The Infuser of Faith",
    explanation: "The Giver of Faith and Security. He is the One who gives security to His servants and protects them from His punishment.",
    invocation: {
      arabic: "اللَّهُمَّ يَا مُؤْمِنُ، آمِنِّي مِنْ كُلِّ خَوْفٍ وَثَبِّتْنِي عَلَى الْإِيمَانِ",
      transliteration: "Allahumma ya Mu'min, aminni min kulli khawfin wa thabbitni 'alal-iman",
      translation: "O Allah, O Giver of Faith, grant me security from all fear and keep me steadfast on faith"
    },
    category: ["faith", "security"]
  },
  {
    id: 7,
    arabic: "الْمُهَيْمِنُ",
    transliteration: "Al-Muhaymin",
    meaning: "The Protector, The Overseer",
    explanation: "The Guardian, The Witness, The One who watches over and protects all things. He is the One who ensures the safety of His creation.",
    invocation: {
      arabic: "اللَّهُمَّ يَا مُهَيْمِنُ، احْفَظْنِي بِحِفْظِكَ وَكُنْ لِي وَلِيًّا وَنَصِيرًا",
      transliteration: "Allahumma ya Muhaymin, ihfazni bihifzik wa kun li waliyyan wa nasira",
      translation: "O Allah, O Protector, protect me with Your protection and be my guardian and helper"
    },
    category: ["protection", "watchfulness"]
  },
  {
    id: 8,
    arabic: "الْعَزِيزُ",
    transliteration: "Al-Aziz",
    meaning: "The Mighty, The Invincible",
    explanation: "The Almighty, The Powerful, The One who overcomes all and cannot be overcome. His might is absolute and eternal.",
    invocation: {
      arabic: "اللَّهُمَّ يَا عَزِيزُ، أَعِزَّنِي بِطَاعَتِكَ وَلَا تُذِلَّنِي بِمَعْصِيَتِكَ",
      transliteration: "Allahumma ya Aziz, a'izzani bita'atik wa la tudhillani bima'siyatik",
      translation: "O Allah, O Mighty One, honor me through obedience to You and do not humiliate me through disobedience"
    },
    category: ["power", "might"]
  },
  {
    id: 9,
    arabic: "الْجَبَّارُ",
    transliteration: "Al-Jabbar",
    meaning: "The Compeller",
    explanation: "The One who repairs and restores, The One who compels all to His will. He mends the broken-hearted and forces the arrogant to submit.",
    invocation: {
      arabic: "اللَّهُمَّ يَا جَبَّارُ، اجْبُرْ كَسْرِي وَأَصْلِحْ أَمْرِي",
      transliteration: "Allahumma ya Jabbar, ijbur kasri wa aslih amri",
      translation: "O Allah, O Restorer, mend my brokenness and fix my affairs"
    },
    category: ["power", "restoration"]
  },
  {
    id: 10,
    arabic: "الْمُتَكَبِّرُ",
    transliteration: "Al-Mutakabbir",
    meaning: "The Supreme, The Majestic",
    explanation: "The One who is above all deficiency, The Greatest. Pride and Greatness belong only to Him.",
    invocation: {
      arabic: "سُبْحَانَ اللَّهِ الْمُتَكَبِّرِ عَنْ كُلِّ سُوءٍ",
      transliteration: "Subhanallah al-Mutakabbir 'an kulli su'",
      translation: "Glory be to Allah, The Supreme above all evil"
    },
    category: ["greatness", "majesty"]
  },
  {
    id: 11,
    arabic: "الْخَالِقُ",
    transliteration: "Al-Khaliq",
    meaning: "The Creator",
    explanation: "The One who creates everything from nothing, The One who determines the measure of all things before their creation.",
    invocation: {
      arabic: "اللَّهُمَّ يَا خَالِقُ، اخْلُقْ فِي قَلْبِي حُبَّكَ وَحُبَّ مَنْ يُحِبُّكَ",
      transliteration: "Allahumma ya Khaliq, ukhluq fi qalbi hubbak wa hubba man yuhibbuk",
      translation: "O Allah, O Creator, create in my heart love for You and love for those who love You"
    },
    category: ["creation", "power"]
  },
  {
    id: 12,
    arabic: "الْبَارِئُ",
    transliteration: "Al-Bari'",
    meaning: "The Evolver",
    explanation: "The One who gives distinguished existence to everything, The One who creates without any previous pattern.",
    invocation: {
      arabic: "اللَّهُمَّ يَا بَارِئُ، أَبْرِئْنِي مِنْ كُلِّ دَاءٍ وَبَلَاءٍ",
      transliteration: "Allahumma ya Bari', abri'ni min kulli da'in wa bala'",
      translation: "O Allah, O Evolver, heal me from all disease and affliction"
    },
    category: ["creation", "healing"]
  },
  {
    id: 13,
    arabic: "الْمُصَوِّرُ",
    transliteration: "Al-Musawwir",
    meaning: "The Fashioner",
    explanation: "The One who forms and shapes His creation in different forms and images as He wills.",
    invocation: {
      arabic: "اللَّهُمَّ يَا مُصَوِّرُ، صَوِّرْنِي فِي أَحْسَنِ صُورَةٍ ظَاهِرًا وَبَاطِنًا",
      transliteration: "Allahumma ya Musawwir, sawwirni fi ahsani suratin zahiran wa batinan",
      translation: "O Allah, O Fashioner, shape me in the best form, outwardly and inwardly"
    },
    category: ["creation", "beauty"]
  },
  {
    id: 14,
    arabic: "الْغَفَّارُ",
    transliteration: "Al-Ghaffar",
    meaning: "The Ever-Forgiving",
    explanation: "The One who forgives sins repeatedly, The One who conceals faults and covers shortcomings.",
    invocation: {
      arabic: "اللَّهُمَّ يَا غَفَّارُ، اغْفِرْ لِي ذُنُوبِي كُلَّهَا دِقَّهَا وَجِلَّهَا",
      transliteration: "Allahumma ya Ghaffar, ighfir li dhunubi kullaha diqqaha wa jillaha",
      translation: "O Allah, O Ever-Forgiving, forgive all my sins, the minor and the major"
    },
    authenticDuas: [
      {
        arabic: "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا",
        transliteration: "Rabbana ighfir lana dhunubana wa israfana fi amrina",
        translation: "Our Lord, forgive us our sins and our excesses in our affairs",
        source: "Quran 3:147"
      }
    ],
    category: ["forgiveness", "mercy"]
  },
  {
    id: 15,
    arabic: "الْقَهَّارُ",
    transliteration: "Al-Qahhar",
    meaning: "The All-Subduing",
    explanation: "The One who dominates all things, The One who subdues His creation according to His will.",
    invocation: {
      arabic: "اللَّهُمَّ يَا قَهَّارُ، اقْهَرْ عَنِّي كُلَّ شَرٍّ وَعَدُوٍّ",
      transliteration: "Allahumma ya Qahhar, iqhar 'anni kulla sharrin wa 'aduww",
      translation: "O Allah, O All-Subduing, subdue from me all evil and enemies"
    },
    category: ["power", "dominion"]
  },
  {
    id: 16,
    arabic: "الْوَهَّابُ",
    transliteration: "Al-Wahhab",
    meaning: "The Supreme Bestower",
    explanation: "The One who gives freely without expecting return, The Generous Giver who bestows countless blessings.",
    invocation: {
      arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ",
      transliteration: "Rabbana la tuzigh qulubana ba'da idh hadaytana wa hab lana min ladunka rahmah, innaka antal-Wahhab",
      translation: "Our Lord, do not let our hearts deviate after You have guided us, and grant us mercy from Yourself. Indeed, You are the Bestower"
    },
    authenticDuas: [
      {
        arabic: "رَبِّ هَبْ لِي مِنْ لَدُنْكَ ذُرِّيَّةً طَيِّبَةً",
        transliteration: "Rabbi hab li min ladunka dhurriyyatan tayyibah",
        translation: "My Lord, grant me from Yourself good offspring",
        source: "Quran 3:38"
      }
    ],
    category: ["generosity", "blessings"]
  },
  {
    id: 17,
    arabic: "الرَّزَّاقُ",
    transliteration: "Ar-Razzaq",
    meaning: "The Provider",
    explanation: "The One who provides all sustenance, The One who creates and distributes all means of nourishment.",
    invocation: {
      arabic: "اللَّهُمَّ يَا رَزَّاقُ، ارْزُقْنِي رِزْقًا حَلَالًا طَيِّبًا مُبَارَكًا فِيهِ",
      transliteration: "Allahumma ya Razzaq, urzuqni rizqan halalan tayyiban mubarakan fih",
      translation: "O Allah, O Provider, grant me provision that is lawful, pure, and blessed"
    },
    authenticDuas: [
      {
        arabic: "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
        transliteration: "Allahumma ikfini bihalalika 'an haramik wa aghnini bifadlika 'amman siwak",
        translation: "O Allah, suffice me with what is lawful against what is unlawful, and enrich me by Your favor against all others",
        source: "Tirmidhi"
      }
    ],
    category: ["provision", "sustenance"]
  },
  {
    id: 18,
    arabic: "الْفَتَّاحُ",
    transliteration: "Al-Fattah",
    meaning: "The Opener",
    explanation: "The One who opens the doors of mercy and sustenance, The Judge who resolves all matters.",
    invocation: {
      arabic: "اللَّهُمَّ يَا فَتَّاحُ، افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ وَرِزْقِكَ",
      transliteration: "Allahumma ya Fattah, iftah li abwaba rahmatik wa rizqik",
      translation: "O Allah, O Opener, open for me the doors of Your mercy and provision"
    },
    authenticDuas: [
      {
        arabic: "رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنتَ خَيْرُ الْفَاتِحِينَ",
        transliteration: "Rabbana iftah baynana wa bayna qawmina bil-haqq wa anta khayrul-fatihin",
        translation: "Our Lord, decide between us and our people in truth, and You are the best of those who decide",
        source: "Quran 7:89"
      }
    ],
    category: ["opening", "relief"]
  },
  {
    id: 19,
    arabic: "الْعَلِيمُ",
    transliteration: "Al-Alim",
    meaning: "The All-Knowing",
    explanation: "The One whose knowledge encompasses everything, The One who knows all secrets and hidden things.",
    invocation: {
      arabic: "اللَّهُمَّ يَا عَلِيمُ، عَلِّمْنِي مَا يَنْفَعُنِي وَانْفَعْنِي بِمَا عَلَّمْتَنِي",
      transliteration: "Allahumma ya 'Alim, 'allimni ma yanfa'uni wanfa'ni bima 'allamtani",
      translation: "O Allah, O All-Knowing, teach me what benefits me and benefit me from what You taught me"
    },
    category: ["knowledge", "wisdom"]
  },
  {
    id: 20,
    arabic: "الْقَابِضُ",
    transliteration: "Al-Qabid",
    meaning: "The Withholder",
    explanation: "The One who contracts and restricts, The One who takes away what He wills in His wisdom.",
    invocation: {
      arabic: "اللَّهُمَّ يَا قَابِضُ، اقْبِضْ عَنِّي كُلَّ شَرٍّ وَابْسُطْ لِي كُلَّ خَيْرٍ",
      transliteration: "Allahumma ya Qabid, iqbid 'anni kulla sharrin wabsut li kulla khayr",
      translation: "O Allah, O Withholder, withhold from me all evil and extend to me all good"
    },
    category: ["control", "wisdom"]
  },
  {
    id: 21,
    arabic: "الْبَاسِطُ",
    transliteration: "Al-Basit",
    meaning: "The Extender",
    explanation: "The One who extends and expands, The One who grants abundance and joy.",
    invocation: {
      arabic: "اللَّهُمَّ يَا بَاسِطُ، ابْسُطْ لِي فِي رِزْقِي وَعُمْرِي وَعِلْمِي",
      transliteration: "Allahumma ya Basit, ubsut li fi rizqi wa 'umri wa 'ilmi",
      translation: "O Allah, O Extender, extend for me in my provision, my life, and my knowledge"
    },
    category: ["expansion", "generosity"]
  },
  {
    id: 22,
    arabic: "الْخَافِضُ",
    transliteration: "Al-Khafid",
    meaning: "The Abaser",
    explanation: "The One who lowers whoever He wills, The One who humbles the arrogant.",
    invocation: {
      arabic: "اللَّهُمَّ يَا خَافِضُ، اخْفِضْ عَنِّي كِبْرِي وَارْفَعْ قَدْرِي عِنْدَكَ",
      transliteration: "Allahumma ya Khafid, ikhfid 'anni kibri warfa' qadri 'indak",
      translation: "O Allah, O Abaser, lower my pride and raise my status with You"
    },
    category: ["humility", "justice"]
  },
  {
    id: 23,
    arabic: "الرَّافِعُ",
    transliteration: "Ar-Rafi",
    meaning: "The Exalter",
    explanation: "The One who raises whoever He wills, The One who elevates status and honor.",
    invocation: {
      arabic: "اللَّهُمَّ يَا رَافِعُ، ارْفَعْنِي فِي الدُّنْيَا وَالْآخِرَةِ",
      transliteration: "Allahumma ya Rafi', irfa'ni fid-dunya wal-akhirah",
      translation: "O Allah, O Exalter, raise me in this world and the Hereafter"
    },
    category: ["elevation", "honor"]
  },
  {
    id: 24,
    arabic: "الْمُعِزُّ",
    transliteration: "Al-Mu'izz",
    meaning: "The Bestower of Honor",
    explanation: "The One who gives honor to whoever He wills, The One who strengthens and empowers.",
    invocation: {
      arabic: "اللَّهُمَّ يَا مُعِزُّ، أَعِزَّنِي بِالْإِسْلَامِ وَأَعِزَّ الْإِسْلَامَ بِي",
      transliteration: "Allahumma ya Mu'izz, a'izzani bil-Islam wa a'izzal-Islam bi",
      translation: "O Allah, O Bestower of Honor, honor me through Islam and honor Islam through me"
    },
    category: ["honor", "dignity"]
  },
  {
    id: 25,
    arabic: "المُذِلُّ",
    transliteration: "Al-Mudhill",
    meaning: "The Humiliator",
    explanation: "The One who abases whoever He wills, The One who brings low the arrogant and oppressors.",
    invocation: {
      arabic: "اللَّهُمَّ لَا تُذِلَّنِي بِذَنْبٍ وَلَا تُخْزِنِي يَوْمَ الْقِيَامَةِ",
      transliteration: "Allahumma la tudhillani bidhanbin wa la tukhzini yawmal-qiyamah",
      translation: "O Allah, do not humiliate me due to sin and do not disgrace me on the Day of Judgment"
    },
    category: ["justice", "power"]
  },
  {
    id: 26,
    arabic: "السَّمِيعُ",
    transliteration: "As-Sami",
    meaning: "The All-Hearing",
    explanation: "The One who hears all things, The One whose hearing encompasses all sounds and calls.",
    invocation: {
      arabic: "اللَّهُمَّ يَا سَمِيعُ، اسْمَعْ دُعَائِي وَاسْتَجِبْ نِدَائِي",
      transliteration: "Allahumma ya Sami', isma' du'a'i wastajib nida'i",
      translation: "O Allah, O All-Hearing, hear my supplication and answer my call"
    },
    authenticDuas: [
      {
        arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ",
        transliteration: "Sami'Allahu liman hamidah",
        translation: "Allah hears whoever praises Him",
        source: "Sahih Bukhari"
      }
    ],
    category: ["hearing", "response"]
  },
  {
    id: 27,
    arabic: "الْبَصِيرُ",
    transliteration: "Al-Basir",
    meaning: "The All-Seeing",
    explanation: "The One who sees all things, The One whose sight encompasses everything in creation.",
    invocation: {
      arabic: "اللَّهُمَّ يَا بَصِيرُ، بَصِّرْنِي بِعُيُوبِي وَأَصْلِحْهَا لِي",
      transliteration: "Allahumma ya Basir, basirni bi'uyubi wa aslihha li",
      translation: "O Allah, O All-Seeing, make me see my faults and rectify them for me"
    },
    category: ["sight", "awareness"]
  },
  {
    id: 28,
    arabic: "الْحَكَمُ",
    transliteration: "Al-Hakam",
    meaning: "The Judge",
    explanation: "The One who judges with perfect justice, The Arbitrator whose judgment is final.",
    invocation: {
      arabic: "اللَّهُمَّ يَا حَكَمُ، احْكُمْ لِي بِالْحَقِّ وَانْصُرْنِي عَلَى مَنْ ظَلَمَنِي",
      transliteration: "Allahumma ya Hakam, uhkum li bil-haqq wansurni 'ala man zalamani",
      translation: "O Allah, O Judge, judge in my favor with truth and help me against whoever wronged me"
    },
    category: ["justice", "judgment"]
  },
  {
    id: 29,
    arabic: "الْعَدْلُ",
    transliteration: "Al-Adl",
    meaning: "The Utterly Just",
    explanation: "The One who is just in all His actions, The One who establishes perfect equity.",
    invocation: {
      arabic: "اللَّهُمَّ يَا عَدْلُ، اجْعَلْنِي مِنَ الْعَادِلِينَ وَأَقِمْ بِي الْعَدْلَ",
      transliteration: "Allahumma ya 'Adl, ij'alni minal-'adilin wa aqim bil-'adl",
      translation: "O Allah, O Just One, make me among the just and establish justice through me"
    },
    category: ["justice", "fairness"]
  },
  {
    id: 30,
    arabic: "اللَّطِيفُ",
    transliteration: "Al-Latif",
    meaning: "The Subtle One",
    explanation: "The One who is subtle in His actions, The One who is kind and gentle to His servants.",
    invocation: {
      arabic: "اللَّهُمَّ يَا لَطِيفُ، الْطُفْ بِي فِي تَيْسِيرِ أُمُورِي",
      transliteration: "Allahumma ya Latif, ultuf bi fi taysiri umuri",
      translation: "O Allah, O Subtle One, be gentle with me in easing my affairs"
    },
    category: ["kindness", "gentleness"]
  },
  {
    id: 31,
    arabic: "الْخَبِيرُ",
    transliteration: "Al-Khabir",
    meaning: "The All-Aware",
    explanation: "The One who knows the reality of all things, The One aware of all inner and outer matters.",
    invocation: {
      arabic: "اللَّهُمَّ يَا خَبِيرُ، اجْعَلْنِي خَبِيرًا بِدِينِكَ وَفَقِّهْنِي فِيهِ",
      transliteration: "Allahumma ya Khabir, ij'alni khabiran bidinik wa faqqihni fih",
      translation: "O Allah, O All-Aware, make me knowledgeable of Your religion and grant me understanding in it"
    },
    category: ["knowledge", "awareness"]
  },
  {
    id: 32,
    arabic: "الْحَلِيمُ",
    transliteration: "Al-Halim",
    meaning: "The Forbearing",
    explanation: "The One who delays punishment, The One who is patient and tolerant despite having power.",
    invocation: {
      arabic: "اللَّهُمَّ يَا حَلِيمُ، احْلُمْ عَلَيَّ وَلَا تُعَاجِلْنِي بِالْعُقُوبَةِ",
      transliteration: "Allahumma ya Halim, uhlum 'alayya wa la tu'ajilni bil-'uqubah",
      translation: "O Allah, O Forbearing, be patient with me and do not hasten my punishment"
    },
    category: ["patience", "mercy"]
  },
  {
    id: 33,
    arabic: "الْعَظِيمُ",
    transliteration: "Al-Azim",
    meaning: "The Magnificent",
    explanation: "The One who is extremely great, The One whose greatness is beyond comprehension.",
    invocation: {
      arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
      transliteration: "Subhana Rabbiyal-'Azim",
      translation: "Glory be to my Lord, The Magnificent"
    },
    authenticDuas: [
      {
        arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
        transliteration: "Subhana Rabbiyal-'Azim",
        translation: "Glory be to my Lord, The Magnificent",
        source: "Sahih Muslim"
      }
    ],
    category: ["greatness", "glory"]
  },
  {
    id: 34,
    arabic: "الْغَفُورُ",
    transliteration: "Al-Ghafur",
    meaning: "The Forgiving",
    explanation: "The One who forgives and pardons sins, The One whose forgiveness is extensive.",
    invocation: {
      arabic: "اللَّهُمَّ يَا غَفُورُ، اغْفِرْ لِي ذَنْبِي كُلَّهُ دِقَّهُ وَجِلَّهُ",
      transliteration: "Allahumma ya Ghafur, ighfir li dhanbi kullahu diqqahu wa jillahu",
      translation: "O Allah, O Forgiving, forgive all my sins, small and great"
    },
    authenticDuas: [
      {
        arabic: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الْغَفُورُ",
        transliteration: "Rabbighfir li wa tub 'alayya innaka antat-Tawwab ul-Ghafur",
        translation: "My Lord, forgive me and accept my repentance. Indeed, You are the Accepting of repentance, the Forgiving",
        source: "Abu Dawud"
      }
    ],
    category: ["forgiveness", "mercy"]
  },
  {
    id: 35,
    arabic: "الشَّكُورُ",
    transliteration: "Ash-Shakur",
    meaning: "The Appreciative",
    explanation: "The One who appreciates little and gives much, The One who rewards small deeds greatly.",
    invocation: {
      arabic: "اللَّهُمَّ يَا شَكُورُ، اجْعَلْنِي شَكُورًا لِنِعَمِكَ",
      transliteration: "Allahumma ya Shakur, ij'alni shakuran lini'amik",
      translation: "O Allah, O Appreciative, make me grateful for Your blessings"
    },
    category: ["gratitude", "reward"]
  },
  {
    id: 36,
    arabic: "الْعَلِيُّ",
    transliteration: "Al-Ali",
    meaning: "The Most High",
    explanation: "The One who is above all creation, The Exalted One above everything.",
    invocation: {
      arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
      transliteration: "Subhana Rabbiyal-A'la",
      translation: "Glory be to my Lord, The Most High"
    },
    authenticDuas: [
      {
        arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        transliteration: "Subhana Rabbiyal-A'la",
        translation: "Glory be to my Lord, The Most High",
        source: "Sahih Muslim"
      }
    ],
    category: ["elevation", "transcendence"]
  },
  {
    id: 37,
    arabic: "الْكَبِيرُ",
    transliteration: "Al-Kabir",
    meaning: "The Great",
    explanation: "The One who is incomparably great, The One greater than everything.",
    invocation: {
      arabic: "اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا",
      transliteration: "Allahu Akbaru kabiran wal-hamdulillahi kathiran",
      translation: "Allah is the Greatest, greatly, and praise be to Allah, abundantly"
    },
    category: ["greatness", "majesty"]
  },
  {
    id: 38,
    arabic: "الْحَفِيظُ",
    transliteration: "Al-Hafiz",
    meaning: "The Preserver",
    explanation: "The One who protects and preserves His creation, The Guardian of all things.",
    invocation: {
      arabic: "اللَّهُمَّ يَا حَفِيظُ، احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي",
      transliteration: "Allahumma ya Hafiz, ihfazni min bayni yadayya wa min khalfi",
      translation: "O Allah, O Preserver, protect me from before me and from behind me"
    },
    category: ["protection", "preservation"]
  },
  {
    id: 39,
    arabic: "المُقِيتُ",
    transliteration: "Al-Muqit",
    meaning: "The Nourisher",
    explanation: "The One who provides nourishment, The One who sustains and maintains all creation.",
    invocation: {
      arabic: "اللَّهُمَّ يَا مُقِيتُ، أَقِتْ قَلْبِي بِذِكْرِكَ وَأَقِتْ بَدَنِي بِرِزْقِكَ",
      transliteration: "Allahumma ya Muqit, aqit qalbi bidhikrik wa aqit badani birizqik",
      translation: "O Allah, O Nourisher, nourish my heart with Your remembrance and my body with Your provision"
    },
    category: ["sustenance", "nourishment"]
  },
  {
    id: 40,
    arabic: "الْحَسِيبُ",
    transliteration: "Al-Hasib",
    meaning: "The Reckoner",
    explanation: "The One who takes account, The One sufficient for His servants.",
    invocation: {
      arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
      transliteration: "Hasbunallahu wa ni'mal-wakil",
      translation: "Allah is sufficient for us, and He is the best Disposer of affairs"
    },
    authenticDuas: [
      {
        arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
        transliteration: "Hasbunallahu wa ni'mal-wakil",
        translation: "Allah is sufficient for us, and He is the best Disposer of affairs",
        source: "Quran 3:173"
      }
    ],
    category: ["sufficiency", "accounting"]
  },
  {
    id: 41,
    arabic: "الْجَلِيلُ",
    transliteration: "Al-Jalil",
    meaning: "The Majestic",
    explanation: "The One who possesses great glory, The One whose majesty is supreme.",
    invocation: {
      arabic: "سُبْحَانَ ذِي الْجَلَالِ وَالْإِكْرَامِ",
      transliteration: "Subhana dhil-jalali wal-ikram",
      translation: "Glory be to the Possessor of Majesty and Honor"
    },
    category: ["majesty", "glory"]
  },
  {
    id: 42,
    arabic: "الْكَرِيمُ",
    transliteration: "Al-Karim",
    meaning: "The Generous",
    explanation: "The One who is generous and bountiful, The One whose giving is limitless.",
    invocation: {
      arabic: "اللَّهُمَّ يَا كَرِيمُ، أَكْرِمْنِي بِطَاعَتِكَ وَلَا تُهِنِّي بِمَعْصِيَتِكَ",
      transliteration: "Allahumma ya Karim, akrimni bita'atik wa la tuhinnni bima'siyatik",
      translation: "O Allah, O Generous, honor me with obedience to You and do not disgrace me with disobedience"
    },
    category: ["generosity", "honor"]
  },
  {
    id: 43,
    arabic: "الرَّقِيبُ",
    transliteration: "Ar-Raqib",
    meaning: "The Watchful",
    explanation: "The One who watches over all things, The Observer who misses nothing.",
    invocation: {
      arabic: "اللَّهُمَّ يَا رَقِيبُ، اجْعَلْنِي أَخْشَاكَ كَأَنِّي أَرَاكَ",
      transliteration: "Allahumma ya Raqib, ij'alni akhshaka ka'anni arak",
      translation: "O Allah, O Watchful, make me fear You as if I see You"
    },
    category: ["watchfulness", "awareness"]
  },
  {
    id: 44,
    arabic: "الْمُجِيبُ",
    transliteration: "Al-Mujib",
    meaning: "The Responsive",
    explanation: "The One who responds to prayers, The One who answers when called upon.",
    invocation: {
      arabic: "اللَّهُمَّ يَا مُجِيبُ، أَجِبْ دَعْوَتِي وَاقْضِ حَاجَتِي",
      transliteration: "Allahumma ya Mujib, ajib da'wati waqdi hajati",
      translation: "O Allah, O Responsive, answer my call and fulfill my need"
    },
    authenticDuas: [
      {
        arabic: "إِنَّ رَبِّي قَرِيبٌ مُجِيبٌ",
        transliteration: "Inna Rabbi qaribun mujib",
        translation: "Indeed, my Lord is near and responsive",
        source: "Quran 11:61"
      }
    ],
    category: ["response", "answering"]
  },
  {
    id: 45,
    arabic: "الْوَاسِعُ",
    transliteration: "Al-Wasi",
    meaning: "The All-Encompassing",
    explanation: "The One whose capacity is vast, The One whose knowledge, mercy, and generosity encompass all.",
    invocation: {
      arabic: "اللَّهُمَّ يَا وَاسِعُ، وَسِّعْ عَلَيَّ فِي رِزْقِي وَوَسِّعْ صَدْرِي",
      transliteration: "Allahumma ya Wasi', wassi' 'alayya fi rizqi wa wassi' sadri",
      translation: "O Allah, O All-Encompassing, expand my provision and expand my chest"
    },
    category: ["vastness", "encompassing"]
  },
  {
    id: 46,
    arabic: "الْحَكِيمُ",
    transliteration: "Al-Hakim",
    meaning: "The Wise",
    explanation: "The One who possesses perfect wisdom, The One whose every action is based on wisdom.",
    invocation: {
      arabic: "اللَّهُمَّ يَا حَكِيمُ، ارْزُقْنِي الْحِكْمَةَ وَفَصْلَ الْخِطَابِ",
      transliteration: "Allahumma ya Hakim, urzuqnil-hikmata wa faslal-khitab",
      translation: "O Allah, O Wise, grant me wisdom and decisive speech"
    },
    category: ["wisdom", "knowledge"]
  },
  {
    id: 47,
    arabic: "الْوَدُودُ",
    transliteration: "Al-Wadud",
    meaning: "The Loving",
    explanation: "The One who loves His righteous servants, The One who is loving and affectionate.",
    invocation: {
      arabic: "اللَّهُمَّ يَا وَدُودُ، اجْعَلْنِي مِنْ أَحْبَابِكَ وَأَوْلِيَائِكَ",
      transliteration: "Allahumma ya Wadud, ij'alni min ahbabik wa awliya'ik",
      translation: "O Allah, O Loving, make me among Your beloved and Your allies"
    },
    category: ["love", "affection"]
  },
  {
    id: 48,
    arabic: "الْمَجِيدُ",
    transliteration: "Al-Majid",
    meaning: "The Glorious",
    explanation: "The One who is full of glory and honor, The Most Honorable.",
    invocation: {
      arabic: "اللَّهُمَّ يَا مَجِيدُ، أَمْجِدْنِي بِالْعَمَلِ الصَّالِحِ",
      transliteration: "Allahumma ya Majid, amjidni bil-'amal as-salih",
      translation: "O Allah, O Glorious, honor me with righteous deeds"
    },
    category: ["glory", "honor"]
  },
  {
    id: 49,
    arabic: "الْبَاعِثُ",
    transliteration: "Al-Ba'ith",
    meaning: "The Resurrector",
    explanation: "The One who raises the dead, The One who sends prophets.",
    invocation: {
      arabic: "اللَّهُمَّ يَا بَاعِثُ، ابْعَثْنِي عَلَى أَحْسَنِ حَالٍ يَوْمَ الْقِيَامَةِ",
      transliteration: "Allahumma ya Ba'ith, ib'athni 'ala ahsani halin yawmal-qiyamah",
      translation: "O Allah, O Resurrector, resurrect me in the best state on the Day of Judgment"
    },
    category: ["resurrection", "sending"]
  },
  {
    id: 50,
    arabic: "الشَّهِيدُ",
    transliteration: "Ash-Shahid",
    meaning: "The Witness",
    explanation: "The One who witnesses all things, The One from whom nothing is hidden.",
    invocation: {
      arabic: "اللَّهُمَّ يَا شَهِيدُ، أَشْهِدْ لِي بِالْإِيمَانِ وَالْعَمَلِ الصَّالِحِ",
      transliteration: "Allahumma ya Shahid, ashhid li bil-iman wal-'amal as-salih",
      translation: "O Allah, O Witness, testify for me with faith and righteous deeds"
    },
    category: ["witnessing", "presence"]
  },
  {
    id: 51,
    arabic: "الْحَقُّ",
    transliteration: "Al-Haqq",
    meaning: "The Truth",
    explanation: "The One who is the absolute truth, The Reality whose existence is undeniable.",
    invocation: {
      arabic: "اللَّهُمَّ يَا حَقُّ، أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ",
      transliteration: "Allahumma ya Haqq, arinal-haqqa haqqan warzuqnattiba'ah",
      translation: "O Allah, O Truth, show us truth as truth and grant us to follow it"
    },
    category: ["truth", "reality"]
  },
  {
    id: 52,
    arabic: "الْوَكِيلُ",
    transliteration: "Al-Wakil",
    meaning: "The Trustee",
    explanation: "The One who handles affairs, The Ultimate Guardian whom one can rely upon.",
    invocation: {
      arabic: "حَسْبِيَ اللَّهُ وَنِعْمَ الْوَكِيلُ",
      transliteration: "Hasbiyallahu wa ni'mal-wakil",
      translation: "Allah is sufficient for me and He is the best Trustee"
    },
    authenticDuas: [
      {
        arabic: "حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ",
        transliteration: "Hasbiyallahu la ilaha illa huwa 'alayhi tawakkaltu",
        translation: "Allah is sufficient for me; there is no god except Him. Upon Him I rely",
        source: "Quran 9:129"
      }
    ],
    category: ["trust", "reliance"]
  },
  {
    id: 53,
    arabic: "الْقَوِيُّ",
    transliteration: "Al-Qawiyy",
    meaning: "The Strong",
    explanation: "The One possessing complete power, The All-Strong who never tires.",
    invocation: {
      arabic: "اللَّهُمَّ يَا قَوِيُّ، قَوِّنِي عَلَى طَاعَتِكَ",
      transliteration: "Allahumma ya Qawiyy, qawwini 'ala ta'atik",
      translation: "O Allah, O Strong, strengthen me in obedience to You"
    },
    category: ["strength", "power"]
  },
  {
    id: 54,
    arabic: "الْمَتِينُ",
    transliteration: "Al-Matin",
    meaning: "The Firm",
    explanation: "The One who is extremely firm and stable, The One whose power never decreases.",
    invocation: {
      arabic: "اللَّهُمَّ يَا مَتِينُ، ثَبِّتْنِي عَلَى دِينِكَ",
      transliteration: "Allahumma ya Matin, thabbitni 'ala dinik",
      translation: "O Allah, O Firm, keep me steadfast upon Your religion"
    },
    category: ["firmness", "stability"]
  },
  {
    id: 55,
    arabic: "الْوَلِيُّ",
    transliteration: "Al-Waliyy",
    meaning: "The Protecting Friend",
    explanation: "The One who supports and protects, The Guardian and Helper of believers.",
    invocation: {
      arabic: "اللَّهُمَّ يَا وَلِيُّ، كُنْ لِي وَلِيًّا وَنَصِيرًا",
      transliteration: "Allahumma ya Waliyy, kun li waliyyan wa nasira",
      translation: "O Allah, O Protecting Friend, be for me a guardian and helper"
    },
    category: ["protection", "friendship"]
  },
  {
    id: 56,
    arabic: "الْحَمِيدُ",
    transliteration: "Al-Hamid",
    meaning: "The Praiseworthy",
    explanation: "The One who is praised, The One deserving of all praise.",
    invocation: {
      arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      transliteration: "Alhamdulillahi Rabbil-'alamin",
      translation: "All praise is due to Allah, Lord of all worlds"
    },
    authenticDuas: [
      {
        arabic: "رَبَّنَا لَكَ الْحَمْدُ مِلْءَ السَّمَاوَاتِ وَمِلْءَ الْأَرْضِ",
        transliteration: "Rabbana lakal-hamdu mil'as-samawati wa mil'al-ard",
        translation: "Our Lord, to You belongs all praise, filling the heavens and the earth",
        source: "Sahih Muslim"
      }
    ],
    category: ["praise", "gratitude"]
  },
  {
    id: 57,
    arabic: "الْمُحْصِي",
    transliteration: "Al-Muhsi",
    meaning: "The Counter",
    explanation: "The One who counts everything, The One who knows the number of all things.",
    invocation: {
      arabic: "اللَّهُمَّ يَا مُحْصِي، أَحْصِ لِي حَسَنَاتِي وَتَجَاوَزْ عَنْ سَيِّئَاتِي",
      transliteration: "Allahumma ya Muhsi, ahsi li hasanati wa tajawaz 'an sayyi'ati",
      translation: "O Allah, O Counter, count my good deeds and overlook my sins"
    },
    category: ["counting", "awareness"]
  },
  {
    id: 58,
    arabic: "الْمُبْدِئُ",
    transliteration: "Al-Mubdi",
    meaning: "The Originator",
    explanation: "The One who creates from nothing, The Initiator of all creation.",
    invocation: {
      arabic: "اللَّهُمَّ يَا مُبْدِئُ، أَبْدِئْ لِي فِي حَيَاتِي صَفْحَةً جَدِيدَةً",
      transliteration: "Allahumma ya Mubdi', abdi' li fi hayati safhatan jadidah",
      translation: "O Allah, O Originator, start for me in my life a new page"
    },
    category: ["creation", "beginning"]
  },
  {
    id: 59,
    arabic: "الْمُعِيدُ",
    transliteration: "Al-Mu'id",
    meaning: "The Restorer",
    explanation: "The One who brings back creation after death, The One who repeats creation.",
    invocation: {
      arabic: "اللَّهُمَّ يَا مُعِيدُ، أَعِدْ إِلَيَّ عَافِيَتِي وَسَعَادَتِي",
      transliteration: "Allahumma ya Mu'id, a'id ilayya 'afiyati wa sa'adati",
      translation: "O Allah, O Restorer, restore to me my well-being and happiness"
    },
    category: ["restoration", "return"]
  },
  {
    id: 60,
    arabic: "الْمُحْيِي",
    transliteration: "Al-Muhyi",
    meaning: "The Giver of Life",
    explanation: "The One who gives life to the dead, The One who creates life.",
    invocation: {
      arabic: "اللَّهُمَّ يَا مُحْيِي، أَحْيِ قَلْبِي بِذِكْرِكَ وَحُبِّكَ",
      transliteration: "Allahumma ya Muhyi, ahyi qalbi bidhikrik wa hubbik",
      translation: "O Allah, O Giver of Life, revive my heart with Your remembrance and love"
    },
    category: ["life", "revival"]
  },
  {
    id: 61,
    arabic: "الْمُمِيتُ",
    transliteration: "Al-Mumit",
    meaning: "The Taker of Life",
    explanation: "The One who causes death, The One who takes souls at their appointed time.",
    invocation: {
      arabic: "اللَّهُمَّ يَا مُمِيتُ، أَمِتْنِي مُسْلِمًا وَأَحْيِنِي مُسْلِمًا",
      transliteration: "Allahumma ya Mumit, amitni musliman wa ahyini muslima",
      translation: "O Allah, O Taker of Life, cause me to die as a Muslim and keep me alive as a Muslim"
    },
    category: ["death", "destiny"]
  },
  {
    id: 62,
    arabic: "الْحَيُّ",
    transliteration: "Al-Hayy",
    meaning: "The Ever-Living",
    explanation: "The One who has perfect, eternal life, The Living One who never dies.",
    invocation: {
      arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ",
      transliteration: "Ya Hayyu ya Qayyum birahmatika astaghith",
      translation: "O Ever-Living, O Self-Sustaining, by Your mercy I seek relief"
    },
    authenticDuas: [
      {
        arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ",
        transliteration: "Ya Hayyu ya Qayyum birahmatika astaghith",
        translation: "O Ever-Living, O Self-Sustaining, by Your mercy I seek relief",
        source: "Tirmidhi"
      }
    ],
    category: ["life", "eternal"]
  },
  {
    id: 63,
    arabic: "الْقَيُّومُ",
    transliteration: "Al-Qayyum",
    meaning: "The Self-Sustaining",
    explanation: "The One who sustains all existence, The One who maintains everything.",
    invocation: {
      arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
      transliteration: "Allahu la ilaha illa huwal-Hayyul-Qayyum",
      translation: "Allah, there is no god except Him, the Ever-Living, the Self-Sustaining"
    },
    authenticDuas: [
      {
        arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
        transliteration: "Allahu la ilaha illa huwal-Hayyul-Qayyum",
        translation: "Allah, there is no god except Him, the Ever-Living, the Self-Sustaining",
        source: "Quran 2:255 (Ayat al-Kursi)"
      }
    ],
    category: ["sustaining", "eternal"]
  },
  {
    id: 64,
    arabic: "الْوَاجِدُ",
    transliteration: "Al-Wajid",
    meaning: "The Finder",
    explanation: "The One who finds whatever He wills, The One who lacks nothing.",
    invocation: {
      arabic: "اللَّهُمَّ يَا وَاجِدُ، أَوْجِدْ لِي مَخْرَجًا مِنْ كُلِّ ضِيقٍ",
      transliteration: "Allahumma ya Wajid, awjid li makhrajan min kulli diq",
      translation: "O Allah, O Finder, find for me a way out of every difficulty"
    },
    category: ["finding", "sufficiency"]
  },
  {
    id: 65,
    arabic: "الْمَاجِدُ",
    transliteration: "Al-Majid",
    meaning: "The Noble",
    explanation: "The One who is noble and generous, The Most Glorious.",
    invocation: {
      arabic: "اللَّهُمَّ يَا مَاجِدُ، ارْزُقْنِي مَجْدًا فِي الدَّارَيْنِ",
      transliteration: "Allahumma ya Majid, urzuqni majdan fid-darayn",
      translation: "O Allah, O Noble, grant me glory in both worlds"
    },
    category: ["nobility", "glory"]
  },
  {
    id: 66,
    arabic: "الْوَاحِدُ",
    transliteration: "Al-Wahid",
    meaning: "The One",
    explanation: "The Only One, The Unique who has no partner or equal.",
    invocation: {
      arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
      transliteration: "La ilaha illallahu wahdahu la sharika lah",
      translation: "There is no god but Allah alone, with no partner"
    },
    authenticDuas: [
      {
        arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
        transliteration: "La ilaha illallahu wahdahu la sharika lah",
        translation: "There is no god but Allah alone, with no partner",
        source: "Sahih Bukhari"
      }
    ],
    category: ["oneness", "unity"]
  },
  {
    id: 67,
    arabic: "الْأَحَدُ",
    transliteration: "Al-Ahad",
    meaning: "The Unique",
    explanation: "The One who is absolutely unique, The One with no likeness.",
    invocation: {
      arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
      transliteration: "Qul huwa Allahu Ahad",
      translation: "Say: He is Allah, The Unique"
    },
    authenticDuas: [
      {
        arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ",
        transliteration: "Qul huwa Allahu Ahad, Allahus-Samad",
        translation: "Say: He is Allah, The Unique, Allah the Eternal Refuge",
        source: "Quran 112:1-2"
      }
    ],
    category: ["uniqueness", "oneness"]
  },
  {
    id: 68,
    arabic: "الصَّمَدُ",
    transliteration: "As-Samad",
    meaning: "The Eternal Refuge",
    explanation: "The One whom all creation depends upon, The Self-Sufficient Master.",
    invocation: {
      arabic: "اللَّهُمَّ يَا صَمَدُ، أَنْتَ الْغَنِيُّ وَنَحْنُ الْفُقَرَاءُ إِلَيْكَ",
      transliteration: "Allahumma ya Samad, anta al-ghaniyyu wa nahnu al-fuqara' ilayk",
      translation: "O Allah, O Eternal Refuge, You are the Rich and we are the poor in need of You"
    },
    category: ["refuge", "dependence"]
  },
  {
    id: 69,
    arabic: "الْقَادِرُ",
    transliteration: "Al-Qadir",
    meaning: "The Able",
    explanation: "The One who has power over all things, The All-Capable.",
    invocation: {
      arabic: "اللَّهُمَّ يَا قَادِرُ، قَدِّرْ لِي الْخَيْرَ حَيْثُمَا كَانَ",
      transliteration: "Allahumma ya Qadir, qaddir lil-khayr haythuma kan",
      translation: "O Allah, O Able, decree good for me wherever it may be"
    },
    category: ["power", "capability"]
  },
  {
    id: 70,
    arabic: "الْمُقْتَدِرُ",
    transliteration: "Al-Muqtadir",
    meaning: "The All-Powerful",
    explanation: "The One who has absolute power, The One who creates all power.",
    invocation: {
      arabic: "اللَّهُمَّ يَا مُقْتَدِرُ، اجْعَلْنِي قَادِرًا عَلَى فِعْلِ الْخَيْرَاتِ",
      transliteration: "Allahumma ya Muqtadir, ij'alni qadiran 'ala fi'l al-khayrat",
      translation: "O Allah, O All-Powerful, make me capable of doing good deeds"
    },
    category: ["power", "dominion"]
  },
  {
    id: 71,
    arabic: "الْمُقَدِّمُ",
    transliteration: "Al-Muqaddim",
    meaning: "The Expediter",
    explanation: "The One who brings forward, The One who advances whom He wills.",
    invocation: {
      arabic: "اللَّهُمَّ يَا مُقَدِّمُ، قَدِّمْنِي فِي الْخَيْرَاتِ",
      transliteration: "Allahumma ya Muqaddim, qaddimni fil-khayrat",
      translation: "O Allah, O Expediter, advance me in good deeds"
    },
    category: ["advancement", "precedence"]
  },
  {
    id: 72,
    arabic: "الْمُؤَخِّرُ",
    transliteration: "Al-Mu'akhkhir",
    meaning: "The Delayer",
    explanation: "The One who delays, The One who postpones whom He wills.",
    invocation: {
      arabic: "اللَّهُمَّ يَا مُؤَخِّرُ، أَخِّرْ عَنِّي كُلَّ شَرٍّ وَمَكْرُوهٍ",
      transliteration: "Allahumma ya Mu'akhkhir, akhkhir 'anni kulla sharrin wa makruh",
      translation: "O Allah, O Delayer, delay from me all evil and harm"
    },
    category: ["delaying", "protection"]
  },
  {
    id: 73,
    arabic: "الْأَوَّلُ",
    transliteration: "Al-Awwal",
    meaning: "The First",
    explanation: "The One who has no beginning, The One before all creation.",
    invocation: {
      arabic: "اللَّهُمَّ أَنْتَ الْأَوَّلُ فَلَيْسَ قَبْلَكَ شَيْءٌ",
      transliteration: "Allahumma antal-Awwalu falaysa qablaka shay'",
      translation: "O Allah, You are The First, there is nothing before You"
    },
    authenticDuas: [
      {
        arabic: "أَنْتَ الْأَوَّلُ فَلَيْسَ قَبْلَكَ شَيْءٌ وَأَنْتَ الْآخِرُ فَلَيْسَ بَعْدَكَ شَيْءٌ",
        transliteration: "Antal-Awwalu falaysa qablaka shay' wa antal-Akhiru falaysa ba'daka shay'",
        translation: "You are The First, there is nothing before You, and You are The Last, there is nothing after You",
        source: "Sahih Muslim"
      }
    ],
    category: ["eternity", "beginning"]
  },
  {
    id: 74,
    arabic: "الْآخِرُ",
    transliteration: "Al-Akhir",
    meaning: "The Last",
    explanation: "The One who has no end, The One who remains after all creation perishes.",
    invocation: {
      arabic: "اللَّهُمَّ أَنْتَ الْآخِرُ فَلَيْسَ بَعْدَكَ شَيْءٌ",
      transliteration: "Allahumma antal-Akhiru falaysa ba'daka shay'",
      translation: "O Allah, You are The Last, there is nothing after You"
    },
    category: ["eternity", "end"]
  },
  {
    id: 75,
    arabic: "الظَّاهِرُ",
    transliteration: "Az-Zahir",
    meaning: "The Manifest",
    explanation: "The One who is evident, The One whose existence is undeniable through His signs.",
    invocation: {
      arabic: "اللَّهُمَّ أَنْتَ الظَّاهِرُ فَلَيْسَ فَوْقَكَ شَيْءٌ",
      transliteration: "Allahumma antaz-Zahiru falaysa fawqaka shay'",
      translation: "O Allah, You are The Manifest, there is nothing above You"
    },
    category: ["manifestation", "evidence"]
  },
  {
    id: 76,
    arabic: "الْبَاطِنُ",
    transliteration: "Al-Batin",
    meaning: "The Hidden",
    explanation: "The One who is hidden from senses, The One whose essence is beyond comprehension.",
    invocation: {
      arabic: "اللَّهُمَّ أَنْتَ الْبَاطِنُ فَلَيْسَ دُونَكَ شَيْءٌ",
      transliteration: "Allahumma antal-Batinu falaysa dunaka shay'",
      translation: "O Allah, You are The Hidden, there is nothing closer than You"
    },
    category: ["hiddenness", "nearness"]
  },
  {
    id: 77,
    arabic: "الْوَالِي",
    transliteration: "Al-Wali",
    meaning: "The Patron",
    explanation: "The One who governs all affairs, The Supreme Ruler.",
    invocation: {
      arabic: "اللَّهُمَّ يَا وَالِي، تَوَلَّ أُمُورِي كُلَّهَا",
      transliteration: "Allahumma ya Wali, tawalla umuri kullaha",
      translation: "O Allah, O Patron, take charge of all my affairs"
    },
    category: ["governance", "patronage"]
  },
  {
    id: 78,
    arabic: "الْمُتَعَالِي",
    transliteration: "Al-Muta'ali",
    meaning: "The Transcendent",
    explanation: "The One who is exalted above all, The One supremely high above creation.",
    invocation: {
      arabic: "سُبْحَانَ الْمُتَعَالِي الْكَبِيرِ",
      transliteration: "Subhanal-Muta'ali al-Kabir",
      translation: "Glory be to The Transcendent, The Great"
    },
    category: ["transcendence", "exaltation"]
  },
  {
    id: 79,
    arabic: "الْبَرُّ",
    transliteration: "Al-Barr",
    meaning: "The Source of Goodness",
    explanation: "The One who is most kind and beneficent, The One who bestows all types of goodness.",
    invocation: {
      arabic: "اللَّهُمَّ يَا بَرُّ، أَبِرَّ قَسَمِي وَاغْفِرْ ذَنْبِي",
      transliteration: "Allahumma ya Barr, abirra qasami waghfir dhanbi",
      translation: "O Allah, O Source of Goodness, fulfill my oath and forgive my sin"
    },
    category: ["goodness", "kindness"]
  },
  {
    id: 80,
    arabic: "التَّوَّابُ",
    transliteration: "At-Tawwab",
    meaning: "The Ever-Returning",
    explanation: "The One who constantly returns to forgive, The One who accepts repentance.",
    invocation: {
      arabic: "اللَّهُمَّ يَا تَوَّابُ، تُبْ عَلَيَّ تَوْبَةً نَصُوحًا",
      transliteration: "Allahumma ya Tawwab, tub 'alayya tawbatan nasuhan",
      translation: "O Allah, O Ever-Returning, accept my sincere repentance"
    },
    authenticDuas: [
      {
        arabic: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ",
        transliteration: "Rabbighfir li wa tub 'alayya innaka antat-Tawwab ar-Rahim",
        translation: "My Lord, forgive me and accept my repentance. Indeed, You are the Ever-Returning, the Merciful",
        source: "Abu Dawud"
      }
    ],
    category: ["repentance", "forgiveness"]
  },
  {
    id: 81,
    arabic: "الْمُنْتَقِمُ",
    transliteration: "Al-Muntaqim",
    meaning: "The Avenger",
    explanation: "The One who takes retribution, The One who punishes the oppressors.",
    invocation: {
      arabic: "اللَّهُمَّ يَا مُنْتَقِمُ، انْتَقِمْ لِي مِمَّنْ ظَلَمَنِي",
      transliteration: "Allahumma ya Muntaqim, intaqim li mimman zalamani",
      translation: "O Allah, O Avenger, take revenge for me against those who wronged me"
    },
    category: ["justice", "retribution"]
  },
  {
    id: 82,
    arabic: "الْعَفُوُّ",
    transliteration: "Al-Afuww",
    meaning: "The Pardoner",
    explanation: "The One who pardons sins, The One who erases sins completely.",
    invocation: {
      arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
      transliteration: "Allahumma innaka 'Afuwwun tuhibbul-'afwa fa'fu 'anni",
      translation: "O Allah, You are The Pardoner who loves to pardon, so pardon me"
    },
    authenticDuas: [
      {
        arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
        transliteration: "Allahumma innaka 'Afuwwun tuhibbul-'afwa fa'fu 'anni",
        translation: "O Allah, You are The Pardoner who loves to pardon, so pardon me",
        source: "Tirmidhi"
      }
    ],
    category: ["pardon", "forgiveness"]
  },
  {
    id: 83,
    arabic: "الرَّؤُوفُ",
    transliteration: "Ar-Ra'uf",
    meaning: "The Compassionate",
    explanation: "The One who is extremely compassionate, The Most Kind.",
    invocation: {
      arabic: "اللَّهُمَّ يَا رَءُوفُ، ارْأَفْ بِي وَارْحَمْنِي",
      transliteration: "Allahumma ya Ra'uf, ir'af bi warhamni",
      translation: "O Allah, O Compassionate, have compassion on me and have mercy on me"
    },
    category: ["compassion", "kindness"]
  },
  {
    id: 84,
    arabic: "مَالِكُ الْمُلْكِ",
    transliteration: "Malik-ul-Mulk",
    meaning: "Owner of All Sovereignty",
    explanation: "The Owner of all dominion, The One who possesses absolute sovereignty.",
    invocation: {
      arabic: "قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَنْ تَشَاءُ",
      transliteration: "Qul Allahumma Malikal-Mulk tu'til-mulka man tasha'",
      translation: "Say: O Allah, Owner of Sovereignty, You give sovereignty to whom You will"
    },
    authenticDuas: [
      {
        arabic: "اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَنْ تَشَاءُ وَتَنْزِعُ الْمُلْكَ مِمَّنْ تَشَاءُ",
        transliteration: "Allahumma Malikal-Mulk tu'til-mulka man tasha' wa tanzi'ul-mulka mimman tasha'",
        translation: "O Allah, Owner of Sovereignty, You give sovereignty to whom You will and take it away from whom You will",
        source: "Quran 3:26"
      }
    ],
    category: ["sovereignty", "dominion"]
  },
  {
    id: 85,
    arabic: "ذُو الْجَلَالِ وَالْإِكْرَامِ",
    transliteration: "Dhul-Jalali wal-Ikram",
    meaning: "Lord of Majesty and Generosity",
    explanation: "The One who possesses both majesty and bounty, The Most Honorable.",
    invocation: {
      arabic: "يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
      transliteration: "Ya Dhal-Jalali wal-Ikram",
      translation: "O Lord of Majesty and Generosity"
    },
    authenticDuas: [
      {
        arabic: "أَلِظُّوا بِيَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
        transliteration: "Alizzhu bi Ya Dhal-Jalali wal-Ikram",
        translation: "Persist in saying: O Lord of Majesty and Generosity",
        source: "Tirmidhi"
      }
    ],
    category: ["majesty", "generosity"]
  },
  {
    id: 86,
    arabic: "الْمُقْسِطُ",
    transliteration: "Al-Muqsit",
    meaning: "The Equitable",
    explanation: "The One who acts with equity, The One who is fair and just.",
    invocation: {
      arabic: "اللَّهُمَّ يَا مُقْسِطُ، اجْعَلْنِي مِنَ الْمُقْسِطِينَ",
      transliteration: "Allahumma ya Muqsit, ij'alni minal-muqsitin",
      translation: "O Allah, O Equitable, make me among the equitable"
    },
    category: ["equity", "justice"]
  },
  {
    id: 87,
    arabic: "الْجَامِعُ",
    transliteration: "Al-Jami",
    meaning: "The Gatherer",
    explanation: "The One who gathers all creation, The One who unites what is scattered.",
    invocation: {
      arabic: "اللَّهُمَّ يَا جَامِعُ، اجْمَعْ شَمْلِي وَأَصْلِحْ أَمْرِي",
      transliteration: "Allahumma ya Jami', ijma' shamli wa aslih amri",
      translation: "O Allah, O Gatherer, unite my affairs and rectify my situation"
    },
    category: ["gathering", "uniting"]
  },
  {
    id: 88,
    arabic: "الْغَنِيُّ",
    transliteration: "Al-Ghaniyy",
    meaning: "The Self-Sufficient",
    explanation: "The One who is free of all needs, The Rich who needs nothing.",
    invocation: {
      arabic: "اللَّهُمَّ يَا غَنِيُّ، أَغْنِنِي بِحَلَالِكَ عَنْ حَرَامِكَ",
      transliteration: "Allahumma ya Ghaniyy, aghnini bihalalika 'an haramik",
      translation: "O Allah, O Self-Sufficient, enrich me with Your lawful over Your unlawful"
    },
    category: ["sufficiency", "richness"]
  },
  {
    id: 89,
    arabic: "الْمُغْنِي",
    transliteration: "Al-Mughni",
    meaning: "The Enricher",
    explanation: "The One who enriches whom He wills, The One who satisfies needs.",
    invocation: {
      arabic: "اللَّهُمَّ يَا مُغْنِي، أَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
      transliteration: "Allahumma ya Mughni, aghnini bifadlik 'amman siwak",
      translation: "O Allah, O Enricher, enrich me by Your grace against dependence on others"
    },
    category: ["enrichment", "provision"]
  },
  {
    id: 90,
    arabic: "الْمَانِعُ",
    transliteration: "Al-Mani",
    meaning: "The Preventer",
    explanation: "The One who prevents harm, The One who withholds for wisdom.",
    invocation: {
      arabic: "اللَّهُمَّ يَا مَانِعُ، امْنَعْ عَنِّي كُلَّ شَرٍّ",
      transliteration: "Allahumma ya Mani', imna' 'anni kulla sharr",
      translation: "O Allah, O Preventer, prevent from me all evil"
    },
    category: ["prevention", "protection"]
  },
  {
    id: 91,
    arabic: "الضَّارُّ",
    transliteration: "Ad-Darr",
    meaning: "The Distresser",
    explanation: "The One who causes harm to whom He wills, The One who tests His servants.",
    invocation: {
      arabic: "اللَّهُمَّ لَا ضَارَّ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ",
      transliteration: "Allahumma la darra lima a'tayt wa la mu'tiya lima mana't",
      translation: "O Allah, none can harm what You have given, and none can give what You have withheld"
    },
    category: ["harm", "testing"]
  },
  {
    id: 92,
    arabic: "النَّافِعُ",
    transliteration: "An-Nafi",
    meaning: "The Benefactor",
    explanation: "The One who benefits whom He wills, The One who grants benefit.",
    invocation: {
      arabic: "اللَّهُمَّ يَا نَافِعُ، انْفَعْنِي بِمَا عَلَّمْتَنِي",
      transliteration: "Allahumma ya Nafi', infa'ni bima 'allamtani",
      translation: "O Allah, O Benefactor, benefit me by what You have taught me"
    },
    category: ["benefit", "blessing"]
  },
  {
    id: 93,
    arabic: "النُّورُ",
    transliteration: "An-Nur",
    meaning: "The Light",
    explanation: "The One who is the light of the heavens and earth, The One who guides to the truth.",
    invocation: {
      arabic: "اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا",
      transliteration: "Allahumma ij'al fi qalbi nuran wa fi basari nuran",
      translation: "O Allah, place light in my heart and light in my sight"
    },
    authenticDuas: [
      {
        arabic: "اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا وَفِي سَمْعِي نُورًا",
        transliteration: "Allahumma ij'al fi qalbi nuran wa fi basari nuran wa fi sam'i nuran",
        translation: "O Allah, place light in my heart, light in my sight, and light in my hearing",
        source: "Sahih Bukhari"
      }
    ],
    category: ["light", "guidance"]
  },
  {
    id: 94,
    arabic: "الْهَادِي",
    transliteration: "Al-Hadi",
    meaning: "The Guide",
    explanation: "The One who guides to the truth, The One who shows the straight path.",
    invocation: {
      arabic: "اللَّهُمَّ يَا هَادِي، اهْدِنِي وَسَدِّدْنِي",
      transliteration: "Allahumma ya Hadi, ihdini wa saddidni",
      translation: "O Allah, O Guide, guide me and direct me"
    },
    authenticDuas: [
      {
        arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        transliteration: "Ihdinas-siratal-mustaqim",
        translation: "Guide us to the straight path",
        source: "Quran 1:6"
      }
    ],
    category: ["guidance", "direction"]
  },
  {
    id: 95,
    arabic: "الْبَدِيعُ",
    transliteration: "Al-Badi",
    meaning: "The Incomparable Originator",
    explanation: "The One who originated creation uniquely, The Creator of something unprecedented.",
    invocation: {
      arabic: "اللَّهُمَّ بَدِيعَ السَّمَاوَاتِ وَالْأَرْضِ، أَبْدِعْ لِي حَيَاةً طَيِّبَةً",
      transliteration: "Allahumma Badi'as-samawati wal-ard, abdi' li hayatan tayyibah",
      translation: "O Allah, Originator of the heavens and earth, create for me a good life"
    },
    category: ["creation", "origination"]
  },
  {
    id: 96,
    arabic: "الْبَاقِي",
    transliteration: "Al-Baqi",
    meaning: "The Everlasting",
    explanation: "The One who remains forever, The Eternal who never perishes.",
    invocation: {
      arabic: "اللَّهُمَّ يَا بَاقِي، أَبْقِنِي عَلَى طَاعَتِكَ حَتَّى أَلْقَاكَ",
      transliteration: "Allahumma ya Baqi, abqini 'ala ta'atik hatta alqak",
      translation: "O Allah, O Everlasting, keep me upon Your obedience until I meet You"
    },
    category: ["eternity", "permanence"]
  },
  {
    id: 97,
    arabic: "الْوَارِثُ",
    transliteration: "Al-Warith",
    meaning: "The Inheritor",
    explanation: "The One who remains after all creation perishes, The Ultimate Heir.",
    invocation: {
      arabic: "رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنْتَ خَيْرُ الْوَارِثِينَ",
      transliteration: "Rabbi la tadharnifar dan wa anta khayrul-warithin",
      translation: "My Lord, do not leave me alone, and You are the best of inheritors"
    },
    authenticDuas: [
      {
        arabic: "رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنْتَ خَيْرُ الْوَارِثِينَ",
        transliteration: "Rabbi la tadharnifar dan wa anta khayrul-warithin",
        translation: "My Lord, do not leave me alone, and You are the best of inheritors",
        source: "Quran 21:89"
      }
    ],
    category: ["inheritance", "eternity"]
  },
  {
    id: 98,
    arabic: "الرَّشِيدُ",
    transliteration: "Ar-Rashid",
    meaning: "The Rightly Guided",
    explanation: "The One who guides with perfect wisdom, The Director to the right path.",
    invocation: {
      arabic: "اللَّهُمَّ يَا رَشِيدُ، أَرْشِدْنِي إِلَى الصَّوَابِ فِي كُلِّ أُمُورِي",
      transliteration: "Allahumma ya Rashid, arshidni ilas-sawab fi kulli umuri",
      translation: "O Allah, O Rightly Guided, guide me to what is right in all my affairs"
    },
    category: ["guidance", "righteousness"]
  },
  {
    id: 99,
    arabic: "الصَّبُورُ",
    transliteration: "As-Sabur",
    meaning: "The Patient",
    explanation: "The One who is infinitely patient, The One who does not hasten punishment.",
    invocation: {
      arabic: "اللَّهُمَّ يَا صَبُورُ، ارْزُقْنِي الصَّبْرَ الْجَمِيلَ",
      transliteration: "Allahumma ya Sabur, urzuqnis-sabr al-jamil",
      translation: "O Allah, O Patient, grant me beautiful patience"
    },
    category: ["patience", "forbearance"]
  }
];

// Category to name mapping for AI recommendations
export const categoryMapping: Record<string, number[]> = {
  anxiety: [5, 6, 30, 38, 52, 62, 63],
  fear: [5, 6, 7, 38, 52, 54, 55],
  illness: [2, 12, 60, 62],
  poverty: [17, 18, 88, 89],
  sadness: [9, 30, 47, 83],
  sin: [2, 14, 34, 80, 82],
  guidance: [94, 98, 93],
  protection: [7, 38, 55, 90],
  provision: [17, 21, 39, 89],
  forgiveness: [2, 14, 34, 80, 82],
  strength: [8, 53, 54],
  patience: [32, 99],
  gratitude: [35, 56],
  knowledge: [19, 31, 46],
  peace: [5],
  love: [47],
  justice: [28, 29, 81, 86]
};

export const getNameById = (id: number): AllahName | undefined => {
  return allahNames.find(name => name.id === id);
};

export const searchNames = (query: string): AllahName[] => {
  const lowerQuery = query.toLowerCase();
  return allahNames.filter(name => 
    name.arabic.includes(query) ||
    name.transliteration.toLowerCase().includes(lowerQuery) ||
    name.meaning.toLowerCase().includes(lowerQuery)
  );
};
