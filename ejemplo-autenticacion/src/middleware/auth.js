const { validateToken } = require("../utils/jwt");
const User = require("../api/models/user.model");

const authorized = async (req, res, next) => {
    //1.- validar que  envias el token
    const authoToken = req.headers.authorization;

    if (!authoToken) {
        return res.status(401).json({ message: "no está autorizado" })
    }
    //  validar que el token enviado es correcto
    const token = authoToken.split(" ")[1];
    const tokenVerify = validateToken(token);
    if (!tokenVerify.id) {
        return res.status(401).json({ message: "no  es un token" })
    }
    const logged = await User.findById(tokenVerify.id);
    req.user = logged;
    /*2.- validar que el token enviado es correcto
    3.- obtener informacion del usuario en la BD a partir de id y el email del token
    */
    next();
}
const isAdmin = async (req, res, next) => {
    //1.- validar que  envias el token
    try {


        const authoToken = req.headers.authorization;

        if (!authoToken) {
            return res.status(401).json({ message: "no está autorizado" })
        }
        //  validar que el token enviado es correcto
        const token = authoToken.split(" ")[1];
        const tokenVerify = validateToken(token);
        if (!tokenVerify.id) {
            return res.status(401).json({ message: "no  es un token" })
        }
        const logged = await User.findById(tokenVerify.id);

        if (logged.role !== "admin") {
            return res.status(401).json({ message: "no  es un administrador" })
        }
        req.user = logged;
        next();
    }
    catch (error) {
        return res.status(500).json(error)
    }
}
module.exports = { authorized, isAdmin }