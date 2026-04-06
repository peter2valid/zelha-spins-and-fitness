export const siteConfig = {
  name: "Zelha Spin and Fitness Gym",
  shortName: "Zelha",
  tagline: "Your Premier Fitness Companion",
  description:
    "We are committed to providing a safe and motivating space that makes you want to work out, ensuring your fitness journey is enjoyable and successful.",
  location: "Juja, Kenya",
  landmark: "Kalimoni Highway View Plaza (Former Uchumi), Juja, Kenya",
  email: "zelhafitness@gmail.com",
  phoneNumbers: ["0702836266", "0110 719277"],
  whatsapp: "0702836266",
  socialLinks: {
    instagram: "https://www.instagram.com/zelhafitness",
    tiktok: "https://www.tiktok.com/@zelhafitness",
    facebook: "https://www.facebook.com/zelhaaFitness"
  },
  hours: [
    { label: "Monday", value: "Strength & Conditioning" },
    { label: "Tuesday", value: "Spin Class 6:30 – 7:30 PM" },
    { label: "Wednesday", value: "HIIT Class 6:30 – 7:30 PM" },
    { label: "Thursday", value: "Spin 8:00 – 9:00 AM · Aerobics & Power Training 6:30 – 7:30 PM" },
    { label: "Friday", value: "Zumba Dance 6:30 – 7:30 PM" },
    { label: "Saturday", value: "HIIT Class 6:30 – 7:30 PM" },
    { label: "Sunday", value: "HIIT Class 8:00 – 9:00 AM" }
  ]
};

export const heroSlides = [
  {
    image: "/images/hero-cycling.jpg",
    title: "Spin Hard.",
    subtitle: "Your Premier Fitness Companion",
    description:
      "Join Juja's high-energy fitness community for instructor-led spin sessions, strength work, and cardio classes that keep you motivated every day."
  },
  {
    image: "/images/hero-strength.jpg",
    title: "Build Strength.",
    subtitle: "Move With Purpose",
    description:
      "From strength training to personal coaching, we provide a safe and motivating space that makes you want to work out every day."
  },
  {
    image: "/images/hero-hiit.jpg",
    title: "Stay Consistent.",
    subtitle: "Feel The Zelha Energy",
    description:
      "Whether you are a beginner or advanced athlete, our coaching team helps you train safely and keep progressing. Located at Kalimoni Highway View Plaza, Juja."
  }
];

export const whyChooseUs = [
  {
    title: "Safe & Motivating Space",
    description:
      "We are committed to providing an environment that makes you want to work out — every single day.",
    image: "/images/service-support.jpg"
  },
  {
    title: "Diverse Classes",
    description:
      "Spin, HIIT, Zumba, Strength Training, Boot Camp, Personal Training, and Outdoor Hikes — all under one roof.",
    image: "/images/service-strength.jpg"
  },
  {
    title: "Expert Coaches",
    description:
      "Levis and Martin are certified in spinning, strength, HIIT, aerobics, kickboxing, calisthenics, and swimming.",
    image: "/images/service-cycling.jpg"
  }
];

export const classHighlights = [
  {
    title: "Spinning & Indoor Cycling",
    description: "High-energy bike sessions led by our certified instructors."
  },
  {
    title: "HIIT",
    description: "Interval-focused sessions for endurance, fat loss, and cardiovascular health."
  },
  {
    title: "Strength Training",
    description: "Progressive resistance and conditioning programs for lean muscle and power."
  },
  {
    title: "Zumba Dance",
    description: "Rhythm-driven classes that make cardio intense and genuinely enjoyable."
  },
  {
    title: "Personal Training",
    description: "One-on-one coaching tailored specifically to your goals and schedule."
  },
  {
    title: "Boot Camp & Outdoor Hikes",
    description: "Group boot camps and organised outdoor hikes for functional fitness."
  }
];

export const programPillars = [
  {
    title: "Spin Power",
    description: "Cadence drills, climbs, and endurance rides — every Tuesday and Thursday."
  },
  {
    title: "Strength Lab",
    description: "Structured strength and conditioning every Monday, plus power training on Thursdays."
  },
  {
    title: "Cardio Engine",
    description: "High-intensity HIIT blocks every Wednesday, Saturday, and Sunday morning."
  },
  {
    title: "Dance Burn",
    description: "Zumba dance sessions every Friday evening — cardio that feels like a party."
  }
];

export const timetable = [
  {
    time: "Morning",
    monday: "–",
    tuesday: "–",
    wednesday: "–",
    thursday: "Spin Class 8:00–9:00 AM",
    friday: "–",
    saturday: "–",
    sunday: "HIIT Class 8:00–9:00 AM"
  },
  {
    time: "All Day (Mon)",
    monday: "Strength & Conditioning",
    tuesday: "–",
    wednesday: "–",
    thursday: "–",
    friday: "–",
    saturday: "–",
    sunday: "–"
  },
  {
    time: "Evening (6:30 PM)",
    monday: "–",
    tuesday: "Spin Class",
    wednesday: "HIIT Class",
    thursday: "Aerobics & Power Training",
    friday: "Zumba Dance",
    saturday: "HIIT Class",
    sunday: "–"
  }
];

export const galleryItems = [
  { image: "/images/gallery-cardio.jpg", label: "Cardio Sessions" },
  { image: "/images/gallery-team.jpg", label: "Gym Community" },
  { image: "/images/gallery-running.jpg", label: "Endurance Training" },
  { image: "/images/gallery-endurance.jpg", label: "Group Conditioning" },
  { image: "/images/gallery-mobility.jpg", label: "Mobility Work" },
  { image: "/images/gallery-boxing.jpg", label: "Power Drills" }
];

export const coaches = [
  {
    name: "Levis Alozio",
    role: "Spinning · Strength · HIIT · Kickboxing · Calisthenics",
    image: "/images/trainer-1.jpg"
  },
  {
    name: "Martin Muturi",
    role: "Spinning · Strength · HIIT · Aerobics · Swimming",
    image: "/images/trainer-2.jpg"
  }
];

export const membershipPlans = [
  {
    name: "Regular Membership",
    summary: "Full gym & class access for everyone",
    price: "Ksh 3,000 / mo",
    featured: false,
    features: [
      "Unlimited gym floor access",
      "All group classes (Spin, HIIT, Zumba, Boot Camp)",
      "Personal training add-on available",
      "Drop-in rate: Ksh 400 / day"
    ]
  },
  {
    name: "Student Membership",
    summary: "Exclusive discount with valid student ID",
    price: "Ksh 2,500 / mo",
    featured: true,
    features: [
      "Ksh 500 discount on regular membership",
      "Unlimited gym floor access",
      "All group classes included",
      "Drop-in rate: Ksh 300 / day"
    ]
  },
  {
    name: "Personal Training",
    summary: "One-on-one sessions with certified coaches",
    price: "Ksh 1,500 / mo",
    featured: false,
    features: [
      "Tailored 1:1 coaching sessions",
      "Custom workout plan",
      "Specialist coaches: Levis & Martin",
      "Flexible scheduling"
    ]
  }
];
