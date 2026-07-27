import { useState } from 'react'
import { signupUser } from '../services/auth'
import './AuthPage.css'

export default function SignupPage({ onSignup, goToLogin,}) {
  const [name, setName]         = useState('')
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await signupUser(name, email, password)
      if (result.error) {
        setError(result.error)
      } else {
        onSignup(result.user)
      }
    } catch {
      setError('Server not running! Open new terminal and run: npm run server')
    }

    setLoading(false)
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">✈️</div>
        <p className="auth-brand">SkyWings</p>
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-sub">Join SkyWings and start exploring</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-field">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="auth-field">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="auth-field">
            <label>Password</label>
            <input type="password" placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>

          <div className="auth-divider"><span>or</span></div>

        </form>

        <p className="auth-switch">
          Already have account? <span onClick={goToLogin}>Login</span>
        </p>
      </div>
    </div>
  )
}
