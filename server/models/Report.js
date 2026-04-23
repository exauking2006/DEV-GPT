import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    userId: String,
    message: String,
    status: {
      type: String,
      default: "pending", // pending / solved
    },
  },
  { timestamps: true }
);

export default mongoose.model("Report", reportSchema);
