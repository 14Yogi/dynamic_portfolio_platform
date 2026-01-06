let aboutData = {
  name: "Yogesh",
  role: "Full Stack Developer",
  bio: "I build dynamic, scalable, and animated web applications using React, Spring Boot, and MongoDB.",
};

export const getAbout = () => aboutData;

export const updateAbout = (data) => {
  aboutData = { ...aboutData, ...data };
};
