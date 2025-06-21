import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import db from '../database'

export const signup = (req: Request, res: Response) => {
    const { name, email, password, role } = req.body

    if (!name || !email || !password || !role) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios'})
    }

    if (!['admin', 'user'].includes(role)) {
        return res.status(400).json({ error: 'Role inválido. Use "admin" ou "user".'})
    }

    try {
        const existingUser = db.prepare('SELECT * FROM users WHERE email = ?').get(email)
        if (existingUser) {
            return res.status(409).json({ error: 'E-mail já cadastrado'})
        }
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const stmt = db.prepare(`
            INSERT INTO users (name, email, password, role)
            VALUES (?, ?, ?, ?)
        `) 
        stmt.run(name, email, hashedPassword, role)

        return res.status(201).json({ message: 'Usuário cadastrado com sucesso'})
}       catch (error) {
        console.error('Erro ao cadastrar usuário', error);
        return resizeBy.status(500).json({ error: 'Erro interno no servidor' })
}