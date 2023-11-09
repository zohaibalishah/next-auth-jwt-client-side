import { findByEmail } from '@/pages/api/user'
import jwt from 'jsonwebtoken'

export default function login(req, res) {
  const { email, password } = req.body
  const user = findByEmail(email)

  if (!user || user.password !== password) {
    res.status(401).json({ error: 'Invalid credentials' })
    return
  }

  const token = jwt.sign({ user: user.email }, 'secretKey')
  res.status(200).json({ token, user })
}
