const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bcrypt = require('bcryptjs'); 
const port = 5000;

const Users = require('./routes/route-model')
const protected = require('./auth/protected-middleware')
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
//--------------------------------------------------------------------------------------------
server.get('/', (req, res) => {
  res.send("It's alive!");
});
//--------------------------------------------------------------------------------------------
server.post('/api/register', (req, res) => {
  let user = req.body;

  const hash = bcrypt.hashSync(user.password, 8); 

  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
//--------------------------------------------------------------------------------------------
server.post('/api/login', (req, res) => {
  let { username, password } = req.body;

  // we compare the password guess against the database hash
  Users.findBy({ username })
    .first()
    .then(user => {
      //
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ message: `Welcome ${user.username}!` });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
//--------------------------------------------------------------------------------------------
server.get('/api/users', protected, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});
//--------------------------------------------------------------------------------------------
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
