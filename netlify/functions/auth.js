import { getStore } from '@netlify/blobs'

// Seeds the store on first run so existing local accounts keep working after deploy.
const seedUsers = [
  { id: 'bfx2sAQ3pQA', name: 'Hamza', email: 'hamzasohail4466@gmail.com', password: '123456' },
  { id: 'lf7yOHMPGAk', name: 'Laiba', email: 'laibasohail4466@gmail.com', password: '224466' },
]

async function getUsers(store) {
  const users = await store.get('users', { type: 'json' })
  if (users) return users
  await store.setJSON('users', seedUsers)
  return seedUsers
}

export default async (req) => {
  if (req.method !== 'POST') {
    return Response.json({ error: 'Method Not Allowed' }, { status: 405 })
  }

  const store = getStore('sky-wings-users')
  const body = await req.json()
  const users = await getUsers(store)

  if (body.action === 'login') {
    const user = users.find(u => u.email === body.email && u.password === body.password)
    return Response.json({ user: user || null })
  }

  if (body.action === 'signup') {
    const exists = users.find(u => u.email === body.email)
    if (exists) return Response.json({ error: 'Email already registered!' })

    const newUser = { id: crypto.randomUUID(), name: body.name, email: body.email, password: body.password }
    await store.setJSON('users', [...users, newUser])
    return Response.json({ user: newUser })
  }

  return Response.json({ error: 'Unknown action' }, { status: 400 })
}
