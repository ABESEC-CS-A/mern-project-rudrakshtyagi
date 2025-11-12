import { Link } from "react-router-dom";

function Header() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyWebsite</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/aboutus" style={styles.link}>About Us</Link>
        <Link to="/help" style={styles.link}>Help</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/signup" style={styles.link}>Signup</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#222",
    color: "white",
  },
  logo: {
    fontSize: "1.5rem",
  },
  links: {
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Header;
