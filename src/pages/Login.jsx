import { useState } from 'react'
import { loginUser } from '../services/auth'
import './AuthPage.css'

export default function LoginPage({ onLogin, goToSignup, onGuest }) {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const user = await loginUser(email, password)
      if (!user) {
        setError('Wrong email or password!')
      } else {
        onLogin(user)
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
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-sub">Login to your account to continue</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-field">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="auth-field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <div className="auth-divider"><span>or</span></div>

          <button type="button" className="auth-guest-btn" onClick={onGuest}>
            Continue as Guest
          </button>
        </form>

        <p className="auth-switch">
          New user? <span onClick={goToSignup}>Create an account</span>
        </p>
      </div>
    </div>
  )
}
