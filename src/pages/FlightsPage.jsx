import { useState } from 'react'
import FlightCard from '../components/FlightCard'
import './FlightsPage.css'
import { FLIGHTS_DB } from '../data/flights'
import Floating3DBackground from '../Floating3DBackground'

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

const POPULAR = [
  { from:'KHI', to:'LHE', label:'Karachi → Lahore',    price:'PKR 8,700'   },
  { from:'KHI', to:'DXB', label:'Karachi → Dubai',     price:'PKR 46,500'  },
  { from:'ISB', to:'IST', label:'Islamabad → Istanbul', price:'PKR 96,000'  },
  { from:'LHE', to:'DXB', label:'Lahore → Dubai',      price:'PKR 41,000'  },
  { from:'KHI', to:'LDN', label:'Karachi → London',    price:'PKR 178,000' },
  { from:'ISB', to:'DOH', label:'Islamabad → Doha',    price:'PKR 55,000'  },
]

const sampleResults = [
  { id: 1, num: 'PK-301', airline: 'PIA',          emoji: '🇵🇰', from: 'KHI', to: 'LHE', dep: '06:00', arr: '07:10', duration: '1h 10m', stops: 'Direct', economy_price: 9500,  seats: 45 },
  { id: 2, num: 'PA-205', airline: 'AirBlue',       emoji: '💙',  from: 'KHI', to: 'LHE', dep: '08:30', arr: '09:45', duration: '1h 15m', stops: 'Direct', economy_price: 11200, seats: 28 },
  { id: 3, num: 'ER-101', airline: 'SereneAir',     emoji: '☁️',  from: 'KHI', to: 'LHE', dep: '12:15', arr: '13:30', duration: '1h 15m', stops: 'Direct', economy_price: 10800, seats: 0  },
]

export default function FlightsPage({ searchParams, currentUser, goToLogin }) {
  const [searched, setSearched]         = useState(!!searchParams)
  const [sortBy, setSortBy]             = useState('cheapest')
  const [filterDirect, setFilterDirect] = useState(false)
  const [maxPrice, setMaxPrice]         = useState(500000)
  const [flightClass, setFlightClass]   = useState(searchParams?.flightClass || 'Economy')
  const [from, setFrom]                 = useState(searchParams?.from || '')
  const [to, setTo]                     = useState(searchParams?.to || '')
  const [passengers, setPassengers]     = useState(searchParams?.passengers || '1')

  const FilteredFlights = FLIGHTS_DB.filter((flight) => {
    return flight.from === from && flight.to === to
  })

  const Filter_Section = FilteredFlights.filter((flight) =>{
    return flight.economy_price <= maxPrice
  })
  .filter((flight) =>{
    if(filterDirect) return flight.stops === 'Direct'
    return true
  })
  .sort((a,b) => {
    if (sortBy === 'cheapest'){
      return a.economy_price - b.economy_price
    }
    if(sortBy === 'fastest'){
        const toMins = (dur) => {
        const h = parseInt(dur.split('h')[0]) || 0
        const m = parseInt(dur.split('h')[1]) || 0
        return h * 60 + m
    } 
      return toMins(a.duration) - toMins(b.duration)
  }
  })

  return (
    <div className="flights-page">
      <div className="fp-hero">
        <Floating3DBackground />
        <div className="fp-hero-overlay" />
        <div className="fp-container">
          <h1 className="fp-title">Search <span>Flights</span></h1>
          <p className="fp-subtitle">Find the best fares across 10 airlines and 106+ routes</p>

          <form className="fp-search-bar" onSubmit={(e) => { e.preventDefault(); setSearched(true) }}>
            <div className="fp-field">
              <label><i className="fas fa-plane-departure" /> From</label>
              <select value={from} onChange={(e) => setFrom(e.target.value)} required>
                <option value="">Select City</option>
                {airports.filter(a => a.code !== to).map(a => <option key={a.code} value={a.code}>{a.flag} {a.city} ({a.code})</option>)}
              </select>
            </div>

            <button type="button" className="fp-swap" onClick={() => { setFrom(to); setTo(from) }}>
              <i className="fas fa-exchange-alt" />
            </button>

            <div className="fp-field">
              <label><i className="fas fa-plane-arrival" /> To</label>
              <select value={to} onChange={(e) => setTo(e.target.value)} required>
                <option value="">Select City</option>
                {airports.filter(a => a.code !== from).map(a => <option key={a.code} value={a.code}>{a.flag} {a.city} ({a.code})</option>)}
              </select>
            </div>

            <div className="fp-field">
              <label><i className="fas fa-user-friends" /> Passengers</label>
              <select value={passengers} onChange={(e) => setPassengers(e.target.value)}>
                {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n===1?'Adult':'Adults'}</option>)}
              </select>
            </div>

            <div className="fp-field">
              <label><i className="fas fa-chair" /> Class</label>
              <select name= "flightClass" value={flightClass} onChange={(e) => setFlightClass(e.target.value)}>
                <option>Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
            </div>

            <button type="submit" className="fp-search-btn">
              <i className="fas fa-search" /> Search
            </button>
          </form>
        </div>
      </div>

      <div className="fp-body fp-container">
        {!searched ? (
          <div className="fp-popular">
            <h2 className="fp-section-title">Popular Routes</h2>
            <div className="fp-popular-grid">
              {POPULAR.map(r => (
                <div className="fp-route-card" key={r.from + r.to} onClick={() => setSearched(true)}>
                  <div className="fp-route-label">{r.label}</div>
                  <div className="fp-route-from">{r.price}</div>
                  <span className="fp-route-cta">View Flights <i className="fas fa-arrow-right" /></span>
                </div>
              ))}
            </div>

            <div className="fp-airlines-row">
              <h2 className="fp-section-title">Airlines We Cover</h2>
              <div className="fp-airline-chips">
                {[['🇵🇰','PIA'],['💙','AirBlue'],['☁️','SereneAir'],['🌟','Emirates'],['🔴','Qatar Airways'],['🇹🇷','Turkish Airlines'],['🟡','Etihad'],['🟢','Saudia'],['🍁','Air Canada']].map(([e,n]) => (
                  <div className="fp-airline-chip" key={n}><span>{e}</span>{n}</div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="fp-results-layout">
            <aside className="fp-filters">
              <div className="fp-filter-head">
                <h3><i className="fas fa-sliders-h" /> Filters</h3>
                <button onClick={() => { setFilterDirect(false); setSortBy('cheapest'); setMaxPrice(500000) }}>Reset</button>
              </div>

              <div className="fp-filter-group">
                <h4>Sort By</h4>
                {[['cheapest','💰 Cheapest'],['fastest','⚡ Fastest']].map(([v,l]) => (
                  <label className="fp-radio" key={v}>
                    <input type="radio" name="sort" checked={sortBy === v} onChange={() => setSortBy(v)} />{l}
                  </label>
                ))}
              </div>

              <div className="fp-filter-group">
                <h4>Stops</h4>
                <label className="fp-check">
                  <input type="checkbox" checked={filterDirect} onChange={() => setFilterDirect(!filterDirect)} />
                  Direct only
                </label>
              </div>

              <div className="fp-filter-group">
                <h4>Max Price <span className="fp-price-val">PKR {maxPrice.toLocaleString()}</span></h4>
                <input type="range" min="5000" max="500000" step="5000"
                  value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} className="fp-slider" />
              </div>
            </aside>

            <div className="fp-flight-list">
              <div className="fp-list-header">
                <h2 className="fp-list-title">Available Flights</h2>
                <p className="fp-list-count"><strong>{Filter_Section.length}</strong> flights found</p>
              </div>
              {Filter_Section.map((flight) => (
                <FlightCard
                  key={flight.id}
                  flight={flight}
                  flightClass={flightClass}
                  passengers={passengers}
                  currentUser={currentUser}
                  goToLogin={goToLogin}
                />
              ))}
              {Filter_Section.length === 0 && <p>No Flights Found</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
