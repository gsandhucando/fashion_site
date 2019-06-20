const express = require('express')
const app = express()
const mongoose = require('mongoose');
const PORT = 3001;
let itemModel = require('./models/item')
let data = require('./src/data/data.json')
let routes = require('./routes')
let cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(routes)


mongoose.connect('mongodb://localhost:27017/fashion_site', {useNewUrlParser: true}).then(()=> {
  console.log('connected')
  let allItems = [].concat(data.shirts, data.hoodies, data.sunglasses, data.tops, data.womens_hoodies, data.womens_sunglasses)
  itemModel.remove({}).then(()=> {
    return itemModel.insertMany(allItems).then(data => {
      console.log(data)
    })
  })


});

app.listen(PORT, ()=> {
  console.log(`server up on PORT: ${PORT}`)
})
