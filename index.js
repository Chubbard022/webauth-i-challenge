const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const port = 5000;

const loginRouter = require("./routes/loginRoute")
const registerRouter = require("./routes/registerRoute")
const usersRouter = require("./routes/userRoute")



const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/users",usersRouter)
server.use("/api/register",registerRouter)
server.use("/api/login",loginRouter)

server.get('/', (req, res) => {
  res.send("Server up and Running");
});

server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));

module.exports = server;