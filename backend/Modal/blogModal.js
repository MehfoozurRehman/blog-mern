import mongoose from "mongoose";

const blogModal = mongoose.Schema({
  blogTitle: String,
  blogCatagory: String,
  blogAuthor: String,
  blogPublishDate: String,
  blogLink: String,
  blogMainImage: String,
  blogImage: String,
});

export default mongoose.model("blogModal", blogModal);
