// Rudra storefront - no-build React using local UMD React (React.createElement, no JSX)
const { useState, createElement: h } = React

const whatsappNumber = '919909252400'
const certificatePath = './AA240426018614F_RC04042026_2750.pdf'

const products = [
  { id: 'five-kg', name: 'RADHUFEB Natural Soil Care', size: '5 kg pack', price: 'Contact for price', image: './Image.jpg', note: 'Easy to handle for home gardens' },
  { id: 'seven-kg', name: 'RADHUFEB Natural Soil Care', size: '7 kg pack', price: 'Contact for price', image: './Image (1).jpg', note: 'More coverage for larger spaces' },
]

function openWhatsApp(product) {
  const message = `Hello RADHUFEB, I would like to enquire about the ${product.name} - ${product.size}. Please share availability and price.`
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
}

function br() { return h('br') }

function App() {
  const [activeProduct, setActiveProduct] = useState(null)
  const scrollToShop = () => { const el = document.getElementById('shop'); if (el) el.scrollIntoView({ behavior: 'smooth' }) }

  return h('div', { className: 'site-shell' },
    h('div', { className: 'announcement' }, 'Direct from RADHUFEB, Surat ', h('span', null, '•'), ' Enquiries on WhatsApp: 99092 52400'),
    h('header', { className: 'site-header' },
      h('a', { className: 'brand', href: '#top', 'aria-label': 'RADHUFEB home' },
        h('span', { className: 'brand-mark' }, 'R'),
        h('span', null, h('strong', null, 'RADHUFEB'), h('small', null, 'Natural essentials')),
      ),
      h('nav', { className: 'desktop-nav', 'aria-label': 'Main navigation' },
        h('a', { href: '#shop' }, 'Shop'),
        h('a', { href: '#story' }, 'Our approach'),
        h('a', { href: '#contact' }, 'Contact'),
      ),
      h('a', { className: 'header-contact', href: 'tel:+919909252400' }, h('span', { className: 'phone-dot' }, '+'), ' 99092 52400'),
    ),
    h('main', { id: 'top' },
      h('section', { className: 'hero' },
        h('div', { className: 'hero-copy' },
          h('p', { className: 'eyebrow' }, 'Better beginnings for every garden'),
          h('h1', null, 'Let your plants feel the difference.'),
          h('p', { className: 'hero-text' }, 'Thoughtfully sourced natural soil care, packed fresh and ready for the growing season. Simple products. Honest quality. Happier greens.'),
          h('div', { className: 'hero-actions' },
            h('button', { className: 'button button-dark', onClick: scrollToShop }, 'Explore products ', h('span', null, '↘')),
            h('a', { className: 'text-link', href: '#story' }, 'Why RADHUFEB ', h('span', null, '→')),
          ),
          h('div', { className: 'hero-proof' }, h('span', { className: 'proof-icon' }, '✦'), h('span', null, h('strong', null, '100% quality checked'), h('small', null, 'Carefully prepared for everyday use'))),
        ),
        h('div', { className: 'hero-visual' },
          h('div', { className: 'sun-stamp' }, 'GOOD', br(), h('span', null, 'FOR'), br(), 'GROWTH'),
          h('img', { src: './Image.jpg', alt: 'RADHUFEB natural soil care product' }),
          h('div', { className: 'hero-caption' }, h('span', null, '01'), h('span', null, 'Natural texture', br(), 'for healthy roots')),
        ),
      ),
      h('section', { className: 'ticker', 'aria-label': 'RADHUFEB values' },
        h('span', null, 'Natural care'), h('i', null, '✳'), h('span', null, 'Quality checked'), h('i', null, '✳'), h('span', null, 'Made for growing homes'), h('i', null, '✳'), h('span', null, 'Surat, Gujarat'),
      ),
      h('section', { className: 'shop-section', id: 'shop' },
        h('div', { className: 'section-heading' },
          h('div', null, h('p', { className: 'eyebrow' }, 'The essentials'), h('h2', null, 'Choose your size.')),
          h('p', null, 'Start small or make room for more growth. Every pack is prepared with the same attention to texture and quality.'),
        ),
        h('div', { className: 'product-grid' },
          products.map((product, index) => h('article', { className: 'product-card', key: product.id },
            h('div', { className: 'product-image' },
              h('img', { src: product.image, alt: `${product.name}, ${product.size}` }),
              h('span', { className: 'product-index' }, '0' + (index + 1)),
              h('span', { className: 'quality-badge' }, 'Quality', br(), 'checked'),
            ),
            h('div', { className: 'product-info' },
              h('div', null, h('p', { className: 'product-kicker' }, 'RADHUFEB / SOIL CARE'), h('h3', null, product.size), h('p', { className: 'product-note' }, product.note)),
              h('div', { className: 'product-buy' },
                h('strong', null, product.price),
                h('button', { 'aria-label': `Enquire about ${product.size}`, onClick: () => setActiveProduct(product) }, 'Enquire ', h('span', null, '↗')),
              ),
            ),
          )),
        ),
      ),
      h('section', { className: 'story-section', id: 'story' },
        h('div', { className: 'story-image' },
          h('img', { src: './Image (1).jpg', alt: 'Natural soil care being prepared' }),
          h('span', null, 'From our hands', br(), 'to your home.'),
        ),
        h('div', { className: 'story-copy' },
          h('p', { className: 'eyebrow' }, 'A little more care'),
          h('h2', null, 'Good growth starts beneath the surface.'),
          h('p', null, 'RADHUFEB brings dependable natural essentials to homes and growers around Surat. We keep the experience direct: quality product, clear communication, and personal service when you need it.'),
          h('div', { className: 'story-list' },
            h('div', null, h('span', null, '01'), h('strong', null, 'Natural by nature'), h('small', null, 'Made to support your everyday growing ritual.')),
            h('div', null, h('span', null, '02'), h('strong', null, 'Direct from Surat'), h('small', null, 'Reach us directly for availability and guidance.')),
          ),
        ),
      ),
      h('section', { className: 'contact-section', id: 'contact' },
        h('div', null, h('p', { className: 'eyebrow' }, 'Come say hello'), h('h2', null, 'Ready to grow', br(), h('em', null, 'something good?'))),
        h('div', { className: 'contact-details' },
          h('p', null, 'For orders, availability and product questions, connect with RADHUFEB directly.'),
          h('a', { className: 'whatsapp-link', href: `https://wa.me/${whatsappNumber}`, target: '_blank', rel: 'noreferrer' }, 'Message on WhatsApp ', h('span', null, '↗')),
          h('p', { className: 'contact-line' }, 'RADHUFEB', br(), 'Sy No. 258, Lasa Compound, near Full Market', br(), 'Umiyadham, Katargam, Surat 395008'),
          h('a', { className: 'email-link', href: 'mailto:rgabani515@gmail.com' }, 'rgabani515@gmail.com'),
        ),
      ),
    ),
    h('footer', { className: 'site-footer' },
      h('div', { className: 'footer-brand' }, h('span', { className: 'brand-mark' }, 'R'), h('span', null, h('strong', null, 'RADHUFEB'), h('small', null, 'Natural essentials'))),
      h('div', { className: 'footer-meta' }, h('span', null, '© 2026 RADHUFEB'), h('a', { href: certificatePath, target: '_blank', rel: 'noreferrer' }, 'View registration certificate ↗')),
    ),
    activeProduct && h('div', { className: 'modal-backdrop', role: 'presentation', onClick: () => setActiveProduct(null) },
      h('div', { className: 'modal', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'modal-title', onClick: (e) => e.stopPropagation() },
        h('button', { className: 'modal-close', 'aria-label': 'Close', onClick: () => setActiveProduct(null) }, '×'),
        h('p', { className: 'eyebrow' }, 'RADHUFEB direct enquiry'),
        h('h2', { id: 'modal-title' }, activeProduct.size),
        h('p', null, 'We will take your order details directly on WhatsApp and confirm price and availability with you.'),
        h('button', { className: 'button button-whatsapp', onClick: () => openWhatsApp(activeProduct) }, 'Continue to WhatsApp ', h('span', null, '↗')),
        h('button', { className: 'modal-cancel', onClick: () => setActiveProduct(null) }, 'Maybe later'),
      ),
    ),
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(h(App))
