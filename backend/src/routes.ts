import { Router } from 'express'
import { getAllProducts, getSpecificTypeProducts, getOneProduct, addProduct, updateProduct, deleteProduct } from './controllers/productController'

const router = Router()

router.get('/products', getAllProducts) // Essa rota NÃO retorna imagens
router.get('/products/:type', getSpecificTypeProducts) // Essa rota retorna imagens
router.get('/products/:type/:slug', getOneProduct) // Essa rota retorna imagens
router.post('/products', addProduct)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)


export default router
export { router }