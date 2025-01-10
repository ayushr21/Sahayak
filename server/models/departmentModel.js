import mongoose from "mongoose";

const departmentSchema = mongoose.Schema({
  departmentName: {
    type: String,
    required: true,
  },
});

export const Department = mongoose.model("Department", departmentSchema);
