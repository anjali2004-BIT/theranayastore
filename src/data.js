import crescentMoonImg from './assets/crescent-moon-pendant.jpg'
import crescentMoonModelImg from './assets/crescent-moon-model.jpg'
import heartPendantImg from './assets/heart-pendant.png'
import butterflyPendantImg from './assets/butterfly-pendant.png'
import kunkumachimilImg from './assets/antique-nags-kunkumachimil.png'
import peacockLampImg from './assets/antique-peacock-lamp.png'
import decordIdolImg from './assets/decord-idol.png'
import elephantIdolImg from './assets/elephant-idol.png'
import kamachi122Img from './assets/kamachivilaku-122g.png'
import kamachi144Img from './assets/kamachivilaku-144g.png'
import kamachi16Img from './assets/kamachivilaku-16g.png'
import kamachi18Img from './assets/kamachivilaku-18g.png'
import devanganaKadaImg from './assets/devangana-kada-pair.jpg'
import zoyaBraceletImg from './assets/zoya-baguette-diamond-bracelet.jpg'
import tarkashiFrameImg from './assets/tarkashi-silver-filigree-frame.jpg'
import luxeFrameImg from './assets/luxe-floating-brass-frame.png'
import lakshmiGaneshCoinImg from './assets/lakshmi-ganesh-gold-coin.jpg'

export const CATS = {
  jewellery: ['Necklaces & Chokers', 'Rings & Solitaires', 'Earrings & Jhumkas', 'Bangles & Kadas', 'Mangalsutra & Pendants'],
  frames: ['Gold Leaf Photo Frames', 'Silver Filigree Frames', 'Royal Heritage Carved Frames', 'Personalized Memorial Frames', 'Minimalist Acrylic & Brass'],
  gifting: ['Bridal Gift Hampers', 'Festive Gold Coins & Boxes', 'Anniversary Keepsakes', 'Corporate Luxury Boxes', 'Personalized Wax Seal Gifts'],
  'silver-articles': ['Lamps & Vilakku', 'Silver Idols', 'Pooja Articles']
}

export const GIFT_WRAPS = [
  { id: 'standard', name: 'Signature Ranaya Box', price: 0, tag: 'Included', desc: 'Silk matte gold embossed box with velvet cushion & brand ribbon.' },
  { id: 'velvet-royale', name: 'Royal Crimson Velvet Chest', price: 650, tag: 'Bestseller', desc: 'Handcrafted wooden box wrapped in premium crimson velvet with brass latch.' },
  { id: 'emerald-luxury', name: 'Emerald Heritage Silk Hamper', price: 850, tag: 'Luxury', desc: 'Rich emerald raw silk box tied with 24K gold foil organza ribbon & wax seal.' },
  { id: 'custom-engraved', name: 'Heirloom Personalized Wooden Casket', price: 1250, tag: 'Exclusive', desc: 'Solid teakwood box with laser-engraved recipient name and brass hinges.' }
]

export const OCCASIONS = [
  { id: 'wedding', name: 'Wedding / Bridal', icon: 'bi-gem' },
  { id: 'anniversary', name: 'Anniversary', icon: 'bi-heart-fill' },
  { id: 'birthday', name: 'Birthday', icon: 'bi-cake2' },
  { id: 'festive', name: 'Diwali & Festive', icon: 'bi-stars' },
  { id: 'corporate', name: 'Corporate & Milestones', icon: 'bi-trophy' },
  { id: 'self-love', name: 'Celebration of Self', icon: 'bi-sparkles' }
]

export const PRODUCTS = [
  // --- LUXURY JEWELLERY ---
  {
    id: 1,
    name: 'Ranaya Noor Royal Kundan Choker',
    cat: 'jewellery',
    sub: 'Necklaces & Chokers',
    price: 68500,
    old: 78000,
    metal: '22K Hallmarked Gold',
    weight: '32.40',
    rating: 4.9,
    reviews: 142,
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=900&auto=format&fit=crop',
    desc: 'Intricately handcrafted choker set featuring uncut polki gems, natural pearls, and 22 karat BIS-certified gold work. An everlasting heirloom designed for royal grand celebrations.',
    giftReady: true,
    customizable: true
  },
  {
    id: 2,
    name: 'Aethel Solitaire Diamond Ring',
    cat: 'jewellery',
    sub: 'Rings & Solitaires',
    price: 49999,
    old: 58000,
    metal: '18K White & Rose Gold',
    weight: '4.80',
    rating: 5.0,
    reviews: 89,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=900&auto=format&fit=crop',
    desc: 'An exquisite brilliant-cut certified solitaire diamond held firmly in an 18K rose gold lotus-inspired prong setting with pavé detailing along the band.',
    giftReady: true,
    customizable: true
  },
  {
    id: 3,
    name: 'Padmavathi Mayur Heritage Jhumkas',
    cat: 'jewellery',
    sub: 'Earrings & Jhumkas',
    price: 42000,
    old: 48500,
    metal: '22K Yellow Gold',
    weight: '18.75',
    rating: 4.8,
    reviews: 67,
    badge: 'Heirloom',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=900&auto=format&fit=crop',
    desc: 'Inspired by royal temple architecture, these peacock-motif jhumkas cascade with delicate micro seed pearls and emerald accents.',
    giftReady: true,
    customizable: false
  },
  {
    id: 4,
    name: 'Devangana Nakshi Floral Kada Pair',
    cat: 'jewellery',
    sub: 'Bangles & Kadas',
    price: 115000,
    old: 132000,
    metal: '22K Gold',
    weight: '48.20',
    rating: 5.0,
    reviews: 43,
    badge: 'Artisan Crafted',
    image: devanganaKadaImg,
    images: [devanganaKadaImg],
    desc: 'A pair of traditional solid kadas embossed with hand-chiseled floral filigree patterns. Openable screw-mechanism ensures seamless fit.',
    giftReady: true,
    customizable: true
  },
  {
    id: 5,
    name: 'Suhana Modern Diamond Mangalsutra',
    cat: 'jewellery',
    sub: 'Mangalsutra & Pendants',
    price: 36500,
    old: 41000,
    metal: '18K Yellow Gold',
    weight: '6.40',
    rating: 4.9,
    reviews: 110,
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=900&auto=format&fit=crop',
    desc: 'Contemporary dual-loop diamond pendant strung on auspicious handcrafted black-onyx and gold bead chains.',
    giftReady: true,
    customizable: false
  },
  {
    id: 6,
    name: 'Zoya Baguette Diamond Tennis Bracelet',
    cat: 'jewellery',
    sub: 'Bangles & Kadas',
    price: 84000,
    old: 96000,
    metal: '18K Rose Gold',
    weight: '12.10',
    rating: 4.9,
    reviews: 58,
    badge: 'Luxury',
    image: zoyaBraceletImg,
    images: [zoyaBraceletImg],
    desc: 'Gleaming channel-set baguette diamonds continuous along the entire circumference, crafted in 18K rose gold with a double safety clasp.',
    giftReady: true,
    customizable: true
  },

  // --- LUXURY FRAMES ---
  {
    id: 7,
    name: 'Crescent Moon Gold Pendant',
    cat: 'jewellery',
    sub: 'pendant',
    breadcrumbTrail: ['Home', 'Silver', 'Women', 'pendant', 'Crescent Moon Gold Pendant'],
    price: 390,
    old: 400,
    metal: 'Silver Product · 22K Gold Inspired',
    weight: '0.800 g',
    rating: 4.9,
    reviews: 76,
    badge: 'Royal Edit',
    image: crescentMoonImg,
    images: [crescentMoonImg, crescentMoonModelImg],
    desc: "The Crescent Moon Gold Pendant is a beautifully crafted 22K gold pendant inspired by the graceful crescent moon. Elegant, symbolic, and versatile, it's perfect for everyday wear, special occasions, or gifting.",
    priceBreakdown: {
      metalCategory: 'Silver Product',
      netWeight: '0.800 g',
      silverPrice: '381.60',
      gst: '11.45'
    },
    inStock: true,
    freeShipping: true,
    giftReady: true,
    customizable: true
  },
  {
    id: 8,
    name: 'Tarkashi Pure Silver Filigree Heritage Frame',
    cat: 'frames',
    sub: 'Silver Filigree Frames',
    price: 24500,
    old: 29000,
    metal: '92.5 Sterling Silver',
    weight: 'Silver: 180g (Size 5x7")',
    rating: 5.0,
    reviews: 52,
    badge: 'Masterpiece',
    image: tarkashiFrameImg,
    images: [tarkashiFrameImg],
    desc: 'Ancient Cuttack Tarkashi silver wire work framing anti-reflective museum-grade glass. Includes a sterling silver purity certificate hallmark.',
    giftReady: true,
    customizable: true
  },
  {
    id: 9,
    name: 'Ranaya Imperial Antique Brass Baroque Frame',
    cat: 'frames',
    sub: 'Royal Heritage Carved Frames',
    price: 12900,
    old: 15500,
    metal: 'Aged Patina Cast Brass',
    weight: 'Heavy Brass · 2.4 kg',
    rating: 4.8,
    reviews: 64,
    badge: 'Antique Classic',
    image: heartPendantImg,
    desc: 'Heavily embellished baroque scrolls with dual stands for horizontal and vertical display, lined with rich midnight velvet backing.',
    giftReady: true,
    customizable: true
  },
  {
    id: 10,
    name: 'Eternity Personalized Laser-Etched Memorial Frame',
    cat: 'frames',
    sub: 'Personalized Memorial Frames',
    price: 14500,
    old: 17200,
    metal: 'Brushed Gold & Acrylic Glass',
    weight: 'Custom sizing (8x12")',
    rating: 4.9,
    reviews: 95,
    badge: 'Custom Made',
    image: butterflyPendantImg,
    desc: 'Personalized with custom couple vows, wedding dates, or cherished family crest engraved in shimmering gold calligraphy plate.',
    giftReady: true,
    customizable: true
  },
  {
    id: 11,
    name: 'Luxe Floating Glass & Brass Beveled Frame',
    cat: 'frames',
    sub: 'Minimalist Acrylic & Brass',
    price: 8900,
    old: 10500,
    metal: 'High-Polish Brass',
    weight: 'Size 6x8"',
    rating: 4.7,
    reviews: 41,
    badge: 'Modern Chic',
    image: luxeFrameImg,
    images: [luxeFrameImg],
    desc: 'Double floating crystal clear tempered glass clamped with mirror-finish brass corners for modern minimal interior décor.',
    giftReady: true,
    customizable: false
  },

  // --- LUXURY GIFTING & HAMPERS ---
  {
    id: 12,
    name: 'The Ranaya Imperial Bridal Trousseau Hamper',
    cat: 'gifting',
    sub: 'Bridal Gift Hampers',
    price: 32000,
    old: 38000,
    metal: 'Velvet Box with Brass Fittings',
    weight: 'Luxury Presentation Casket',
    rating: 5.0,
    reviews: 83,
    badge: 'Signature Gift',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=900&auto=format&fit=crop',
    desc: 'Contains a miniature gold foil framed blessing, pure silver coin with Ranaya seal, scented Himalayan oud candle, and silk jewellery organizer.',
    giftReady: true,
    customizable: true
  },
  {
    id: 13,
    name: 'Lakshmi-Ganesh 24K Gold Foil Coin in Velvet Frame',
    cat: 'gifting',
    sub: 'Festive Gold Coins & Boxes',
    price: 15500,
    old: 18000,
    metal: '99.9% 24K Pure Gold',
    weight: '5.00 g Certified',
    rating: 4.9,
    reviews: 130,
    badge: 'Auspicious',
    image: lakshmiGaneshCoinImg,
    images: [lakshmiGaneshCoinImg],
    desc: 'Hallmarked 24 Karat gold coin nestled into an ornate micro-frame with LED illumination and certified assay card.',
    giftReady: true,
    customizable: true
  },
  {
    id: 14,
    name: 'The Royal Anniversary Keepsake Treasure Box',
    cat: 'gifting',
    sub: 'Anniversary Keepsakes',
    price: 21500,
    old: 25000,
    metal: 'Hand-hammered Brass & Teak',
    weight: 'Keepsake Edition',
    rating: 4.9,
    reviews: 62,
    badge: 'Couple Edition',
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=900&auto=format&fit=crop',
    desc: 'Curated for celebrating golden years: includes dual personalized champagne flutes with gold rim, dual photo frame, and custom wax-sealed letter.',
    giftReady: true,
    customizable: true
  },
  {
    id: 15,
    name: 'Prestige Executive Gilded Corporate Gift Set',
    cat: 'gifting',
    sub: 'Corporate Luxury Boxes',
    price: 16800,
    old: 19500,
    metal: 'Leather & Brass Finishes',
    weight: 'Collector Box',
    rating: 4.8,
    reviews: 37,
    badge: 'B2B Favorite',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=900&auto=format&fit=crop',
    desc: 'Bespoke corporate gifting box with custom logo engraving, gold foil pen, Italian leather desk accessories, and branded silver medallion.',
    giftReady: true,
    customizable: true
  },
  {
    id: 16,
    name: 'Vintage Royal Wax Seal & Parchment Gift Set',
    cat: 'gifting',
    sub: 'Personalized Wax Seal Gifts',
    price: 7500,
    old: 9000,
    metal: 'Solid Brass Stamp & Handle',
    weight: 'Artisan Set',
    rating: 4.9,
    reviews: 114,
    badge: 'Personal Touch',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=900&auto=format&fit=crop',
    desc: 'Custom engraved initial brass seal stamp, 4 jars of metallic sealing wax beads, brass melting spoon, and handmade deckle-edge cotton papers.',
    giftReady: true,
    customizable: true
  },

  // --- SILVER ARTICLES (REFERENCE DESIGN) ---
  {
    id: 17,
    name: 'Antique Nags Kunkumachimil',
    cat: 'silver-articles',
    sub: 'Pooja Articles',
    price: 26610,
    old: 26710,
    metal: '92.5 Sterling Silver',
    weight: 'Antique Nags · 110g',
    rating: 4.9,
    reviews: 48,
    badge: 'Pooja Special',
    image: kunkumachimilImg,
    desc: 'Exquisite handcrafted antique nags pure silver peacock kunkumachimil container for sacred kumkum and sindoor with intricate feather carving.',
    giftReady: true,
    customizable: false
  },
  {
    id: 18,
    name: 'Antique Peacock Lamp',
    cat: 'silver-articles',
    sub: 'Lamps & Vilakku',
    price: 24180,
    old: 24210,
    metal: '92.5 Sterling Silver',
    weight: 'Silver Diya · 98g',
    rating: 4.9,
    reviews: 56,
    badge: 'Artisan Crafted',
    image: peacockLampImg,
    desc: 'Traditional silver peacock oil lamp (Deepam) with Mayil motif plumage, circular oil reservoir, and stable carved ornamental base.',
    giftReady: true,
    customizable: false
  },
  {
    id: 19,
    name: 'Decord Idol',
    cat: 'silver-articles',
    sub: 'Silver Idols',
    price: 29480,
    old: 29740,
    metal: '92.5 Sterling Silver',
    weight: 'Weight: 135g',
    rating: 4.8,
    reviews: 39,
    badge: 'Masterpiece',
    image: decordIdolImg,
    desc: 'Handcrafted solid sterling silver elephant idol with royal temple caparison detailing, symbolizing wisdom, strength, and divine blessings.',
    giftReady: true,
    customizable: false
  },
  {
    id: 20,
    name: 'Elephant Idol',
    cat: 'silver-articles',
    sub: 'Silver Idols',
    price: 29480,
    old: 29740,
    metal: '92.5 Sterling Silver',
    weight: 'Weight: 135g',
    rating: 5.0,
    reviews: 72,
    badge: 'Auspicious',
    image: elephantIdolImg,
    desc: 'Auspicious silver elephant idol with trunk raised upward for prosperity and positive energy, intricately carved by master silversmiths.',
    giftReady: true,
    customizable: false
  },
  {
    id: 21,
    name: 'Kamachivilaku 122.400 G',
    cat: 'silver-articles',
    sub: 'Lamps & Vilakku',
    price: 37220,
    old: 37240,
    metal: '92.5 Sterling Silver',
    weight: 'Net Weight: 122.400 g',
    rating: 4.9,
    reviews: 84,
    badge: 'Pure Silver',
    image: kamachi122Img,
    desc: 'Sacred Kamakshi Vilakku oil lamp made with pure hallmarked silver, featuring Goddess Kamakshi embossed on the arch with Gajalakshmi iconography.',
    giftReady: true,
    customizable: false
  },
  {
    id: 22,
    name: 'Kamachivilaku 144.400 G',
    cat: 'silver-articles',
    sub: 'Lamps & Vilakku',
    price: 43750,
    old: 43770,
    metal: '92.5 Sterling Silver',
    weight: 'Net Weight: 144.400 g',
    rating: 5.0,
    reviews: 61,
    badge: 'Bestseller',
    image: kamachi144Img,
    desc: 'Heavyweight pure silver Kamakshi deepam for temple shrines and grihapravesham pooja ceremonies, featuring ornate halo detailing.',
    giftReady: true,
    customizable: false
  },
  {
    id: 23,
    name: 'Kamachivilaku 16.600 G',
    cat: 'silver-articles',
    sub: 'Lamps & Vilakku',
    price: 5030,
    metal: '92.5 Sterling Silver',
    weight: 'Net Weight: 16.600 g',
    rating: 4.8,
    reviews: 43,
    badge: 'Daily Pooja',
    image: kamachi16Img,
    desc: 'Petite pure silver Kamakshi vilakku ideal for home altars, daily prayer rituals, or auspicious housewarming return gifts.',
    giftReady: true,
    customizable: false
  },
  {
    id: 24,
    name: 'Kamachivilaku 18 G',
    cat: 'silver-articles',
    sub: 'Lamps & Vilakku',
    price: 5450,
    old: 5460,
    metal: '92.5 Sterling Silver',
    weight: 'Net Weight: 18.000 g',
    rating: 4.9,
    reviews: 58,
    badge: 'Divine Gift',
    image: kamachi18Img,
    desc: 'Classic lightweight hallmarked silver Kamakshi oil lamp with traditional finial and sacred flame reservoir for daily rituals.',
    giftReady: true,
    customizable: false
  }
]

export const FAQ = [
  ['What makes The Ranaya Store jewellery and frames unique?', 'The Ranaya Store brings together fine 22K/18K BIS-hallmarked jewellery, hand-gilded 24K gold & sterling silver photo frames, and bespoke luxury gifting hampers crafted by multi-generational royal artisans.'],
  ['How does the Gift Presentation & Gifting Service work?', 'Every order comes in our Signature Ranaya luxury packaging. During checkout or product customization, you can upgrade to royal velvet or teakwood hampers, add personalized calligraphy gift cards, specify secret delivery dates, and opt for tamper-proof wax seal presentation.'],
  ['Can photo frames and gifts be customized?', 'Yes! We offer precision laser engraving for names, dates, wedding vows, company monograms, and even photo printing with museum-grade UV protection before packing.'],
  ['Are gold and silver items certified and hallmarked?', 'Every jewellery piece carries a government BIS hallmark and individual digital authenticity certificate. Our silver frames carry a 925 sterling silver purity stamp and weight slip.'],
  ['What are your shipping and insured delivery policies?', 'All Ranaya orders are shipped in tamper-evident, fully insured express packages with dual OTP delivery verification. We offer complimentary insured shipping across India for all orders above ₹10,000.'],
  ['Can I ship directly to a gift recipient without price tags?', 'Yes! Choose the "Send as a Surprise Gift" option at checkout. We will include a complimentary luxury gift greeting card and hide all price invoices from the delivery parcel, sending invoices only to your registered email.']
]

export const DOCS = {
  'shipping-policy': ['Shipping & Insured Transit Policy', [
    'Orders are hand-inspected, wrapped in signature presentation, and dispatched via high-security express courier within 24–48 hours.',
    'Complimentary fully insured shipping applies to all orders above ₹10,000 across India.',
    'Every package requires confidential recipient OTP or photo signature upon hand-delivery to ensure zero transit risk.',
    'For expedited same-day or next-day delivery in metro cities, our concierge desk is available 7 days a week.'
  ]],
  'returns-policy': ['Luxury Return, Exchange & Lifetime Buyback', [
    'Enjoy 15 days of hassle-free exchange on ready-to-wear jewellery pieces in unworn condition with security tag intact.',
    'Personalized and custom-engraved frames or gift hampers are covered under our Lifetime Craftsmanship Repair Guarantee.',
    'We offer 100% exchange value for 22K/18K gold and diamonds based on prevailing benchmark rates under our Lifetime Exchange Program.'
  ]],
  'privacy-policy': ['Privacy, Discretion & Data Security', [
    'Your confidentiality is our sacred promise. Recipient details and surprise gifting coordinates are never shared with third parties.',
    'All credit card, UPI, and net banking transactions are secured with military-grade 256-bit SSL encryption.',
    'You may request deletion or modification of your concierge profile at any time.'
  ]],
  'terms': ['Terms & Bespoke Craftsmanship Conditions', [
    'By accessing The Ranaya Store, you enjoy our verified luxury customer guarantee and pan-India insured transit.',
    'Precious metal valuations are benchmarked daily against official bullion rates at time of checkout.',
    'All images represent true artisan craftsmanship; slight artistic nuances highlight the genuine handmade quality of our heritage frames and jewellery.'
  ]]
}
