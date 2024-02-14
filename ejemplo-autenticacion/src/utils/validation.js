const User = require("../api/models/user.model")

const validateEmail = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email)
}
const validateEmailDB = async (email) => {
    const validate = await User.findOne({ email: email })
    return validate;
}

module.exports = { validateEmail, validateEmailDB }