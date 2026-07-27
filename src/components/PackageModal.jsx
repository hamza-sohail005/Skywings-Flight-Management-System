import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function PackageModal({ pkg, onClose }) {
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [persons, setPersons] = useState(1)
  const [loading, setLoading] = useState(false)
  const [sent, setSent]       = useState(false)

  const totalPrice = pkg.price * Number(persons)

  async function handleConfirm(e) {
    e.preventDefault()
    setLoading(true)
    try {
      await emailjs.send(
        'Skywings.com',
        'template_06mf1ys',
        {
          to_email:    email,
          user_name:   name,
          destination: pkg.dest,
          country:     pkg.country,
          nights:      pkg.nights,
          persons:     persons,
          includes:    pkg.includes.join(', '),
          total_price: totalPrice.toLocaleString(),
        },
        'b--vJtcV2fX_BECC6',
      )
      setSent(true)
    } catch {
      alert('Email not sent. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className="pkg-modal-overlay" onClick={onClose}>
      <div className="pkg-modal" onClick={e => e.stopPropagation()}>
        <button className="pkg-modal-close" onClick={onClose}>
          <i className="fas fa-times" />
        </button>

        {sent ? (
          <div className="pkg-modal-success">
            <div className="pkg-success-icon">✅</div>
            <h2>Booking Confirmed!</h2>
            <p>Confirmation email sent to <strong>{email}</strong></p>
            <p className="pkg-success-dest">{pkg.flag} {pkg.dest} — {pkg.nights} Nights</p>
            <p className="pkg-success-total">PKR {totalPrice.toLocaleString()} total</p>
            <button className="pkg-modal-btn" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <h2>{pkg.flag} {pkg.dest} — {pkg.nights} Nights</h2>
            <p className="pkg-modal-country">{pkg.country}</p>

            <ul className="pkg-modal-includes">
              {pkg.includes.map(item => (
                <li key={item}><i className="fas fa-check" /> {item}</li>
              ))}
            </ul>

            <form onSubmit={handleConfirm} className="pkg-modal-form">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />

              <div className="pkg-persons-row">
                <label>Number of Persons</label>
                <select value={persons} onChange={e => setPersons(e.target.value)}>
                  {[1,2,3,4,5,6].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'Persons'}</option>
                  ))}
                </select>
              </div>

              <div className="pkg-total-box">
                <span>PKR {pkg.price.toLocaleString()} × {persons} {Number(persons) === 1 ? 'person' : 'persons'}</span>
                <strong>PKR {totalPrice.toLocaleString()}</strong>
              </div>

              <button type="submit" className="pkg-modal-btn" disabled={loading}>
                {loading ? 'Sending...' : <><i className="fas fa-paper-plane" /> Confirm & Get Email</>}
              </button>
              <button type="button" className="pkg-modal-cancel" onClick={onClose}>
                Cancel
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
