const isDev = import.meta.env.DEV

const LOCAL_API = 'http://localhost:3001/users'
const PROD_API  = '/.netlify/functions/auth'

export async function loginUser(email, password) {
  if (isDev) {
    const res   = await fetch(LOCAL_API)
    const users = await res.json()
    return users.find(u => u.email === email && u.password === password) || null
  }

  const res  = await fetch(PROD_API, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ action: 'login', email, password }),
  })
  const data = await res.json()
  return data.user || null
}

export async function signupUser(name, email, password) {
  if (isDev) {
    const res   = await fetch(LOCAL_API)
    const users = await res.json()
    const exists = users.find(u => u.email === email)
    if (exists) return { error: 'Email already registered!' }

    const saveRes   = await fetch(LOCAL_API, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ name, email, password })
    })
    const savedUser = await saveRes.json()
    return { user: savedUser }
  }

  const res = await fetch(PROD_API, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ action: 'signup', name, email, password }),
  })
  return await res.json()
}
