const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted (frontend only)");
  };

  return (
    <div className="page">
      <h2>Contact Me</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
