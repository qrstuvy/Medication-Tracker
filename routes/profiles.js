var express = require('express');
var router = express.Router();
var profilesCtrl = require('../controllers/profiles')
const isLoggedIn = require("../config/auth");

/* GET users listing. */

router.get('/:id/edit', isLoggedIn, profilesCtrl.edit);
router.put('/:id', isLoggedIn, profilesCtrl.update);
router.get("/", isLoggedIn, profilesCtrl.index);
router.get('/new', isLoggedIn, profilesCtrl.new);
router.get('/:id', isLoggedIn, profilesCtrl.show)
router.post('/', isLoggedIn, profilesCtrl.create);
router.delete('/:id', isLoggedIn, profilesCtrl.delete)

module.exports = router;
