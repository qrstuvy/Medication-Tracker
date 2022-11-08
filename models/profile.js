const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicationSchema = new Schema ({
  medName: String,
  quantity: {
      type: Number,
      min: 0
  },
  directions: String,
  timeTaken: Date,
  startDate: Date,
  endDate: Date
})

const profileSchema = new Schema(
  {
    name: String,
    dateOfBirth: Date,
    insurance: { type: Boolean, default: false },
    insName: String,
    memberId: String,
    group: String,
    binNo: Number,
    pcn: String,
    medications: [medicationSchema]
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Profiles", profileSchema);
