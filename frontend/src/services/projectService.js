let projects = [
  {
    id: 1,
    title: "Dynamic Portfolio",
    description: "React + Spring Boot + MongoDB",
    githubUrl: "https://github.com/yourname/portfolio",
  },
  {
    id: 2,
    title: "School Material System",
    description: "Multi-school e-commerce platform",
    githubUrl: "",
  },
];

export const getProjects = () => projects;

export const addProject = (project) => {
  projects = [...projects, { id: Date.now(), ...project }];
};

export const deleteProject = (id) => {
  projects = projects.filter((p) => p.id !== id);
};
