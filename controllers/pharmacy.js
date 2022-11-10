const Pharmacy = require('../models/pharmacy')
const Profile = require('../models/profile')

module.exports = {
  new: newPharmacy,
  create
}

function newPharmacy(req, res){
    Profile.findById(req.params.id, function(err, profile) {
    res.render('pharmacy/new', { title: 'Add Pharmacy', profile })
  })
  }

  function create(req, res){
    Profile.findById(req.params.id, function(err, profile) {
    const pharmacy = new Pharmacy(req.body)
    console.log(req.body)
    pharmacy.save(function(err) {
        if (err) return res.redirect(`/profiles/${profile._id}/pharmacy/new`);
        res.redirect(`/profiles/${profile._id}`);
      });
})
}
