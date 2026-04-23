import mongoose from "mongoose";

const maintenanceSchema = new mongoose.Schema(
  {
    active: {
      type: Boolean,
      default: false,
    },
    message: String,
  },
  { timestamps: true }
);

export default mongoose.model("Maintenance", maintenanceSchema);
