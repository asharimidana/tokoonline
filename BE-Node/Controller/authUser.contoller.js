// import authUSer from "../Models/authUSer.model.js";
import authUser from "../Models/authUser.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { registvalid, loginvalid } from "../Config/validation.js";

export const getuser = async (req, res) => {
	try {
		const Respon = await authUser.find();
		res.json(Respon);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

//postUser
export const signup = async (req, res) => {
	//validation
	const { error } = registvalid(req.body);
	if (error) return res.status(400).json({ message: error.details[0].message });

	// if email exist
	const emailExist = await authUser.findOne({ email: req.body.email });
	if (emailExist) return res.status(400).json("email sudah digunakan");

	//if username exist
	const usernameExist = await authUser.findOne({ username: req.body.username });
	if (usernameExist) return res.status(400).json("username sudah digunakan");

	//has password
	const salt = await bcrypt.genSalt(10);
	const hasPassword = await bcrypt.hash(req.body.password, salt);

	const user = new authUser({
		username: req.body.username,
		email: req.body.email,
		password: hasPassword,
	});
	try {
		const SaveUser = await user.save();
		res.json(SaveUser);
	} catch (error) {
		res.status(500).json({
			message: "Gagal membuat User Baru",
		});
	}
};

//login

export const login = async (req, res) => {
	const { error } = loginvalid(req.body);
	if (error) return res.status(400).json({ message: error.details[0].message });

	// if email exist
const user = await authUser.findOne({email:req.body.email})
if (!user) return res.status(400).json("email anda salah");

//chek password
const validPwd = await bcrypt.compare(req.body.password, user.password);
    if(!validPwd) return res.status(400).json({
        message: 'Password Anda Salah!'
});

// membuat token menggunkan JWT
const token = jwt.sign({ _id: authUser._id }, process.env.SECRET_KEY)
res.header('auth-token', token).json({
	token: token
})


}
