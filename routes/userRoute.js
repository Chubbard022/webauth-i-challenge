const knex = require("knex");
const router = require("express").Router();
const Users = require("./route-model")
const protected = require('../auth/protected-middleware')
const bcrypt = require('bcryptjs'); 

router.get('/', protected, (req, res) => {
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
  });

  module.exports = router;