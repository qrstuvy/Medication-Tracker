var express = require('express');
var router = express.Router();
var profilesCtrl = require('../controllers/profiles')

/* GET users listing. */
router.get('/new', profilesCtrl.new);

module.exports = router;
