const express = require('express')
const app = express()
const router = require('./router')
const helmet = require("helmet");
const cors = require("cors");

// process.env
const { PORT, JWT_SECRET, DB_URL } = require('./configs')
app.use(cors())

app.use(helmet())
// app.use(rateLimiter({...}))






app.use(router)


// celebrate error handler
// error handler

app.listen(PORT, _ => {
  console.log(`listening to ${PORT}`)
})