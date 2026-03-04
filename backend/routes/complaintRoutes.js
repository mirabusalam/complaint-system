const express = require("express");
const router = express.Router();

const {
  createComplaint,
  getComplaints,
  updateComplaint
} = require("../controllers/complaintController");

// Create complaint
router.post("/", createComplaint);

// Get all complaints
router.get("/", getComplaints);

// Update complaint status
router.put("/:id", updateComplaint);

module.exports = router;