const Complaint = require("../models/Complaint");

// CREATE COMPLAINT
exports.createComplaint = async (req, res) => {
  try {
    const complaint = new Complaint({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category || "General",
      priority: req.body.priority || "Normal",
      status: "Pending"
    });

    await complaint.save();

    res.status(201).json(complaint);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// GET ALL COMPLAINTS
exports.getComplaints = async (req, res) => {
  try {

    const complaints = await Complaint.find().sort({ createdAt: -1 });

    res.json(complaints);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// UPDATE COMPLAINT STATUS
exports.updateComplaint = async (req, res) => {
  try {

    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    res.json(complaint);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};