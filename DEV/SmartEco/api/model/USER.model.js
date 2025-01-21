var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var USER = new Schema({
  username: { type: String, required: true },
  fisrst_name: { type: String, required: true },
  birth_date: {
    day: { type: Number },
    month: { type: Number },
    year: { type: Number },
  },
  password: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  last_name: { type: String, required: true },
  active: { type: Boolean, required: true },
  role: {
    id: { type: Schema.Types.ObjectId },
    label: { type: String },
  },
});

const model = new mongoose.model("User", USER);
module.exports = model;
