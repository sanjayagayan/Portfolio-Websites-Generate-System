const express =require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const colors = require('colors')
const connectDB = require('./config/db')
const cors = require('cors')

connectDB()
const PORT = process.env.PORT||8000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use('/api/users',require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(PORT,()=>console.log(`Server is running port : ${PORT}`))