import React, { useState, useEffect } from "react";
import { fetchProjects } from "../../services/api";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };
    getProjects();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <strong>{project.title}</strong>: {project.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
