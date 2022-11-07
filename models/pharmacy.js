const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const pharmacySchema = new Schema ({
    name: String,
    address: String,
    phoneNo: Number,
    profile: [{type: Schema.Types.ObjectId, ref: 'Profile'}]
  })

module.exports = mongoose.model('Pharmacy', pharmacySchema)