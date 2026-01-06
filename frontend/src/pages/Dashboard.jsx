import { useState } from "react";
import {
  getProjects,
  addProject,
  deleteProject,
} from "../services/projectService";

import { getAbout, updateAbout } from "../services/aboutService";
import * as contactService from "../services/contactService";
import * as homeService from "../services/homeService";


const Dashboard = () => {
  const [projects, setProjects] = useState(getProjects());

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [github, setGithub] = useState("");
  const [about, setAbout] = useState(getAbout());
  const [contact, setContact] = useState(contactService.getContact() || {});
  const [home, setHome] = useState(() => {
    try { return homeService.getHome() || {}; } catch (e) { console.error(e); return {}; }
  });


  const handleAdd = () => {
    if (!title || !description) return;

    addProject({
      title,
      description,
      githubUrl: github || "",
    });

    setProjects(getProjects());

    setTitle("");
    setDescription("");
    setGithub("");
  };

  const handleDelete = (id) => {
    deleteProject(id);
    setProjects(getProjects());
  };

  const handleAboutSave = () => {
    updateAbout(about);
    alert("About section updated");
  };

  const handleContactSave = () => {
    contactService.updateContact(contact);
    alert("Contact details updated");
  };

  const handleHomeSave = () => {
    homeService.updateHome(home);
    alert("Home section updated");
  };

  return (
    <div className="page">
      <h2>Admin Dashboard</h2>

      {/* ADD PROJECT FORM */}
      <input
        placeholder="Project title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Project description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        placeholder="GitHub link (optional)"
        value={github}
        onChange={(e) => setGithub(e.target.value)}
      />

      <button onClick={handleAdd}>Add Project</button>

      {/* PROJECT LIST */}
      <h3>Projects List</h3>

      {projects.map((p) => (
        <div key={p.id} className="project-card">
          <h4>{p.title}</h4>
          <p>{p.description}</p>

          {(p.githubUrl || p.github) && (
            <a href={p.githubUrl || p.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}

          <br />
          <button onClick={() => handleDelete(p.id)}>Delete</button>
        </div>
      ))}

      <hr />
      <h3>Edit Home Section</h3>

      <input
        placeholder="Name"
        value={home.name}
        onChange={(e) => setHome({ ...home, name: e.target.value })}
      />

      <input
        placeholder="Title (subtitle)"
        value={home.title}
        onChange={(e) => setHome({ ...home, title: e.target.value })}
      />

      <input
        placeholder="Button Text"
        value={home.buttonText}
        onChange={(e) => setHome({ ...home, buttonText: e.target.value })}
      />

      <button onClick={handleHomeSave}>Save Home</button>

      <hr />
      <h3>Edit Contact Details</h3>

      <input
        placeholder="Email"
        value={contact.email}
        onChange={(e) => setContact({ ...contact, email: e.target.value })}
      />

      <input
        placeholder="Phone"
        value={contact.phone}
        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
      />

      <input
        placeholder="GitHub URL"
        value={contact.github}
        onChange={(e) => setContact({ ...contact, github: e.target.value })}
      />

      <input
        placeholder="LinkedIn URL"
        value={contact.linkedin}
        onChange={(e) => setContact({ ...contact, linkedin: e.target.value })}
      />

      <input
        placeholder="Twitter URL"
        value={contact.twitter}
        onChange={(e) => setContact({ ...contact, twitter: e.target.value })}
      />

      <button onClick={handleContactSave}>Save Contact</button>

      <hr />
      <h3>Edit About Section</h3>

      <input
        placeholder="Name"
        value={about.name}
        onChange={(e) => setAbout({ ...about, name: e.target.value })}
      />

      <input
        placeholder="Role"
        value={about.role}
        onChange={(e) => setAbout({ ...about, role: e.target.value })}
      />

      <textarea
        placeholder="Bio"
        value={about.bio}
        onChange={(e) => setAbout({ ...about, bio: e.target.value })}
      />

      <button onClick={handleAboutSave}>Save About</button>
    </div>
  );
};

export default Dashboard;
