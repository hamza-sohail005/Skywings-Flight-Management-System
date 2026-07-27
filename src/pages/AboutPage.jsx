import './AboutPage.css'

const stats = [
  { icon: 'fa-route',       value: '106+',   label: 'Routes' },
  { icon: 'fa-plane',       value: '9',      label: 'Airlines' },
  { icon: 'fa-globe',       value: '10',     label: 'Cities' },
  { icon: 'fa-users',       value: '50K+',   label: 'Happy Travelers' },
]

const team = [
  { name: 'Hamza Malik',    role: 'CEO & Founder',       emoji: '👨‍💼', bg: 'linear-gradient(135deg,#667eea,#764ba2)' },
  { name: 'Sara Khan',      role: 'Head of Operations',  emoji: '👩‍💻', bg: 'linear-gradient(135deg,#f093fb,#f5576c)' },
  { name: 'Ali Raza',       role: 'Lead Developer',      emoji: '👨‍💻', bg: 'linear-gradient(135deg,#4facfe,#00f2fe)' },
  { name: 'Fatima Noor',    role: 'Customer Success',    emoji: '👩‍🎧', bg: 'linear-gradient(135deg,#43e97b,#38f9d7)' },
]

const values = [
  { icon: 'fa-heart',         title: 'Customer First',      desc: 'Every decision we make starts with the question: is this best for our traveler?', color: '#ff6b35', bg: 'rgba(255,107,53,0.1)' },
  { icon: 'fa-shield-alt',    title: 'Trust & Transparency', desc: 'No hidden fees, no surprises. The price you see is the price you pay.',           color: '#00d4ff', bg: 'rgba(0,212,255,0.1)' },
  { icon: 'fa-bolt',          title: 'Speed & Simplicity',  desc: 'We built the fastest flight search in Pakistan. Book in under 2 minutes.',        color: '#ffd32a', bg: 'rgba(255,211,42,0.1)' },
  { icon: 'fa-handshake',     title: 'Reliable Partnerships',desc: 'We work only with licensed and reputable airlines so every journey is safe.',     color: '#a78bfa', bg: 'rgba(167,139,250,0.1)' },
]

const timeline = [
  { year: '2020', event: 'SkyWings founded in Karachi with 3 domestic routes.' },
  { year: '2021', event: 'Expanded to international routes — Dubai, Doha, Istanbul.' },
  { year: '2022', event: 'Partnered with Emirates, Qatar Airways & Turkish Airlines.' },
  { year: '2023', event: 'Crossed 50,000 bookings. Launched 24/7 customer support.' },
  { year: '2024', event: 'Added London & Toronto routes. Launched mobile experience.' },
  { year: '2026', event: 'Now serving 106+ routes across 9 airlines and 10 cities.' },
]

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="ab-hero">
        <div className="ab-hero-glow" />
        <div className="ab-container">
          <span className="ab-tag">Our Story</span>
          <h1 className="ab-hero-title">We Make <span>Flying</span><br />Simple & Affordable</h1>
          <p className="ab-hero-sub">
            SkyWings was born in Karachi with one goal — give every Pakistani traveler access to the best flight deals without the hassle. No call centres, no queues. Just search, compare, and fly.
          </p>
        </div>
        <div className="ab-wave" />
      </section>

      {/* Stats */}
      <section className="ab-stats">
        <div className="ab-container">
          <div className="ab-stats-grid">
            {stats.map(s => (
              <div className="ab-stat-card" key={s.label}>
                <div className="ab-stat-icon"><i className={`fas ${s.icon}`} /></div>
                <p className="ab-stat-value">{s.value}</p>
                <p className="ab-stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="ab-mission">
        <div className="ab-container ab-mission-grid">
          <div className="ab-mission-text">
            <span className="ab-tag">Our Mission</span>
            <h2>Connecting Pakistan to the World</h2>
            <p>
              We believe travel should be accessible, transparent and stress-free. SkyWings aggregates live fares from domestic and international carriers so you always get the most competitive price.
            </p>
            <p>
              From a quick hop Karachi → Lahore to a long-haul Toronto flight, we've got every journey covered with real-time data, zero hidden fees and a booking experience that takes minutes.
            </p>
            <div className="ab-mission-badges">
              <span><i className="fas fa-check-circle" /> No hidden charges</span>
              <span><i className="fas fa-check-circle" /> Instant confirmation</span>
              <span><i className="fas fa-check-circle" /> Secure payments</span>
            </div>
          </div>
          <div className="ab-mission-visual">
            <div className="ab-visual-card">
              <div className="ab-visual-plane">✈️</div>
              <div className="ab-visual-routes">
                <div className="ab-vr-item"><span className="ab-vr-dot dom" />Domestic</div>
                <div className="ab-vr-item"><span className="ab-vr-dot intl" />International</div>
              </div>
              <div className="ab-visual-stats">
                <div><strong>3</strong><span>Domestic Hubs</span></div>
                <div><strong>7</strong><span>Global Cities</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="ab-values">
        <div className="ab-container">
          <div className="ab-section-header">
            <span className="ab-tag">What We Stand For</span>
            <h2>Our Core Values</h2>
          </div>
          <div className="ab-values-grid">
            {values.map(v => (
              <div className="ab-value-card" key={v.title}>
                <div className="ab-value-icon" style={{ background: v.bg, color: v.color }}>
                  <i className={`fas ${v.icon}`} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="ab-timeline">
        <div className="ab-container">
          <div className="ab-section-header">
            <span className="ab-tag">Journey</span>
            <h2>How We Got Here</h2>
          </div>
          <div className="ab-timeline-list">
            {timeline.map((t, i) => (
              <div className="ab-tl-item" key={t.year}>
                <div className="ab-tl-year">{t.year}</div>
                <div className="ab-tl-dot" />
                <div className="ab-tl-event">{t.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="ab-team">
        <div className="ab-container">
          <div className="ab-section-header">
            <span className="ab-tag">The Team</span>
            <h2>People Behind SkyWings</h2>
          </div>
          <div className="ab-team-grid">
            {team.map(m => (
              <div className="ab-team-card" key={m.name}>
                <div className="ab-avatar" style={{ background: m.bg }}>{m.emoji}</div>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
