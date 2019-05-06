const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

const db = require("./database/dbConfig")
const Users = require("./routes/user-model")
const protected = require("./auth/protected-middleware")

const server = express()
const PORT = 5000;

 server.use(helmet())
 server.use(express.json())
 server.use(cors())

server.get("/",(req,res)=>{
    res.send("server working")
})







server.listen(PORT,()=>{
    console.log(`server listening on http://localhost:${PORT}`);
})