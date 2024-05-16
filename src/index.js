import express from 'express'
import loginRoute from './routes/authRoutes.js'
import { PORT } from './config/config.js';

const app = express()

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Root Endpoint')
})

app.use('/', loginRoute)

app.listen(PORT, () => {
  console.log('Iniciado correctamente en http://localhost:3000')
})