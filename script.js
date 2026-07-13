lucide.createIcons();

/* ---------------- DATA ---------------- */
const categories = [
  { icon: "🌾", name: "Agriculture" },
  { icon: "🥭", name: "Fruits & Vegetables" },
  { icon: "🌶️", name: "Spices" },
  { icon: "🍚", name: "Rice & Grains" },
  { icon: "☕", name: "Coffee" },
  { icon: "🫖", name: "Tea" },
  { icon: "🧴", name: "Chemicals" },
  { icon: "💊", name: "Pharmaceuticals" },
  { icon: "🚗", name: "Auto Parts" },
  { icon: "🏭", name: "Machinery" },
  { icon: "🪨", name: "Granite & Marble" },
  { icon: "🪵", name: "Wood Products" },
  { icon: "🧵", name: "Textiles" },
  { icon: "👜", name: "Leather Goods" },
  { icon: "💍", name: "Gems & Jewellery" },
  { icon: "🥜", name: "Dry Fruits" },
  { icon: "🥥", name: "Coconut Products" },
  { icon: "🍯", name: "Honey & Natural" },
];

const countries = [
  {
    flag: "🇺🇸",
    name: "United States",
    vol: "$48.2B",
    top: "Textiles, Pharma, Auto Parts",
    buyers: "62,400",
  },
  {
    flag: "🇦🇪",
    name: "United Arab Emirates",
    vol: "$31.6B",
    top: "Gems, Rice, Machinery",
    buyers: "41,800",
  },
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    vol: "$22.4B",
    top: "Textiles, Tea, Leather",
    buyers: "28,300",
  },
  {
    flag: "🇩🇪",
    name: "Germany",
    vol: "$19.8B",
    top: "Auto Parts, Chemicals",
    buyers: "24,100",
  },
  {
    flag: "🇸🇦",
    name: "Saudi Arabia",
    vol: "$17.5B",
    top: "Rice, Spices, Granite",
    buyers: "21,700",
  },
  {
    flag: "🇸🇬",
    name: "Singapore",
    vol: "$15.2B",
    top: "Machinery, Electronics",
    buyers: "18,900",
  },
  {
    flag: "🇯🇵",
    name: "Japan",
    vol: "$14.6B",
    top: "Seafood, Textiles, Auto Parts",
    buyers: "16,500",
  },
  {
    flag: "🇿🇦",
    name: "South Africa",
    vol: "$9.3B",
    top: "Rice, Pharma, Textiles",
    buyers: "11,200",
  },
  {
    flag: "🇨🇦",
    name: "Canada",
    vol: "$13.8B",
    top: "Wood, Machinery, Pharma",
    buyers: "15,900",
  },
  {
    flag: "🇫🇷",
    name: "France",
    vol: "$12.6B",
    top: "Wine, Cosmetics, Chemicals",
    buyers: "14,800",
  },
  {
    flag: "🇮🇹",
    name: "Italy",
    vol: "$11.8B",
    top: "Fashion, Machinery, Leather",
    buyers: "14,300",
  },
  {
    flag: "🇪🇸",
    name: "Spain",
    vol: "$10.9B",
    top: "Olive Oil, Chemicals",
    buyers: "13,600",
  },
  {
    flag: "🇳🇱",
    name: "Netherlands",
    vol: "$16.3B",
    top: "Flowers, Machinery, Chemicals",
    buyers: "19,400",
  },
  {
    flag: "🇧🇪",
    name: "Belgium",
    vol: "$11.4B",
    top: "Diamonds, Chemicals",
    buyers: "13,100",
  },
  {
    flag: "🇨🇭",
    name: "Switzerland",
    vol: "$10.7B",
    top: "Pharma, Watches, Chemicals",
    buyers: "12,700",
  },
  {
    flag: "🇸🇪",
    name: "Sweden",
    vol: "$8.5B",
    top: "Machinery, Steel",
    buyers: "10,200",
  },
  {
    flag: "🇳🇴",
    name: "Norway",
    vol: "$7.8B",
    top: "Seafood, Oil Equipment",
    buyers: "9,600",
  },
  {
    flag: "🇫🇮",
    name: "Finland",
    vol: "$6.7B",
    top: "Paper, Machinery",
    buyers: "8,400",
  },
  {
    flag: "🇩🇰",
    name: "Denmark",
    vol: "$7.1B",
    top: "Pharma, Dairy",
    buyers: "8,900",
  },
  {
    flag: "🇵🇱",
    name: "Poland",
    vol: "$8.2B",
    top: "Furniture, Machinery",
    buyers: "10,300",
  },
  {
    flag: "🇦🇹",
    name: "Austria",
    vol: "$6.3B",
    top: "Steel, Machinery",
    buyers: "7,700",
  },
  {
    flag: "🇮🇪",
    name: "Ireland",
    vol: "$7.6B",
    top: "Pharma, IT Products",
    buyers: "9,200",
  },
  {
    flag: "🇵🇹",
    name: "Portugal",
    vol: "$5.9B",
    top: "Textiles, Cork",
    buyers: "7,300",
  },
  {
    flag: "🇬🇷",
    name: "Greece",
    vol: "$5.4B",
    top: "Olive Oil, Seafood",
    buyers: "6,900",
  },
  {
    flag: "🇨🇿",
    name: "Czech Republic",
    vol: "$6.8B",
    top: "Automobiles, Glass",
    buyers: "8,100",
  },
  {
    flag: "🇭🇺",
    name: "Hungary",
    vol: "$5.8B",
    top: "Electronics, Machinery",
    buyers: "7,000",
  },
  {
    flag: "🇷🇴",
    name: "Romania",
    vol: "$5.5B",
    top: "Wood, Machinery",
    buyers: "6,700",
  },
  {
    flag: "🇷🇺",
    name: "Russia",
    vol: "$14.3B",
    top: "Oil, Fertilizers",
    buyers: "16,100",
  },
  {
    flag: "🇺🇦",
    name: "Ukraine",
    vol: "$6.9B",
    top: "Grains, Metals",
    buyers: "8,300",
  },
  {
    flag: "🇹🇷",
    name: "Turkey",
    vol: "$15.8B",
    top: "Textiles, Steel",
    buyers: "18,100",
  },
  {
    flag: "🇮🇱",
    name: "Israel",
    vol: "$8.1B",
    top: "Technology, Chemicals",
    buyers: "9,900",
  },
  {
    flag: "🇶🇦",
    name: "Qatar",
    vol: "$7.2B",
    top: "LNG Equipment, Chemicals",
    buyers: "8,700",
  },
  {
    flag: "🇰🇼",
    name: "Kuwait",
    vol: "$6.5B",
    top: "Oil Equipment, Chemicals",
    buyers: "7,900",
  },
  {
    flag: "🇴🇲",
    name: "Oman",
    vol: "$5.9B",
    top: "Minerals, Chemicals",
    buyers: "7,100",
  },
  {
    flag: "🇧🇭",
    name: "Bahrain",
    vol: "$4.8B",
    top: "Aluminium, Chemicals",
    buyers: "6,000",
  },
  {
    flag: "🇮🇶",
    name: "Iraq",
    vol: "$8.8B",
    top: "Construction Materials",
    buyers: "10,600",
  },
  {
    flag: "🇮🇷",
    name: "Iran",
    vol: "$9.4B",
    top: "Petrochemicals, Steel",
    buyers: "11,300",
  },
  {
    flag: "🇨🇳",
    name: "China",
    vol: "$44.7B",
    top: "Electronics, Machinery",
    buyers: "57,000",
  },
  {
    flag: "🇭🇰",
    name: "Hong Kong",
    vol: "$12.3B",
    top: "Electronics, Jewellery",
    buyers: "14,600",
  },
  {
    flag: "🇰🇷",
    name: "South Korea",
    vol: "$17.2B",
    top: "Electronics, Automobiles",
    buyers: "20,800",
  },
  {
    flag: "🇹🇼",
    name: "Taiwan",
    vol: "$13.6B",
    top: "Semiconductors, Electronics",
    buyers: "16,400",
  },
  {
    flag: "🇹🇭",
    name: "Thailand",
    vol: "$11.5B",
    top: "Rubber, Electronics",
    buyers: "13,500",
  },
  {
    flag: "🇻🇳",
    name: "Vietnam",
    vol: "$12.1B",
    top: "Textiles, Electronics",
    buyers: "14,200",
  },
  {
    flag: "🇲🇾",
    name: "Malaysia",
    vol: "$10.4B",
    top: "Palm Oil, Electronics",
    buyers: "12,800",
  },
  {
    flag: "🇮🇩",
    name: "Indonesia",
    vol: "$14.2B",
    top: "Palm Oil, Coal",
    buyers: "16,900",
  },
  {
    flag: "🇵🇭",
    name: "Philippines",
    vol: "$8.4B",
    top: "Electronics, Fruits",
    buyers: "10,100",
  },
  {
    flag: "🇧🇩",
    name: "Bangladesh",
    vol: "$9.6B",
    top: "Garments, Textiles",
    buyers: "11,500",
  },
  {
    flag: "🇱🇰",
    name: "Sri Lanka",
    vol: "$5.2B",
    top: "Tea, Apparel",
    buyers: "6,500",
  },
  {
    flag: "🇳🇵",
    name: "Nepal",
    vol: "$2.8B",
    top: "Herbs, Tea",
    buyers: "3,900",
  },
  {
    flag: "🇧🇹",
    name: "Bhutan",
    vol: "$1.9B",
    top: "Hydropower, Minerals",
    buyers: "2,800",
  },
  {
    flag: "🇲🇲",
    name: "Myanmar",
    vol: "$4.6B",
    top: "Rice, Timber",
    buyers: "5,800",
  },
  {
    flag: "🇰🇭",
    name: "Cambodia",
    vol: "$4.2B",
    top: "Garments, Rice",
    buyers: "5,200",
  },
  {
    flag: "🇱🇦",
    name: "Laos",
    vol: "$2.7B",
    top: "Wood, Minerals",
    buyers: "3,400",
  },
  {
    flag: "🇲🇳",
    name: "Mongolia",
    vol: "$3.3B",
    top: "Copper, Wool",
    buyers: "4,100",
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    vol: "$18.1B",
    top: "Minerals, Wool",
    buyers: "22,400",
  },
  {
    flag: "🇳🇿",
    name: "New Zealand",
    vol: "$6.4B",
    top: "Dairy, Meat",
    buyers: "7,800",
  },
  {
    flag: "🇧🇷",
    name: "Brazil",
    vol: "$19.3B",
    top: "Soybeans, Coffee",
    buyers: "23,100",
  },
  {
    flag: "🇦🇷",
    name: "Argentina",
    vol: "$8.7B",
    top: "Soybeans, Beef",
    buyers: "10,500",
  },
  {
    flag: "🇨🇱",
    name: "Chile",
    vol: "$7.9B",
    top: "Copper, Fruits",
    buyers: "9,500",
  },
  {
    flag: "🇵🇪",
    name: "Peru",
    vol: "$6.8B",
    top: "Copper, Coffee",
    buyers: "8,200",
  },
  {
    flag: "🇨🇴",
    name: "Colombia",
    vol: "$7.5B",
    top: "Coffee, Flowers",
    buyers: "9,000",
  },
  {
    flag: "🇲🇽",
    name: "Mexico",
    vol: "$20.2B",
    top: "Automobiles, Electronics",
    buyers: "24,500",
  },
  {
    flag: "🇵🇦",
    name: "Panama",
    vol: "$4.5B",
    top: "Shipping Services",
    buyers: "5,400",
  },
  {
    flag: "🇨🇷",
    name: "Costa Rica",
    vol: "$3.8B",
    top: "Coffee, Medical Devices",
    buyers: "4,800",
  },
  {
    flag: "🇩🇴",
    name: "Dominican Republic",
    vol: "$3.4B",
    top: "Medical Devices, Sugar",
    buyers: "4,200",
  },
  {
    flag: "🇪🇬",
    name: "Egypt",
    vol: "$10.6B",
    top: "Cotton, Fertilizers",
    buyers: "12,900",
  },
  {
    flag: "🇲🇦",
    name: "Morocco",
    vol: "$6.2B",
    top: "Phosphates, Citrus",
    buyers: "7,600",
  },
  {
    flag: "🇩🇿",
    name: "Algeria",
    vol: "$7.4B",
    top: "Oil, Gas Equipment",
    buyers: "8,800",
  },
  {
    flag: "🇹🇳",
    name: "Tunisia",
    vol: "$4.1B",
    top: "Olive Oil, Textiles",
    buyers: "5,000",
  },
  {
    flag: "🇳🇬",
    name: "Nigeria",
    vol: "$12.8B",
    top: "Oil, Cocoa",
    buyers: "15,600",
  },
  {
    flag: "🇰🇪",
    name: "Kenya",
    vol: "$6.3B",
    top: "Tea, Flowers",
    buyers: "7,700",
  },
  {
    flag: "🇪🇹",
    name: "Ethiopia",
    vol: "$5.6B",
    top: "Coffee, Leather",
    buyers: "6,800",
  },
  {
    flag: "🇹🇿",
    name: "Tanzania",
    vol: "$5.1B",
    top: "Gold, Coffee",
    buyers: "6,300",
  },
  {
    flag: "🇺🇬",
    name: "Uganda",
    vol: "$4.7B",
    top: "Coffee, Tea",
    buyers: "5,900",
  },
  {
    flag: "🇬🇭",
    name: "Ghana",
    vol: "$5.8B",
    top: "Cocoa, Gold",
    buyers: "7,000",
  },
  {
    flag: "🇨🇮",
    name: "Côte d'Ivoire",
    vol: "5.2B",
    top: "Cocoa, Coffee",
    buyers: "6,400",
  },
  {
    flag: "🇸🇳",
    name: "Senegal",
    vol: "$3.7B",
    top: "Fish, Peanuts",
    buyers: "4,600",
  },
  {
    flag: "🇨🇲",
    name: "Cameroon",
    vol: "$4.3B",
    top: "Timber, Cocoa",
    buyers: "5,300",
  },
  {
    flag: "🇦🇴",
    name: "Angola",
    vol: "$6.0B",
    top: "Oil, Diamonds",
    buyers: "7,400",
  },
  {
    flag: "🇿🇲",
    name: "Zambia",
    vol: "$4.4B",
    top: "Copper, Sugar",
    buyers: "5,500",
  },
  {
    flag: "🇿🇼",
    name: "Zimbabwe",
    vol: "$3.5B",
    top: "Tobacco, Gold",
    buyers: "4,300",
  },
  {
    flag: "🇧🇼",
    name: "Botswana",
    vol: "$3.2B",
    top: "Diamonds, Beef",
    buyers: "4,000",
  },
  {
    flag: "🇳🇦",
    name: "Namibia",
    vol: "$2.9B",
    top: "Diamonds, Fish",
    buyers: "3,700",
  },
  {
    flag: "🇲🇿",
    name: "Mozambique",
    vol: "$3.6B",
    top: "Coal, Aluminium",
    buyers: "4,500",
  },
  {
    flag: "🇵🇰",
    name: "Pakistan",
    vol: "$11.3B",
    top: "Textiles, Rice",
    buyers: "13,800",
  },
  {
    flag: "🇦🇫",
    name: "Afghanistan",
    vol: "$2.1B",
    top: "Dry Fruits, Carpets",
    buyers: "3,000",
  },
  {
    flag: "🇺🇿",
    name: "Uzbekistan",
    vol: "$4.9B",
    top: "Cotton, Gold",
    buyers: "6,100",
  },
  {
    flag: "🇰🇿",
    name: "Kazakhstan",
    vol: "$6.6B",
    top: "Oil, Uranium",
    buyers: "8,000",
  },
  {
    flag: "🇹🇲",
    name: "Turkmenistan",
    vol: "$3.0B",
    top: "Gas, Cotton",
    buyers: "3,800",
  },
  {
    flag: "🇰🇬",
    name: "Kyrgyzstan",
    vol: "$2.5B",
    top: "Gold, Wool",
    buyers: "3,200",
  },
  {
    flag: "🇹🇯",
    name: "Tajikistan",
    vol: "$2.2B",
    top: "Cotton, Aluminium",
    buyers: "3,000",
  },
  {
    flag: "🇦🇿",
    name: "Azerbaijan",
    vol: "$4.7B",
    top: "Oil, Chemicals",
    buyers: "5,900",
  },
  {
    flag: "🇦🇲",
    name: "Armenia",
    vol: "$2.8B",
    top: "Copper, Wine",
    buyers: "3,500",
  },
  {
    flag: "🇬🇪",
    name: "Georgia",
    vol: "$3.1B",
    top: "Wine, Minerals",
    buyers: "3,900",
  },
  {
    flag: "🇧🇾",
    name: "Belarus",
    vol: "$4.5B",
    top: "Fertilizers, Machinery",
    buyers: "5,600",
  },
  {
    flag: "🇱🇹",
    name: "Lithuania",
    vol: "$3.9B",
    top: "Furniture, Chemicals",
    buyers: "4,800",
  },
  {
    flag: "🇱🇻",
    name: "Latvia",
    vol: "$3.3B",
    top: "Wood, Machinery",
    buyers: "4,100",
  },
  {
    flag: "🇪🇪",
    name: "Estonia",
    vol: "$3.0B",
    top: "Technology, Wood",
    buyers: "3,800",
  },
  {
    flag: "🇮🇸",
    name: "Iceland",
    vol: "$2.6B",
    top: "Seafood, Aluminium",
    buyers: "3,300",
  },
  {
    flag: "🇱🇺",
    name: "Luxembourg",
    vol: "$3.4B",
    top: "Finance, Steel",
    buyers: "4,200",
  },
  {
    flag: "🇲🇹",
    name: "Malta",
    vol: "$2.4B",
    top: "Electronics, Pharma",
    buyers: "3,100",
  },
  {
    flag: "🇨🇾",
    name: "Cyprus",
    vol: "$2.7B",
    top: "Shipping, Pharma",
    buyers: "3,400",
  },
  {
    flag: "🇸🇮",
    name: "Slovenia",
    vol: "$3.2B",
    top: "Machinery, Pharma",
    buyers: "4,000",
  },
  {
    flag: "🇭🇷",
    name: "Croatia",
    vol: "$3.1B",
    top: "Wood, Food Products",
    buyers: "3,900",
  },
  {
    flag: "🇸🇰",
    name: "Slovakia",
    vol: "$3.6B",
    top: "Automobiles, Machinery",
    buyers: "4,500",
  },
];

const services = [
  {
    icon: "📋",
    title: "IEC Registration",
    desc: "Get your Import Export Code approved fast, fully handled by our DGFT experts.",
    bg: "#EAF0FF",
  },
  {
    icon: "📄",
    title: "Export Documentation",
    desc: "Commercial invoices, packing lists, certificates of origin — done right, every time.",
    bg: "#FFEAEA",
  },
  {
    icon: "🔎",
    title: "Buyer Finding",
    desc: "AI-matched buyer discovery across our 195+ country importer network.",
    bg: "#EFEAFF",
  },
  {
    icon: "📈",
    title: "Global Marketing",
    desc: "SEO, Google Ads and Meta Ads campaigns built for international B2B buyers.",
    bg: "#EAFFF3",
  },
  {
    icon: "🚢",
    title: "Freight Forwarding",
    desc: "Door-to-port and door-to-door shipping across air, sea and land.",
    bg: "#FFF6EA",
  },
  {
    icon: "📸",
    title: "Product Photography",
    desc: "Studio-grade catalog imagery and video that converts international buyers.",
    bg: "#EAF0FF",
  },
  {
    icon: "🎪",
    title: "Trade Fair Support",
    desc: "Booth design, logistics and buyer meetings at major global expos.",
    bg: "#FFEAEA",
  },
  {
    icon: "💬",
    title: "Export Consultation",
    desc: "One-on-one strategy sessions with 20+ year trade veterans.",
    bg: "#EFEAFF",
  },
];

const plans = [
  {
    tier: "Free",
    price: "₹0",
    period: "/forever",
    pop: false,
    feats: [
      "5 product listings",
      "Basic company profile",
      "View 10 buy leads / month",
      "Community support",
    ],
  },
  {
    tier: "Silver",
    price: "₹4,999",
    period: "/year",
    pop: false,
    feats: [
      "25 product listings",
      "Verified badge",
      "Unlimited buy leads",
      "Priority search ranking",
      "Email support",
    ],
  },
  {
    tier: "Gold",
    price: "₹14,999",
    period: "/year",
    pop: true,
    feats: [
      "Unlimited listings",
      "Featured supplier badge",
      "AI buyer recommendations",
      "Dedicated trade manager",
      "WhatsApp + phone support",
    ],
  },
  {
    tier: "Platinum",
    price: "Custom",
    period: "/enterprise",
    pop: false,
    feats: [
      "Multi-brand storefronts",
      "API access & integrations",
      "Custom analytics dashboard",
      "White-glove onboarding",
      "24/7 priority support",
    ],
  },
];

const trending = [
  "Rice",
  "Spices",
  "Textiles",
  "Chemicals",
  "Tea",
  "Coffee",
  "Mango",
  "Granite",
  "Marble",
  "Leather",
  "Auto Parts",
  "Handicrafts",
  "Pharmaceutical",
  "Ayurvedic",
  "Organic Food",
];

/* ---------------- RENDER ---------------- */
const catGridEl = document.getElementById("catGrid");
if (catGridEl) {
  catGridEl.innerHTML = categories
    .map(
      (c) => `
    <div class="cat-card">
      <div class="cc-ic">${c.icon}</div>
      <div class="cc-name">${c.name}</div>
      <div class="cc-meta"><span><b></b></span><span><b></b> </span></div>
    </div>
  `,
    )
    .join("");
}

// Home page only shows the top 12 countries
const countryGridEl = document.getElementById("countryGrid");
if (countryGridEl) {
  countryGridEl.innerHTML = countries
    .slice(0, 12)
    .map(
      (c) => `
    <div class="country-card">
      <div class="cty-flag">${c.flag}</div>
      <div class="cty-name">${c.name}</div>
      <div class="cty-vol">Import volume <b>${c.vol}</b></div>
      <div class="cty-products">Top imports: ${c.top}</div>
      <div class="cty-foot">
        <span class="verified-pill"><i data-lucide="badge-check"></i>${c.buyers} buyers</span>
        <i data-lucide="arrow-up-right" style="width:15px;height:15px;color:var(--ink-soft)"></i>
      </div>
    </div>
  `,
    )
    .join("");
}

const svcGridEl = document.getElementById("svcGrid");
if (svcGridEl) {
  svcGridEl.innerHTML = services
    .map(
      (s) => `
    <div class="svc-card">
      <div class="svc-ic" style="background:${s.bg}; font-size:20px;">${s.icon}</div>
      <div class="svc-title">${s.title}</div>
      <div class="svc-desc">${s.desc}</div>
    </div>
  `,
    )
    .join("");
}

const memGridEl = document.getElementById("memGrid");
if (memGridEl) {
  memGridEl.innerHTML = plans
    .map(
      (p) => `
    <div class="mem-card ${p.pop ? "pop" : ""}">
      ${p.pop ? '<div class="mem-badge">Most Popular</div>' : ""}
      <div class="mem-tier">${p.tier}</div>
      <div class="mem-price">${p.price}<span> ${p.period}</span></div>
      <ul class="mem-list">
        ${p.feats.map((f) => `<li><i data-lucide="check-circle-2"></i>${f}</li>`).join("")}
      </ul>
      <a href="#" class="btn ${p.pop ? "btn-blue" : "btn-line"}" style="width:100%;">Choose ${p.tier}</a>
    </div>
  `,
    )
    .join("");
}

const chipRowEl = document.getElementById("chipRow");
if (chipRowEl) {
  chipRowEl.innerHTML += trending
    .map((t) => `<a href="#" class="chip">${t}</a>`)
    .join("");
}

const megaCategoriesEl = document.getElementById("megaCategories");
if (megaCategoriesEl) {
  const megaCats = categories.slice(0, 15);
  megaCategoriesEl.innerHTML =
    megaCats
      .map(
        (c) => `
    <a href="index.html#categories" class="mm-item"><span class="ic">${c.icon}</span>${c.name}</a>
  `,
      )
      .join("") +
    `<div class="mm-foot"><span style="font-size:12.5px;color:var(--ink-soft);font-weight:600;">100+ categories available</span><a href="index.html#categories">Browse all <i data-lucide="arrow-right" style="width:13px;height:13px"></i></a></div>`;
}

const statsGridEl = document.getElementById("statsGrid");
if (statsGridEl) {
  const statData = [
    { num: 10, suffix: "M", label: "Products Listed" },
    { num: 500, suffix: "K", label: "Verified Exporters" },
    { num: 195, suffix: "", label: "Countries Reached" },
    { num: 2, suffix: "M", label: "Trade Leads" },
    { num: 20, suffix: "", label: "Years Experience" },
  ];
  statsGridEl.innerHTML = statData
    .map(
      (s) => `
    <div class="stat">
      <div class="num" data-target="${s.num}" data-suffix="${s.suffix}">0<span class="plus">+</span></div>
      <div class="lbl">${s.label}</div>
    </div>
  `,
    )
    .join("");
}

lucide.createIcons();

/* ---------------- COUNTRY / CATEGORY DROPDOWNS ---------------- */
const countryPanel = document.getElementById("countryPanel");
if (countryPanel) {
  countryPanel.innerHTML =
    `<div class="dp-item" data-val="All Countries"><span class="flag">🌍</span>All Countries</div>` +
    countries
      .map(
        (c) =>
          `<div class="dp-item" data-val="${c.name}"><span class="flag">${c.flag}</span>${c.name}</div>`,
      )
      .join("");
}

const categoryPanel = document.getElementById("categoryPanel");
if (categoryPanel) {
  categoryPanel.innerHTML =
    `<div class="dp-item" data-val="All Categories"><span class="flag">🗂️</span>All Categories</div>` +
    categories
      .map(
        (c) =>
          `<div class="dp-item" data-val="${c.name}"><span class="flag">${c.icon}</span>${c.name}</div>`,
      )
      .join("");
}

function setupDropdown(triggerId, panelId, valId) {
  const trigger = document.getElementById(triggerId);
  const panel = document.getElementById(panelId);
  const valEl = document.getElementById(valId);
  if (!trigger || !panel || !valEl) return;
  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelectorAll(".dropdown-panel.open").forEach((p) => {
      if (p !== panel) p.classList.remove("open");
    });
    document.querySelectorAll(".sf-inner.active").forEach((s) => {
      if (s !== trigger) s.classList.remove("active");
    });
    panel.classList.toggle("open");
    trigger.classList.toggle("active");
  });
  panel.addEventListener("click", (e) => {
    const item = e.target.closest(".dp-item");
    if (!item) return;
    valEl.textContent = item.dataset.val;
    panel.classList.remove("open");
    trigger.classList.remove("active");
  });
}
setupDropdown("countryTrigger", "countryPanel", "countryVal");
setupDropdown("categoryTrigger", "categoryPanel", "categoryVal");
document.addEventListener("click", () => {
  document
    .querySelectorAll(".dropdown-panel.open")
    .forEach((p) => p.classList.remove("open"));
  document
    .querySelectorAll(".sf-inner.active")
    .forEach((s) => s.classList.remove("active"));
});

/* ---------------- STICKY NAV SHADOW ---------------- */
const nav = document.getElementById("siteNav");
if (nav) {
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 12);
  });
}

/* ---------------- COUNTER ANIMATION ---------------- */
const counters = document.querySelectorAll(".num");
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.target);
        const suffix = el.dataset.suffix;
        let cur = 0;
        const step = target / 40;
        const plusSpan = el.querySelector(".plus");
        const tick = () => {
          cur += step;
          if (cur >= target) {
            cur = target;
          }
          el.firstChild.textContent =
            (target % 1 === 0 ? Math.floor(cur) : cur.toFixed(1)) + suffix;
          if (cur < target) requestAnimationFrame(tick);
        };
        tick();
        counterObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.4 },
);
counters.forEach((c) => counterObserver.observe(c));

/* ---------------- REVEAL ON SCROLL ---------------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
document
  .querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));

/* =====================================================
   MOBILE MENU (hamburger drawer) — works on every page
   ===================================================== */
(function () {
  const toggleBtn = document.getElementById("mobileToggle");
  const menu = document.getElementById("mobileMenu");
  const backdrop = document.getElementById("mobileMenuBackdrop");
  const closeBtn = document.getElementById("mobileMenuClose");
  if (!toggleBtn || !menu || !backdrop) return;

  function openMenu() {
    menu.classList.add("open");
    backdrop.classList.add("open");
    document.body.classList.add("menu-open");
    toggleBtn.setAttribute("aria-expanded", "true");
  }
  function closeMenu() {
    menu.classList.remove("open");
    backdrop.classList.remove("open");
    document.body.classList.remove("menu-open");
    toggleBtn.setAttribute("aria-expanded", "false");
    // also collapse any open submenus
    menu
      .querySelectorAll(".mobile-submenu.open")
      .forEach((sm) => sm.classList.remove("open"));
    menu
      .querySelectorAll(".mm-toggle.open")
      .forEach((btn) => btn.classList.remove("open"));
  }

  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.contains("open") ? closeMenu() : openMenu();
  });
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  backdrop.addEventListener("click", closeMenu);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // close the drawer when a real link inside it is tapped
  menu.querySelectorAll("a[href]").forEach((a) => {
    a.addEventListener("click", closeMenu);
  });

  // Products submenu inside the mobile drawer — populate from categories data
  const mobileCatList = document.getElementById("mobileCategoryList");
  if (mobileCatList) {
    mobileCatList.innerHTML =
      categories
        .slice(0, 15)
        .map(
          (c) =>
            `<a href="index.html#categories"><span>${c.icon}</span>${c.name}</a>`,
        )
        .join("") +
      `<a href="index.html#categories" style="color:var(--blue); font-weight:700;">Browse all categories →</a>`;
  }

  document.querySelectorAll(".mm-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.target;
      const submenu = targetId ? document.getElementById(targetId) : null;
      if (!submenu) return;
      const isOpen = submenu.classList.toggle("open");
      btn.classList.toggle("open", isOpen);
    });
  });
})();
