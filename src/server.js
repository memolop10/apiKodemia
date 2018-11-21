const express = require('express')


const app = express()

const kodersRoutes = require('./routes/koders')
const mentorRoutes = require('./routes/mentors')
const courseRoutes= require('./routes/courses') 

//middleware parsea a json
app.use(express.json())

app.use('/koder',kodersRoutes)
app.use('/mentor',mentorRoutes)
app.use('/course',courseRoutes)



   


module.exports = app