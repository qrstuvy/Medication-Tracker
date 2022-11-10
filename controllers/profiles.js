const Profile = require('../models/profile')

module.exports = {
    new: newProfile,
    create,
    index,
    show,
    delete: deleteProfile,
    edit,
    update
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

function deleteProfile(req, res) {
    Profile.findOne({'_id': req.params.id}).then(function(profile) {
      profile.remove();
        res.redirect(`/profiles`);
      });
    }

    function edit(req, res){
      Profile.findOne({'_id': req.params.id}).then(function(profile) {
        res.render('profiles/edit', { title: 'Profile Update', profile })
      });
    }

    function update(req, res) {
      Profile.findOne({'_id': req.params.id})
      .then(function(profile) {
        profile.name = req.body.name
        profile.dateOfBirth = req.body.dateOfBirth
        profile.insName = req.body.insName
        profile.memberId = req.body.memberId
        profile.group = req.body.group
        profile.binNo = req.body.binNo
        profile.pcn = req.body.pcn
        console.log(req.body.insurance)
        profile.save(function(err) {
          if (err) return res.redirect('/profiles');
          res.redirect('/profiles');
        });
    })
    }