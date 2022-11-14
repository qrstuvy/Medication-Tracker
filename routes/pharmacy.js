var express = require('express');
var router = express.Router();
var pharmacyCtrl = require('../controllers/pharmacy')
const isLoggedIn = require("../config/auth");

/* GET users listing. */

router.get('/profiles/:id/pharmacy/new', isLoggedIn, pharmacyCtrl.new);
router.post('/profiles/:id', isLoggedIn, pharmacyCtrl.create);
router.delete('/profiles/:profileId/pharmacy/:id', isLoggedIn, pharmacyCtrl.delete)

module.exports = router;
 