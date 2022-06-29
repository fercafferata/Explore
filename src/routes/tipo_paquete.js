const {Router} = require('express');
const router = Router();

const {getTipo_paq, getTipo_paqById}=require('../controllers/tipo_paq.controller')



router.get('/tipo', getTipo_paq);
router.get('/tipo:id', getTipo_paqById);

module.exports = router;