import mongoose from "mongoose";

// Step1. Create Mongoose Schema

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  name: String,
  tags: [String],
  selectedFile: String,
  likes: { type: [String], default: [] },
  createdAt: { type: Date, default: new Date() },
});

// Step2. Create Model out of schema (Keep it Singular, as mongo converts model name to plural)

const PostMessage = mongoose.model("PostMessage", postSchema);

// Step3. Export Model to run CRUD ops on it

export default PostMessage;
