const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const port = 5000;
const session = require("express-session")

const authRouter = require("./routes/authRoute")
const usersRouter = require("./routes/userRoute")
const server = express();

const sessionConfig = {
    name: "cookies",
    secret: "keep this a secret",
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60,
        secure: false
    },
    resave: true,
    saveUninitialized: true
}

server.use(session(sessionConfig))
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/users",usersRouter)
server.use("/api/auth",authRouter)

server.get('/', (req, res) => {
  res.send("Server up and Running");
});

server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));

module.exports = server;