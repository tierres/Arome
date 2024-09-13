import { Router } from 'express'
import { getAllProducts, getSpecificProducts, getProduct, addProduct, updateProduct, deleteProduct } from './controllers/productController'

const router = Router()

router.get('/products', getAllProducts) // Essa rota não retorna imagens
router.get('/products/:type', getSpecificProducts) // Essa rota retorna imagens
router.get('/products/:type/:slug', getProduct) // Essa rota retorna imagens
router.post('/products', addProduct)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)


export default router
export { router }