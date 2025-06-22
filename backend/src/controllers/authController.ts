import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import db from '../database'

export const signup = (req: Request, res: Response) => {
  const { name, email, password } = req.body

  // Verifica se os campos obrigatórios foram enviados
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' })
  }

  // Verifica se o e-mail já está cadastrado
  const existingUser = db.prepare('SELECT * FROM users WHERE email = ?').get(email)
  if (existingUser) {
    return res.status(409).json({ error: 'E-mail já cadastrado' })
  }

  // Criptografa a senha
  const hashedPassword = bcrypt.hashSync(password, 10)

  // Define role fixo como "user"
  const role = 'user'

  // Insere no banco
  db.prepare('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)').run(
    name,
    email,
    hashedPassword,
    role
  )

  return res.status(201).json({ message: 'Usuário criado com sucesso!' })
}

