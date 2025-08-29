import "./style.css";
import { TfiEmail } from "react-icons/tfi";
import { BiLogoLinkedin } from "react-icons/bi";
export const AboutPage = () => {
  return (
    <>
      <section className="about_container">
        <div className="image_about_box">
          <img src="/potsdam_chris.jpg" alt="building of Potsdam" />
          <div className="overlay"></div>
        </div>

        <div className="text_about_box">
          <h1>About Christian Scmidt</h1>

          <p>
            Milwaukee-born, Chicago-based writer and editor Emily Blackburn
            currently works as the Digital Content Editor for Qualified
            Remodeler Magazine, the nations largest print magazine for
            remodeling professionals. When not working, she enjoys checking out
            local events and museums with friends and ducking into nearby
            vintage and second-hand bookstores. She also loves hours of research
            at the library and working on her novel(s). Emily lives with her
            beloved and cantankerous cat Chicky.
          </p>

          <div className="social_about_box">
            <a>
              <TfiEmail />
            </a>

            <a
              href="https://www.linkedin.com/in/christian-schmidt-7a5311364/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Christian Schmidt"
            >
              <BiLogoLinkedin />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
