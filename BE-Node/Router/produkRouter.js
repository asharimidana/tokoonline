import express from "express";
import { 
    getProduk,
    getProdukById, 
    saveProduk} from "../Controller/Produk.controller.js";

const router = express.Router();

router.get('/',(req, res) =>{
    res.send('apa')
});
router.get('/produk', getProduk);
router.get('/produk/:id', getProdukById);
router.post ('/produk', saveProduk);




export default router;