import express from "express";
import mongoose from "mongoose";
import router from "./Router/produkRouter.js";
import cors from "cors"; 
import bodyParser from "body-parser";
const app= express();
const port= 5000;

app.use(bodyParser.urlencoded({
    extended: true
  }));
mongoose.set('strictQuery', false);
const dbproduk = mongoose.connect ("mongodb://127.0.0.1:27017/Toko_Online",)

const db = mongoose.connection;

db.on ('error', (error)=> console.error(error));
db.once('open', () => console.log('Database Connected'));



app.get('/', router)


app.use(cors()); 
app.use(express.json());
app.use(router);



app.listen(port, () => {
    console.log(`Server running di localhost: ${port}`)
})