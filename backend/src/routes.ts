import { Router } from 'express'
import { getProducts, addProduct, updateProduct } from './controllers/productController'

const router = Router()

router.get('/products', getProducts)
router.post('/products', addProduct)
router.put('/products/:id', updateProduct)

export default router