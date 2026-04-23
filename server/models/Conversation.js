import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    members: [String], // userIds
    isGroup: {
      type: Boolean,
      default: false,
    },
    name: String,
  },
  { timestamps: true }
);

export default mongoose.model("Conversation", conversationSchema);
