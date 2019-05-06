const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const bcrypt = require("bcryptjs")

const db = require("./database/dbConfig")
const Users = require("./routes/route-model")
const protected = require("./auth/protected-middleware")

const server = express()
const PORT = 5000;

 server.use(helmet())
 server.use(express.json())
 server.use(cors())

server.get("/",(req,res)=>{
    res.send("server working")
})

server.post("/api/register",(req,res)=>{
    const user = req.body;
    const hash = bcrypt.hashSync(user.password,8)

    user.password = hash;

    Users.add(user)
    .then(response =>{
        res.status(201).json(response)
    })
    .catch(err =>{
        res.status(500).json(err)
    })
})









server.listen(PORT,()=>{
    console.log(`server listening on http://localhost:${PORT}`);
})