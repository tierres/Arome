import { Router } from 'express'
import { getProducts, getProduct, addProduct, updateProduct, deleteProduct } from './controllers/productController'

const router = Router()

router.get('/products', getProducts)
router.get('/products/:id', getProduct)
router.post('/products', addProduct)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)

export default router