import mongoose from 'mongoose';

const freelancerSchema = new mongoose.Schema({
  name: String,
  email: String,
  skills: String,
  experience: String,
  resume: String // Path to uploaded file
});

export default mongoose.model('Freelancer', freelancerSchema);
