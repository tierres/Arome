import express, { Application, Request, Response } from "express"
import cors from "cors"
import routes from './routes'

const app: Application = express()
const PORT = process.env.PORT || 3000

// Middleware para permitir JSON: Ele intercepta todas as requisições antes que cheguem às rotas, garantindo que o corpo da requisição esteja disponível em 'req.body' no formato de um objeto JS
app.use(express.json())

app.use(cors())

// Middleware/Rota para a raiz do site
app.get('/', (req, res) => {
    res.send('API da Arome está rodando!')
})

// Middleware para usar as rotas configuradas no arquivo routes.ts sob o caminho base '/api'
app.use('/api', routes)

// Middleware para poder acessar qualquer arquivo da pasta 'public' através do cliente --> " http://localhost:3000/images/infusao-valeriana-garden.svg " por exemplo.
app.use(express.static('public'))


// Função responsável por iniciar o servidor web, permitindo que ele comece a ouvir conexões HTTP na porta especificada(nesse caso 3000)
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