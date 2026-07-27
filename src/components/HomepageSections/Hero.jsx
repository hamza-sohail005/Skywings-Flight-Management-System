import { useState, useRef } from 'react'
import './Hero.css'
import Floating3DBackground from '../../Floating3DBackground'

const airports = [
  { code: 'KHI', city: 'Karachi',   flag: '🇵🇰' },
  { code: 'LHE', city: 'Lahore',    flag: '🇵🇰' },
  { code: 'ISB', city: 'Islamabad', flag: '🇵🇰' },
  { code: 'DXB', city: 'Dubai',     flag: '🇦🇪' },
  { code: 'IST', city: 'Istanbul',  flag: '🇹🇷' },
  { code: 'LDN', city: 'London',    flag: '🇬🇧' },
  { code: 'DOH', city: 'Doha',      flag: '🇶🇦' },
  { code: 'AUH', city: 'Abu Dhabi', flag: '🇦🇪' },
  { code: 'RUH', city: 'Riyadh',    flag: '🇸🇦' },
  { code: 'TO',  city: 'Toronto',   flag: '🇨🇦' },
]

export default function Hero({ onSearch }) {
  const [tripType, setTripType]       = useState('oneway')
  const [from, setFrom]               = useState('')
  const [to, setTo]                   = useState('')
  const [departure, setDeparture]     = useState('')
  const [returnDate, setReturnDate]   = useState('')
  const [passengers, setPassengers]   = useState('1')
  const [flightClass, setFlightClass] = useState('Economy')
  const cardRef = useRef(null)

  function handleCardTilt(e) {
    const el   = cardRef.current
    const rect = el.getBoundingClientRect()
    const x    = e.clientX - rect.left
    const y    = e.clientY - rect.top
    const rotY =  ((x / rect.width)  - 0.5) * 10
    const rotX = -((y / rect.height) - 0.5) * 6
    el.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(4px)`
  }
  function resetCardTilt() {
    cardRef.current.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) translateZ(0)'
  }

  // function handleDuplication()

  function handleSubmit(e) {
    e.preventDefault()
    onSearch({ from, to, departure, returnDate, passengers, flightClass, tripType })
  }

  function handleSwap() {
    setFrom(to)
    setTo(from)
  }

  return (
    <section className="hero">
      <Floating3DBackground />
      <div className="hero-overlay" />

      {/* decorative floating planes */}
      <span className="hero-deco-plane p1">✈</span>
      <span className="hero-deco-plane p2">✈</span>
      <span className="hero-deco-plane p3">✈</span>

      <div className="hero-content">
        <p className="hero-tagline">Discover the world with us</p>
        <h1 className="hero-title">Fly Beyond<br /><span>Boundaries</span></h1>
        <p className="hero-subtitle">
          Search hundreds of airlines and find the cheapest tickets to any destination worldwide.
        </p>

        <div className="search-card" ref={cardRef} onMouseMove={handleCardTilt} onMouseLeave={resetCardTilt}>
          <div className="trip-tabs">
            {[['oneway','One Way'],['roundtrip','Round Trip'],['multicity','Multi City']].map(([val,label]) => (
              <button key={val} className={`tab-btn ${tripType === val ? 'active' : ''}`} onClick={() => setTripType(val)}>
                {label}
              </button>
            ))}
          </div>

          <form className="search-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label><i className="fas fa-plane-departure"></i> From</label>
                <select value={from} onChange={(e) => setFrom(e.target.value)} required>
                  <option value="">Select City</option>
                  {airports.filter(a => a.code !== to).map(a => (
                    <option key={a.code} value={a.code}>{a.flag} {a.city} ({a.code})</option>
                  ))}
                </select>
              </div>

              <button type="button" className="swap-btn" onClick={handleSwap}>
                <i className="fas fa-exchange-alt"></i>
              </button>

              <div className="form-group">
                <label><i className="fas fa-plane-arrival"></i> To</label>
                <select value={to} onChange={(e) => setTo(e.target.value)} required>
                  <option value="">Select City</option>
                  {airports.filter(a => a.code !== from).map(a => (
                    <option key={a.code} value={a.code}>{a.flag} {a.city} ({a.code})</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label><i className="fas fa-calendar-alt"></i> Departure</label>
                <input type="date" value={departure} onChange={(e) => setDeparture(e.target.value)} required />
              </div>

              {tripType === 'roundtrip' && (
                <div className="form-group">
                  <label><i className="fas fa-calendar-check"></i> Return</label>
                  <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
                </div>
              )}

              <div className="form-group">
                <label><i className="fas fa-user-friends"></i> Passengers</label>
                <select value={passengers} onChange={(e) => setPassengers(e.target.value)}>
                  {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Adult' : 'Adults'}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label><i className="fas fa-chair"></i> Class</label>
                <select value={flightClass} onChange={(e) => setFlightClass(e.target.value)}>
                  <option>Economy</option>
                  <option>Business</option>
                  <option>First Class</option>
                </select>
              </div>
            </div>

            <button type="submit" className="search-btn">
              <i className="fas fa-search"></i> Search Flights
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
