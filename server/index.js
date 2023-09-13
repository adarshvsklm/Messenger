const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userRoutes = require('./Routes/userRoutes')
const app = express()
const cors = require('cors')
dotenv.config()

app.use(cors({origin: "*",})); 
app.use(express.json())

// app.options('*', cors({origin: true, credentials:true}));

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to Database Successfully")
    } catch (err) {
        console.log('Database Connection  Error', err)
    }
}
connectDB()
app.use('/user', userRoutes)

app.get('/', (req, res) => {
    res.send('hello world')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server listening on port ${PORT}`))
















