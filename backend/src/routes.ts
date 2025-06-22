import { Router } from 'express'
import { getAllProducts, getSpecificTypeProducts, getOneProduct, addProduct, updateProduct, deleteProduct } from './controllers/productController'
import { signup } from './controllers/authController'

const router = Router()

router.get('/products', getAllProducts)
router.get('/products/:type', getSpecificTypeProducts) 
router.get('/products/:type/:slug', getOneProduct)
router.post('/products', addProduct)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)

router.post('/auth/signup', signup)


export default router
export { router }

// Tierres Griep