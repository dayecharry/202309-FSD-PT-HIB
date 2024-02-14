const { validateToken } = require("../utils/jwt");
const User = require("../api/models/user.model")

const authorized = async (req, res) => {
    /*
    1.- validar que  envias el token
    2.- validar que el token enviado es correcto
    3.- obtener informacion del usuario en la BD a partir de id y el email del token
    */

}
module.exports = { authorized }