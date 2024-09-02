import { Request, Response } from 'express'
import db from '../database'

export const getProducts = (req: Request, res: Response) => {
    const { type } = req.params
    const products = db.prepare(`SELECT p.*, ( SELECT GROUP_CONCAT(i.url) FROM product_images i WHERE i.product_id = p.id) AS image FROM products p WHERE type = ?`).all(type)
    const productsWithImages = products.map((product: any) => {
        const imageUrls = product.image ? product.image.split(',') : [];
        return {
            ...product, // Spread operator to preserve existing product properties
            image: imageUrls, // Add the split image URLs array
        };
    })
    res.json(productsWithImages)
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
    console.log(id)
    const product = db.prepare('SELECT * FROM products WHERE id = ?').get(id)

    if (!product) {
        console.log('Produto não encontrado')
        res.status(404).json({error: 'Produto não encontrado'})
        return
    }

    const stmt = db.prepare('DELETE FROM products WHERE id = ?')
    const result = stmt.run(id)

    
    res.json({ message: 'Produto excluído com sucesso' });
}

// Para 'updateProduct' e 'deleteProduct': 
    // 1- Buscar o produto com id
    // 2- Caso não exista, retorar um erro
    // 3- Pegar os dados do body
    // 4- Atualizar (usar UPDATE do sql)
    // 5- Retornar alguma coisa