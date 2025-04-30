import React, { useState } from 'react';
import './Projectform.css';

function ProjectForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [field, setField] = useState('');
    const [budget, setBudget] = useState('');
    const [deadline, setDeadline] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:5000/api/projects', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, description, field, budget, deadline }),
        });
        const data = await response.json();
        alert(data.message);
      } catch (error) {
        console.error('Error posting project:', error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Project Title" required />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <input value={field} onChange={(e) => setField(e.target.value)} placeholder="Project Field" required />
        <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="Budget" />
        <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} placeholder="Deadline" />
        <button type="submit">Post Project</button>
      </form>
    );
  }
  
  export default ProjectForm;