import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    room: String,
    senderId: String,
    senderName: String,
    text: String,
    media: String,

    reactions: [
      {
        userId: String,
        emoji: String,
      },
    ],

    deletedForEveryone: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Message", messageSchema);
