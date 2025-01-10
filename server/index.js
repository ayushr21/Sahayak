import express from "express";
import mongoose from "mongoose";
import { Complaint } from "./models/complaintModel.js";
import { Department } from "./models/departmentModel.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.post("/complaint", async (req, res) => {
  // console.log("complaint post request received ", req.body);
  if (
    !req.body.complaintId ||
    !req.body.complaintDesc ||
    !req.body.complaintLocation ||
    !req.body.complaintDepartment
  ) {
    return res.send({ message: "one or more required fields missing" });
  }
  try {
    const newComplaint = {
      complaintId: req.body.complaintId,
      complaintDesc: req.body.complaintDesc,
      complaintDepartment: req.body.complaintDepartment,
      complaintLocation: req.body.complaintLocation,
      complaintPhotoURL: req.body.complaintPhotoURL || null,
      complaintFileURL: req.body.complaintFileURL || null,
    };
    const savedComplaint = await Complaint.create(newComplaint);
    // console.log(savedComplaint);
    return res.status(201).json({ savedComplaint });
  } catch (error) {
    // console.log(error.message);
    return res.status(500).send(error.message);
  }
});

app.get("/complaint", async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ _id: -1 });
    // console.log(complaints)
    return res.status(200).json({ complaints });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.patch("/updatecomplaintstatus", async (req, res) => {
  try {
    const { complaintId, complaintStatus } = req.body;

    if (!complaintId || !complaintStatus) {
      return res.status(400).send({ message: "Missing required fields" });
    }

    const validStatuses = ["active", "in-progress", "resolved"];
    if (!validStatuses.includes(complaintStatus)) {
      return res.status(400).send({ message: "Invalid complaint status" });
    }

    const complaint = await Complaint.findOneAndUpdate(
      { complaintId }, // Filter by complaintId
      { complaintStatus },
      { new: true } // Return the updated document
    );

    if (!complaint) {
      return res.status(404).send({ message: "Complaint not found" });
    }

    res.status(200).json({ complaint });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

app.get("/complaintcount", async (req, res) => {
  try {
    const totalComplaints = await Complaint.countDocuments();
    const activeCount = await Complaint.countDocuments({
      complaintStatus: "active",
    });
    const inProgressCount = await Complaint.countDocuments({
      complaintStatus: "in-progress",
    });
    const resolvedCount = await Complaint.countDocuments({
      complaintStatus: "resolved",
    });

    return res
      .status(200)
      .json({ totalComplaints, activeCount, inProgressCount, resolvedCount });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.get("/topcomplaints", async (req, res) => {
  try {
    const documents = await Complaint.find()
      .sort({ meeTooCount: -1 }) // Sort by like count in descending order
      .limit(5); // Limit to 10 documents
    res.json(documents);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/department", async (req, res) => {
  try {
    const { departmentName } = req.body;
    if (!departmentName) {
      return res.status(400).json({ message: "parameter missing" });
    }
    const savedDepartment = await Department.create({ departmentName });
    return res.status(201).json({ savedDepartment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/department", async (req, res) => {
  try {
    const departments = await Department.find(
      {},
      { departmentName: 1, _id: 0 }
    );
    const departmentNames = departments.map(
      (department) => department.departmentName
    );
    return res.status(200).json({ departmentNames });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.post("/increasemetoo", async (req, res) => {
  try {
    const response = await Complaint.findOneAndUpdate(
      { complaintId: req.body.complaintId },
      { $inc: { meeTooCount: 1 } },
    );
    res.status(200).json(response.meeTooCount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to db");
    app.listen(process.env.PORT, () => {
      console.log("server running on port: ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
    console.log("error connecting to db");
  });
