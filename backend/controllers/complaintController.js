const Complaint = require("../models/Complaint");

// CREATE COMPLAINT
exports.createComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.create({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category || "general",
      priority: req.body.priority || "Normal",
      status: "Pending"
    });

    res.json(complaint);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// GET ALL COMPLAINTS
exports.getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// UPDATE COMPLAINT
exports.updateComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    res.json(complaint);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};