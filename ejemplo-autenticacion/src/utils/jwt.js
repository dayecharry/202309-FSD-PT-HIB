const jwt = require("jsonwebtoken");

const generateToken = (id, email) => {
    return jwt.sign({ id, email }, process.env.SECRETE_JWT, { expiresIn: '1h' })
}
const validateToken = (token) => {
    return jwt.verify(token, process.env.SECRETE_JWT)
}

module.exports = { generateToken, validateToken }