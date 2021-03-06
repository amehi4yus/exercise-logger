const express = require('express')
const connectDB = require('./config/db')

//Initialize app
const app = express()

//Connect to DB
connectDB()

//Initialize middleware
app.use(express.json({ extended: false }))     

//ROUTE FOR HOME
app.get('/', (req, res) =>{ 
    res.send("We are on home!"); 
});

//Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/exercises', require('./routes/exercises'))
app.use('/api/auth', require('./routes/auth'))

//Listen to server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log (`Server is running on port ${PORT}`))

