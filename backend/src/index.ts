import express, { Application, Request, Response } from "express";

const app: Application = express()
const port = 3000

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

// Exemplo de rota GET
app.get('/api/items', (req: Request, res: Response) => {
    res.json({ message: 'Aqui você receberá uma lista de ítens!'})
})

// Exemplo de rota POST
app.post('/api/items', (req: Request, res: Response) => {
    const newItem = req.body;
    res.status(201).json({ message: 'Item criado com sucesso!', item: newItem })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})