const {Router} = require('express');
const router = Router();

const {getPais, createPais, deletePais}=require('../controllers/pais.controller')



router.get('/pais', getPais);
router.post('/pais', createPais);
router.delete('/pais/:nombre', deletePais);

module.exports = router;