export interface ReasonItem {
  id: number;
  icon: string;
  title: string;
  back: string;
  gradientClass: string;
}

export interface SurvivalKitItem {
  id: number;
  icon: string;
  name: string;
  desc: string;
  memory: string;
  gradientClass: string;
  delay: string;
}

export interface GalleryPhoto {
  id: number;
  src: string;
  caption: string;
  aspectClass: string;
}

export interface VideoMessage {
  id: number;
  src: string;
  poster: string;
  name: string;
  role: string;
  avatarText?: string;
  quote: string;
  fullMessage: string;
}

export const heroData = {
  navBrand: "For Our Chief ✦",
  eyebrow: "Honoring Our Chief Coordinator",
  title: "Happy Birthday to Our Chief Coordinator!",
  subtitle: "To the one who keeps every plan on track, every team in sync, and every one of us smiling — today is all about you.",
  cta: "Open Your Surprise ✨",
  portraitSrc: "/chief-portrait.jpg",
  portraitAlt: "Our Chief Coordinator - Dr. Antara Sonawane",
  coordinatorBadge: "Dr. Antara Sonawane — Chief Coordinator & Mentor",
};

export const reasonsData: ReasonItem[] = [
  {
    id: 0,
    icon: "📋",
    title: "The Master Organizer",
    back: "She can plan a 300-person event in a week and still remember everyone's coffee order.",
    gradientClass: "bg-gradient-blush",
  },
  {
    id: 1,
    icon: "🧊",
    title: "Cool Under Pressure",
    back: "Venue cancelled an hour before? She just smiles, makes two calls, and it's fixed.",
    gradientClass: "bg-gradient-butter",
  },
  {
    id: 2,
    icon: "💖",
    title: "The Heart of the Team",
    back: "She checks in on every one of us — and somehow always knows when we need it.",
    gradientClass: "bg-gradient-cream",
  },
  {
    id: 3,
    icon: "🌟",
    title: "Endless Positivity",
    back: "\"We've got this!\" — her most-sent message, and she's always right.",
    gradientClass: "bg-gradient-rose",
  },
  {
    id: 4,
    icon: "🎯",
    title: "Detail Queen",
    back: "No typo, missing chair, or wrong time slot has ever escaped her eagle eye.",
    gradientClass: "bg-gradient-blush",
  },
  {
    id: 5,
    icon: "🤝",
    title: "Our Biggest Cheerleader",
    back: "She celebrates every small win like it's the grand finale. We love you for it!",
    gradientClass: "bg-gradient-butter",
  },
];

export const survivalKitData: SurvivalKitItem[] = [
  {
    id: 0,
    icon: "🫂",
    name: "JD",
    desc: "“The ultimate right hand—brilliant, dependable, and full of laughter.”",
    memory: "Assistant Chief Coordinator by title, best friend by choice, and the ultimate partner-in-crime behind every success.",
    gradientClass: "bg-gradient-blush",
    delay: "0s",
  },
  {
    id: 1,
    icon: "😇",
    name: "Dr. Mody",
    desc: "“The ultimate anchor, sounding board, and partner-in-everything since graduation.”",
    memory: "From sharing lecture notes back in college to masterminding life's biggest events today, she is the keeper of every secret, ambition, and quietest daily thought. A true survival kit essential who has been there through every chapter.",
    gradientClass: "bg-gradient-butter",
    delay: "0.6s",
  },
  {
    id: 2,
    icon: "☕",
    name: "Coffee",
    desc: "“Essential fuel for early morning syncs and late-night venue setups.”",
    memory: "Amol Sir knows precisely how Dr. Antara Sonawane takes her coffee—and exactly how to make every event run just as smoothly.",
    gradientClass: "bg-gradient-cream",
    delay: "1.2s",
  },
  {
    id: 3,
    icon: "🍫",
    name: "Emergency Snacks",
    desc: "“The secret ingredient behind smooth coordination?”",
    memory: "Whether it’s a tight deadline, a last-minute venue shift, or just mid-day hunger, her go-to emergency routine never fails: grab a fresh Vada Pav or Samosa, reset, recharge, and rule the day.",
    gradientClass: "bg-gradient-rose",
    delay: "1.8s",
  },
  {
    id: 4,
    icon: "📱",
    name: "WhatsApp Groups",
    desc: "“Managing 50+ coordinator chats without losing sanity.”",
    memory: "From urgent event updates to midnight venue queries, her reply speed across 50+ coordinator group chats is faster than 5G—she clears notifications before anyone else can even hit send!",
    gradientClass: "bg-gradient-blush",
    delay: "2.4s",
  },
  {
    id: 5,
    icon: "📒",
    name: "Secret Stash",
    desc: "“Where color-coded plans meet her secret daily thoughts and feelings.”",
    memory: "From event masterplans to her quietest daily thoughts and feelings, known only to her.",
    gradientClass: "bg-gradient-butter",
    delay: "3.0s",
  },
];

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 0,
    src: "/assets/aistudio/old_campus_6093adc2.jpeg",
    caption: "Last picture of Old Campus",
    aspectClass: "aspect-[4/5]",
  },
  {
    id: 1,
    src: "/assets/aistudio/inspiring1_ea6de202.jpeg",
    caption: "Inspiring Vision",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: 2,
    src: "/assets/aistudio/garba_6a6a047d.jpeg",
    caption: "Garba Girls",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: 3,
    src: "/assets/aistudio/matargasti_c5c05d1c.jpeg",
    caption: "Matargasti",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: 4,
    src: "/assets/aistudio/sqaud1_a3fc69ed.jpeg",
    caption: "Core Squad",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: 5,
    src: "/assets/aistudio/all_in_one_f08fcdf5.jpeg",
    caption: "All in One Frame",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: 6,
    src: "/assets/aistudio/golden_daa5e5a6.jpeg",
    caption: "Golden Days & Timeless Memories",
    aspectClass: "aspect-[16/9]",
  },
];

export const videoMessages: VideoMessage[] = [
  {
    id: 0,
    src: "/assets/aistudio/jagruti_263e46c6.mp4",
    poster: "/thumbnails/jagruti.jpg",
    name: "Jagruti (JD)",
    role: "Assistant Chief Coordinator & Best Friend",
    avatarText: "JD",
    quote: "“To my partner-in-crime and the finest coordinator ever!”",
    fullMessage: "Happy Birthday Dr. Antara Sonawane! From late-night event preps to solving every crisis side-by-side with unstoppable laughter, you are truly one of a kind. Here's to countless more milestones and adventures together!",
  },
  {
    id: 1,
    src: "/assets/aistudio/mody_ce3052f1.mp4",
    poster: "/thumbnails/mody.jpg",
    name: "Dr. Mody",
    role: "Assistant Professor",
    avatarText: "DM",
    quote: "“Wishing you immense success, health, and endless happiness!”",
    fullMessage: "A very Happy Birthday to Dr. Antara Sonawane! Your dedicated leadership, tireless coordination, and positive warmth brighten our entire department and faculty.",
  },
  {
    id: 2,
    src: "/assets/aistudio/principal_video_d7464f17.mp4",
    poster: "/thumbnails/principal.jpg",
    name: "Dr. Navin Punjabi",
    role: "Principal, K.P.B. Hinduja College",
    avatarText: "NP",
    quote: "“A visionary leader whose dedication inspires our entire institution.”",
    fullMessage: "Wishing Dr. Antara Sonawane a wonderful and prosperous birthday! Her leadership as Chief Coordinator elevates every initiative at K.P.B. Hinduja College to true excellence.",
  },
  {
    id: 3,
    src: "/assets/aistudio/gang_5068237f.mp4",
    poster: "/thumbnails/gang.jpg",
    name: "Core Committee & AICTE Team",
    role: "The Coordination Gang",
    avatarText: "AICTE",
    quote: "“To the Chief who turns chaotic madness into unforgettable triumphs!”",
    fullMessage: "Happy Birthday Ma'am! You are the engine that keeps our entire committee buzzing with energy, laughs, and purpose. We celebrate you today and every day!",
  },
  {
    id: 4,
    src: "/assets/aistudio/amol_66cb3e69.mp4",
    poster: "/thumbnails/amol.jpg",
    name: "Amol Sir & Colleagues",
    role: "Coordination & Faculty Squad",
    avatarText: "AS",
    quote: "“May your coffee be hot, plans seamless, and year extraordinary!”",
    fullMessage: "Wishing Dr. Antara Sonawane a very joyful and blessed birthday! Thank you for being such an uplifting mentor, colleague, and guiding star for everyone around you.",
  },
  {
    id: 5,
    src: "/assets/aistudio/student_16b742a2.mp4",
    poster: "/thumbnails/student.jpg",
    name: "Students & Tremor Batch",
    role: "Student Council & Volunteers",
    avatarText: "SC",
    quote: "“The coolest, kindest, and most inspiring Chief ever!”",
    fullMessage: "Happy Birthday to our favorite Chief Coordinator Dr. Antara Sonawane! Thank you for always listening, guiding us patiently, and cheering for all of our crazy ideas!",
  },
];

export const birthdayNote = {
  title: "A Little Note From All of Us",
  message:
    "Happy Birthday to our wonderful Chief! Thank you for bringing us together, believing in us, and making even the busiest days brighter. We hope this year gives you as much joy as you give all of us. Today, the plans can wait — it’s your turn to be celebrated! 💛",
  signoff: "With love and the biggest hugs, your whole team",
};
