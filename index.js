const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose') 
const myData = require('./models/myDataSchema') 
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
  myData.find()
  .then((result)=>res.render('home',{"data":result}))
  .catch((err)=>console.log(err))  
})
mongoose.connect('mongodb+srv://elmehdi:15HR1WyAmlClAqXk@cluster0.thsi7k7.mongodb.net/?appName=Cluster0')
.then(()=>app.listen(port, () => {  
  console.log(`http://localhost:${port}/`)
}))
.catch((err)=>console.log(err))
app.post('/',(req,res)=>{
  myData.create(req.body)
  .then(()=>res.redirect('/'))
  .catch((err)=>console.log(err))
})