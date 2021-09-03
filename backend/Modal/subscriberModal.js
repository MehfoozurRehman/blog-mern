import mongoose from "mongoose";

const subscriberModal = mongoose.Schema({
  subscriberEmail: String,
  subscriberLocation: String,
});

export default mongoose.model("subscriberModal", subscriberModal);
