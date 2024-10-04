import express, { Application, Request, Response } from "express"
import cors from "cors"
import routes from './routes'
import path from 'path'

const app: Application = express()
const PORT = process.env.PORT || 3000

// Middleware para permitir JSON: Ele intercepta todas as requisições antes que cheguem às rotas, garantindo que o corpo da requisição esteja disponível em 'req.body' no formato de um objeto JS
app.use(express.json())

const corsOptions = {
    origin: 'https://arome.vercel.app', // Substitua pelo URL do seu frontend na Vercel
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    credentials: true, // Permite o envio de cookies, se necessário
}

app.use(cors(corsOptions))

// Middleware/Rota para a raiz do site
app.get('/', (req, res) => {
    res.send('API da Arome está rodando!')
})

// Middleware para servir arquivos estáticos da pasta 'public'
// Isso permite que você acesse arquivos da pasta public através da URL
app.use(express.static('public')); 

// Middleware para usar as rotas configuradas no arquivo routes.ts sob o caminho base '/api'
app.use('/api', routes)

// Função responsável por iniciar o servidor web
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});











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