import React, { createContext, useContext, useState, useEffect, useMemo } from 'react'
import { Routes, Route, Link, NavLink, useParams, useNavigate, useLocation } from 'react-router-dom'
import { CATS, PRODUCTS, GIFT_WRAPS, OCCASIONS, FAQ, DOCS } from './data'
import logoImg from './assets/logo.webp'
import banner1Webp from './assets/banner 1.webp'
import banner2Webp from './assets/banner 2.webp'
import banner3Webp from './assets/banner 3.webp'
import promise1Img from './assets/promise-1.svg'
import promise2Img from './assets/promise-2.svg'
import promise3Img from './assets/promise-3.svg'
import promise4Img from './assets/promise-4.svg'
import promise5Img from './assets/promise-5.svg'
import customizeBannerImg from './assets/customize-banner.png'
import anniversaryImg from './assets/anniversary.webp'
import occasionImg from './assets/occasion.webp'
import newBornImg from './assets/newboen.webp'
import birthdayImg from './assets/birthday.webp'
import giftingImg from './assets/gifting-1.webp'
import heirloomFramesImg from './assets/heirloom-frames.jpg'
import luxuryGiftingHamperImg from './assets/luxury-gifting-hampers.webp'
import artOfRanayaGiftingImg from './assets/art-of-ranaya-gifting.png'

const ShopCtx = createContext()
export const useShop = () => useContext(ShopCtx)
export const inr = n => '₹' + Number(n).toLocaleString('en-IN')

/* Navigation Header */
function Header() {
  const { cart, wish, setIsCartOpen } = useShop()
  const nav = useNavigate()
  const [q, setQ] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (q.trim()) {
      nav(`/shop?q=${encodeURIComponent(q.trim())}`)
    }
  }

  const totalCartCount = cart.reduce((acc, it) => acc + it.qty, 0)

  return (
    <>
      <div className="top-bar">
        <div className="wrap top-bar-content">
          <div className="top-bar-left">
            <span><i className="bi bi-shield-check"></i> 100% Certified 22K/18K BIS Hallmarked & 925 Silver</span>
            <span><i className="bi bi-truck"></i> Free Pan-India Insured Transit above ₹10,000</span>
          </div>
          <div className="top-bar-right">
            <Link to="/track"><i className="bi bi-geo-alt"></i> Track Order</Link>
            <Link to="/contact"><i className="bi bi-headset"></i> Concierge Desk</Link>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="wrap nav-main">
          {/* Search Bar */}
          <form className="search-form" onSubmit={handleSearch}>
            <i className="bi bi-search search-icon"></i>
            <input
              type="text"
              placeholder="Search jewellery, frames, luxury gifts..."
              value={q}
              onChange={e => setQ(e.target.value)}
            />
          </form>

          {/* Brand Logo */}
          <Link to="/" className="brand-logo">
            <img src={logoImg} alt="The Ranaya Store" className="brand-logo-img" />
          </Link>

          {/* Quick Actions */}
          <div className="nav-actions">
            <Link to="/login" className="action-link" title="My Account">
              <i className="bi bi-person"></i>
              <span>Account</span>
            </Link>
            <Link to="/wishlist" className="action-link" title="My Wishlist">
              <i className="bi bi-heart"></i>
              <span>Wishlist</span>
              {wish.length > 0 && <span className="badge-count">{wish.length}</span>}
            </Link>
            <button
              type="button"
              className="action-link action-btn"
              title="Shopping Bag"
              onClick={() => setIsCartOpen(true)}
            >
              <i className="bi bi-bag"></i>
              <span>Bag</span>
              {totalCartCount > 0 && <span className="badge-count">{totalCartCount}</span>}
            </button>
          </div>
        </div>

        {/* Categories Menu */}
        <nav className="category-nav wrap">
          <NavLink to="/shop" className="nav-tab">
            Shop
          </NavLink>

          <NavLink to="/category/jewellery" className="nav-tab">
            Silver Frames
          </NavLink>

          <NavLink to="/category/frames" className="nav-tab">
            Prima Art
          </NavLink>

          <NavLink to="/category/gifting" className="nav-tab">
            Lightweight Diamond Studs
          </NavLink>

          <NavLink to="/category/designer-silver" className="nav-tab">
            Designer Silver Jewellery
          </NavLink>

          <NavLink to="/category/silver-article" className="nav-tab">
            Silver Articles
          </NavLink>
        </nav>
      </header>
    </>
  )
}

const PROMISE_ITEMS = [
  { id: 1, icon: promise1Img, title: 'Lifetime Maintenance' },
  { id: 2, icon: promise2Img, title: 'Your Jewellery is Insured' },
  { id: 3, icon: promise3Img, title: 'Complete Transparency' },
  { id: 4, icon: promise4Img, title: 'Certified Diamonds' },
  { id: 5, icon: promise5Img, title: 'BIS 916 Hallmarked' },
]

/* FULL WIDTH BANNER SECTION */
function CustomizeSection() {
  return (
    <section className="full-width-banner-section">
      <Link to="/shop" className="full-width-banner-link" aria-label="Wear Stories, Not Just Jewellery - Personalize Yours">
        <img
          src={customizeBannerImg}
          alt="Wear Stories, Not Just Jewellery - Custom-Made, Beautifully Crafted, Delivered With Love. Personalize Yours"
          className="full-width-banner-img"
          loading="lazy"
        />
      </Link>
    </section>
  )
}

/* PROMISE SECTION */
function PromiseSection() {
  return (
    <section className="promise-section">
      <div className="wrap">
        <h2 className="promise-section-title">
          Ranaya Store <strong>Promise</strong>
        </h2>
        <div className="promise-grid">
          {PROMISE_ITEMS.map(item => (
            <div key={item.id} className="promise-item">
              <div className="promise-icon-wrap">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="promise-icon"
                  loading="lazy"
                />
              </div>
              <p className="promise-label">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Footer */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <div className="footer-logo">The Ranaya Store</div>
          <p className="footer-desc">
            Purveyors of fine hallmarked gold jewellery, gilded artisan photo frames, and customized heirloom gifting boxes designed to immortalize your most treasured moments.
          </p>
          <div className="footer-socials">
            <a href="#instagram" className="footer-social-btn" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
            <a href="#facebook" className="footer-social-btn" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
            <a href="#pinterest" className="footer-social-btn" aria-label="Pinterest"><i className="bi bi-pinterest"></i></a>
            <a href="#whatsapp" className="footer-social-btn" aria-label="WhatsApp"><i className="bi bi-whatsapp"></i></a>
          </div>
        </div>

        <div className="footer-col">
          <h5>Collections</h5>
          <ul className="footer-links">
            <li><Link to="/category/jewellery"><i className="bi bi-arrow-right-short"></i> Fine Jewellery</Link></li>
            <li><Link to="/category/designer-silver"><i className="bi bi-arrow-right-short"></i> Designer Silver Jewellery</Link></li>
            <li><Link to="/category/silver-article"><i className="bi bi-arrow-right-short"></i> Silver Articles</Link></li>
            <li><Link to="/category/frames"><i className="bi bi-arrow-right-short"></i> Gold & Silver Frames</Link></li>
            <li><Link to="/category/gifting"><i className="bi bi-arrow-right-short"></i> Curated Gift Hampers</Link></li>
            <li><Link to="/gifting-service"><i className="bi bi-arrow-right-short"></i> Custom Gift Studio</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Customer Care</h5>
          <ul className="footer-links">
            <li><Link to="/track"><i className="bi bi-geo-alt"></i> Track Your Parcel</Link></li>
            <li><Link to="/faq"><i className="bi bi-question-circle"></i> Frequently Asked Questions</Link></li>
            <li><Link to="/shipping-policy"><i className="bi bi-box-seam"></i> Insured Transit Policy</Link></li>
            <li><Link to="/returns-policy"><i className="bi bi-arrow-repeat"></i> Lifetime Exchange & Buyback</Link></li>
            <li><Link to="/contact"><i className="bi bi-envelope"></i> Concierge Inquiries</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Bespoke Concierge</h5>
          <p className="footer-desc">
            Have a custom gifting inquiry, bulk wedding order, or corporate curation request?
          </p>
          <div style={{ color: '#cfa859', fontWeight: 600, fontSize: 15, marginBottom: 8 }}>
            <i className="bi bi-telephone-inbound-fill"></i> +91 (0) 800-RANAYA-00
          </div>
          <p className="footer-desc" style={{ marginBottom: 14 }}>Mon – Sat, 9:30 AM to 8:30 PM IST</p>
          <Link to="/contact" className="btn btn-gold btn-sm">
            <i className="bi bi-chat-quote"></i> Request Call Back
          </Link>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <div>
          © 2026 The Ranaya Store Luxury Ltd. All rights reserved. Handcrafted with reverence.
        </div>
        <div className="footer-badges">
          <span><i className="bi bi-patch-check-fill"></i> BIS 916 Hallmarked</span>
          <span><i className="bi bi-shield-lock-fill"></i> 256-Bit SSL Secured</span>
          <span><i className="bi bi-box-seam-fill"></i> Tamper-Proof Seals</span>
        </div>
      </div>
    </footer>
  )
}

/* Product Card */
function ProductCard({ p }) {
  const { wish, toggleWish, addCart } = useShop()
  const isWished = wish.includes(p.id)
  const isSilverJewellery = getProductCategory(p) === 'designer-silver'

  return (
    <div className="product-card">
      <div className="product-img-wrap">
        <span className={`badge-tag ${p.cat === 'gifting' ? 'gifting' : (p.cat === 'silver-articles' || isSilverJewellery) ? 'silver' : ''}`}>
          <i className={p.cat === 'gifting' ? 'bi bi-gift-fill' : p.cat === 'frames' ? 'bi bi-card-image' : (p.cat === 'silver-articles' || isSilverJewellery) ? 'bi bi-stars' : 'bi bi-gem'}></i> {p.badge || p.sub}
        </span>
        <button
          className={`btn-wish ${isWished ? 'active' : ''}`}
          onClick={() => toggleWish(p.id)}
          title={isWished ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <i className={`bi ${isWished ? 'bi-heart-fill' : 'bi-heart'}`}></i>
        </button>
        <Link to={`/product/${p.id}`}>
          <img src={p.image} alt={p.name} loading="lazy" />
        </Link>
      </div>

      <div className="product-info">
        <span className="product-cat">
          {isSilverJewellery ? 'Designer Silver Jewellery' : p.cat === 'jewellery' ? 'Fine Jewellery' : p.cat === 'frames' ? 'Heirloom Frame' : (p.cat === 'silver-articles' || p.cat === 'articles') ? 'Silver Articles' : 'Luxury Gifting'}
        </span>
        <Link to={`/product/${p.id}`}>
          <h4 className="product-title">{p.name}</h4>
        </Link>
        <div className="product-specs">
          <i className="bi bi-check2-circle text-gold"></i> {p.metal} · {p.weight}
        </div>

        <div className="product-rating" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', margin: '4px 0 6px' }}>
          <span className="stars" style={{ display: 'inline-flex', gap: '2px', fontSize: '11px', color: '#f59e0b' }}>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </span>
          <span style={{ fontWeight: 600, color: 'var(--ranaya-dark)' }}>{p.rating ? p.rating.toFixed(1) : '5.0'}</span>
          {p.reviews && <span className="muted" style={{ fontSize: '11.5px' }}>({p.reviews})</span>}
        </div>
        
        <div className="product-price-row">
          <span className="price-current">{inr(p.price)}</span>
          {p.old && <span className="price-old">{inr(p.old)}</span>}
        </div>

        <div className="product-actions">
          <Link to={`/product/${p.id}`} className="btn btn-sm">
            <i className="bi bi-eye"></i> View Details
          </Link>
          <button
            className="btn btn-gold btn-sm"
            onClick={() => addCart(p, 'Signature Standard', GIFT_WRAPS[0])}
            title="Quick Add to Bag"
          >
            <i className="bi bi-bag-plus"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

/* Breadcrumb Wrapper */
function PageWrapper({ title, subtitle, crumbs, children }) {
  return (
    <main className="wrap page-wrapper" style={{ minHeight: '65vh', paddingTop: 28, paddingBottom: 64 }}>
      <div className="muted page-breadcrumbs" style={{ marginBottom: 16, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 6 }}>
        <Link to="/"><i className="bi bi-house"></i> Home</Link>
        {crumbs}
      </div>
      {title && (
        <div style={{ marginBottom: 28 }}>
          {subtitle && <span className="sec-subtitle">{subtitle}</span>}
          <h1 className="sec-title page-title">{title}</h1>
        </div>
      )}
      {children}
    </main>
  )
}

const BANNER_SLIDES = [
  {
    id: 1,
    image: banner1Webp,
    alt: 'Gold & Silver Coins - Start Your Investment in Style',
    link: '/shop',
  },
  {
    id: 2,
    image: banner2Webp,
    alt: 'Lightweight, stylish and always on trend - Explore Collections',
    link: '/shop',
  },
  {
    id: 3,
    image: banner3Webp,
    alt: 'A Touch of Divinity in Silver - Shop Now',
    link: '/shop',
  },
]

/* HOME PAGE */
function HomePage() {
  const [selectedOccasion, setSelectedOccasion] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const nav = useNavigate()

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % BANNER_SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isPaused])

  return (
    <>
      {/* Hero Banner Carousel */}
      <section
        className="hero-section"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="hero-slider-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {BANNER_SLIDES.map((slide, idx) => (
            <div key={slide.id} className="hero-slide">
              <Link to={slide.link} className="hero-banner-link" aria-label={slide.alt}>
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="hero-banner-img"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="banner-dots" role="tablist" aria-label="Banner slides">
          {BANNER_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`banner-dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              role="tab"
              aria-selected={idx === currentSlide}
            />
          ))}
        </div>
      </section>

      {/* Value Pillars */}
      <section className="pillars-bar">
        <div className="wrap pillars-grid">
          <div className="pillar-item">
            <div className="pillar-icon"><i className="bi bi-award"></i></div>
            <div className="pillar-text">
              <h4>BIS 916 Hallmarked</h4>
              <p>Certified pure 22K/18K gold & 925 sterling silver purity</p>
            </div>
          </div>
          <div className="pillar-item">
            <div className="pillar-icon"><i className="bi bi-gift"></i></div>
            <div className="pillar-text">
              <h4>Signature Luxury Gifting</h4>
              <p>Wax-sealed custom greeting card & satin presentation box</p>
            </div>
          </div>
          <div className="pillar-item">
            <div className="pillar-icon"><i className="bi bi-shield-check"></i></div>
            <div className="pillar-text">
              <h4>100% Insured Delivery</h4>
              <p>Confidential armored transit with OTP verification</p>
            </div>
          </div>
          <div className="pillar-item">
            <div className="pillar-icon"><i className="bi bi-arrow-repeat"></i></div>
            <div className="pillar-text">
              <h4>Lifetime Exchange</h4>
              <p>Lifetime buyback and exchange guarantee on precious metals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Showcase Cards */}
      <section className="wrap sec">
        <div className="sec-header">
          <span className="sec-subtitle">Curated Departments</span>
          <h2 className="sec-title">Three Pillars of The Ranaya Store</h2>
        </div>
        <div className="category-cards">
          <Link to="/category/jewellery" className="cat-card">
            <div
              className="cat-card-bg"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=900&auto=format&fit=crop')` }}
            ></div>
            <div className="cat-card-overlay"></div>
            <div className="cat-card-content">
              <h3>Royal Fine Jewellery</h3>
              <p>Kundan chokers, certified diamond solitaires, temple jhumkas & nakshi kadas.</p>
              <span className="cat-card-link">Explore Jewellery <i className="bi bi-arrow-right"></i></span>
            </div>
          </Link>

          <Link to="/category/frames" className="cat-card">
            <div
              className="cat-card-bg"
              style={{ backgroundImage: `url(${heirloomFramesImg})` }}
            ></div>
            <div className="cat-card-overlay"></div>
            <div className="cat-card-content">
              <h3>Heirloom Frames</h3>
              <p>24K gold-leaf gilded teakwood, silver filigree & bespoke etched memorial frames.</p>
              <span className="cat-card-link">Explore Frames <i className="bi bi-arrow-right"></i></span>
            </div>
          </Link>

          <Link to="/category/gifting" className="cat-card">
            <div
              className="cat-card-bg"
              style={{ backgroundImage: `url(${luxuryGiftingHamperImg})` }}
            ></div>
            <div className="cat-card-overlay"></div>
            <div className="cat-card-content">
              <h3>Luxury Gifting Hampers</h3>
              <p>Velvet bridal trousseau caskets, gold coin shrines & engraved wax seal sets.</p>
              <span className="cat-card-link">Explore Gifting <i className="bi bi-arrow-right"></i></span>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Luxury Products */}
      <section className="wrap sec">
        <div className="sec-header">
          <span className="sec-subtitle">Crown Jewels</span>
          <h2 className="sec-title">Trending Masterpieces</h2>
        </div>
        <div className="product-grid">
          {PRODUCTS.slice(0, 8).map(p => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
        <div className="center" style={{ marginTop: 36 }}>
          <Link to="/shop" className="btn btn-gold">
            <i className="bi bi-grid-3x3-gap"></i> View All Masterpieces
          </Link>
        </div>
      </section>

      {/* EXCLUSIVE GIFTING EXPERIENCE – THE ART OF RANAYA GIFTING */}
      <section className="wrap">
        <div
          className="gifting-feature-banner"
          style={{ '--gifting-bg': `url(${artOfRanayaGiftingImg})` }}
        >
          <div className="gifting-banner-content">
            <div className="gifting-banner-badge">
              <i className="bi bi-stars"></i> Exclusive Gifting Experience
            </div>
            <h2 className="gifting-banner-title">
              The Art of Ranaya Gifting
            </h2>
            <p className="gifting-banner-desc">
              Elevate your gift into an unforgettable sensory ritual. Whether delivering across borders or placing into beloved hands, our artisans handcraft bespoke crimson velvet caskets, calligraphy letters, and tamper-proof royal wax seals.
            </p>

            <div className="gifting-perks-list">
              <div className="gifting-perk">
                <i className="bi bi-check-circle-fill"></i>
                <span><b>Zero Price Invoice:</b> Discreet delivery without price tags</span>
              </div>
              <div className="gifting-perk">
                <i className="bi bi-check-circle-fill"></i>
                <span><b>Wax Seal Presentation:</b> Hand-poured gold/burgundy seal</span>
              </div>
              <div className="gifting-perk">
                <i className="bi bi-check-circle-fill"></i>
                <span><b>Handwritten Calligraphy:</b> Personalized message parchment</span>
              </div>
              <div className="gifting-perk">
                <i className="bi bi-check-circle-fill"></i>
                <span><b>Secret Scheduled Delivery:</b> Deliver exactly on anniversary/date</span>
              </div>
            </div>

            <div className="gifting-banner-actions">
              <Link to="/gifting-service" className="btn btn-gold">
                <i className="bi bi-gift"></i> Configure Your Gift Box
              </Link>
              <Link to="/category/gifting" className="btn btn-ghost gifting-btn-secondary">
                <i className="bi bi-eye"></i> Browse Ready Hampers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Occasions Showcase Section */}
      <section className="wrap sec occasions-showcase-section">
        <div className="sec-header">
          <h2 className="sec-title occasions-showcase-title">
            Make Every Occasion <strong>Unforgettable</strong>
          </h2>
          <p className="sec-desc occasions-showcase-desc">
            Celebrate your love and gratitude with jewellery that lasts forever
          </p>
        </div>

        <div className="occasions-showcase-grid">
          <div className="occasions-quad-grid">
            <Link to="/shop?occasion=anniversary" className="occasions-card" aria-label="Anniversary Collection">
              <img src={anniversaryImg} alt="Anniversary Jewellery" className="occasions-card-img" loading="lazy" />
            </Link>
            <Link to="/shop" className="occasions-card" aria-label="Every Occasion Collection">
              <img src={occasionImg} alt="Every Occasion Jewellery" className="occasions-card-img" loading="lazy" />
            </Link>
            <Link to="/shop?q=newborn" className="occasions-card" aria-label="New Born Collection">
              <img src={newBornImg} alt="New Born Jewellery & Gifts" className="occasions-card-img" loading="lazy" />
            </Link>
            <Link to="/shop?occasion=birthday" className="occasions-card" aria-label="Birthday Collection">
              <img src={birthdayImg} alt="Birthday Jewellery" className="occasions-card-img" loading="lazy" />
            </Link>
          </div>
          <div className="occasions-feature-col">
            <Link to="/category/gifting" className="occasions-card occasions-feature-card" aria-label="Gifting Collection">
              <img src={giftingImg} alt="Gift Golden Memories" className="occasions-card-img" loading="lazy" />
            </Link>
          </div>
        </div>
      </section>

      {/* Luxury Frames & Decor Section */}
      <section className="wrap sec">
        <div className="sec-header">
          <h2 className="sec-title">
            <Link to="/category/silver-frames" className="sec-title-link">
              Collections Filled with Love
            </Link>
          </h2>
          <p className="sec-desc">
            Explore exquisite silver articles and ornaments, blending elegance with enduring charm for every occasion
          </p>
        </div>
        <div className="collections-love-row">
          {PRODUCTS.filter(p => p.cat === 'frames').map(p => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
        <div className="center" style={{ marginTop: 32 }}>
          <Link to="/category/silver-frames" className="btn">
            <i className="bi bi-card-image"></i> View All Frames
          </Link>
        </div>
      </section>

      {/* Banner Section */}
      <CustomizeSection />

      {/* Silver Articles Section */}
      <SilverArticlesSection />
    </>
  )
}

/* Silver Articles Showcase Section */
function SilverArticlesSection() {
  const [selectedArticleCat, setSelectedArticleCat] = useState('all')

  const articleCategories = [
    { id: 'all', name: 'All Articles' },
    { id: 'Lamps & Vilakku', name: 'Lamps & Vilakku' },
    { id: 'Silver Idols', name: 'Silver Idols' },
    { id: 'Pooja Articles', name: 'Pooja Articles' },
  ]

  const silverProducts = useMemo(() => {
    const list = PRODUCTS.filter(p => p.cat === 'silver-articles')
    if (selectedArticleCat === 'all') return list
    return list.filter(p => p.sub === selectedArticleCat)
  }, [selectedArticleCat])

  return (
    <section className="wrap sec silver-articles-section">
      <div className="sec-header">
        <span className="sec-subtitle">Divine Craftsmanship</span>
        <h2 className="sec-title">
          <Link to="/category/silver-article" className="sec-title-link">
            Silver Articles & Ornaments
          </Link>
        </h2>
        <p className="sec-desc">
          Explore sacred silver articles, traditional vilakkus, and exquisite idols crafted for auspicious celebrations
        </p>
      </div>

      {/* Article / Category Options */}
      <div className="article-category-options">
        {articleCategories.map(cat => (
          <button
            key={cat.id}
            type="button"
            className={`article-cat-btn ${selectedArticleCat === cat.id ? 'active' : ''}`}
            onClick={() => setSelectedArticleCat(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {silverProducts.map(p => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>

      <div className="center" style={{ marginTop: 36 }}>
        <Link to="/category/silver-article" className="btn btn-gold">
          <i className="bi bi-stars"></i> View All Silver Articles
        </Link>
      </div>
    </section>
  )
}

const SHOP_CATEGORIES = [
  { id: 'all', name: 'All Categories' },
  { id: 'silver-frames', name: 'Silver Frames' },
  { id: 'prima-art', name: 'Prima Art' },
  { id: 'lightweight-diamond', name: 'Lightweight Diamond Studs' },
  { id: 'designer-silver', name: 'Designer Silver Jewellery' },
  { id: 'silver-article', name: 'Silver Articles' },
]

const CATEGORY_OPTIONS = [
  { id: 'silver-frames', name: 'Silver Frames' },
  { id: 'prima-art', name: 'Prima Art' },
  { id: 'lightweight-diamond', name: 'Lightweight Diamond Studs' },
  { id: 'designer-silver', name: 'Designer Silver Jewellery' },
  { id: 'silver-article', name: 'Silver Articles' },
]

function getProductCategory(p) {
  if (p.cat === 'silver-articles' || p.cat === 'articles' || (p.id >= 17 && p.id <= 24)) return 'silver-article'
  if (p.id === 8 || p.id === 9 || p.id === 10 || p.id === 11 || p.cat === 'frames') return 'silver-frames'
  if (p.id === 13) return 'prima-art'
  if (p.id === 7 || (p.cat === 'jewellery' && p.metal && p.metal.toLowerCase().includes('silver'))) return 'designer-silver'
  if (p.id === 1 || p.id === 2 || p.id === 3 || p.id === 4 || p.id === 5 || p.id === 6) return 'lightweight-diamond'
  if (p.id === 12 || p.id === 14 || p.cat === 'gifting') return 'silver-article'
  return 'designer-silver'
}

/* SHOP & CATALOG VIEW */
function ShopPage({ cat, sub }) {
  const loc = useLocation()
  const nav = useNavigate()
  const qParam = new URLSearchParams(loc.search).get('q') || ''
  const queryCat = new URLSearchParams(loc.search).get('cat')

  const urlCatMap = {
    jewellery: 'silver-frames',
    frames: 'prima-art',
    gifting: 'lightweight-diamond',
    'silver-frames': 'silver-frames',
    'prima-art': 'prima-art',
    'lightweight-diamond': 'lightweight-diamond',
    'designer-silver': 'designer-silver',
    'designer-silver-jewellery': 'designer-silver',
    'silver-jewellery': 'designer-silver',
    'silver-article': 'silver-article',
    'silver-articles': 'silver-article',
  }

  const currentCatParam = cat || queryCat
  const initialCat = currentCatParam ? (urlCatMap[currentCatParam] || currentCatParam) : 'all'
  const [selectedCat, setSelectedCat] = useState(initialCat)
  const [maxPrice, setMaxPrice] = useState(120000)
  const [sort, setSort] = useState('popular')

  useEffect(() => {
    if (currentCatParam) {
      setSelectedCat(urlCatMap[currentCatParam] || currentCatParam)
    } else {
      setSelectedCat('all')
    }
  }, [currentCatParam])

  const categoryCounts = useMemo(() => {
    const counts = { all: PRODUCTS.length }
    SHOP_CATEGORIES.forEach(c => {
      if (c.id !== 'all') {
        counts[c.id] = PRODUCTS.filter(p => getProductCategory(p) === c.id).length
      }
    })
    return counts
  }, [])

  let items = PRODUCTS.filter(p => {
    if (selectedCat !== 'all' && getProductCategory(p) !== selectedCat) return false
    if (p.price > maxPrice) return false
    if (qParam && !p.name.toLowerCase().includes(qParam.toLowerCase()) && !p.desc?.toLowerCase().includes(qParam.toLowerCase())) return false
    return true
  })

  if (sort === 'low') items = [...items].sort((a, b) => a.price - b.price)
  if (sort === 'high') items = [...items].sort((a, b) => b.price - a.price)
  if (sort === 'rating') items = [...items].sort((a, b) => (b.rating || 0) - (a.rating || 0))

  const activeCatObj = SHOP_CATEGORIES.find(c => c.id === selectedCat)
  const activeCatTitle = activeCatObj && activeCatObj.id !== 'all' ? activeCatObj.name : 'All Categories'

  const handleResetFilters = () => {
    setMaxPrice(120000)
    setSort('popular')
    if (currentCatParam) {
      setSelectedCat(urlCatMap[currentCatParam] || currentCatParam)
    } else {
      setSelectedCat('all')
      nav('/shop')
    }
  }

  const handleCategoryClick = (catId) => {
    if (selectedCat === catId) {
      setSelectedCat('all')
      nav('/shop')
    } else {
      setSelectedCat(catId)
      nav(`/category/${catId}`)
    }
  }

  const isFiltered = (selectedCat !== 'all' && !currentCatParam) || maxPrice < 120000 || sort !== 'popular'

  return (
    <PageWrapper
      title={activeCatTitle}
      subtitle={selectedCat !== 'all' ? `Explore ${activeCatTitle} Catalog` : 'The Sovereign Masterpieces Catalog'}
      crumbs={
        <>
          <i className="bi bi-chevron-right" style={{ fontSize: 10 }}></i>
          <Link to="/shop">Shop</Link>
          {selectedCat !== 'all' && (
            <>
              <i className="bi bi-chevron-right" style={{ fontSize: 10 }}></i>
              <span>{activeCatTitle}</span>
            </>
          )}
        </>
      }
    >
      <div className="shop-layout">
        {/* Left Sidebar */}
        <aside className="shop-sidebar">
          {/* 1. Filter By */}
          <div className="sidebar-header">
            <h3 className="sidebar-title">
              <i className="bi bi-sliders"></i> Filter By
            </h3>
            {isFiltered && (
              <button
                type="button"
                className="sidebar-reset-btn"
                onClick={handleResetFilters}
                title="Clear all active filters"
              >
                Reset
              </button>
            )}
          </div>

          {/* 2. All Categories (Expanded and visible at all times, no toggle) */}
          <div className="sidebar-section">
            <h4 className="sidebar-subtitle">All Categories</h4>
            <div className="sidebar-category-list">
              {CATEGORY_OPTIONS.map(c => {
                const isSelected = selectedCat === c.id
                return (
                  <button
                    key={c.id}
                    type="button"
                    className={`sidebar-cat-item ${isSelected ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(c.id)}
                  >
                    <span className="cat-radio-indicator">
                      {isSelected && <span className="cat-radio-dot" />}
                    </span>
                    <span className="cat-name">{c.name}</span>
                    <span className="cat-count">({categoryCounts[c.id] || 0})</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* 3. Max Price */}
          <div className="sidebar-section">
            <div className="sidebar-price-header">
              <h4 className="sidebar-subtitle">Max Price</h4>
              <span className="sidebar-price-badge">{inr(maxPrice)}</span>
            </div>
            <input
              type="range"
              className="sidebar-price-slider"
              min="0"
              max="120000"
              step="500"
              value={maxPrice}
              onChange={e => setMaxPrice(Number(e.target.value))}
              aria-label="Max Price filter"
            />
            <div className="sidebar-price-range">
              <span>₹0</span>
              <span>₹1,20,000</span>
            </div>
          </div>
        </aside>

        {/* Right Product Section */}
        <main className="shop-main">
          <div className="shop-toolbar">
            <div className="shop-count">
              Showing <b>{items.length}</b> verified articles {qParam && <span>for query <i>"{qParam}"</i></span>}
            </div>
            <div className="shop-sort-wrap">
              <label htmlFor="shop-sort" className="shop-sort-label">Sort By:</label>
              <select
                id="shop-sort"
                className="filter-select"
                value={sort}
                onChange={e => setSort(e.target.value)}
              >
                <option value="popular">Curator's Choice</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {items.length > 0 ? (
            <div className="product-grid">
              {items.map(p => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          ) : (
            <div className="center" style={{ padding: '60px 0', background: '#fff', borderRadius: 'var(--radius-md)', border: '1px solid var(--ranaya-border)' }}>
              <i className="bi bi-search" style={{ fontSize: 44, color: 'var(--ranaya-muted)' }}></i>
              <h3 style={{ marginTop: 16 }}>No items found matching your criteria</h3>
              <p className="muted" style={{ marginBottom: 20 }}>Try adjusting your price slider or choosing a different category.</p>
              <button type="button" onClick={handleResetFilters} className="btn btn-gold">
                Reset All Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </PageWrapper>
  )
}

function CategoryPageWrapper() {
  const { cat, sub } = useParams()
  return <ShopPage cat={cat} sub={sub} />
}

/* PRODUCT DETAIL VIEW */
function ProductDetailPage() {
  const { id } = useParams()
  const p = PRODUCTS.find(x => x.id === Number(id))
  const { addCart, toggleWish, wish } = useShop()
  const nav = useNavigate()

  const [activeImg, setActiveImg] = useState(p ? (p.images ? p.images[0] : p.image) : '')
  const [qty, setQty] = useState(1)
  const [isGiftWrapper, setIsGiftWrapper] = useState(false)
  const [isGiftMsg, setIsGiftMsg] = useState(false)

  const [selectedWrap, setSelectedWrap] = useState(GIFT_WRAPS[0])
  const [isGift, setIsGift] = useState(false)
  const [giftMsg, setGiftMsg] = useState('')
  const [recipientName, setRecipientName] = useState('')
  const [selectedSize, setSelectedSize] = useState('Standard Size')
  const [pincode, setPincode] = useState('')
  const [pincodeStatus, setPincodeStatus] = useState('')

  useEffect(() => {
    if (p) {
      setActiveImg(p.images ? p.images[0] : p.image)
    }
  }, [p])

  if (!p) {
    return (
      <PageWrapper title="Piece Not Found">
        <div className="center" style={{ padding: 40 }}>
          <p>The requested treasure could not be found.</p>
          <Link to="/shop" className="btn btn-gold" style={{ marginTop: 16 }}>Back to Shop</Link>
        </div>
      </PageWrapper>
    )
  }

  const isWished = wish.includes(p.id)

  const handlePincodeCheck = () => {
    if (pincode.trim().length === 6 && /^\d+$/.test(pincode)) {
      setPincodeStatus('Available! Express insured delivery in 2–4 business days with tamper-evident seal.')
    } else {
      setPincodeStatus('Please enter a valid 6-digit Indian delivery pincode.')
    }
  }

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addCart(p, selectedSize, (isGift || isGiftWrapper) ? selectedWrap : null, (isGift || isGiftMsg) ? { recipientName, giftMsg } : null)
    }
    alert(`"${p.name}" has been placed into your Ranaya Bag.`)
  }

  const handleBuyNow = () => {
    for (let i = 0; i < qty; i++) {
      addCart(p, selectedSize, (isGift || isGiftWrapper) ? selectedWrap : null, (isGift || isGiftMsg) ? { recipientName, giftMsg } : null)
    }
    nav('/checkout')
  }

  return (
    <PageWrapper
      crumbs={
        p.breadcrumbTrail ? (
          <>
            {p.breadcrumbTrail.map((crumb, idx) => {
              if (idx === 0) return null
              const isLast = idx === p.breadcrumbTrail.length - 1
              return (
                <React.Fragment key={idx}>
                  <i className="bi bi-chevron-right" style={{ fontSize: 10 }}></i>
                  {isLast ? (
                    <span>{crumb}</span>
                  ) : (
                    <Link to={crumb.toLowerCase() === 'silver' ? '/category/designer-silver' : '/shop'}>{crumb}</Link>
                  )}
                </React.Fragment>
              )
            })}
          </>
        ) : (
          <>
            <i className="bi bi-chevron-right" style={{ fontSize: 10 }}></i>
            <Link to={`/category/${getProductCategory(p)}`}>
              {getProductCategory(p) === 'designer-silver'
                ? 'Designer Silver Jewellery'
                : p.cat === 'jewellery'
                ? 'Fine Jewellery'
                : p.cat === 'frames'
                ? 'Frames'
                : (p.cat === 'silver-articles' || p.cat === 'articles')
                ? 'Silver Articles'
                : 'Luxury Gifting'}
            </Link>
            <i className="bi bi-chevron-right" style={{ fontSize: 10 }}></i>
            <span>{p.name}</span>
          </>
        )
      }
    >
      {p.priceBreakdown ? (
        <div className="pd-grid pd-breakdown-grid" style={{ alignItems: 'start', gap: 40 }}>
          {/* Visual Gallery */}
          <div className="pd-gallery pd-gallery-custom">
            <div className="pd-main-img" style={{ background: '#f5f5f5', borderRadius: 4, overflow: 'hidden' }}>
              <img
                src={activeImg || p.image}
                alt={p.name}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
              />
            </div>
            {p.images && p.images.length > 1 && (
              <div className="pd-thumb-list" style={{ display: 'flex', gap: 12, marginTop: 14, overflowX: 'auto', paddingBottom: 4 }}>
                {p.images.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveImg(imgSrc)}
                    style={{
                      width: 72,
                      height: 72,
                      flexShrink: 0,
                      border: (activeImg || p.image) === imgSrc ? '2px solid #333' : '1px solid #ddd',
                      borderRadius: 4,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      background: '#f9f9f9',
                      padding: 2
                    }}
                  >
                    <img
                      src={imgSrc}
                      alt={`${p.name} view ${idx + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div>
            <span style={{ fontSize: 14, color: '#777', textTransform: 'lowercase', display: 'block', marginBottom: 4 }}>
              {p.sub || 'pendant'}
            </span>
            <h1 className="pd-custom-title" style={{ fontSize: 28, fontWeight: 600, color: '#1e1e1e', margin: '4px 0 12px', fontFamily: 'inherit' }}>
              {p.name}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
              {p.old && (
                <span style={{ fontSize: 17, color: '#888', textDecoration: 'line-through' }}>
                  ₹{Number(p.old).toFixed(2)}
                </span>
              )}
              <span className="pd-custom-price" style={{ fontSize: 24, fontWeight: 700, color: 'var(--ranaya-burgundy, #82080a)' }}>
                ₹{Number(p.price).toFixed(2)}
              </span>
              <span style={{ fontSize: 13.5, fontWeight: 500, color: '#2e7d32', marginLeft: 4 }}>
                In stock
              </span>
            </div>

            <p style={{ fontSize: 14, lineHeight: 1.6, color: '#444', marginBottom: 22 }}>
              {p.desc}
            </p>

            {/* Price Breakdown Table */}
            <div style={{ marginBottom: 20 }}>
              <h4 style={{ fontSize: 14.5, fontWeight: 600, color: '#333', marginBottom: 10 }}>
                Price Breakdown
              </h4>
              <div className="price-breakdown-wrapper" style={{ border: '1px solid #e0e0e0', borderRadius: 4, overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                <table className="price-breakdown-table" style={{ width: '100%', minWidth: 380, borderCollapse: 'collapse', fontSize: 13.5 }}>
                  <thead>
                    <tr style={{ background: '#fafafa', borderBottom: '1px solid #e0e0e0' }}>
                      <th style={{ padding: '10px 14px', textAlign: 'center', fontWeight: 600, color: 'var(--ranaya-burgundy, #82080a)', borderRight: '1px solid #e0e0e0' }}>Metal Category</th>
                      <th style={{ padding: '10px 14px', textAlign: 'center', fontWeight: 600, color: 'var(--ranaya-burgundy, #82080a)', borderRight: '1px solid #e0e0e0' }}>Net Weight</th>
                      <th style={{ padding: '10px 14px', textAlign: 'center', fontWeight: 600, color: 'var(--ranaya-burgundy, #82080a)', borderRight: '1px solid #e0e0e0' }}>Silver Price</th>
                      <th style={{ padding: '10px 14px', textAlign: 'center', fontWeight: 600, color: 'var(--ranaya-burgundy, #82080a)' }}>GST</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '10px 14px', textAlign: 'center', color: '#444', borderRight: '1px solid #e0e0e0' }}>{p.priceBreakdown.metalCategory}</td>
                      <td style={{ padding: '10px 14px', textAlign: 'center', color: '#444', borderRight: '1px solid #e0e0e0' }}>{p.priceBreakdown.netWeight}</td>
                      <td style={{ padding: '10px 14px', textAlign: 'center', color: '#444', borderRight: '1px solid #e0e0e0' }}>{p.priceBreakdown.silverPrice}</td>
                      <td style={{ padding: '10px 14px', textAlign: 'center', color: '#444' }}>{p.priceBreakdown.gst}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Free Shipping Note */}
            <p style={{ color: '#b91c1c', fontSize: 14, fontWeight: 600, margin: '14px 0 16px' }}>
              Enjoy free shipping on this item!
            </p>

            {/* Toggles */}
            <div className="pd-toggles-row" style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap', marginBottom: 20 }}>
              <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontSize: 13.5, color: '#333' }}>
                <span className="custom-toggle-switch">
                  <input
                    type="checkbox"
                    checked={isGiftWrapper}
                    onChange={e => setIsGiftWrapper(e.target.checked)}
                  />
                  <span className="custom-toggle-slider"></span>
                </span>
                <span>Gift Wrapper</span>
              </label>

              <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontSize: 13.5, color: '#333' }}>
                <span className="custom-toggle-switch">
                  <input
                    type="checkbox"
                    checked={isGiftMsg}
                    onChange={e => setIsGiftMsg(e.target.checked)}
                  />
                  <span className="custom-toggle-slider"></span>
                </span>
                <span>Gift Message from Ranaya Store</span>
              </label>
            </div>

            {isGiftMsg && (
              <div style={{ marginBottom: 18 }}>
                <textarea
                  rows="3"
                  placeholder="Type your complimentary gift message here..."
                  value={giftMsg}
                  onChange={e => setGiftMsg(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #ddd', borderRadius: 4, fontFamily: 'inherit', fontSize: 13, boxSizing: 'border-box' }}
                />
              </div>
            )}

            {/* Quantity & CTA Buttons Row */}
            <div className="pd-custom-cta-row" style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
              <div className="pd-custom-qty" style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: 4, height: 44 }}>
                <button
                  type="button"
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  style={{ width: 36, height: '100%', border: 'none', background: 'transparent', fontSize: 18, cursor: 'pointer', color: '#555' }}
                >
                  -
                </button>
                <span style={{ minWidth: 32, textAlign: 'center', fontWeight: 600, fontSize: 14 }}>
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty(q => q + 1)}
                  style={{ width: 36, height: '100%', border: 'none', background: 'transparent', fontSize: 18, cursor: 'pointer', color: '#555' }}
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="btn-custom-cart"
                style={{
                  background: '#1e1e1e',
                  color: '#fff',
                  border: 'none',
                  padding: '0 32px',
                  height: 44,
                  borderRadius: 4,
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: 'pointer',
                  transition: 'background 0.2s ease'
                }}
              >
                Add To Cart
              </button>

              <button
                type="button"
                onClick={handleBuyNow}
                className="btn-custom-buy"
                style={{
                  background: '#fff',
                  color: '#1e1e1e',
                  border: '1px solid #1e1e1e',
                  padding: '0 32px',
                  height: 44,
                  borderRadius: 4,
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Buy Now
              </button>

              <button
                type="button"
                onClick={() => toggleWish(p.id)}
                title={isWished ? 'Remove from Wishlist' : 'Add to Wishlist'}
                className="btn-custom-wish"
                style={{
                  width: 44,
                  height: 44,
                  border: '1px solid #ccc',
                  borderRadius: 4,
                  background: isWished ? '#1e1e1e' : '#fff',
                  color: isWished ? '#fff' : '#1e1e1e',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  cursor: 'pointer'
                }}
              >
                <i className={`bi ${isWished ? 'bi-heart-fill text-danger' : 'bi-heart'}`}></i>
              </button>
            </div>

            {/* WhatsApp Pre-order */}
            <div style={{ marginTop: 14 }}>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`Hello, I would like to pre-order ${p.name} (Price: ₹${p.price}) from The Ranaya Store.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pd-whatsapp-link"
                style={{
                  background: '#25D366',
                  color: '#fff',
                  padding: '12px 24px',
                  borderRadius: 6,
                  fontWeight: 600,
                  fontSize: 14,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  textDecoration: 'none',
                  boxShadow: '0 2px 6px rgba(37, 211, 102, 0.3)',
                  transition: 'opacity 0.2s ease'
                }}
              >
                <i className="bi bi-whatsapp" style={{ fontSize: 18 }}></i>
                Pre-order via WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="pd-grid">
          {/* Visual Gallery */}
        <div className="pd-gallery">
          <div className="pd-main-img">
            <img src={p.image} alt={p.name} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginTop: 14 }}>
            <div style={{ border: '2px solid var(--ranaya-gold)', borderRadius: 4, overflow: 'hidden' }}>
              <img src={p.image} alt={p.name} style={{ width: '100%', height: 75, objectFit: 'cover' }} />
            </div>
            <div style={{ border: '1px solid var(--ranaya-border)', borderRadius: 4, overflow: 'hidden', opacity: 0.8 }}>
              <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=300&auto=format&fit=crop" alt="Gift Presentation" style={{ width: '100%', height: 75, objectFit: 'cover' }} />
            </div>
            <div style={{ border: '1px solid var(--ranaya-border)', borderRadius: 4, overflow: 'hidden', opacity: 0.8 }}>
              <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=300&auto=format&fit=crop" alt="Packaging Detail" style={{ width: '100%', height: 75, objectFit: 'cover' }} />
            </div>
            <div style={{ border: '1px solid var(--ranaya-border)', borderRadius: 4, overflow: 'hidden', opacity: 0.8 }}>
              <img src="https://images.unsplash.com/photo-1582560475093-ba66accbc424?q=80&w=300&auto=format&fit=crop" alt="Artisan Hallmark" style={{ width: '100%', height: 75, objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        {/* Product Details & Gifting Options */}
        <div>
          <div className="pd-badges" style={{ flexWrap: 'wrap' }}>
            <span className="badge-tag" style={{ position: 'static' }}>{p.badge}</span>
            <span className="badge-tag" style={{ position: 'static', background: '#2c050e' }}>
              <i className="bi bi-shield-check"></i> BIS Hallmarked
            </span>
            <span className="badge-tag gifting" style={{ position: 'static' }}>
              <i className="bi bi-gift"></i> Gifting Ready
            </span>
          </div>

          <h1 className="pd-title">{p.name}</h1>

          <div className="pd-reviews">
            <div className="stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <b>{p.rating} / 5.0</b>
            <span className="muted">({p.reviews} verified patrons)</span>
          </div>

          <div className="pd-price-wrap">
            <span className="pd-price">{inr(p.price)}</span>
            {p.old && <span className="pd-old-price">{inr(p.old)}</span>}
            <span className="pd-tax-note">
              <i className="bi bi-check-circle"></i> Price Inclusive of all GST & Insured Transit
            </span>
          </div>

          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 24, color: 'var(--ranaya-text)' }}>
            {p.desc}
          </p>

          <div className="pd-meta-grid">
            <div className="pd-meta-item">
              <small>Composition / Hallmark</small>
              <strong><i className="bi bi-award text-gold"></i> {p.metal}</strong>
            </div>
            <div className="pd-meta-item">
              <small>Weight / Dimensions</small>
              <strong><i className="bi bi-aspect-ratio text-gold"></i> {p.weight}</strong>
            </div>
            <div className="pd-meta-item">
              <small>Authenticity</small>
              <strong><i className="bi bi-patch-check text-gold"></i> Digital Assay Card Included</strong>
            </div>
            <div className="pd-meta-item">
              <small>Dispatch Time</small>
              <strong><i className="bi bi-clock-history text-gold"></i> Within 24-48 Hours</strong>
            </div>
          </div>

          {/* Sizing / Custom Fit */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: 'block', fontWeight: 600, fontSize: 13, marginBottom: 6 }}>
              Select Size / Dimension:
            </label>
            <select
              value={selectedSize}
              onChange={e => setSelectedSize(e.target.value)}
              className="filter-select"
              style={{ width: '100%', padding: '10px 14px' }}
            >
              <option>Standard Size (Complimentary Resizing)</option>
              <option>Small / Petite Fitting</option>
              <option>Custom Bridal Fit / Extended</option>
            </select>
          </div>

          {/* LUXURY GIFTING FEATURE ACCORDION */}
          <div className="gift-customizer-box">
            <div className="gift-header">
              <i className="bi bi-gift-fill"></i>
              <div>
                <h4 style={{ fontSize: 16, color: 'var(--ranaya-burgundy)' }}>
                  Luxury Gifting & Presentation Studio
                </h4>
                <p className="muted" style={{ fontSize: 12 }}>
                  Transform this piece into an unforgettable unboxing experience with wax seals and satin ribbons.
                </p>
              </div>
            </div>

            <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontWeight: 600, margin: '12px 0' }}>
              <input
                type="checkbox"
                checked={isGift}
                onChange={e => setIsGift(e.target.checked)}
                style={{ width: 18, height: 18, accentColor: 'var(--ranaya-burgundy)' }}
              />
              <span>Send as a Gift (Includes gift packaging, calligraphy note & no invoice tags)</span>
            </label>

            {isGift && (
              <div style={{ marginTop: 16, borderTop: '1px dashed var(--ranaya-border)', paddingTop: 16 }}>
                <p style={{ fontWeight: 600, fontSize: 13, marginBottom: 8 }}>
                  1. Choose Presentation Packaging:
                </p>
                <div className="gift-box-options">
                  {GIFT_WRAPS.map(wrap => (
                    <div
                      key={wrap.id}
                      className={`gift-option-card ${selectedWrap.id === wrap.id ? 'selected' : ''}`}
                      onClick={() => setSelectedWrap(wrap)}
                    >
                      <div className="gift-option-title">
                        <span>{wrap.name}</span>
                        <span>{wrap.price === 0 ? 'Free' : `+${inr(wrap.price)}`}</span>
                      </div>
                      <p className="gift-option-desc">{wrap.desc}</p>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 14 }}>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: 12, marginBottom: 4 }}>
                    Recipient Name (For wax-sealed envelope):
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Princess Ananya / Mrs. Radhika Roy"
                    value={recipientName}
                    onChange={e => setRecipientName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      border: '1px solid var(--ranaya-border)',
                      borderRadius: 'var(--radius-sm)',
                      marginBottom: 10,
                      fontFamily: 'inherit',
                      boxSizing: 'border-box'
                    }}
                  />

                  <label style={{ display: 'block', fontWeight: 600, fontSize: 12, marginBottom: 4 }}>
                    Handwritten Calligraphy Message:
                  </label>
                  <textarea
                    rows="3"
                    className="gift-msg-textarea"
                    placeholder="Write a heartfelt blessing or message to be penned on hand-torn cotton deckle paper..."
                    value={giftMsg}
                    onChange={e => setGiftMsg(e.target.value)}
                  ></textarea>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="pd-btn-group" style={{ display: 'flex', gap: 12, margin: '24px 0', flexWrap: 'wrap' }}>
            <button className="btn" style={{ flex: 1, padding: 14 }} onClick={handleAddToCart}>
              <i className="bi bi-bag-plus"></i> Add to Bag
            </button>
            <button className="btn btn-gold" style={{ flex: 1, padding: 14 }} onClick={handleBuyNow}>
              <i className="bi bi-lightning-fill"></i> Buy Now
            </button>
            <button
              className={`btn btn-ghost ${isWished ? 'active' : ''}`}
              style={{ width: 48, padding: 0 }}
              onClick={() => toggleWish(p.id)}
              title="Save to Wishlist"
            >
              <i className={`bi ${isWished ? 'bi-heart-fill' : 'bi-heart'}`} style={{ fontSize: 18 }}></i>
            </button>
          </div>

          {/* Pincode & Delivery Estimator */}
          <div style={{ background: '#fff', border: '1px solid var(--ranaya-border)', padding: 16, borderRadius: 'var(--radius-sm)' }}>
            <span style={{ fontWeight: 600, fontSize: 13, display: 'block', marginBottom: 6 }}>
              <i className="bi bi-geo-alt text-gold"></i> Check Delivery & Pincode Availability:
            </span>
            <div style={{ display: 'flex', gap: 8 }}>
              <input
                type="text"
                placeholder="Enter 6-digit Pincode"
                maxLength={6}
                value={pincode}
                onChange={e => setPincode(e.target.value)}
                style={{
                  border: '1px solid var(--ranaya-border)',
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-sm)',
                  flex: 1,
                  minWidth: 0,
                  fontFamily: 'inherit',
                  boxSizing: 'border-box'
                }}
              />
              <button className="btn btn-sm" onClick={handlePincodeCheck}>
                Check
              </button>
            </div>
            {pincodeStatus && (
              <p style={{ marginTop: 8, fontSize: 12, color: pincodeStatus.includes('Available') ? '#15803d' : '#b91c1c' }}>
                <i className={`bi ${pincodeStatus.includes('Available') ? 'bi-check-circle' : 'bi-exclamation-triangle'}`}></i> {pincodeStatus}
              </p>
            )}
          </div>
        </div>
      </div>
    )}

      {/* Related Products */}
      <div style={{ marginTop: 60 }}>
        <div className="sec-header">
          <span className="sec-subtitle">Complementary Creations</span>
          <h2 className="sec-title">You May Also Admire</h2>
        </div>
        <div className="product-grid">
          {PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 4).map(rel => (
            <ProductCard key={rel.id} p={rel} />
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}

/* GIFTING SERVICE / GIFT BOX STUDIO PAGE */
function GiftingStudioPage() {
  const [selectedHamper, setSelectedHamper] = useState(PRODUCTS.find(p => p.cat === 'gifting') || PRODUCTS[11])
  const [selectedWrap, setSelectedWrap] = useState(GIFT_WRAPS[1])
  const [occasion, setOccasion] = useState('wedding')
  const [senderName, setSenderName] = useState('')
  const [recipientName, setRecipientName] = useState('')
  const [cardMessage, setCardMessage] = useState('')
  const [sealColor, setSealColor] = useState('Burgundy & Gold')
  const [secretDate, setSecretDate] = useState('')
  const { addCart } = useShop()
  const nav = useNavigate()

  const handleOrderStudioBox = () => {
    addCart(
      selectedHamper,
      `Occasion: ${occasion} | Seal: ${sealColor}`,
      selectedWrap,
      {
        recipientName,
        senderName,
        giftMsg: cardMessage,
        deliveryDate: secretDate
      }
    )
    alert('Your custom curated gift box has been added to your shopping bag!')
    nav('/cart')
  }

  return (
    <PageWrapper
      title="Ranaya Bespoke Gifting Studio"
      subtitle="Craft an Unrivalled Gifting Presentation"
      crumbs={
        <>
          <i className="bi bi-chevron-right" style={{ fontSize: 10 }}></i>
          <span>Gifting Studio</span>
        </>
      }
    >
      <div className="pd-grid gifting-studio-grid" style={{ gap: 40 }}>
        {/* Left Column: Interactive Preview */}
        <div>
          <div className="gifting-live-preview" style={{
            background: 'linear-gradient(145deg, #2c050e, #4a0c1a)',
            padding: 30,
            borderRadius: 'var(--radius-md)',
            color: '#fff',
            boxShadow: 'var(--ranaya-shadow-lg)',
            border: '2px solid var(--ranaya-gold)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <span style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ranaya-gold-light)' }}>
                Live Gift Presentation Preview
              </span>
              <h3 style={{ fontSize: 26, color: '#fff', marginTop: 4 }}>The Ranaya Heirloom Box</h3>
            </div>

            <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: 20, border: '1px solid var(--ranaya-gold)' }}>
              <img src={selectedHamper.image} alt="Hamper Preview" style={{ width: '100%', height: 260, objectFit: 'cover' }} />
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.08)', padding: 18, borderRadius: 'var(--radius-sm)', marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span className="muted" style={{ color: '#d9b36a' }}>Packaging Choice:</span>
                <b>{selectedWrap.name}</b>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span className="muted" style={{ color: '#d9b36a' }}>Wax Seal Monogram:</span>
                <b>{sealColor}</b>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span className="muted" style={{ color: '#d9b36a' }}>Scheduled Delivery:</span>
                <b>{secretDate || 'Immediate Dispatch'}</b>
              </div>
            </div>

            {/* Handwritten note preview */}
            <div style={{
              background: '#faf6f0',
              color: '#2a1a1d',
              padding: 20,
              borderRadius: 'var(--radius-sm)',
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              border: '1px dashed #d9b36a',
              boxShadow: 'inset 0 0 10px rgba(0,0,0,0.05)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ebdccf', paddingBottom: 6, marginBottom: 10 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--ranaya-burgundy)' }}>To: {recipientName || 'Beloved Recipient'}</span>
                <span style={{ fontSize: 12, color: 'var(--ranaya-gold-dark)' }}>From: {senderName || 'Your Well-Wisher'}</span>
              </div>
              <p style={{ fontStyle: 'italic', fontSize: 16, lineHeight: 1.6, minHeight: 48 }}>
                "{cardMessage || 'May this precious heirloom bring boundless grace, fortune, and eternal delight to your celebrations.'}"
              </p>
              <div style={{ textAlign: 'right', marginTop: 10 }}>
                <span style={{
                  display: 'inline-block',
                  background: 'var(--ranaya-burgundy)',
                  color: 'var(--ranaya-gold)',
                  padding: '3px 10px',
                  borderRadius: 20,
                  fontSize: 10,
                  fontWeight: 600
                }}>
                  <i className="bi bi-shield-fill"></i> Wax Sealed with Ranaya Emblem
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Customization Controls */}
        <div>
          <h2 style={{ fontSize: 28, marginBottom: 8 }}>Build Your Gift Masterpiece</h2>
          <p className="muted" style={{ marginBottom: 24 }}>
            Tailor every single nuance of your gift packaging for weddings, anniversaries, and personal milestones.
          </p>

          {/* 1. Pick Hamper or Base */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>
              1. Choose Flagship Gift Hamper / Product:
            </label>
            <select
              className="filter-select"
              style={{ width: '100%', padding: '10px 14px' }}
              value={selectedHamper.id}
              onChange={e => {
                const found = PRODUCTS.find(p => p.id === Number(e.target.value))
                if (found) setSelectedHamper(found)
              }}
            >
              {PRODUCTS.filter(p => p.cat === 'gifting' || p.cat === 'frames').map(p => (
                <option key={p.id} value={p.id}>
                  {p.name} — {inr(p.price)}
                </option>
              ))}
            </select>
          </div>

          {/* 2. Packaging Style */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>
              2. Select Luxury Box Presentation:
            </label>
            <div className="gift-box-options">
              {GIFT_WRAPS.map(wrap => (
                <div
                  key={wrap.id}
                  className={`gift-option-card ${selectedWrap.id === wrap.id ? 'selected' : ''}`}
                  onClick={() => setSelectedWrap(wrap)}
                >
                  <div className="gift-option-title">
                    <span>{wrap.name}</span>
                    <span>{wrap.price === 0 ? 'Free' : `+${inr(wrap.price)}`}</span>
                  </div>
                  <p className="gift-option-desc">{wrap.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Occasion & Details */}
          <div className="gifting-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }}>
            <div>
              <label style={{ display: 'block', fontWeight: 600, fontSize: 12, marginBottom: 4 }}>
                Occasion Theme:
              </label>
              <select
                className="filter-select"
                style={{ width: '100%' }}
                value={occasion}
                onChange={e => setOccasion(e.target.value)}
              >
                {OCCASIONS.map(o => (
                  <option key={o.id} value={o.id}>{o.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: 600, fontSize: 12, marginBottom: 4 }}>
                Wax Seal Color:
              </label>
              <select
                className="filter-select"
                style={{ width: '100%' }}
                value={sealColor}
                onChange={e => setSealColor(e.target.value)}
              >
                <option>Imperial Crimson Velvet Wax</option>
                <option>24K Metallic Gold Wax</option>
                <option>Emerald Green Royal Seal</option>
                <option>Midnight Pearl Seal</option>
              </select>
            </div>
          </div>

          <div className="gifting-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }}>
            <div>
              <label style={{ display: 'block', fontWeight: 600, fontSize: 12, marginBottom: 4 }}>
                Recipient Name:
              </label>
              <input
                type="text"
                placeholder="Recipient's Name"
                value={recipientName}
                onChange={e => setRecipientName(e.target.value)}
                style={{ width: '100%', padding: '9px 12px', border: '1px solid var(--ranaya-border)', borderRadius: 'var(--radius-sm)', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: 600, fontSize: 12, marginBottom: 4 }}>
                Sender / From:
              </label>
              <input
                type="text"
                placeholder="Your Name (or Secret)"
                value={senderName}
                onChange={e => setSenderName(e.target.value)}
                style={{ width: '100%', padding: '9px 12px', border: '1px solid var(--ranaya-border)', borderRadius: 'var(--radius-sm)', boxSizing: 'border-box' }}
              />
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontWeight: 600, fontSize: 12, marginBottom: 4 }}>
              Calligraphy Letter Message:
            </label>
            <textarea
              rows="3"
              className="gift-msg-textarea"
              placeholder="Enter your message for the calligraphy artist..."
              value={cardMessage}
              onChange={e => setCardMessage(e.target.value)}
            ></textarea>
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', fontWeight: 600, fontSize: 12, marginBottom: 4 }}>
              <i className="bi bi-calendar-event"></i> Desired Delivery Date (Surprise Scheduled Delivery):
            </label>
            <input
              type="date"
              value={secretDate}
              onChange={e => setSecretDate(e.target.value)}
              style={{ width: '100%', padding: '9px 12px', border: '1px solid var(--ranaya-border)', borderRadius: 'var(--radius-sm)', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{
            background: '#fff',
            padding: 16,
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--ranaya-border)',
            marginBottom: 20
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 700, color: 'var(--ranaya-burgundy)' }}>
              <span>Total Gift Value:</span>
              <span>{inr(selectedHamper.price + selectedWrap.price)}</span>
            </div>
            <p className="muted" style={{ fontSize: 12, marginTop: 4 }}>
              Includes tamper-proof insured express transit and wax seal craftsmanship.
            </p>
          </div>

          <button className="btn btn-gold btn-full" style={{ padding: 15 }} onClick={handleOrderStudioBox}>
            <i className="bi bi-gift-fill"></i> Add Custom Gift Box to Bag
          </button>
        </div>
      </div>
    </PageWrapper>
  )
}

/* WISHLIST VIEW */
function WishlistPage() {
  const { wish, toggleWish, addCart } = useShop()
  const wishedProducts = PRODUCTS.filter(p => wish.includes(p.id))

  return (
    <PageWrapper
      title="Your Curated Wishlist"
      subtitle="Saved Heirloom Creations"
      crumbs={<><i className="bi bi-chevron-right" style={{ fontSize: 10 }}></i><span>Wishlist</span></>}
    >
      {wishedProducts.length > 0 ? (
        <div className="product-grid">
          {wishedProducts.map(p => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      ) : (
        <div className="center" style={{ padding: '60px 0' }}>
          <i className="bi bi-heart" style={{ fontSize: 48, color: 'var(--ranaya-muted)' }}></i>
          <h3 style={{ marginTop: 16 }}>Your wishlist is currently empty</h3>
          <p className="muted" style={{ marginBottom: 20 }}>
            Save pieces you love to revisit or share as gifting hints with close ones.
          </p>
          <Link to="/shop" className="btn btn-gold">Explore Collections</Link>
        </div>
      )}
    </PageWrapper>
  )
}

/* CART VIEW */
function CartPage() {
  const { cart, updateQty, total, removeCartItem } = useShop()
  const nav = useNavigate()

  if (cart.length === 0) {
    return (
      <PageWrapper title="Your Shopping Bag" crumbs={<><i className="bi bi-chevron-right" style={{ fontSize: 10 }}></i><span>Cart</span></>}>
        <div className="center" style={{ padding: '60px 0' }}>
          <i className="bi bi-bag-x" style={{ fontSize: 48, color: 'var(--ranaya-muted)' }}></i>
          <h3 style={{ marginTop: 16 }}>Your shopping bag is empty</h3>
          <p className="muted" style={{ marginBottom: 20 }}>
            Discover our collection of 22K gold jewellery, gold-leaf frames, and luxury gifting boxes.
          </p>
          <Link to="/shop" className="btn btn-gold">Start Shopping</Link>
        </div>
      </PageWrapper>
    )
  }

  const shippingCost = total > 10000 ? 0 : 250
  const grandTotal = total + shippingCost

  return (
    <PageWrapper title="Your Shopping Bag" crumbs={<><i className="bi bi-chevron-right" style={{ fontSize: 10 }}></i><span>Cart</span></>}>
      <div className="cart-layout">
        {/* Cart Item List */}
        <div>
          {cart.map((item, idx) => (
            <div className="cart-item" key={item.key || idx}>
              <div className="cart-item-img">
                <img src={item.p.image} alt={item.p.name} />
              </div>
              <div className="cart-item-details">
                <h4 className="cart-item-title">{item.p.name}</h4>
                <p className="muted" style={{ fontSize: 12 }}>
                  {item.p.metal} · Size: {item.size}
                </p>
                {item.wrap && (
                  <div style={{ marginTop: 6, fontSize: 12, color: 'var(--ranaya-gold-dark)' }}>
                    <i className="bi bi-gift-fill"></i> Packaging: <b>{item.wrap.name}</b> {item.wrap.price > 0 && `(+${inr(item.wrap.price)})`}
                    {item.giftMeta?.recipientName && (
                      <span style={{ display: 'block', color: 'var(--ranaya-text)' }}>
                        Recipient: <i>{item.giftMeta.recipientName}</i>
                      </span>
                    )}
                  </div>
                )}
                <div style={{ marginTop: 6, fontWeight: 700, color: 'var(--ranaya-burgundy)' }}>
                  {inr((item.p.price + (item.wrap ? item.wrap.price : 0)) * item.qty)}
                </div>
              </div>

              <div className="cart-item-actions" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10 }}>
                <div className="cart-qty-ctrl">
                  <button onClick={() => updateQty(item, item.qty - 1)}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item, item.qty + 1)}>+</button>
                </div>
                <button
                  onClick={() => removeCartItem(item)}
                  style={{ background: 'none', border: 'none', color: '#b91c1c', cursor: 'pointer', fontSize: 12 }}
                >
                  <i className="bi bi-trash3"></i> Remove
                </button>
              </div>
            </div>
          ))}

          {/* Gifting Guarantee Note */}
          <div style={{
            background: '#faf2f4',
            border: '1px solid #ebdccf',
            borderRadius: 'var(--radius-sm)',
            padding: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 14
          }}>
            <i className="bi bi-shield-check" style={{ fontSize: 28, color: 'var(--ranaya-burgundy)' }}></i>
            <div>
              <b style={{ color: 'var(--ranaya-burgundy)' }}>100% Insured Transit & Hallmarked Purity</b>
              <p className="muted" style={{ fontSize: 12, margin: 0 }}>
                Every consignment travels in armored, tamper-evident GPS-monitored courier boxes with OTP delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Order Summary Aside */}
        <aside className="cart-summary-box">
          <h3 style={{ fontSize: 20, marginBottom: 16, borderBottom: '1px solid var(--ranaya-border)', paddingBottom: 10 }}>
            Order Summary
          </h3>

          <div className="cart-summary-row">
            <span>Subtotal ({cart.reduce((a, c) => a + c.qty, 0)} items)</span>
            <b>{inr(total)}</b>
          </div>

          <div className="cart-summary-row">
            <span>Insured Transit & Security</span>
            <span style={{ color: shippingCost === 0 ? '#16a34a' : 'inherit', fontWeight: 600 }}>
              {shippingCost === 0 ? 'COMPLIMENTARY' : inr(shippingCost)}
            </span>
          </div>

          <div className="cart-summary-row">
            <span>Hallmark Verification Slip</span>
            <span style={{ color: '#16a34a', fontWeight: 600 }}>Included (Free)</span>
          </div>

          <div className="cart-summary-total">
            <span>Total Amount</span>
            <span>{inr(grandTotal)}</span>
          </div>

          <p className="muted" style={{ fontSize: 11, margin: '12px 0 20px' }}>
            *Applicable GST included. Ships with digital assay certificate.
          </p>

          <button
            className="btn btn-gold btn-full"
            style={{ padding: 14 }}
            onClick={() => nav('/checkout')}
          >
            <i className="bi bi-lock-fill"></i> Proceed to Secure Checkout
          </button>

          <Link
            to="/shop"
            className="btn btn-ghost btn-full"
            style={{ marginTop: 8 }}
          >
            <i className="bi bi-arrow-left"></i> Continue Browsing
          </Link>
        </aside>
      </div>
    </PageWrapper>
  )
}

/* CHECKOUT VIEW */
function CheckoutPage() {
  const { total, cart, placeOrder } = useShop()
  const nav = useNavigate()

  const [address, setAddress] = useState({
    fullName: 'Aditi Roy',
    phone: '9876543210',
    email: 'aditi.roy@example.com',
    street: 'Villa 14, Royal Palm Boulevard, Jubilee Hills',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500033',
    isSurpriseGift: true,
    giftDeliveryDate: ''
  })

  const [paymentMethod, setPaymentMethod] = useState('upi')

  const shippingCost = total > 10000 ? 0 : 250
  const grandTotal = total + shippingCost

  const handleCheckoutSubmit = (e) => {
    e.preventDefault()
    placeOrder()
    nav('/order-confirmation')
  }

  return (
    <PageWrapper title="Secure Checkout" crumbs={<><i className="bi bi-chevron-right" style={{ fontSize: 10 }}></i><span>Checkout</span></>}>
      <form onSubmit={handleCheckoutSubmit}>
        <div className="cart-layout">
          <div>
            {/* Delivery Details */}
            <div className="checkout-card" style={{ background: '#fff', border: '1px solid var(--ranaya-border)', padding: 24, borderRadius: 'var(--radius-md)', marginBottom: 24 }}>
              <h3 style={{ fontSize: 18, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <i className="bi bi-truck text-gold"></i> 1. Insured Delivery Address
              </h3>

              <div className="checkout-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                <input
                  type="text"
                  required
                  placeholder="Recipient Full Name"
                  value={address.fullName}
                  onChange={e => setAddress({ ...address, fullName: e.target.value })}
                  style={{ padding: '10px 14px', border: '1px solid var(--ranaya-border)', borderRadius: 'var(--radius-sm)', width: '100%', boxSizing: 'border-box' }}
                />
                <input
                  type="tel"
                  required
                  placeholder="Contact Mobile Number (for OTP)"
                  value={address.phone}
                  onChange={e => setAddress({ ...address, phone: e.target.value })}
                  style={{ padding: '10px 14px', border: '1px solid var(--ranaya-border)', borderRadius: 'var(--radius-sm)', width: '100%', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ marginBottom: 14 }}>
                <input
                  type="email"
                  required
                  placeholder="Email Address (for confidential invoice)"
                  value={address.email}
                  onChange={e => setAddress({ ...address, email: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--ranaya-border)', borderRadius: 'var(--radius-sm)', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ marginBottom: 14 }}>
                <input
                  type="text"
                  required
                  placeholder="Apartment, Street Address, Landmark"
                  value={address.street}
                  onChange={e => setAddress({ ...address, street: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--ranaya-border)', borderRadius: 'var(--radius-sm)', boxSizing: 'border-box' }}
                />
              </div>

              <div className="checkout-grid-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
                <input
                  type="text"
                  required
                  placeholder="City"
                  value={address.city}
                  onChange={e => setAddress({ ...address, city: e.target.value })}
                  style={{ padding: '10px 14px', border: '1px solid var(--ranaya-border)', borderRadius: 'var(--radius-sm)', width: '100%', boxSizing: 'border-box' }}
                />
                <input
                  type="text"
                  required
                  placeholder="State"
                  value={address.state}
                  onChange={e => setAddress({ ...address, state: e.target.value })}
                  style={{ padding: '10px 14px', border: '1px solid var(--ranaya-border)', borderRadius: 'var(--radius-sm)', width: '100%', boxSizing: 'border-box' }}
                />
                <input
                  type="text"
                  required
                  placeholder="Pincode"
                  value={address.pincode}
                  onChange={e => setAddress({ ...address, pincode: e.target.value })}
                  style={{ padding: '10px 14px', border: '1px solid var(--ranaya-border)', borderRadius: 'var(--radius-sm)', width: '100%', boxSizing: 'border-box' }}
                />
              </div>

              {/* Surprise Gifting Toggle */}
              <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px dashed var(--ranaya-border)' }}>
                <label className="checkout-checkbox-label" style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer', fontWeight: 600 }}>
                  <input
                    type="checkbox"
                    checked={address.isSurpriseGift}
                    onChange={e => setAddress({ ...address, isSurpriseGift: e.target.checked })}
                    style={{ width: 18, height: 18, accentColor: 'var(--ranaya-burgundy)', marginTop: 2, flexShrink: 0 }}
                  />
                  <span>
                    <i className="bi bi-gift text-gold"></i> Send as a Surprise Gift (Do not include prices or paper invoice in shipping box)
                  </span>
                </label>
              </div>
            </div>

            {/* Payment Selection */}
            <div className="checkout-card" style={{ background: '#fff', border: '1px solid var(--ranaya-border)', padding: 24, borderRadius: 'var(--radius-md)' }}>
              <h3 style={{ fontSize: 18, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <i className="bi bi-credit-card-2-front text-gold"></i> 2. Select Payment Method
              </h3>

              <div style={{ display: 'grid', gap: 12 }}>
                <label className={`radio ${paymentMethod === 'upi' ? 'selected' : ''}`} style={{ padding: 14, borderRadius: 4, cursor: 'pointer', display: 'flex', alignItems: 'flex-start' }}>
                  <input
                    type="radio"
                    name="pay"
                    checked={paymentMethod === 'upi'}
                    onChange={() => setPaymentMethod('upi')}
                    style={{ marginTop: 3 }}
                  />
                  <div style={{ marginLeft: 10 }}>
                    <b>Instant UPI / QR (Google Pay, PhonePe, Paytm)</b>
                    <p className="muted" style={{ fontSize: 12, margin: 0 }}>Instant bank confirmation with 0% gateway fee</p>
                  </div>
                </label>

                {paymentMethod === 'upi' && (
                  <div className="checkout-upi-wrap" style={{ padding: '10px 16px', background: 'var(--ranaya-cream)', borderRadius: 4, marginLeft: 28 }}>
                    <input
                      type="text"
                      placeholder="Enter your UPI ID (e.g. aditi@okhdfcbank)"
                      defaultValue="aditi@okhdfcbank"
                      style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--ranaya-border)', borderRadius: 4, boxSizing: 'border-box' }}
                    />
                  </div>
                )}

                <label className={`radio ${paymentMethod === 'card' ? 'selected' : ''}`} style={{ padding: 14, borderRadius: 4, cursor: 'pointer', display: 'flex', alignItems: 'flex-start' }}>
                  <input
                    type="radio"
                    name="pay"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    style={{ marginTop: 3 }}
                  />
                  <div style={{ marginLeft: 10 }}>
                    <b>Credit / Debit Card (Visa, Mastercard, Amex)</b>
                    <p className="muted" style={{ fontSize: 12, margin: 0 }}>Safe 256-bit encrypted gateway with bank OTP</p>
                  </div>
                </label>

                <label className={`radio ${paymentMethod === 'cod' ? 'selected' : ''}`} style={{ padding: 14, borderRadius: 4, cursor: 'pointer', display: 'flex', alignItems: 'flex-start' }}>
                  <input
                    type="radio"
                    name="pay"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    style={{ marginTop: 3 }}
                  />
                  <div style={{ marginLeft: 10 }}>
                    <b>Cash / Cheque On Armored Delivery</b>
                    <p className="muted" style={{ fontSize: 12, margin: 0 }}>Available up to ₹50,000 across major metros</p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary & Final Button */}
          <aside className="cart-summary-box">
            <h3 style={{ fontSize: 20, marginBottom: 16 }}>Order Summary</h3>

            {cart.map(item => (
              <div key={item.key || item.p.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: 13 }}>
                <span>{item.p.name} × {item.qty}</span>
                <b>{inr(item.p.price * item.qty)}</b>
              </div>
            ))}

            <div className="cart-summary-row" style={{ borderTop: '1px solid var(--ranaya-border)', paddingTop: 10 }}>
              <span>Subtotal</span>
              <b>{inr(total)}</b>
            </div>

            <div className="cart-summary-row">
              <span>Insured Transit</span>
              <span style={{ color: '#16a34a', fontWeight: 600 }}>FREE</span>
            </div>

            <div className="cart-summary-total">
              <span>Final Payable</span>
              <span>{inr(grandTotal)}</span>
            </div>

            <button type="submit" className="btn btn-gold btn-full" style={{ padding: 15, marginTop: 20 }}>
              <i className="bi bi-shield-lock-fill"></i> Authorize & Pay {inr(grandTotal)}
            </button>
          </aside>
        </div>
      </form>
    </PageWrapper>
  )
}

/* ORDER CONFIRMATION VIEW */
function OrderConfirmationPage() {
  const { order } = useShop()

  return (
    <PageWrapper
      crumbs={<><i className="bi bi-chevron-right" style={{ fontSize: 10 }}></i><span>Confirmation</span></>}
    >
      <div className="center confirmation-card" style={{ maxWidth: 650, margin: '40px auto', background: '#fff', padding: 40, borderRadius: 'var(--radius-md)', border: '1px solid var(--ranaya-border)', boxShadow: varRanayaShadow }}>
        <div style={{ width: 70, height: 70, borderRadius: '50%', background: '#faf2f4', color: 'var(--ranaya-burgundy)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36 }}>
          <i className="bi bi-check2-circle"></i>
        </div>

        <span className="sec-subtitle">Auspicious Confirmation</span>
        <h1 style={{ fontSize: 34, marginBottom: 12 }}>Thank You for Your Patronage</h1>

        <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>
          Your order has been consecrated into our artisan ledger under Order ID <b>{order || 'RNY-893421'}</b>.
          A tamper-evident security seal and purity hallmark certificate will be packed into your signature Ranaya casket.
        </p>

        <div style={{ background: 'var(--ranaya-cream)', padding: 18, borderRadius: 6, marginBottom: 24, textAlign: 'left', fontSize: 13 }}>
          <div className="confirmation-meta-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, flexWrap: 'wrap', gap: 4 }}>
            <span className="muted">Order Reference:</span>
            <b>{order || 'RNY-893421'}</b>
          </div>
          <div className="confirmation-meta-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, flexWrap: 'wrap', gap: 4 }}>
            <span className="muted">Expected Delivery:</span>
            <b>Within 3–5 Business Days</b>
          </div>
          <div className="confirmation-meta-row" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}>
            <span className="muted">Tracking Code:</span>
            <span className="confirmation-meta-val" style={{ color: 'var(--ranaya-gold-dark)', fontWeight: 600, wordBreak: 'break-all' }}>GPS-TRACK-INDIAPOST-SECURE</span>
          </div>
        </div>

        <div className="confirmation-actions" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/track" className="btn btn-gold">
            <i className="bi bi-geo-alt"></i> Track Consignment
          </Link>
          <Link to="/shop" className="btn btn-ghost">
            <i className="bi bi-gem"></i> Continue Shopping
          </Link>
        </div>
      </div>
    </PageWrapper>
  )
}
const varRanayaShadow = '0 10px 30px rgba(74, 12, 26, 0.08)'

/* TRACK ORDER VIEW */
function TrackPage() {
  const { order } = useShop()
  const [trackId, setTrackId] = useState(order || 'RNY-893421')
  const [showStatus, setShowStatus] = useState(true)

  const steps = [
    { title: 'Order Consecrated & Verified', time: 'Day 1 · Artisan Studio', icon: 'bi-check-circle-fill' },
    { title: 'BIS Hallmarking & Purity Assay', time: 'Day 2 · Government Hallmarking Center', icon: 'bi-patch-check-fill' },
    { title: 'Luxury Gift Box & Wax Sealing', time: 'Day 2 · Ranaya Gifting Concierge', icon: 'bi-box2-heart-fill' },
    { title: 'Armored Insured Transit Dispatch', time: 'Day 3 · High Security Express', icon: 'bi-truck' },
    { title: 'Out for Hand-Delivery with OTP', time: 'Estimated 2 Days', icon: 'bi-shield-lock' }
  ]

  return (
    <PageWrapper
      title="Track Your Order Consignment"
      subtitle="Confidential GPS Tracking Desk"
      crumbs={<><i className="bi bi-chevron-right" style={{ fontSize: 10 }}></i><span>Track Order</span></>}
    >
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <div className="track-search-row" style={{ display: 'flex', gap: 10, marginBottom: 32 }}>
          <input
            type="text"
            placeholder="Enter Order Number (e.g. RNY-893421)"
            value={trackId}
            onChange={e => setTrackId(e.target.value)}
            style={{ flex: 1, minWidth: 0, padding: '12px 16px', border: '1px solid var(--ranaya-border)', borderRadius: 'var(--radius-sm)', boxSizing: 'border-box' }}
          />
          <button className="btn btn-gold" onClick={() => setShowStatus(true)}>
            <i className="bi bi-search"></i> Track Status
          </button>
        </div>

        {showStatus && (
          <div className="track-status-card" style={{ background: '#fff', border: '1px solid var(--ranaya-border)', padding: 32, borderRadius: 'var(--radius-md)', boxShadow: varRanayaShadow }}>
            <div className="track-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--ranaya-border)', paddingBottom: 16, marginBottom: 24, flexWrap: 'wrap', gap: 10 }}>
              <div>
                <span className="muted">Tracking Reference</span>
                <h4 style={{ fontSize: 18, color: 'var(--ranaya-burgundy)' }}>{trackId}</h4>
              </div>
              <span className="badge-tag track-badge" style={{ position: 'static', background: '#15803d' }}>
                <i className="bi bi-broadcast"></i> In Secure Transit
              </span>
            </div>

            <ol className="steps track-steps-list">
              {steps.map((st, i) => (
                <li key={st.title} className={i <= 2 ? 'done' : ''} style={{ paddingLeft: 40, marginBottom: 20 }}>
                  <b style={{ display: 'block', fontSize: 14 }}>{st.title}</b>
                  <span className="muted" style={{ fontSize: 12 }}>{st.time}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </PageWrapper>
  )
}

/* ABOUT PAGE */
function AboutPage() {
  return (
    <PageWrapper
      title="The Ranaya Heritage"
      subtitle="Generations of Gold, Frames & Gifting"
      crumbs={<><i className="bi bi-chevron-right" style={{ fontSize: 10 }}></i><span>About Us</span></>}
    >
      <div className="pd-grid about-grid" style={{ alignItems: 'center', marginBottom: 48 }}>
        <div>
          <span className="sec-subtitle">Artisanal Lineage</span>
          <h2 className="about-title" style={{ fontSize: 34, marginBottom: 16 }}>Dedicated to the Poetry of Precious Keepsakes</h2>
          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            Founded on the revered traditions of Indian craftsmanship, <b>The Ranaya Store</b> was conceived as a sanctuary where fine 22K and 18K hallmarked jewellery unites with masterfully gilded frames and unforgettable gifting presentation.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: 20 }}>
            Every necklace, ring, and 24K gold foil frame is brought to life by multi-generational karigars. We believe a gift is not merely an object; it is an enduring memory encased in wax seals, velvet, and gold.
          </p>
          <div className="about-btn-group" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/shop" className="btn btn-gold">
              <i className="bi bi-gem"></i> Explore Catalog
            </Link>
            <Link to="/gifting-service" className="btn btn-ghost">
              <i className="bi bi-gift"></i> Gifting Studio
            </Link>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=900&auto=format&fit=crop"
            alt="Ranaya Atelier"
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 'var(--radius-md)', border: '2px solid var(--ranaya-gold)', boxShadow: varRanayaShadow }}
          />
        </div>
      </div>
    </PageWrapper>
  )
}

/* CONTACT PAGE */
function ContactPage() {
  return (
    <PageWrapper
      title="Contact Our Concierge Desk"
      subtitle="Bespoke Inquiries & Assistance"
      crumbs={<><i className="bi bi-chevron-right" style={{ fontSize: 10 }}></i><span>Contact</span></>}
    >
      <div className="pd-grid">
        <form
          className="form contact-form contact-form-box"
          onSubmit={e => {
            e.preventDefault()
            alert('Your inquiry has reached our concierge team. We will call you within 2 business hours.')
          }}
          style={{ background: '#fff', padding: 30, borderRadius: 'var(--radius-md)', border: '1px solid var(--ranaya-border)' }}
        >
          <h3 style={{ fontSize: 20, marginBottom: 4 }}>Send Us a Message</h3>
          <input type="text" required placeholder="Your Full Name" style={{ padding: '10px 14px', border: '1px solid var(--ranaya-border)' }} />
          <input type="email" required placeholder="Your Email Address" style={{ padding: '10px 14px', border: '1px solid var(--ranaya-border)' }} />
          <input type="tel" placeholder="Phone Number" style={{ padding: '10px 14px', border: '1px solid var(--ranaya-border)' }} />
          <textarea rows="5" required placeholder="Describe your inquiry, wedding trousseau requirements, or custom gifting needs..." style={{ padding: '10px 14px', border: '1px solid var(--ranaya-border)' }}></textarea>
          <button type="submit" className="btn btn-gold">
            <i className="bi bi-send"></i> Send Inquiry to Concierge
          </button>
        </form>

        <div className="contact-info-box" style={{ background: '#faf2f4', padding: 30, borderRadius: 'var(--radius-md)', border: '1px solid var(--ranaya-border)' }}>
          <h3 style={{ fontSize: 20, marginBottom: 16, color: 'var(--ranaya-burgundy)' }}>Ranaya Flagship Atelier</h3>
          <p style={{ marginBottom: 14 }}>
            <i className="bi bi-geo-alt-fill text-gold"></i> <b>Flagship Store:</b><br />
            7th Floor, The Ranaya Pavilions, MG Road & Heritage Boulevard, Mumbai / Hyderabad
          </p>
          <p style={{ marginBottom: 14 }}>
            <i className="bi bi-telephone-fill text-gold"></i> <b>Direct Concierge Hotline:</b><br />
            +91 800-RANAYA-00 (9:30 AM – 8:30 PM IST)
          </p>
          <p style={{ marginBottom: 14 }}>
            <i className="bi bi-envelope-fill text-gold"></i> <b>Email Support:</b><br />
            concierge@theranayastore.com
          </p>
          <p style={{ marginBottom: 0 }}>
            <i className="bi bi-clock-fill text-gold"></i> <b>Consultation Timings:</b><br />
            Private bridal appointments available 7 days a week.
          </p>
        </div>
      </div>
    </PageWrapper>
  )
}

/* FAQ PAGE */
function FaqPage() {
  return (
    <PageWrapper
      title="Frequently Asked Questions"
      subtitle="Clarity on Hallmarking, Frames & Gifting"
      crumbs={<><i className="bi bi-chevron-right" style={{ fontSize: 10 }}></i><span>FAQ</span></>}
    >
      <div style={{ maxWidth: 840, margin: '0 auto' }}>
        {FAQ.map(([q, a]) => (
          <details key={q} className="faq-item" style={{ marginBottom: 14, background: '#fff', border: '1px solid var(--ranaya-border)', padding: 18, borderRadius: 6 }}>
            <summary className="faq-summary" style={{ cursor: 'pointer', fontWeight: 600, color: 'var(--ranaya-burgundy)', fontSize: 16 }}>
              <i className="bi bi-question-circle text-gold" style={{ marginRight: 8 }}></i> {q}
            </summary>
            <p style={{ marginTop: 12, lineHeight: 1.8, fontSize: 14, color: 'var(--ranaya-text)' }}>{a}</p>
          </details>
        ))}
      </div>
    </PageWrapper>
  )
}

/* LEGAL & POLICY DOC PAGES */
function DocPage({ docKey }) {
  const item = DOCS[docKey]
  if (!item) return <PageWrapper title="Document Not Found" />

  return (
    <PageWrapper
      title={item[0]}
      subtitle="The Ranaya Store Protocol"
      crumbs={<><i className="bi bi-chevron-right" style={{ fontSize: 10 }}></i><span>{item[0]}</span></>}
    >
      <div className="doc-card" style={{ maxWidth: 840, margin: '0 auto', background: '#fff', padding: 36, borderRadius: 'var(--radius-md)', border: '1px solid var(--ranaya-border)' }}>
        {item[1].map((para, i) => (
          <p key={i} style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            {para}
          </p>
        ))}
      </div>
    </PageWrapper>
  )
}

/* AUTH PAGES (Login, Register, Forgot) */
function AuthPage({ title, isRegister, isForgot }) {
  return (
    <PageWrapper title={title} crumbs={<><i className="bi bi-chevron-right" style={{ fontSize: 10 }}></i><span>Account</span></>}>
      <div className="auth-card" style={{ maxWidth: 440, margin: '0 auto', background: '#fff', padding: 32, borderRadius: 'var(--radius-md)', border: '1px solid var(--ranaya-border)', boxShadow: varRanayaShadow }}>
        <form onSubmit={e => { e.preventDefault(); alert('Account authenticated successfully.') }}>
          {isRegister && (
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 4 }}>Full Name</label>
              <input type="text" required placeholder="Aditi Roy" style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--ranaya-border)', borderRadius: 4, boxSizing: 'border-box' }} />
            </div>
          )}

          <div style={{ marginBottom: 14 }}>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 4 }}>Email Address</label>
            <input type="email" required placeholder="aditi@example.com" style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--ranaya-border)', borderRadius: 4, boxSizing: 'border-box' }} />
          </div>

          {!isForgot && (
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 4 }}>Password</label>
              <input type="password" required placeholder="••••••••" style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--ranaya-border)', borderRadius: 4, boxSizing: 'border-box' }} />
            </div>
          )}

          <button type="submit" className="btn btn-gold btn-full" style={{ padding: 12 }}>
            {isForgot ? 'Send Password Reset Link' : isRegister ? 'Create Account' : 'Sign In to Account'}
          </button>

          <div style={{ textAlign: 'center', marginTop: 16, fontSize: 13 }} className="muted">
            {isRegister ? (
              <span>Already registered? <Link to="/login" style={{ color: 'var(--ranaya-burgundy)', fontWeight: 600 }}>Login here</Link></span>
            ) : isForgot ? (
              <Link to="/login" style={{ color: 'var(--ranaya-burgundy)', fontWeight: 600 }}>Back to Login</Link>
            ) : (
              <div>
                <Link to="/forgot-password" style={{ color: 'var(--ranaya-burgundy)' }}>Forgot password?</Link> · <Link to="/register" style={{ color: 'var(--ranaya-burgundy)', fontWeight: 600 }}>Create an account</Link>
              </div>
            )}
          </div>
        </form>
      </div>
    </PageWrapper>
  )
}

/* HALF-SCREEN CART PANEL */
function CartPanel({ isOpen, onClose }) {
  const { cart, updateQty, removeCartItem, total } = useShop()
  const nav = useNavigate()

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const totalCartCount = cart.reduce((acc, it) => acc + it.qty, 0)

  const handleViewCart = () => {
    onClose()
    nav('/cart')
  }

  const handleCheckout = () => {
    onClose()
    nav('/checkout')
  }

  return (
    <>
      <div className="cart-panel-backdrop" onClick={onClose} aria-label="Close cart backdrop" />
      <aside className="cart-panel" aria-label="Shopping Bag Panel">
        {/* Header */}
        <div className="cart-panel-header">
          <div className="cart-panel-heading">
            <i className="bi bi-bag-check" style={{ color: 'var(--ranaya-gold-dark)', fontSize: 18 }}></i>
            <h3 style={{ margin: 0, fontSize: 18 }}>Shopping Bag</h3>
            <span className="cart-panel-count">({totalCartCount})</span>
          </div>
          <button
            type="button"
            className="cart-panel-close-btn"
            onClick={onClose}
            aria-label="Close cart panel"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {/* Scrollable Body: Cart Details */}
        <div className="cart-panel-body">
          {cart.length === 0 ? (
            <div className="cart-panel-empty">
              <i className="bi bi-bag-x" style={{ fontSize: 40, color: 'var(--ranaya-muted)' }}></i>
              <h4 style={{ margin: '12px 0 4px', fontSize: 16 }}>Your bag is empty</h4>
              <p className="muted" style={{ margin: 0, fontSize: 12 }}>
                Discover fine jewellery, frames & luxury gifting.
              </p>
            </div>
          ) : (
            <div className="cart-panel-items">
              {cart.map((item, idx) => (
                <div className="cart-panel-item" key={item.key || idx}>
                  <div className="cart-panel-item-img">
                    <img src={item.p.image} alt={item.p.name} />
                  </div>
                  <div className="cart-panel-item-details">
                    <div className="cart-panel-item-name">{item.p.name}</div>
                    <div className="muted cart-panel-item-meta">
                      <span>Size: {item.size || 'Standard Size'}</span>
                      <span> · Color: {item.color || item.p.metal || 'Gold'}</span>
                    </div>
                    {item.wrap && (
                      <div className="cart-panel-item-wrap">
                        <i className="bi bi-gift-fill" style={{ fontSize: 10 }}></i> {item.wrap.name}
                      </div>
                    )}
                    <div className="cart-panel-item-bottom">
                      <div className="cart-panel-item-price">
                        {inr((item.p.price + (item.wrap ? item.wrap.price : 0)) * item.qty)}
                      </div>
                      <div className="cart-panel-item-actions">
                        <div className="cart-qty-ctrl cart-qty-ctrl-sm">
                          <button type="button" onClick={() => updateQty(item, item.qty - 1)} aria-label="Decrease quantity">−</button>
                          <span>{item.qty}</span>
                          <button type="button" onClick={() => updateQty(item, item.qty + 1)} aria-label="Increase quantity">+</button>
                        </div>
                        <button
                          type="button"
                          className="cart-panel-item-remove"
                          onClick={() => removeCartItem(item)}
                          title="Remove product"
                          aria-label="Remove product"
                        >
                          <i className="bi bi-trash3"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer: Subtotal and 2 Buttons */}
        <div className="cart-panel-footer">
          <div className="cart-panel-subtotal-row">
            <span style={{ fontSize: 13, color: 'var(--ranaya-muted)', fontWeight: 500 }}>
              Subtotal ({totalCartCount} {totalCartCount === 1 ? 'item' : 'items'})
            </span>
            <span className="cart-panel-subtotal-amount">{inr(total)}</span>
          </div>
          <div className="cart-panel-actions">
            <button
              type="button"
              className="btn btn-ghost cart-panel-btn"
              onClick={handleViewCart}
            >
              View Cart
            </button>
            <button
              type="button"
              className="btn btn-gold cart-panel-btn"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

/* MAIN APP ROOT */
export default function App() {
  const [cart, setCart] = useState(() => {
    return [
      {
        p: PRODUCTS[0],
        size: 'Standard Size',
        qty: 1,
        wrap: GIFT_WRAPS[1],
        giftMeta: { recipientName: 'Princess Ananya', giftMsg: 'Wishing you everlasting joy and golden radiance.' },
        key: 'sample-cart-item'
      }
    ]
  })

  const [wish, setWish] = useState([2, 7])
  const [order, setOrder] = useState('RNY-984210')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsCartOpen(false)
  }, [location.pathname])

  const total = cart.reduce((acc, it) => acc + (it.p.price + (it.wrap ? it.wrap.price : 0)) * it.qty, 0)

  const addCart = (p, size = 'Standard', wrap = null, giftMeta = null) => {
    const itemKey = `${p.id}-${size}-${wrap ? wrap.id : 'none'}`
    setCart(prev => {
      const existing = prev.find(x => x.key === itemKey)
      if (existing) {
        return prev.map(x => x.key === itemKey ? { ...x, qty: x.qty + 1 } : x)
      } else {
        return [...prev, { p, size, wrap, giftMeta, qty: 1, key: itemKey }]
      }
    })
  }

  const updateQty = (item, qty) => {
    if (qty <= 0) {
      removeCartItem(item)
    } else {
      setCart(prev => prev.map(x => x.key === item.key ? { ...x, qty } : x))
    }
  }

  const removeCartItem = (item) => {
    setCart(prev => prev.filter(x => x.key !== item.key))
  }

  const toggleWish = (id) => {
    setWish(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  const placeOrder = () => {
    const randomOrder = 'RNY-' + Math.floor(100000 + Math.random() * 900000)
    setOrder(randomOrder)
    setCart([])
  }

  const api = {
    cart,
    wish,
    order,
    total,
    addCart,
    updateQty,
    removeCartItem,
    toggleWish,
    placeOrder,
    isCartOpen,
    setIsCartOpen
  }

  return (
    <ShopCtx.Provider value={api}>
      <Header />
      <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/category/:cat" element={<CategoryPageWrapper />} />
        <Route path="/category/:cat/:sub" element={<CategoryPageWrapper />} />
        <Route path="/designer-silver" element={<ShopPage cat="designer-silver" />} />
        <Route path="/designer-silver-jewellery" element={<ShopPage cat="designer-silver" />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/gifting-service" element={<GiftingStudioPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
        <Route path="/track" element={<TrackPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/login" element={<AuthPage title="Member Sign In" />} />
        <Route path="/register" element={<AuthPage title="Create Ranaya Account" isRegister />} />
        <Route path="/forgot-password" element={<AuthPage title="Reset Password" isForgot />} />
        {Object.keys(DOCS).map(k => (
          <Route key={k} path={'/' + k} element={<DocPage docKey={k} />} />
        ))}
      </Routes>
      <PromiseSection />
      <Footer />
    </ShopCtx.Provider>
  )
}
