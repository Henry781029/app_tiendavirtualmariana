import express from 'express';
import mongoose from 'mongoose';
import store from './models/tiendaMariana';
const app = express()
const port = 3000

app.get('/', async (req, res) => {
  try{
const data= store.find().limit(10);
res.json(data);
}

catch(e){
res.json(e)
}
})

app.listen(port,  async () => {
  try{
await mongoose.connect('mongodb://localhost:27017/PTvirtualmariana',{
  useNewUrlParser: true,
  useUnifieldTopology: true,
})
  }
  catch(e){
      console.log("crash conection BD");
  }
console.log(`Example app listening at http://localhost:${port}`)
})