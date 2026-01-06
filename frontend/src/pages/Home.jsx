import * as homeService from "../services/homeService";

function Home() {
  const home = homeService.getHome() || {};

  return (
    <section style={{ padding: "60px 40px", minHeight: "100vh", textAlign: "left", color: "#333" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>Hi, I'm {home.name || "Yogesh"}</h1>
      <p style={{ fontSize: "24px", marginBottom: "30px", color: "#007bff" }}>{home.title || "Full Stack Developer"}</p>
      <button style={{ padding: "12px 24px", fontSize: "16px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}>
        {home.buttonText || "View Projects"}
      </button>
    </section>
  );
}

export default Home;
