import router from './routes/index.js'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

//middleware globales

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//middleware propio
app.use(router);

export default app