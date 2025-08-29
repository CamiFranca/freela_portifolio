import "./style.css";
import cards from "../data/card.json";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <main className="home">
        <section className="container_profile">
          <div className="organize_box">
            <figure className="image_box">
              <img src="/copia2.jpg"></img>
            </figure>

            <div className="text_box">
              <h3>Writer, Editor, and Oxford Comma Enthusiast</h3>
              <p>
                Experienced Chicago-based writer and editor Emily Blackburn is
                the Digital Content Editor for Qualified Remodeler Magazine, the
                nation´s largest print remodeling and home improvement magazine.
              </p>
            </div>
          </div>
        </section>

        <nav className="container_navigation">
          <div className="nav_container_organizer">
            <div className="nav_title">
              <h1>Navegation</h1>
            </div>
            <div className="nav_image_container">
              <div className="nav_item">
                <p className="nav_text">About me</p>
                <Link to="/about">
                  <img src={"/aboutMe.jpeg"} alt="about me" />
                </Link>
              </div>
              <div className="nav_item">
                <p className="nav_text">Publication</p>
                <Link to="/publications">
                  <img src={"/publication.jpeg"} alt="publications" />
                </Link>
              </div>
              <div className="nav_item">
                <p className="nav_text">Experience</p>
                <Link to="/experience">
                  <img src={"/experiense.jpeg"} alt="experiece" />
                </Link>
              </div>
              <div className="nav_item">
                <p className="nav_text">Contact</p>
                <Link to="/contact">
                  <img src={"/contact.jpg"} alt="contact" />
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <section className="articles_container">
          <div className="article_box">
            <div className="article_title">
              <h1>Latest Publications</h1>
            </div>

            <div className="card_article_container">
              {cards.slice(0, 3).map((item, index) => (
                <div key={index} className="card_article">
                  <a className="link_article">
                    <div className="box_image_article">
                      <img src={item.image} alt={item.image} />
                    </div>

                    <div className="article_container_information">
                      <div className="article_thema">
                        <span>{item.about}</span>
                        <p>.</p>
                        <span>{item.date}</span>
                      </div>

                      <div className="text_article_container">
                        <h2>{item.title}</h2>
                        <article>{item.text}</article>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="recents_area">
          <div className="recents_container">
            <section className="recents_title">
              <h1>Recent Articles</h1>
            </section>

            <section className="recents_card_container">
              {cards.map((item, index) => (
                <section key={index} className="card">
                  <div className="image_card">
                    <img src={item.image} alt={item.image}></img>
                  </div>

                  <div className="card_information">
                    <section className="thema_card">
                      <p>{item.about}</p>
                      <span>.</span>
                      <p>{item.date}</p>
                    </section>

                    <section className="text_container">
                      <h1>{item.title}</h1>
                      <article>{item.text}</article>
                    </section>
                  </div>
                </section>
              ))}
            </section>
          </div>
        </section>
      </main>
    </>
  );
};
