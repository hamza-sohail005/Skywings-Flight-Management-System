import { useState } from 'react'
import './FlightCard.css'
import Booking_Modal from './BookingModal'

export default function FlightCard({ flight, flightClass, passengers, currentUser, goToLogin }) {
  const [showModal, setShowModal] = useState(false)

  let finalPrice
  if (flightClass === "Economy")       finalPrice = flight.economy_price
  else if (flightClass === "Business") finalPrice = flight.economy_price * 1.5
  else                                 finalPrice = flight.economy_price * 2

  finalPrice = finalPrice * Number(passengers)

  return (
    <div className="flight-card">
      <div className="fc-airline">
        <div className="fc-logo" style={{ background: 'linear-gradient(135deg,#ff6b35,#ff9f43)' }}>
          <span className="fc-emoji">{flight.emoji}</span>
        </div>
        <div className="fc-airline-info">
          <p className="fc-name">{flight.airline}</p>
          <p className="fc-num">{flight.num}</p>
        </div>
        <div className="fc-badges">
          <span className={`fc-stop-badge ${flight.stops === 'Direct' ? 'direct' : 'stop'}`}>
            {flight.stops}
          </span>
        </div>
      </div>

      <div className="fc-route">
        <div className="fc-point">
          <p className="fc-time">{flight.dep}</p>
          <p className="fc-code">{flight.from}</p>
          <p className="fc-city">{flight.from}</p>
        </div>
        <div className="fc-line-wrap">
          <p className="fc-duration">{flight.duration}</p>
          <div className="fc-line">
            <span /><i className="fas fa-plane" /><span />
          </div>
          <p className="fc-stops-label">{flight.stops}</p>
        </div>
        <div className="fc-point right">
          <p className="fc-time">{flight.arr}</p>
          <p className="fc-code">{flight.to}</p>
          <p className="fc-city">{flight.to}</p>
        </div>
      </div>

      <div className="fc-footer">
        <div className="fc-meta">
          <span><i className="fas fa-chair" /> {flight.seats} seats</span>
          <span><i className="fas fa-suitcase-rolling" /> 23 kg baggage</span>
          <span><i className="fas fa-utensils" /> Meal included</span>
        </div>
        <div className="fc-price-block">
          <p className="fc-price">PKR {finalPrice?.toLocaleString()}</p>
          
          <button 
            className="fc-btn" onClick={() => { 
              if(!currentUser) {
                goToLogin() }
                else { 
                  setShowModal(true) }
                }
              }
              >Book Now </button>
        </div>
      </div>

      {showModal && (
        <Booking_Modal
          flight={flight}
          flightClass={flightClass}
          passengers={passengers}
          finalPrice={finalPrice}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>

  )
}
