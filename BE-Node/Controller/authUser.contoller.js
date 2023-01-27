import authUSer from "../Models/authUSer.model.js";
import bcrypt from "bcryptjs";

//Register

export const PostUser = async (req, res) => {
//has password
const salt= await bcrypt.genSalt(10);
const hasPassword= await bcrypt.hash(req.body.password, salt);

const user= new authUSer({
    nama:req.body.nama,
    email:req.body.email,
    password:hasPassword
})
	try {
		const SaveUser = await user.save();
		res.json(SaveUser);
	} catch (error) {
		res.status(500).json({
            message:"Gagal membuat User Baru" });
	}
};