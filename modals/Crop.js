const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  benefits: [String],
  diseases: [String],
  source: String,
  environments: [String],
  human: {
    diseases: [String],
    effects: [String],
    benefits: [String],
  },
  animal: {
    diseases: [String],
    effects: [String],
    benefits: [String],
  },
});


module.exports = mongoose.model("crop",cropSchema);
