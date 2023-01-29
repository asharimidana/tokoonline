import express from "express";
//import produk
import { 
    getProduk,
    getProdukById, 
    saveProduk, 
    updateProduk,
    deleteProduk} from "../Controller/Produk.controller.js";

//import users 
import {signup,
getuser, login} from "../Controller/authUser.contoller.js";

const router = express.Router();

router.get('/',(req, res) =>{
    res.send('apa')
});
//produk
router.get('/produk', getProduk);
router.get('/produk/:id', getProdukById);
router.post ('/produk', saveProduk);
router.patch('/produk/:id', updateProduk);
router.delete('/produk/:id', deleteProduk);
//register
router.get ('/register', getuser);
router.post ('/register', signup);

//login
router.post ('/login', login);



export default router;