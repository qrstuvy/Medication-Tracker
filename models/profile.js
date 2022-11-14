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
  daySupply: String,
  indication: String
})

const profileSchema = new Schema(
  {
    image: {
      type: String,
      default: "/images/default.png",
    },
    name: String,
    dateOfBirth: Date,
    relationship: String,
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
