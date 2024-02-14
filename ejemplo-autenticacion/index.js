const express = require("express");
const env = require("dotenv").config();
//env.config();
const { connectDb } = require("./src/utils/database")
const router = require("./src/api/routes/user.routes")


const server = express();
server.use(express.json())
connectDb();

server.use("/user", router)

const PORT = process.env.PORT || 5050
server.listen(PORT, () => {
  console.log("se ha conectado " + PORT)
})