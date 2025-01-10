import mongoose from "mongoose";

const complaintSchema = mongoose.Schema(
  {
    complaintId: {
      type: String,
      required: true,
    },
    complaintDesc: {
      type: String,
      required: true,
    },
    complaintLocation: {
      type: String,
      required: true,
    },
    complaintDepartment: {
      type: String,
      required: true,
    },
    complaintPhotoURL: {
      type: String,
      required: false,
    },
    complaintFileURL: {
      type: String,
      required: false,
    },
    complaintStatus: {
      type: String,
      required: false,
      default: "active",
      validate: {
        validator: function (v) {
          return /active|in-progress|resolved/.test(v);
        },
        message: (props) => `${props.value} is not a valid status!`,
      },
    },
    meeTooCount: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Complaint = mongoose.model("Complaint", complaintSchema);
