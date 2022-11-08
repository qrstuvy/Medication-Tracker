var express = require('express');
var router = express.Router();
var profilesCtrl = require('../controllers/profiles')
const isLoggedIn = require("../config/auth");

/* GET users listing. */
router.get("/", isLoggedIn, profilesCtrl.index);
router.get('/new', isLoggedIn, profilesCtrl.new);
router.get('/:id', isLoggedIn, profilesCtrl.show)
router.post('/', profilesCtrl.create);

module.exports = router;
