const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./db');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const Calculation = require('./models/Calculation');
const Project = require('./models/Project');
const freelancerRoutes = require('./routes/freelancerRoute');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/freelancers', freelancerRoutes);
app.use('/uploads', express.static('uploads')); // Serve uploaded files


app.get("/", (req, res) => {
  res.send("API is running...");
});

 app.post('/api/calculate', async (req, res) => {
   const { num1, num2 } = req.body;
   const result = parseFloat(num1) + parseFloat(num2);

   console.log(`Saving to DB: ${num1} + ${num2} = ${result}`);

   const newCalculation = new Calculation({ num1, num2, result });
   await newCalculation.save();

   res.json({ result: result });
 });

 app.get('/api/history', async (req, res) => {
   const history = await Calculation.find().sort({ createdAt: -1 }).limit(10);
   res.json(history);
 });

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});

app.post('/api/projects', async (req, res) => {
  try {
    console.log("📦 Received body:", req.body);  // Log body
    const { title, description, field, budget, deadline } = req.body;
    const newProject = new Project({
      title,
      description,
      field,
      budget: Number(budget),  // ensure it's a number
      deadline: new Date(deadline)  // ensure it's a Date
    });
    await newProject.save();
    res.status(201).json({ message: 'Project posted successfully', project: newProject });
  } catch (err) {
    console.error("❌ Error saving project:", err);  // More complete log
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

