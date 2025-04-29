const express = require('express');
const multer = require('multer');
const path = require('path');
const Freelancer = require('../models/Freelancer');

const router = express.Router();

// Multer setup to store uploads in the 'uploads' folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique name with original extension
  }
});

const upload = multer({ storage });

// POST endpoint to handle freelancer form with resume
router.post('/', upload.single('resume'), async (req, res) => {
  try {
    const { name, email, skills, experience } = req.body;
    const resumePath = req.file ? req.file.path : null;

    const freelancer = new Freelancer({
      name,
      email,
      skills,
      experience,
      resume: resumePath,
    });

    await freelancer.save();

    res.status(201).json({
      message: 'Freelancer data saved successfully',
      data: freelancer,
    });
  } catch (error) {
    console.error('❌ Error saving freelancer:', error);
    res.status(500).json({ message: 'Upload failed', error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const freelancers = await Freelancer.find();
    res.json(freelancers);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch freelancers' });
  }
});
module.exports = router;

