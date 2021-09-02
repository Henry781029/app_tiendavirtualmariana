import express from 'express';
import mongoose from 'mongoose';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})