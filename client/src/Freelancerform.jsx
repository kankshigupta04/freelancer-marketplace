import React, { useState } from 'react';
import axios from 'axios';

const FreelancerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skills: '',
    experience: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();

    payload.append('name', formData.name);
    payload.append('email', formData.email);
    payload.append('skills', formData.skills);
    payload.append('experience', formData.experience);
    payload.append('resume', formData.resume);

    try {
      const response = await axios.post('http://localhost:5000/api/freelancers', payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('✅ Resume uploaded successfully!');
      console.log(response.data);
    } catch (error) {
      alert('❌ Upload failed!');
      console.error(error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Freelancer Resume Form</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required /><br />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br />
        <textarea name="skills" placeholder="Skills" onChange={handleChange} required /><br />
        <textarea name="experience" placeholder="Experience" onChange={handleChange} required /><br />
        <input type="file" name="resume" accept=".pdf" onChange={handleChange} required /><br />
        <button type="submit">Upload Resume</button>
      </form>
    </div>
  );
};

export default FreelancerForm;
