import { popularRoutes as routes } from '../../data/popularRoutes'
import './PopularDestinations.css'

const fallbackGradient = 'linear-gradient(135deg,#0369a1,#0ea5e9)'

export default function PopularDestinations({ onSearch }) {
  return (
    <section className="destinations">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Popular Routes</span>
          <h2>Top destinations chosen by our travelers</h2>
          <p>Real routes, real prices — updated daily</p>
        </div>

        <div className="routes-grid">
          {routes.map((r) => (
            <div className="route-card" key={r.code} onClick={() => onSearch({
              from: r.fromCode,
              to: r.toCode,
              flightClass: 'Economy',
              passengers: '1'
            })}>
              <div className="route-img">
                <img
                  src={r.img}
                  alt={r.landmark}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={(e) => { e.currentTarget.parentElement.style.background = fallbackGradient }}
                />
                <div className="landmark-name">{r.landmark}</div>
                <div className={`route-bg-label ${r.type === 'Domestic' ? 'domestic' : 'intl'}`}>
                  {r.type}
                </div>
              </div>
              <div className="route-body">
                <div className="route-cities">{r.from} → {r.to}</div>
                <div className="route-price">{r.price}</div>
                <div className="route-meta">{r.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
