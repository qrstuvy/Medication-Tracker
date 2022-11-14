const Profile = require('../models/profile')

module.exports = {
  create,
  delete: deleteMedication,
  edit,
  update,
  show
}

function show(req, res){
  Profile.findById(req.params.id, function(err, profile) {
      res.render('medications/index', { title: 'Medication List', profile });
  });
}


function create(req, res) {
    Profile.findById(req.params.id, function(err, profile) {
    profile.medications.push(req.body)
    profile.save(function(err) {
        res.redirect(`/profiles/${profile._id}/medications`);
      });
})
}

function deleteMedication(req, res, next) {
    Profile.findOne({'medications._id': req.params.id}).then(function(profile) {
      const medication = profile.medications.id(req.params.id);
      medication.remove();
      profile.save().then(function() {
        res.redirect(`/profiles/${profile._id}/medications`);
      }).catch(function(err) {
        return next(err);
      });
    });
  }

function edit(req, res){
  Profile.findOne({'medications._id': req.params.id}).then(function(profile) {
    const medication = profile.medications.id(req.params.id);
    res.render('medications/edit', { title: 'Medication Update', medication, profile })
  });
}

function update(req, res) {
  Profile.findOne({'medications._id': req.params.id})
  .then(function(profile) {
    const medication = profile.medications.id(req.params.id);
    medication.medName = req.body.medName
    medication.dosage = req.body.dosage
    medication.directions = req.body.directions
    medication.quantity = req.body.quantity
    medication.daySupply = req.body.daySupply
    medication.indication = req.body.indication
    profile.save(function(err) {
      if (err) return res.redirect('/profiles');
      res.redirect(`/profiles/${profile._id}/medications`);
    });
})
}

