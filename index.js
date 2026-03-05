const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose') 

app.get('/', (req, res) => {
  res.sendFile('./views/home.html',{root:__dirname})
})


mongoose.connect('mongodb+srv://elmehdi:15HR1WyAmlClAqXk@cluster0.thsi7k7.mongodb.net/?appName=Cluster0')
.then(()=>app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
}))
.catch((err)=>console.log(err))