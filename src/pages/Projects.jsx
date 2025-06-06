import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProject, deleteProject } from '../redux/projectSlice';
import './Projects.css';

const companies = [
  'Cognizant',
  'TCS',
  'Infosys',
  'Info Plus Technologies'
];

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);

  const [form, setForm] = useState({
    company: '',
    from: '',
    to: '',
    title: '',
    description: '',
    responsibility: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProject(form));
    setForm({ company: '', from: '', to: '', title: '', description: '', responsibility: '' });
  };

  return (
    <section className="projects-container">
      <h1>Projects</h1>
      <form className="project-form" onSubmit={handleSubmit}>
        <select value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} required>
          <option value="">Select Company</option>
          {companies.map((c) => <option key={c}>{c}</option>)}
        </select>
        <div className="date-row">
          <input type="month" value={form.from} onChange={(e) => setForm({ ...form, from: e.target.value })} required />
          <input type="month" value={form.to} onChange={(e) => setForm({ ...form, to: e.target.value })} required />
        </div>
        <input type="text" placeholder="Project Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required></textarea>
        <textarea placeholder="Roles & Responsibilities" value={form.responsibility} onChange={(e) => setForm({ ...form, responsibility: e.target.value })} required></textarea>
        <button type="submit">Add Project</button>
      </form>

      <div className="project-list">
        {projects.map((proj, i) => (
          <div key={i} className="project-card">
            <h3>{proj.title}</h3>
            <p><strong>Company:</strong> {proj.company} ({proj.from} - {proj.to})</p>
            <p>{proj.description}</p>
            <p><em>{proj.responsibility}</em></p>
            <button onClick={() => dispatch(deleteProject(i))}>Delete</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;