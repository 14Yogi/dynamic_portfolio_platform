let homeData = {
  name: "Yogesh",
  title: "Full Stack Developer",
  subtitle: "Full Stack Developer",
  buttonText: "View Projects",
};

export const getHome = () => homeData;

export const updateHome = (data) => {
  homeData = { ...homeData, ...data };
};