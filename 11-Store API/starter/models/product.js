const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Proudct name must be provided."],
    trim: true,
  },
  price: { type: Number, require: [true, "Price must be provided."], min: 0 },
  featured: { type: Boolean, default: false },
  rating: { type: Number, min: 0, max: 5, default: 0 },
  createdAt: { type: Date, default: Date.now() },
  company: {
    type: String,
    required: [true, "Company name must be provided."],
    enum:{
        values:["ikea", "liddy", "caressa", "marcos"],
        message:'{VALUE} is not supported'
    }
    // enum: ["ikea", "liddy", "caressa", "marcos"],
  },
});

module.exports = mongoose.model("Product",productSchema);
