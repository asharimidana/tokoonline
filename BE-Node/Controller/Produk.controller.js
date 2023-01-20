import Produk from "../Models/produk.model.js";

export const getProduk = async (req, res) => {
	try {
		const Respon = await Produk.find();
		res.json(Respon);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
export const getProdukById = async (req, res) => {
	try {
		const Respon = await Produk.findById(req.params.id);
		res.json(Respon);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
export const saveProduk = async (req, res) => {
	// const produkbaru = new Produk(req.body);
	const produkbaru = new Produk(req.body);
	try {
		// const Respon = new Produk.save();
		const Respon = await produkbaru.save();
		res.status(201).json(Respon);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
