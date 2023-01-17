import express from "express";
import { getProduk } from "../Controller/Produk.controller.js";

const router = express.Router();

router.get('/',(req, res) =>{
    res.send('apa')
});
router.get('/produk', getProduk)

export default router;