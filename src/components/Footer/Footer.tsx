import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="cw-footer-minimal">
      <span>© {new Date().getFullYear()} Clothwyn</span>

      <div className="footer-links">
        <Link to="/contact">Contact Us</Link>
        <Link to="/privacy">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
