const API = 'http://localhost:3001/users'

export async function loginUser(email, password) {
  const res   = await fetch(API)
  const users = await res.json()
  return users.find(u => u.email === email && u.password === password) || null
}

export async function signupUser(name, email, password) {
  // check if email already exists
  const res   = await fetch(API)
  const users = await res.json()
  const exists = users.find(u => u.email === email)
  if (exists) return { error: 'Email already registered!' }

  // save new user
  const saveRes   = await fetch(API, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ name, email, password })
  })
  const savedUser = await saveRes.json()
  return { user: savedUser }
}
