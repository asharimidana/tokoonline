import express from "express";
import { 
    getProduk,
    getProdukById, 
    saveProduk, 
    updateProduk,
    deleteProduk} from "../Controller/Produk.controller.js";

import {PostUser} from "../Controller/authUser.contoller.js";

const router = express.Router();

router.get('/',(req, res) =>{
    res.send('apa')
});
router.get('/produk', getProduk);
router.get('/produk/:id', getProdukById);
router.post ('/produk', saveProduk);
router.post ('/register', PostUser);
router.patch('/produk/:id', updateProduk);
router.delete('/produk/:id', deleteProduk);




export default router;