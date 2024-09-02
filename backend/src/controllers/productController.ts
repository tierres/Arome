import { Request, Response } from 'express'
import db from '../database'

export const getProducts = (req: Request, res: Response) => {
    const products = db.prepare('SELECT * FROM products').all()
    res.json(products)
}

export const getProduct = (req: Request, res: Response) => {
    const { id } = req.params
    const product = db.prepare('SELECT * FROM products WHERE id = ?').get(id)
    res.json(product)
}

export const addProduct = (req: Request, res: Response) => {
    const { slug, type, sub_type, name, short_name, price, description, relevance } = req.body
    const stmt = db.prepare('INSERT INTO products (slug, type, sub_type, name, short_name, price, description, relevance) VALUES (?, ?, ?, ?, ?, ?, ?, ?)')
    const result = stmt.run(slug, type, sub_type, name, short_name, price, description, relevance)
    res.json({ id: result.lastInsertRowid})
}

export const updateProduct = (req: Request, res: Response) => {
    const { id } = req.params
    const product = db.prepare('SELECT * FROM products WHERE id = ?').get(id);

    if (!product) {
        console.log('Produto não encontrado')
        res.status(404).json({error: 'Produto não encontrado'})
        return
    }

    const { slug, type, sub_type, name, short_name, price, description, relevance } = req.body
    const stmt = db.prepare('UPDATE products SET slug = ?, type = ?, sub_type = ?, name = ?, short_name = ?, price = ?, description = ?, relevance = ? WHERE id = ?')
    const result = stmt.run(slug, type, sub_type, name, short_name, price, description, relevance, id)

    res.json({result})
}

export const deleteProduct = (req: Request, res: Response) => {
    const { id } = req.params
    const product = db.prepare('SELECT * FROM products WHERE id = ?').get(id)

    if (!product) {
        console.log('Produto não encontrado')
        res.status(404).json({error: 'Produto não encontrado'})
        return
    }

    const stmt = db.prepare('DELETE FROM products WHERE id = ?')
    const result = stmt.run(id)

    if (result.changes > 0) {
        res.json({ message: 'Produto excluído com sucesso' });
    } else {
        res.status(500).json({ error: 'Erro ao excluir o produto' });
    }
}

// Para 'updateProduct' e 'deleteProduct': 
    // 1- Buscar o produto com id
    // 2- Caso não exista, retorar um erro
    // 3- Pegar os dados do body
    // 4- Atualizar (usar UPDATE do sql)
    // 5- Retornar alguma coisa