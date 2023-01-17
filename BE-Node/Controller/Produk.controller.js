import Produk from "../Models/produk.model.js";

export const getProduk = async (req, res) => {
    try {
        const Respon = await Produk.find();
            res.status (200).json(Respon);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}