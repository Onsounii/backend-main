// njibou express bch naamlou création router
const express = require('express');
 const router = express.Router();

 // njibou controller mta3 auth li fih logic mta3 login
 const authController = require('../controllers/authController');
 // route bach user ya3ml login 
 router.post('/login', authController.login);
 //export router bach nest3mlouh fi app.js w routes okhrin 
  module.exports = router; 