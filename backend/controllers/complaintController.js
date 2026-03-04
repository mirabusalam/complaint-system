const Complaint = require("../models/Complaint");

// CREATE COMPLAINT
const createComplaint = async (req, res) => {
  try {

    const complaint = new Complaint({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category || "General",
      priority: req.body.priority || "Normal",
      status: "Pending"
    });

    const savedComplaint = await complaint.save();

    res.status(201).json(savedComplaint);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }
};


// GET COMPLAINTS
const getComplaints = async (req, res) => {

  try {

    const complaints = await Complaint.find();

    res.json(complaints);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};


// UPDATE COMPLAINT
const updateComplaint = async (req, res) => {

  try {

    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    res.json(complaint);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};


module.exports = {
  createComplaint,
  getComplaints,
  updateComplaint
};