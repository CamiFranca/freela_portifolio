import "./style.css";
import { TfiEmail } from "react-icons/tfi";
import { BiLogoLinkedin } from "react-icons/bi";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <>
      <header>
        <nav>
          <Link to="/home" className="nav_name">
            Christian Schmidt{" "}
          </Link>
          <ul className="nav_list">
            <li>
              <Link to="home">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="publications">Publications</Link>
            </li>
            <li>
              <Link to="experience">Experience</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
          <div className="nav_items">
            <Link to="/contact" aria-label="Send an email">
              <TfiEmail />
            </Link>
            <a
              href="https://www.linkedin.com/in/christian-schmidt-7a5311364/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <BiLogoLinkedin />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
