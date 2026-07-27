import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function Booking_Modal({ flight, flightClass, passengers, finalPrice, onClose }) {
    const [email, setEmail]     = useState('')
    const [name, setName]       = useState('')
    const [sent, setSent]       = useState(false)
    const [loading, setLoading] = useState(false)

    async function handleConfirm(e) {
        e.preventDefault()
        setLoading(true)

        try {
            await emailjs.send(
                'Skywings.com',
                'template_8obsis5',
                {
                    to_email:   email,
                    user_name:  name,
                    flight_num: flight.num,
                    airline:    flight.airline,
                    from:       flight.from,
                    to:         flight.to,
                    dep:        flight.dep,
                    arr:        flight.arr,
                    class:      flightClass,
                    passengers: passengers,
                    price:      finalPrice.toLocaleString(),
                },
                'b--vJtcV2fX_BECC6'
            )
            setSent(true)
        } catch (err) {
            alert('Email Not Sent, Try again please!')
        }

        setLoading(false)
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-card" onClick={e => e.stopPropagation()}>

                {sent ? (
                    <div className="modal-success">
                        <h2>✅ Booking Confirmed!</h2>
                        <p>Confirmation email bhej diya: <strong>{email}</strong></p>
                        <button onClick={onClose}>Close</button>
                    </div>
                ) : (
                    <>
                        <h2>Confirm Booking</h2>
                        <div className="modal-flight-info">
                            <p>{flight.airline} — {flight.num}</p>
                            <p>{flight.from} → {flight.to}</p>
                            <p>{flight.dep} → {flight.arr}</p>
                            <p>Class: {flightClass} | Passengers: {passengers}</p>
                            <p className="modal-price">PKR {finalPrice?.toLocaleString()}</p>
                        </div>

                        <form onSubmit={handleConfirm}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" disabled={loading}>
                                {loading ? 'Sending...' : 'Confirm & Get Email'}
                            </button>
                            <button type="button" onClick={onClose}>Cancel</button>
                        </form>
                    </>
                )}
            </div>
        </div>
    )
}
