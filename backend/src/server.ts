import express, { Application, Request, Response } from "express";
import productRoutes from './routes'

const app: Application = express()
const PORT = process.env.PORT || 3000

// Middleware para permitir JSON
app.use(express.json())

// Rota para a raiz do site
app.get('/', (req, res) => {
    res.send('API da Arome está rodando!')
})

// Usar as rotas configuradas no arquivo routes.ts
app.use('/api', productRoutes)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})











// // Exemplo de rota GET
// app.get('/api/items', (req: Request, res: Response) => {
//     res.json({ message: 'Aqui você receberá uma lista de ítens!'})
// })

// // Exemplo de rota POST
// app.post('/api/items', (req: Request, res: Response) => {
//     const newItem = req.body;
//     res.status(201).json({ message: 'Item criado com sucesso!', item: newItem })
// })

// app.listen(PORT, () => {
//     console.log(`Servidor rodando na porta ${PORT}`)
// })