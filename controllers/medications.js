const Profile = require('../models/profile')

module.exports = {
    create,
    delete: deleteMedication
}

function create(req, res) {
    Profile.findById(req.params.id, function(err, profile) {
    profile.medications.push(req.body)
    console.log(req.params.id)
    console.log(profile)
    console.log(req.body)
    profile.save(function(err) {
        res.redirect(`/profiles/${profile._id}`);
      });
})
}

function deleteMedication(req, res, next) {
    Profile.findOne({'medications._id': req.params.id}).then(function(profile) {
      const medication = profile.medications.id(req.params.id);
      medication.remove();
      profile.save().then(function() {
        res.redirect(`/profiles/${profile._id}`);
      }).catch(function(err) {
        return next(err);
      });
    });
  }