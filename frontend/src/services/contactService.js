let contactData = {
  email: "yogesh@gmail.com",
  github: "https://github.com/14Yogi",
  linkedin: "https://linkedin.com/in/yogesh",
  twitter: "",
  phone: "+91-XXXXXXXXXX",
};

export const getContact = () => contactData;

export const updateContact = (data) => {
  contactData = { ...contactData, ...data };
};
