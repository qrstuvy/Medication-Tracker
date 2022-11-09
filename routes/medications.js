var express = require('express');
var router = express.Router();
var medicationsCtrl = require('../controllers/medications')
const isLoggedIn = require("../config/auth");

/* GET users listing. */

router.post('/profiles/:id/medications', isLoggedIn, medicationsCtrl.create);
router.delete('/medications/:id', medicationsCtrl.delete)

module.exports = router;
 