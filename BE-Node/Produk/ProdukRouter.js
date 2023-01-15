import express  from "express";
import { getdata } from "./ProdukController.js";

const router = express.Router();


router.get('/produk', getdata);

export default router;