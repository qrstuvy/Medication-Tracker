const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicationSchema = new Schema ({
  medName: String,
  dosage: String,
  quantity: {
      type: Number,
      min: 1
  },
  directions: String,
  daySupply: String
})

const profileSchema = new Schema(
  {
    name: String,
    dateOfBirth: Date,
    insurance: { type: Boolean, default: false },
    insName: String,
    memberId: String,
    group: String,
    binNo: String,
    pcn: String,
    medications: [medicationSchema]
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Profiles", profileSchema);
