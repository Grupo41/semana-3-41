const router = require('express').Router();
//se llama el manejador 
const apiRouterUser = require('./api/users.js');

router.use('/auth', apiRouterUser); //.com/api/auth

module.exports = router;