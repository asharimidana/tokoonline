import mongoose from "mongoose";
// import dbproduk from "../Config/produkdb.js";

const Produk = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    deskripsi:{
        type: String,
        required:true
    },
    stock:{
        type: Number,
        required:true
    },
    harga:{
        type: Number,
        required:true
    }
});

export default mongoose.model('Produk', Produk)