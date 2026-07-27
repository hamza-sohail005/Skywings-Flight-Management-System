import { useState } from 'react'
import './PackagesPage.css'
import PackageModal from '../components/PackageModal'
import Floating3DBackground from '../Floating3DBackground'

const PACKAGES = [
  {
    id: 1, dest: 'Dubai', country: 'UAE', flag: '🇦🇪', nights: 5, category: 'international',
    img: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    price: 149000, tag: 'Best Seller',
    includes: ['Return flights', '5-star hotel', 'City tour', 'Visa assistance'],
    desc: 'Experience the glittering skyline, golden deserts, and world-class shopping of Dubai.',
  },
  {
    id: 2, dest: 'Istanbul', country: 'Turkey', flag: '🇹🇷', nights: 7, category: 'international',
    img: 'https://images.pexels.com/photos/2416653/pexels-photo-2416653.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    price: 220000, tag: 'Popular',
    includes: ['Return flights', '4-star hotel', 'Bosphorus cruise', 'Guided tour'],
    desc: 'Where Europe meets Asia — explore historic mosques, bazaars and stunning views.',
  },
  {
    id: 3, dest: 'London', country: 'United Kingdom', flag: '🇬🇧', nights: 10, category: 'international',
    img: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    price: 420000, tag: 'Premium',
    includes: ['Return flights', '4-star hotel', 'Thames cruise', 'Airport transfers'],
    desc: 'Walk the historic streets, visit iconic landmarks and enjoy world-class culture in London.',
  },
  {
    id: 4, dest: 'Doha', country: 'Qatar', flag: '🇶🇦', nights: 4, category: 'international',
    img: 'https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    price: 120000, tag: 'Quick Getaway',
    includes: ['Return flights', '5-star hotel', 'Desert safari', 'Breakfast'],
    desc: 'A luxurious city rising from the desert — modern architecture meets ancient culture.',
  },
  {
    id: 5, dest: 'Lahore', country: 'Pakistan', flag: '🇵🇰', nights: 3, category: 'domestic',
    img: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    price: 28000, tag: 'Budget Pick',
    includes: ['Return flight', '3-star hotel', 'Food street tour', 'Lahore Fort visit'],
    desc: 'The heart of Pakistan — food, Mughal history, and culture unlike anywhere else.',
  },
  {
    id: 6, dest: 'Abu Dhabi', country: 'UAE', flag: '🇦🇪', nights: 5, category: 'international',
    img: 'https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    price: 165000, tag: 'Family Friendly',
    includes: ['Return flights', '5-star hotel', 'Ferrari World', 'Sheikh Zayed Mosque'],
    desc: 'The UAE capital offers a peaceful contrast to Dubai with world-class attractions.',
  },
]

const CATEGORIES = ['all', 'domestic', 'international']

export default function PackagesPage() {
  const [active, setActive] = useState('all')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'all' ? PACKAGES : PACKAGES.filter(p => p.category === active)

  return (
    <div className="pkg-page">
      {/* Hero */}
      <section className="pkg-hero">
        <Floating3DBackground />
        <div className="pkg-hero-glow" />
        <div className="pkg-container">
          <span className="pkg-tag">Holiday Packages</span>
          <h1 className="pkg-hero-title">Your Dream Trip<br /><span>Starts Here</span></h1>
          <p className="pkg-hero-sub">Handcrafted travel packages with flights, hotels and tours — all at one unbeatable price.</p>

          {/* Category filter */}
          <div className="pkg-filter-tabs">
            {CATEGORIES.map(c => (
              <button key={c} className={`pkg-tab ${active === c ? 'active' : ''}`} onClick={() => setActive(c)}>
                {c === 'all' ? '🌍 All' : c === 'domestic' ? '🇵🇰 Domestic' : '✈️ International'}
              </button>
            ))}
          </div>
        </div>
        <div className="pkg-wave" />
      </section>

      {/* Packages grid */}
      <section className="pkg-body">
        <div className="pkg-container">
          <div className="pkg-grid">
            {filtered.map(pkg => (
              <div className="pkg-card" key={pkg.id}>
                <div className="pkg-img-wrap">
                  <img
                    src={pkg.img} alt={pkg.dest} loading="lazy"
                    style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}
                    onError={e => { e.currentTarget.parentElement.style.background = 'linear-gradient(135deg,#1e0a5e,#0d1f7a)' }}
                  />
                  <div className="pkg-tag-badge">{pkg.tag}</div>
                  <div className="pkg-nights-badge">{pkg.nights} Nights</div>
                </div>

                <div className="pkg-body-content">
                  <div className="pkg-dest-row">
                    <span className="pkg-flag">{pkg.flag}</span>
                    <div>
                      <h3 className="pkg-dest">{pkg.dest}</h3>
                      <p className="pkg-country">{pkg.country}</p>
                    </div>
                  </div>

                  <p className="pkg-desc">{pkg.desc}</p>

                  <ul className="pkg-includes">
                    {pkg.includes.map(item => (
                      <li key={item}><i className="fas fa-check" /> {item}</li>
                    ))}
                  </ul>

                  <div className="pkg-footer">
                    <div>
                      <p className="pkg-from">Starting from</p>
                      <p className="pkg-price">PKR {pkg.price.toLocaleString()}</p>
                      <p className="pkg-pp">per person</p>
                    </div>
                    <button className="pkg-btn" onClick={() => setSelected(pkg)}>
                      Book Package
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why packages */}
      <section className="pkg-why">
        <div className="pkg-container">
          <div className="pkg-why-grid">
            {[
              { icon:'fa-tags',     title:'Best Bundle Price',  desc:'Packages are 20–35% cheaper than booking separately.' },
              { icon:'fa-headset',  title:'Dedicated Support',  desc:'Your own trip manager from booking to return.' },
              { icon:'fa-shield-alt',title:'Fully Protected',   desc:'100% refund within 48 hours of booking.' },
            ].map(w => (
              <div className="pkg-why-card" key={w.title}>
                <div className="pkg-why-icon"><i className={`fas ${w.icon}`} /></div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <PackageModal pkg={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  )
}
