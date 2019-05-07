const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const port = 5000;
const session = require("express-session")

const loginRouter = require("./routes/loginRoute")
const registerRouter = require("./routes/registerRoute")
const usersRouter = require("./routes/userRoute")
const logoutRouter = require("./routes/logoutRoute")
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
server.use("/api/register",registerRouter)
server.use("/api/login",loginRouter)
server.use("/api/logout", logoutRouter)

server.get('/', (req, res) => {
  res.send("Server up and Running");
});

server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));

module.exports = server;