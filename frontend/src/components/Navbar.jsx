import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/projects">Projects</Link> |{" "}
      <Link to="/contact">Contact</Link> |{" "}
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;
