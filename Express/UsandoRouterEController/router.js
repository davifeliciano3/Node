const express = require('express');
const router = express.Router();
const controleHome = require('./controler/controlerHome')

router.get('/',controleHome.Primeiro);
router.post('/',controleHome.Segundo);

module.exports = router;