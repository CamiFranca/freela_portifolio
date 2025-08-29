import "./style.css";
import { TfiEmail } from "react-icons/tfi";
import { BiLogoLinkedin } from "react-icons/bi";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_container">
          <div className="name">
            <h1>Christian Schmidt</h1>
          </div>

          <div className="social_media">
            <span>
              <Link to="/contact">
                <TfiEmail />
              </Link>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/christian-schmidt-7a5311364/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Christian Schmidt"
              >
                <BiLogoLinkedin />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
