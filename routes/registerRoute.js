const knex = require("knex");
const router = require("express").Router();
const Users = require("./route-model")
const bcrypt = require('bcryptjs'); 


router.post('/', (req, res) => {
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

  module.exports = router;