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
    icon: "📒",
    name: "Secret Stash",
    desc: "“Where color-coded plans meet her secret daily thoughts and feelings.”",
    memory: "From event masterplans to her quietest daily thoughts and feelings, known only to her.",
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
    icon: "🎧",
    name: "Team Playlist",
    desc: "“The soundtrack of every setup, from soundcheck to the final cake cut.”",
    memory: "The curated rhythm that powers every marathon stage prep, late-night deck editing, and celebratory team dance.",
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
];

export const videoMessages: VideoMessage[] = [
  {
    id: 0,
    src: "/__l5e/assets-v1/d20da638-f777-4fa1-bb72-e6d44a9f7ebf/birthday-sample.webm",
    name: "Ananya",
    role: "Event Lead",
    quote: "“You turned every stressful countdown into pure joy!”",
    fullMessage: "Happy Birthday Ma'am! You are the pillar who holds the whole stage together. No matter how chaotic things get, seeing your calm smile makes the whole team believe we can achieve anything. Have the most wonderful year ahead!",
  },
  {
    id: 1,
    src: "/__l5e/assets-v1/d20da638-f777-4fa1-bb72-e6d44a9f7ebf/birthday-sample.webm",
    name: "Rahul",
    role: "Logistics Coordinator",
    quote: "“To the Chief who always has our back, no matter the hour.”",
    fullMessage: "Wishing the happiest birthday to our favorite leader! Thank you for trusting us with big responsibilities and showing us how genuine leadership is done. Hope you get to relax and eat lots of cake today!",
  },
  {
    id: 2,
    src: "/__l5e/assets-v1/d20da638-f777-4fa1-bb72-e6d44a9f7ebf/birthday-sample.webm",
    name: "Meera",
    role: "Design Team",
    quote: "“Your creative vision inspires every single banner and slide.”",
    fullMessage: "Happy Birthday Dr. Antara Sonawane! Thank you for appreciating every small creative tweak and always giving us the freedom to innovate. You inspire us every single day!",
  },
  {
    id: 3,
    src: "/__l5e/assets-v1/d20da638-f777-4fa1-bb72-e6d44a9f7ebf/birthday-sample.webm",
    name: "Priya",
    role: "Volunteer Head",
    quote: "“Leading hundreds with warmth and unmatched patience.”",
    fullMessage: "Happy birthday to the most patient, energetic, and encouraging mentor! The volunteers look up to you with so much respect and affection. May your year be filled with laughter and endless success!",
  },
  {
    id: 4,
    src: "/__l5e/assets-v1/d20da638-f777-4fa1-bb72-e6d44a9f7ebf/birthday-sample.webm",
    name: "Karan",
    role: "Finance Team",
    quote: "“Balancing numbers and hearts with equal elegance!”",
    fullMessage: "Happy Birthday to our Chief Coordinator! From budget approvals to emergency snack runs, your support is always 100%. Today, all checklists are officially closed in your honor!",
  },
  {
    id: 5,
    src: "/__l5e/assets-v1/d20da638-f777-4fa1-bb72-e6d44a9f7ebf/birthday-sample.webm",
    name: "Sneha",
    role: "Outreach Lead",
    quote: "“You build connections that make our whole institution proud.”",
    fullMessage: "Wishing you the happiest birthday, Dr. Antara Sonawane! Your energy, warmth, and visionary spirit make working together an absolute privilege. Here's to celebrating you in grand style!",
  },
];

export const birthdayNote = {
  title: "A Little Note From All of Us",
  message:
    "Happy Birthday to our wonderful Chief! Thank you for bringing us together, believing in us, and making even the busiest days brighter. We hope this year gives you as much joy as you give all of us. Today, the plans can wait — it’s your turn to be celebrated! 💛",
  signoff: "With love and the biggest hugs, your whole team",
};
