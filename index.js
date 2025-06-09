const express = require('express')
require('dotenv').config()
const blogRoutes = require('./Routes/blog')
const mongoDBConnection = require('./Config/database')
const { specs, swaggerUi } = require('./Config/swagger')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // form data use for open (file , text ) 
app.use(cors({
    origin: '*',
}))

// Swagger route
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));
// mount
app.use('/api/v1', blogRoutes)


// http://localhost:5000/
app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(port, (req, res) => {
    mongoDBConnection();
    console.log(`Server is running on port ${port}`)
})