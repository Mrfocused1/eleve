/* Business data for élevé London by Malika.
   Scraped from elevelondonbymalika.com. Update cost/duration by editing this file. */

export const BUSINESS = {
  name: "Élevé London by Malika",
  formerly: "Formerly Sass London Aesthetic",
  tagline: "Where practitioners evolve. Where clients transform.",
  location: "Wembley Park, Wembley, London, UK",
  phone: "+44 7591 188 872",
  phoneHref: "tel:+447591188872",
  whatsapp: "https://wa.me/447591188872",
  email: "Info@elevelondonbymalika.co.uk",
  emailHref: "mailto:Info@elevelondonbymalika.co.uk",
  hours: "By Appointment Only",
  instagram: "https://www.instagram.com/sasslondon_aesthetics/",
  instagramHandle: "@sasslondon_aesthetics",
  tiktok: "https://www.tiktok.com/@elevelondonbymalika",
  tiktokHandle: "@elevelondonbymalika",
  newsletterIncentive: "Join the list for 10% off your first purchase.",
};

export const THERAPISTS = [
  {
    id: "malika",
    name: "Malika",
    title: "Founder & Lead Practitioner",
    short: "Creator of The Élevé Method®",
    bio: "Over 7 years of hands-on practice and teaching experience. Malika integrates clinical precision with holistic body understanding — advanced face and body anatomy + physiology, lymphatic circulation, gut health, hormonal balance, inflammation, metabolic function and long-term wellbeing. Her signature The Élevé Method® combines bespoke mapping, drainage sequences and tailored sculpting protocols for natural, visible results.",
    specialties: ["Body Sculpting", "Fat Dissolving", "Post-Op Recovery", "Anti-Wrinkle", "Lip & Profile"],
    eligibleFor: "all",
    avatar: "assets/therapist-malika.png",
  },
  {
    id: "amina",
    name: "Amina",
    title: "Senior Body Sculpting Therapist",
    short: "Specialist in lymphatic drainage & post-op",
    bio: "Trained under Malika at Élevé Academy. Amina leads our lymphatic drainage, post-operative and body sculpting diaries. Her signature is deep, rhythmic drainage work combined with advanced device protocols for visible definition and recovery.",
    specialties: ["Lymphatic Drainage", "Post-Op Recovery", "SculptWood®", "Cellulite Therapy", "Body Contouring"],
    eligibleFor: ["body", "lymph", "postop", "sculptwood", "rf", "cellulite", "consultation"],
    avatar: "assets/therapist-amina.svg",
    hidden: true,
  },
  {
    id: "noor",
    name: "Noor",
    title: "Wellness & Facial Aesthetics Therapist",
    short: "Facial rejuvenation & SculptWood specialist",
    bio: "Noor leads our facial aesthetics diary alongside Malika, delivering manual facial sculpting, RF skin lift and SculptWood® protocols. She brings a calming clinical presence and a meticulous eye for proportion.",
    specialties: ["RF Skin Lift®", "SculptWood®", "Facial Sculpting", "Firm & Tighten®"],
    eligibleFor: ["face", "rf", "sculptwood", "lymph", "consultation"],
    avatar: "assets/therapist-noor.svg",
    hidden: true,
  },
  {
    id: "isabel",
    name: "Isabel",
    title: "ÉLBM Therapist",
    short: "Body Wellness & Aesthetics, Post-Op Care",
    bio: "Isabel leads our London mobile diary, mentored under Malika at Élevé Academy. Her practice combines body wellness, aesthetics and post-operative care — lymphatic drainage, sculpting protocols, skin health and targeted recovery support. Calm chair-side manner, meticulous mapping, The Élevé Method® standard of care.",
    specialties: ["Body Wellness", "Aesthetics", "Post-Op Care", "Lymphatic Drainage"],
    eligibleFor: ["body", "lymph", "postop", "sculptwood", "rf", "cellulite", "face", "antiwrinkle", "fat", "consultation"],
    avatar: "assets/therapist-isabel.png",
    location: "Harrow, London, UK",
    serviceArea: "Mobile appointments across London + Watford",
  },
  {
    id: "kiah",
    name: "Kiah",
    title: "International ÉLBM Therapist",
    short: "Body Wellness + Post-Op Care",
    bio: "Kiah holds our international diary from South Florida, trained under Malika in The Élevé Method®. Her practice centres on body wellness and post-operative recovery — lymphatic drainage, sculpting, fibrosis management and structured post-surgical care delivered mobile across the Miami, Broward and Palm Beach areas.",
    specialties: ["Body Wellness", "Post-Op Care", "Lymphatic Drainage", "Sculpting"],
    eligibleFor: ["body", "lymph", "postop", "sculptwood", "rf", "cellulite", "consultation"],
    location: "Davie, FL, USA",
    serviceArea: "Mobile appointments across Miami + Broward + Palm Beach",
  },
  {
    id: "yasmin",
    name: "Yasmin",
    title: "Skin Health & Ritual Practitioner",
    short: "Aftercare ritual, oil drainage & skin protocols",
    bio: "Yasmin holds the aftercare and skin-health side of Élevé — guiding clients through the post-session ritual that carries results beyond the treatment room. Trained under Malika, her practice combines daily drainage technique, Signature Body Oil protocols, at-home sculpting rituals and skin-barrier care. Clients leave with a routine built for their anatomy, not a shelf of products.",
    specialties: ["Lymphatic Drainage", "Signature Oil Ritual", "At-Home Protocol", "Skin Barrier Care"],
    eligibleFor: ["lymph", "sculptwood", "consultation"],
    avatar: "assets/therapist-yasmin.png",
    hidden: true,
  },
];

/* Service categories — used for grouping on services + booking pages. */
export const CATEGORIES = [
  { id: "consultation", label: "Consultations", blurb: "Plan your journey with Malika." },
  { id: "body",         label: "Signature Body Sculpting", blurb: "The Élevé Method® — visible, natural refinement." },
  { id: "postop",       label: "Post-Operative Recovery", blurb: "Élevé Recovery® — from day three onwards." },
  { id: "lymph",        label: "Lymphatic & Detox", blurb: "Rhythmic drainage to reset the body." },
  { id: "sculptwood",   label: "SculptWood® Massage", blurb: "Colombian wood therapy reimagined." },
  { id: "rf",           label: "RF & Firm", blurb: "Radio frequency skin lifting and tightening." },
  { id: "cellulite",    label: "Cellulite Therapy", blurb: "Texture, tone, circulation." },
  { id: "fat",          label: "Fat Dissolving", blurb: "Targeted injectables for stubborn pockets." },
  { id: "face",         label: "Facial Aesthetics", blurb: "Lip, profile and line refinement." },
  { id: "antiwrinkle",  label: "Anti-Wrinkle", blurb: "Premium toxin brands." },
];

/* Mapping from slug prefix to category. */
const CAT_MAP = [
  [/^(virtual|in-person)-consultation$/, "consultation"],
  [/^eleve-body-sculpt/,                 "body"],
  [/^eleve-360-body-sculpt/,             "body"],
  [/^eleve-contour/,                     "body"],
  [/^eleve-luxe-butt-lift/,              "body"],
  [/^eleve-recovery/,                    "postop"],
  [/^eleve-lym(p)?h/,                    "lymph"],
  [/^eleve-sculpt-detox/,                "lymph"],
  [/^eleve-sculptwood/,                  "sculptwood"],
  [/^eleve-rf-skin-lift/,                "rf"],
  [/^eleve-firm-tighten/,                "rf"],
  [/^eleve-cellulite-therapy/,           "cellulite"],
  [/^fat-dissolving/,                    "fat"],
  [/^(lip-|chin-|cheek-|line-|pixie-|profile-|signature-duo)/, "face"],
  [/^anti-wrinkle/,                      "antiwrinkle"],
  [/^additional-areas/,                  "antiwrinkle"],
];
export function categoryFor(slug) {
  for (const [re, cat] of CAT_MAP) if (re.test(slug)) return cat;
  return "body";
}

/* Load services at module evaluation — fetched from /data/services.json at runtime. */
export async function loadServices() {
  const res = await fetch("data/services.json");
  if (!res.ok) throw new Error("Failed to load services");
  const items = await res.json();
  return items.map((s) => ({
    ...s,
    category: categoryFor(s.slug),
    durationLabel: formatDuration(s.duration_min),
    priceLabel: `£${Number(s.cost).toFixed(0)}`,
    isPackage: /(\d+)-sessions?$/.test(s.slug) || /sessions?/i.test(s.name || ""),
  }));
}

export function formatDuration(min) {
  if (!min) return "";
  const h = Math.floor(min / 60), m = min % 60;
  if (h && m) return `${h}h ${m}m`;
  if (h) return `${h}h`;
  return `${m}min`;
}

/* Training / Academy — scraped from /éleve-academy */
export const COURSES = [
  {
    id: "ultimate-body-contouring-3",
    track: "Foundation",
    name: "Élevé Ultimate Body Contouring (3 Days)",
    kit: "Full Kit Included",
    price: "POA",
    duration: "3 days",
    level: "Beginner",
    description: "Our most comprehensive foundation programme, using The Élevé Method®. Signature full body sculpting — Lymphatic drainage, Laser lipo, Cavitation, Radio frequency, Wood therapy, Endermotherapy, BBL, Fat dissolving injections and more. Designed for complete beginners, this 3-day course combines intensive theory and practical training, bespoke client planning, safety and business foundations.",
  },
  {
    id: "ultimate-body-contouring-3-no-kit",
    track: "Foundation",
    name: "Élevé Ultimate Body Contouring (3 Days)",
    kit: "Kit not included",
    price: "POA",
    duration: "3 days",
    level: "Beginner",
    description: "As above, without the starter kit. For practitioners who already own required equipment.",
  },
  {
    id: "body-contouring-2",
    track: "Foundation",
    name: "Élevé Body Contouring (2 Days)",
    price: "POA",
    duration: "2 days",
    level: "Beginner",
    description: "Teaches our Signature Full Body Sculpting — Laser lipo, Cavitation, Radio frequency, Lymphatic drainage, Wood therapy and Endermotherapy. Two intensive days of theory and practical training, bespoke client planning, safety and business foundations.",
  },
  {
    id: "lymph-reset-foundation",
    track: "Foundation",
    name: "Élevé Lymph Reset® Foundation (2 Days)",
    price: "POA",
    duration: "2 days",
    level: "Beginner",
    description: "Malika's signature manual lymphatic drainage methods — designed to target bloating, fluid retention and stagnation. Abdominal, back, arm and leg drainage pathways using The Élevé Method®. Ideal for practitioners starting a career in Manual Lymphatic Drainage (MLD). Progress onwards to Sculpt Detox or Recovery Post-Op.",
  },
  {
    id: "sculpt-detox-foundation",
    track: "Foundation",
    name: "Élevé Sculpt Detox® Foundation (2 Days)",
    price: "POA",
    duration: "2 days",
    level: "Beginner",
    description: "Malika's advanced lymphatic drainage and sculpting methods, designed to debloat, define, and improve circulation. Targeted abdominal, back, arm, and leg drainage pathways, sculpting sequences and wellness-led techniques that deliver visible refinement and whole-body benefits.",
  },
  {
    id: "recovery-postop-foundation-kit",
    track: "Foundation",
    name: "Élevé Recovery Post-Op Foundation (2 Days)",
    kit: "Full Kit Included",
    price: "POA",
    duration: "2 days",
    level: "Beginner",
    description: "Core skills of Élevé Recovery® Post-Operative care: Lymphatic drainage, Ultrasound, RF, Taping, Complication prevention + management. Support clients post surgery using structured, clinically informed protocols. Builds confidence in managing swelling, healing and recovery safely and effectively.",
  },
  {
    id: "recovery-postop-foundation",
    track: "Foundation",
    name: "Élevé Recovery Post-Op Foundation (2 Days)",
    kit: "Kit not included",
    price: "POA",
    duration: "2 days",
    level: "Beginner",
    description: "As above, without starter kit.",
  },
  {
    id: "sculptwood-foundation-kit",
    track: "Foundation",
    name: "Élevé SculptWood Massage® Foundation (1 Day)",
    kit: "Full Kit Included",
    price: "POA",
    duration: "1 day",
    level: "Beginner",
    description: "Fundamentals of Colombian Wood Therapy combined with Malika's signature sculpting to refine curves, stimulate circulation and support lymphatic flow. Full-body tool application, cellulite smoothing, debloating and treatment planning.",
  },
  {
    id: "sculptwood-foundation",
    track: "Foundation",
    name: "Élevé SculptWood Massage® Foundation (1 Day)",
    kit: "Kit not included",
    price: "POA",
    duration: "1 day",
    level: "Beginner",
    description: "As above, without starter kit.",
  },
  {
    id: "cavitation-rf-foundation",
    track: "Foundation",
    name: "Élevé Ultrasonic Cavitation + RF Foundation (1 Day)",
    price: "POA",
    duration: "1 day",
    level: "Beginner",
    description: "Essential skills for fat reduction and skin tightening using cavitation and radio frequency technology. Safe machine operation, treatment planning and sculpting across the abdomen, waist, arms and legs.",
  },
  {
    id: "bbl-foundation",
    track: "Foundation",
    name: "Élevé Non-Surgical Butt Enhancement Foundation (1 Day)",
    price: "POA",
    duration: "1 day",
    level: "Beginner",
    description: "Vacuum-therapy butt enhancement techniques to lift, contour and shape the glutes naturally. Cup placement, hip dip correction, cellulite smoothing and safe machine operation.",
  },
  {
    id: "body-sculpt-masterclass",
    track: "Masterclass",
    name: "Élevé Body Sculpt® Masterclass",
    price: "POA",
    duration: "Multi-day advanced",
    level: "Qualified practitioners",
    description: "An advanced programme for qualified practitioners ready to master full-body sculpting, including Élevé 360®. Malika's precision body mapping, advanced sculpting sequences and combination therapy approach for refined, transformative results.",
  },
  {
    id: "recovery-postop-masterclass",
    track: "Masterclass",
    name: "Élevé Recovery® Post-Op Masterclass",
    price: "POA",
    duration: "Multi-day advanced",
    level: "Qualified practitioners",
    description: "Advanced training in post-surgical recovery, lymphatic drainage and complication management. Advanced body mapping, ultrasound and RF integration, taping, complication identification and safe recovery planning.",
  },
  {
    id: "sculpt-detox-masterclass",
    track: "Masterclass",
    name: "Élevé Sculpt Detox® Masterclass",
    price: "POA",
    duration: "Multi-day advanced",
    level: "Qualified practitioners",
    description: "Malika's signature detoxing sculpting methods. Advanced drainage sequences targeting all body systems for the ultimate reset; mapping and protocol design to deliver lightness, improved circulation and visible definition while supporting gut health and holistic body refinement.",
  },
];

/* Retail products — curated aftercare & tools lineup.
   One active SKU + coming-soon roadmap. */
export const PRODUCTS = [
  {
    id: "shape-me-faja",
    name: "'Shape Me' Faja",
    brand: "FigureBySLA",
    price: 69.99,
    category: "Shapewear",
    tagline: "Final release stock — FigureBySLA.",
    intro: "Designed with every figure in mind for the ultimate sculpt.",
    subhead: "The ultimate SHAPE ME Faja by SLA",
    features: [
      "High compression",
      "Sculpting panel at abdomen",
      "Seamless construction",
      "Non-slip strip at waist and thigh",
      "Zipper gusset — quick bathroom access",
      "Mid-thigh length",
      "Thighs contour",
      "Natural butt lifting effect",
      "Runs fitted — may size smaller than usual",
      "Ideal for postpartum, post-surgery, and body sculpting care",
    ],
    image: "assets/product-shape-me-faja-1.jpg",
    images: [
      "assets/product-shape-me-faja-1.jpg",
      "assets/product-shape-me-faja-2.jpg",
      "assets/product-shape-me-faja-3.jpg",
      "assets/product-shape-me-faja-4.jpg",
      "assets/product-shape-me-faja-5.jpg",
      "assets/product-shape-me-faja-6.jpg",
      "assets/product-shape-me-faja-7.jpg",
      "assets/product-shape-me-faja-8.jpg",
      "assets/product-shape-me-faja-9.jpg",
      "assets/product-shape-me-faja-10.jpg",
      "assets/product-shape-me-faja-11.jpg",
      "assets/product-shape-me-faja-12.jpg",
    ],
    colombian: true,
    finalRelease: true,
    stock: [
      { size: "S",    qty: 1 },
      { size: "L",    qty: 2 },
      { size: "XL",   qty: 3 },
      { size: "XXL",  qty: 4 },
      { size: "XXXL", qty: 4 },
    ],
  },
  {
    id: "eleve-body-oil",
    name: "Élevé Signature Body Oil",
    price: 48,
    category: "Aftercare",
    tagline: "Sculpting oil for daily drainage.",
    description: "Weightless dry oil blended with juniper, grapefruit and rosemary to support lymphatic movement. Daily aftercare between sessions.",
    image: "assets/product-body-oil.png",
    comingSoon: true,
  },
  {
    id: "eleve-contour-serum",
    name: "Contour Firming Serum",
    price: 72,
    category: "Aftercare",
    tagline: "Caffeine + niacinamide concentrate.",
    description: "A concentrated serum layered under oil to visibly firm, smooth and refine. Formulated for post-cavitation use.",
    image: "assets/product-serum.png",
    comingSoon: true,
  },
  {
    id: "post-op-vest",
    name: "Post-Op Compression Vest",
    price: 98,
    category: "Post-Op",
    tagline: "Full torso support.",
    description: "Stage 1 garment worn immediately after surgery for 6 weeks. Sizes XS–XL.",
    image: "assets/product-vest.png",
    comingSoon: true,
  },
  {
    id: "post-op-faja",
    name: "Post-Operative Faja",
    category: "Post-Op",
    tagline: "Stage 1 & 2 compression.",
    description: "Medical-grade post-operative faja for structured recovery through stages 1 and 2.",
    image: "assets/product-post-op-faja.png",
    comingSoon: true,
    colombian: true,
  },
  {
    id: "abdominal-boards",
    name: "Abdominal Boards",
    category: "Post-Op",
    tagline: "Flatten, smooth, protect.",
    description: "Foam abdominal boards shaped to support the midsection post-procedure and prevent fibrosis.",
    image: "assets/product-abdominal-boards.png",
    comingSoon: true,
    colombian: true,
  },
  {
    id: "elbm-k-tapes",
    name: "ÉLBM K-Tapes",
    category: "Post-Op",
    tagline: "Lymphatic taping kit.",
    description: "Kinesiology tape pre-cut for post-op lymphatic pathways. Designed for Élevé Recovery® protocols.",
    image: "assets/product-k-tapes.png",
    comingSoon: true,
  },
  {
    id: "shapewear-waist-trainer",
    name: "Shapewear — Waist Trainer / Faja",
    category: "Shapewear",
    tagline: "Daily wear waist trainer & faja.",
    description: "Everyday shapewear — waist trainer and faja silhouettes engineered for daily refinement and posture support.",
    image: "assets/product-shapewear.png",
    comingSoon: true,
    colombian: true,
  },
  {
    id: "elbm-wood-kit-pro",
    name: "ÉLBM Wood Therapy Kit — Professional",
    category: "Tools",
    tagline: "Full practitioner set.",
    description: "Complete Colombian wood therapy toolkit for professional SculptWood® practice. Sourced for Élevé Academy graduates and working therapists.",
    image: "assets/product-wood-kit-pro.png",
    comingSoon: true,
    colombian: true,
  },
  {
    id: "elbm-wood-kit-home",
    name: "ÉLBM Wood Therapy Kit — Home-Use",
    category: "Tools",
    tagline: "At-home ritual edit.",
    description: "Edited Colombian wood therapy set for at-home sculpting rituals between studio visits.",
    image: "assets/product-wood-kit-home.png",
    comingSoon: true,
    colombian: true,
  },
];

/* FAQ verbatim from /faqs */
export const FAQ = [
  { q: "Do I need a consultation before booking?", a: "Yes — all new clients require a consultation to ensure treatments are safe and suitable for your goals." },
  { q: "Are consultations in-person or virtual?", a: "You may choose either. In-person allows for a full assessment; virtual is ideal if you need guidance before booking." },
  { q: "How do I know which treatment is right for me?", a: "Your practitioner will assess your concerns, goals and lifestyle to recommend the most effective treatment plan." },
  { q: "Do you offer single sessions?", a: "Yes — single sessions are available for maintenance or trial purposes, though packages deliver the most transformative results." },
  { q: "How many sessions will I need?", a: "This depends on your goals, lifestyle, and starting point. Your practitioner will create a personalised plan during consultation." },
  { q: "Are results permanent?", a: "Results last with consistent lifestyle habits. Body sculpting and lymphatic work require maintenance for best long term outcomes." },
  { q: "Does body sculpting hurt?", a: "Most treatments are comfortable and relaxing. Some areas may feel warm or slightly sensitive depending on the device used." },
  { q: "What should I wear to my appointment?", a: "Comfortable clothing. Your therapist may advise specific garments for post-op or sculpting sessions." },
  { q: "Can I train at the gym after my session?", a: "Light movement is fine, but avoid intense exercise for 24 hours after cavitation, fat dissolving or lymphatic drainage." },
  { q: "Can I have treatments while on my period?", a: "Yes — though you may experience slightly more sensitivity or water retention." },
  { q: "What is lymphatic drainage and what does it help with?", a: "A gentle, rhythmic massage that reduces bloating, swelling and fluid retention while supporting digestion and detoxification." },
  { q: "What is cavitation and how does it work?", a: "Ultrasonic waves break down stubborn fat cells, which the body naturally eliminates over time." },
  { q: "Is Radio Frequency safe?", a: "Yes — RF tightens skin using controlled heat and stimulates collagen production with no downtime." },
  { q: "What areas can be treated with body contouring?", a: "Abdomen, waistline, hips, back, arms, legs, and buttocks." },
  { q: "Do you treat cellulite?", a: "Yes — our specialised cellulite protocols smooth texture, stimulate circulation and improve skin quality." },
  { q: "How does fat dissolving work?", a: "Fat dissolving uses an injectable solution that disrupts the fat cell membrane, allowing the body to gradually eliminate the dissolved fat through the lymphatic system. Suited for stubborn pockets resistant to conventional methods." },
  { q: "Is fat dissolving painful?", a: "Mild discomfort or swelling is normal. Numbing cream is used to keep you comfortable." },
  { q: "When will I see results from fat dissolving?", a: "Most clients see improvement within 3–6 weeks. Multiple sessions may be required depending on the area." },
  { q: "Do you offer anti-wrinkle treatments?", a: "Yes — we use premium toxin brands to soften lines, lift and contour areas such as the forehead, frown and eyes." },
  { q: "How long do anti-wrinkle results last?", a: "Results typically last 3–4 months depending on lifestyle and muscle strength." },
  { q: "How soon after surgery can I book post-op care?", a: "We begin from day 3 onwards unless advised otherwise by your surgeon." },
  { q: "Do you offer single post-op sessions?", a: "Single sessions are available only after completing a minimum of three early-stage post-operative massages." },
  { q: "What does post-op care include?", a: "Lymphatic drainage, ultrasound, radio frequency, tape application and fibrosis prevention tailored to your recovery stage." },
  { q: "Do you offer payment plans?", a: "Yes — Klarna, Clearpay and PayLater are available for both treatments and training." },
  { q: "Do you offer memberships?", a: "Yes — our monthly Élevé Membership plans offer exceptional value for clients seeking consistent sculpting or wellness support." },
];

/* Stripe / payment handoff stub. Replace checkoutUrl with a Stripe Payment Link
   or server endpoint to go live. If null, the checkout page shows a "request invoice" flow. */
export const PAYMENT = {
  mode: "demo", // "demo" | "stripe_payment_link" | "server"
  stripePaymentLinkBase: null, // e.g. "https://buy.stripe.com/xxx"
  serverEndpoint: null,        // POST /api/checkout returning { url }
  currency: "GBP",
  currencySymbol: "£",
};

/* Newsletter endpoint stub. Replace with Mailchimp / Klaviyo / Formspree URL. */
export const NEWSLETTER = {
  endpoint: null, // e.g. "https://formspree.io/f/xxxx" or Mailchimp/Klaviyo URL
};

/* Opening grid for booking — days of week the clinic accepts bookings. */
export const BOOKING_CONFIG = {
  openDays: [1, 2, 3, 4, 5, 6],    // Mon–Sat (0 = Sun)
  openHour: 9,
  closeHour: 19,
  slotMinutes: 30,
  leadHours: 12,                   // cannot book within 12h
  maxAdvanceDays: 60,
};
