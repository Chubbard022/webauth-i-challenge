const bcrypt = require('bcryptjs');

const Users = require('../routes/route-model');

module.exports = (req, res, next) => {
  if(req.session && req.session.username) {
    next();
  }else{
    res.status(401).json({ message: 'Please log in to access this resource' });
  }
}