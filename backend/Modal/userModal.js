import mongoose from "mongoose";

const userModal = mongoose.Schema({
  userName: String,
  userEmail: String,
  userPassowrd: String,
  userProfilePic: String,
});

export default mongoose.model("userModal", userModal);
