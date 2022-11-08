const Profile = require('../models/profile')

module.exports = {
    new: newProfile,
    create,
    index,
    show
}

function index(req, res) {
    Profile.find({}, function(err, profiles) {
    res.render("profiles/index", { title: "Profile Page", profiles });
  })
}

function newProfile(req, res) {
    Profile.find({}, function(err, profiles) {
    res.render('profiles/new', { title: 'New Profile', profiles });
    })
}

function create(req, res){
    req.body.insurance = !!req.body.insurance;
    const profile = new Profile(req.body)
    console.log(req.body)
    profile.save(function(err) {
        if (err) return res.redirect('/profiles/new');
        res.redirect('/profiles');
      });
}

function show(req, res){
    Profile.findById(req.params.id, function(err, profile) {
        res.render('profiles/show', { title: 'Profile Detail', profile });
    });
}