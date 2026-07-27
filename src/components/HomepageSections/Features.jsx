import './Features.css'

const features = [
  {
    icon: 'fa-tags',
    title: 'Best Price Guarantee',
    desc: 'We compare prices across hundreds of airlines to find you the lowest fare, guaranteed.',
    color: '#ff6b35',
    bg: 'linear-gradient(135deg, rgba(255,107,53,0.1), rgba(255,159,67,0.08))',
  },
  {
    icon: 'fa-headset',
    title: '24/7 Customer Support',
    desc: 'Our support team is available around the clock to assist you before, during, and after your trip.',
    color: '#a78bfa',
    bg: 'linear-gradient(135deg, rgba(167,139,250,0.12), rgba(139,92,246,0.07))',
  },
  {
    icon: 'fa-shield-alt',
    title: 'Secure Payments',
    desc: 'All transactions are protected with bank-level 256-bit SSL encryption for your peace of mind.',
    color: '#00d4ff',
    bg: 'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(0,180,220,0.06))',
  },
  {
    icon: 'fa-bolt',
    title: 'Instant Booking',
    desc: 'Confirm your seat in seconds with our streamlined, hassle-free booking process.',
    color: '#ffd32a',
    bg: 'linear-gradient(135deg, rgba(255,211,42,0.12), rgba(255,180,0,0.07))',
  },
]

export default function Features() {
  return (
    <section className="features">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Why Choose Us</span>
          <h2>Travel Smarter with SkyWings</h2>
          <p>Everything you need for a seamless travel experience</p>
        </div>

        <div className="features-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon" style={{ background: f.bg, color: f.color }}>
                <i className={`fas ${f.icon}`}></i>
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
