const router = require("express").Router();
const Users = require("./route-model")
const protected = require('../auth/protected-middleware')

router.get('/', (req, res) => {
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
  });

  module.exports = router;