// se trae el router de express
const router = require('express').Router();
// se trae el usuario del modelo
const models = require('../../models');
//se conecta con el controllador
const userController = require('../../controllers/MiController.js');
//Para usar bcrypt
const bcrypt = require('bcryptjs');


//api/user/
router.get('/', async (req,res)=>{
    const user = await models.user.findAll();
    res.status(200).json(user);
});

//.com/api/user/register
router.post('/register', async(req,res)=>{
    req.body.password = bcrypt.hashSync(req.body.password,10);
    const user = await models.user.create(req.body);
    res.status(200).json(user);
});

//router.get('/',userController.listar);
//router.post('/register',userController.register);
router.post('/signin',userController.signin);


module.exports = router;