import { useState } from 'react'
import './Navbar.css'

const NAV_ITEMS = [
  { id: 'home',     label: 'Home' },
  { id: 'flights',  label: 'Flights' },
  { id: 'packages', label: 'Packages' },
  { id: 'about',    label: 'About' },
]

export default function Navbar({ currentPage, setCurrentPage, currentUser, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const go = (id) => { setCurrentPage(id); setMenuOpen(false) }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => go('home')}>
          <i className="fas fa-paper-plane"></i>
          <span>Sky<strong>Wings</strong></span>
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {NAV_ITEMS.map(item => (
            <li key={item.id} className={currentPage === item.id ? 'active' : ''} onClick={() => go(item.id)}>
              {item.label}
            </li>
          ))}
        </ul>

        <div className="nav-auth">
          {currentUser ? (
            <>
              <span className="nav-username">👤 {currentUser.name}</span>
              <button className="btn-login" onClick={onLogout}>Logout</button>
            </>
          ) : (
            <>
              <button className="btn-login"  onClick={() => go('login')}>Login</button>
              <button className="btn-signup" onClick={() => go('signup')}>Sign Up</button>
            </>
          )}
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </nav>
  )
}
