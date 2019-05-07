const knex = require("knex");
const router = require("express").Router();
const Users = require("./route-model")
const bcrypt = require('bcryptjs'); 


router.post('/', (req, res) => {
    let { username, password } = req.body;
  
    // we compare the password guess against the database hash
    Users.findBy({ username })
      .first()
      .then(user => {
        //
        if (user && bcrypt.compareSync(password, user.password)) {
            req.session.username = user.username;
          res.status(200).json({ message: `Welcome ${user.username}!` });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

  module.exports = router;