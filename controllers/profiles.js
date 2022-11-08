const Profile = require('../models/profile')

module.exports = {
    new: newProfile,
    create
}

function newProfile(req, res) {
    Profile.find({}, function(err, profiles) {
    res.render('profiles/new', { title: 'New Profile', profiles });
    })
}

function create(req, res){
    const profile = new Profile(req.body)
    console.log(req.body)
    profile.save(function(err) {
        if (err) return res.redirect('/profiles/new');
        res.redirect('/profiles');
      });
}


// function show(req, res) {
//     Profile.find({}, function(err, profiles) {
//         res.render('profiles/show', { profiles });
//     });
// }
  