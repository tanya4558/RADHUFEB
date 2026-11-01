import React from 'react'

const whatsappNumber = '919909252400'

const products = [
  {
    id: 'five-kg',
    name: 'RADHUFEB™ Natural Soil Care',
    size: '5 kg pack',
    price: 'Contact for price',
    image: '/Image.jpg',
    note: 'Easy to handle for home gardens',
  },
  {
    id: 'seven-kg',
    name: 'RADHUFEB™ Natural Soil Care',
    size: '7 kg pack',
    price: 'Contact for price',
    image: '/Image (1).jpg',
    note: 'More coverage for larger spaces',
  },
]

function whatsappUrl(product) {
  const message = `Hello RADHUFEB, I would like to enquire about ${product.name} - ${product.size}. Please share availability and price.`
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

function App() {
  const scrollToShop = () => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="site-shell">
      <div className="announcement">Natural soil care from Surat <span>•</span> WhatsApp enquiries welcome</div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="RADHUFEB trademark home">
          <span className="brand-mark">R</span>
          <span><strong>RADHUFEB™</strong><small>Natural essentials</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#shop">Shop</a>
          <a href="#story">Our approach</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Better beginnings for every garden</p>
            <h1>Let your plants feel the difference.</h1>
            <p className="hero-text">Thoughtfully sourced natural soil care, packed fresh and ready for the growing season. Simple products. Honest quality. Happier greens.</p>
            <div className="hero-actions">
              <button className="button button-dark" onClick={scrollToShop}>Explore products <span>↘</span></button>
              <a className="text-link" href="#story">Why RADHUFEB™ <span>→</span></a>
            </div>
            <div className="hero-proof"><span className="proof-icon">✦</span><span><strong>100% quality checked</strong><small>Carefully prepared for everyday use</small></span></div>
          </div>
          <div className="hero-visual">
            <div className="sun-stamp">GOOD<br /><span>FOR</span><br />GROWTH</div>
            <img src="/Image.jpg" alt="RADHUFEB trademark natural soil care product" />
            <div className="hero-caption"><span>01</span><span>Natural texture<br />for healthy roots</span></div>
          </div>
        </section>

        <section className="ticker" aria-label="RADHUFEB trademark values">
          <span>Natural care</span><i>✳</i><span>Quality checked</span><i>✳</i><span>Made for growing homes</span><i>✳</i><span>Surat, Gujarat</span>
        </section>

        <section className="shop-section" id="shop">
          <div className="section-heading"><div><p className="eyebrow">The essentials</p><h2>Choose your size.</h2></div><p>Start small or make room for more growth. Every pack is prepared with the same attention to texture and quality.</p></div>
          <div className="product-grid">
            {products.map((product, index) => (
              <article className="product-card" key={product.id}>
                <div className="product-image"><img src={product.image} alt={`${product.name}, ${product.size}`} /><span className="product-index">0{index + 1}</span><span className="quality-badge">Quality<br />checked</span></div>
                <div className="product-info"><div><p className="product-kicker">RADHUFEB™ / SOIL CARE</p><h3>{product.size}</h3><p className="product-note">{product.note}</p></div><div className="product-buy"><strong>{product.price}</strong><a className="product-enquire" href={whatsappUrl(product)} target="_blank" rel="noreferrer" aria-label={`Enquire about ${product.size} on WhatsApp`}>Enquire <span>↗</span></a></div></div>
              </article>
            ))}
          </div>
        </section>

        <section className="story-section" id="story">
          <div className="story-image"><img src="/Image (1).jpg" alt="Natural soil care being prepared" /><span>From our hands<br />to your home.</span></div>
          <div className="story-copy"><p className="eyebrow">A little more care</p><h2>Good growth starts beneath the surface.</h2><p>RADHUFEB™ brings dependable natural essentials to homes and growers around Surat. We keep the experience direct: quality product, clear communication, and personal service when you need it.</p><div className="story-list"><div><span>01</span><strong>Natural by nature</strong><small>Made to support your everyday growing ritual.</small></div><div><span>02</span><strong>Direct from Surat</strong><small>Reach us directly for availability and guidance.</small></div></div></div>
        </section>

        <section className="contact-section" id="contact"><div><p className="eyebrow">Come say hello</p><h2>Ready to grow<br /><em>something good?</em></h2></div><div className="contact-details"><p>For orders, availability and product questions, contact RADHUFEB directly.</p><a className="whatsapp-link" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">Message on WhatsApp <span>↗</span></a><a className="contact-phone" href="tel:+919909252400">9909252400</a><p className="contact-line">Sy No. 258, Lasa Compound, near Full Market,<br />Umiyadham, Katargam, Surat 395008</p><a className="email-link" href="mailto:rgabani515@gmail.com">rgabani515@gmail.com</a></div></section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><span className="brand-mark">R</span><span><strong>RADHUFEB™</strong><small>Natural essentials</small></span></div><div className="footer-meta"><span>© 2026 RADHUFEB™</span></div></footer>

    </div>
  )
}

export default App
