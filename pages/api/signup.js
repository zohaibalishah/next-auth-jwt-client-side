
import { findByEmail, users } from './user';
export default function signup(req, res) {
  const { email,name, password } = req.body;
  
  const existingUser = findByEmail(email);
  if (existingUser) {
    res.status(400).json({ error: 'User already exists' });
    return;
  }
  const newUser = { id: Date.now(),name, email, password };
  users.push(newUser);
  res.status(200).json({ message: 'User created successfully' });
}