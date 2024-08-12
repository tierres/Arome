import { Request, Response } from 'express'
import db from '../database'

export const getProducts = (req: Request, res: Response) => {
    const products = db.prepare('SELECT * FROM products').all()
    res.json(products)
}

export const addProduct = (req: Request, res: Response) => {
    const { name, price } = req.body
    const stmt = db.prepare('INSERT INTO products (name, price) VALUES (?, ?)')
    const result = stmt.run(name, price)
    res.json({ id: result.lastInsertRowid})
}