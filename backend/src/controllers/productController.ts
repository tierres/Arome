import { Request, Response } from 'express'
import db from '../database'

import { IGenericProduct } from '../types/generic_product'

export const getAllProducts = (req: Request, res: Response) => {
    console.log('Executando getAllProducts()')
    const products = db.prepare(`SELECT p.*, ( SELECT GROUP_CONCAT(i.url) FROM products_images i WHERE i.product_id = p.id) AS images FROM products p`).all()
    const productsWithImages = products.map((product: any) => {
        const imagesUrls = product.images ? product.images.split(',') : [];
        return {
            ...product,
            images: imagesUrls, 
        };
    })
    res.json(productsWithImages)
}

export const getSpecificTypeProducts = (req: Request, res: Response) => {
    console.log('Executando getSpecificTypeProducts()')
    const { type } = req.params
    const products = db.prepare(`SELECT p.*, ( SELECT GROUP_CONCAT(i.url) FROM products_images i WHERE i.product_id = p.id) AS images FROM products p WHERE type = ?`).all(type)
    const productsWithImages = products.map((product: any) => {
        const imagesUrls = product.images ? product.images.split(',') : [];
        return {
            ...product,
            images: imagesUrls,
        };
    })
    res.json(productsWithImages)
}

export const getOneProduct = (req: Request, res: Response) => {
    console.log('Executando getOneProduct()')
    const { slug, type } = req.params
    const product = db.prepare('SELECT p.*, ( SELECT GROUP_CONCAT(i.url) FROM products_images i WHERE i.product_id = p.id) AS images FROM products p WHERE slug = ? AND type = ?').get(slug, type) as IGenericProduct
    
    if (!product) {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }
    
    console.log({images: product.images})
    
    const imagesUrls = Array.isArray(product.images) 
        ? product.images 
        : (product.images
            ? product.images.split(',')
            : [])

    const productWithImages = {
      ...product,
      images: imagesUrls
    }

    res.json(productWithImages)
}

export const addProduct = (req: Request, res: Response) => {
    console.log('Executando addProduct()')
    const { slug, type, sub_type, name, short_name, price, description, relevance } = req.body
    const stmt = db.prepare('INSERT INTO products (slug, type, sub_type, name, short_name, price, description, relevance) VALUES (?, ?, ?, ?, ?, ?, ?, ?)')
    const result = stmt.run(slug, type, sub_type, name, short_name, price, description, relevance)
    res.json({ id: result.lastInsertRowid})
}

export const updateProduct = (req: Request, res: Response) => {
    console.log('Executando updateProduct()')
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
    console.log('Executando deleteProduct()')
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