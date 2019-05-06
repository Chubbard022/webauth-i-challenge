const express = require("express")
const helmet = require("helmet")

const registerRouter = require("../routes/registerRoute")
const loginRouter = require("../routes/loginRouter")
const userRouter = require("../routes/userRouter")

const server = express()
server.use(helmet())
server.use(express.json())


server.get("/",(req,res)=>{
    res.send(`
        <h2>SERVER WORKING</h2>
    `)
})

server.use("/api/register",registerRouter)
server.use("/api/login",loginRouter)
server.use("/api/users",userRouter)

module.exports = server;