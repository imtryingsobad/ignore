const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 4,
    maxlength: 30,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: true,
  },
});

//creating collection

const ContactMessage = new mongoose.model("ContactMessage", contactSchema);
module.exports = ContactMessage;
