
const {Router}= require('express');
const router = Router();
const {getUsuarios}= require('../controllers/getUsuarios')



router.get('/list',getUsuarios)


module.exports= router
