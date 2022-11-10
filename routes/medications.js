var express = require('express');
var router = express.Router();
var medicationsCtrl = require('../controllers/medications')
const isLoggedIn = require("../config/auth");

/* GET users listing. */

router.get('/profiles/:id/medications/new', isLoggedIn, medicationsCtrl.new);
router.post('/profiles/:id/medications', isLoggedIn, medicationsCtrl.create);
router.delete('/medications/:id', isLoggedIn, medicationsCtrl.delete)
router.get('/profiles/:id/medications/:id/edit', isLoggedIn, medicationsCtrl.edit);
router.put('/profiles/:id/medications/:id', isLoggedIn, medicationsCtrl.update);

module.exports = router;
 