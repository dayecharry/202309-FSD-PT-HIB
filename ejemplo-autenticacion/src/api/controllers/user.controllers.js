const User = require("../models/user.model");
const { validateEmail, validateEmailDB } = require("../../utils/validation")
const { generateToken } = require("../../utils/jwt")
const bcrypt = require("bcrypt");

const register = async (req, res) => {
    const userData = new User(req.body);
    const isValid = validateEmail(req.body.email)

    if (!isValid) {
        return res.status(400).json({ success: false, data: "email sin formato correcto" })
    }
    else {
        const validate = await validateEmailDB(req.body.email)
        if (!validate) {
            userData.password = bcrypt.hashSync(req.body.password, 10);
            const createdUser = await userData.save()
            return res.status(200).json({ success: true, data: createdUser })
        }
        else {
            return res.status(400).json({ success: false, data: "email ya existe" })
        }
    }
}
const login = async (req, res) => {
    const info = req.body;
    const userDB = await validateEmailDB(req.body.email)
    if (!userDB) {
        return res.status(400).json({ success: false, data: "email usuario no registrado" })
    }
    if (!bcrypt.compareSync(info.password, userDB.password)) {
        return res.status(400).json({ success: false, data: "Contraseña incorrecta" })
    }
    ///email y contraseña correcto
    const token = generateToken(userDB._id, userDB.email)
    return res.status(200).json({ success: true, data: "Se ha logueado", token: token })
}
const profile = () => {

}

module.exports = { register, login, profile }