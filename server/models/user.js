import mongoose from "mongoose";
// Step1. Create Mongoose Schema
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  id: {
    type: String,
  },
});

// Step2. Create Model out of schema (Singular, as mongo converts model name to plural) and export it

export default mongoose.model("User", userSchema);
