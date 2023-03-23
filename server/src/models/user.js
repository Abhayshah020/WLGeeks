const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    name: { type: String },
    phone: { type: Number },
    email: { type: String },
    password: { type: String },
    selection: { type: String },
    countryName:{type: String },
    registerCode:{type: String },
    verified:{type: String, default:"NotVerified" },
    message:{type:String}
  },
  { collection: "Users" }
);
module.exports = mongoose.model("Users", usersSchema);