import "./style.css";
import experiences from "../data/experiences.jsx";

export const ExperiencePage = () => {
    return (
        <>
            <section className="container_experience">
                <div className="content">


                    <div className="title_experience_page">
                        <h1>Professional Experience</h1>
                    </div>

                    <div className="box_experience">



                        {experiences.map((information, index) => (

                            <div key={index} className={`experience_item experience_item_${index}`} >

                                <div className="title_experience">
                                    <h2>{information.title}</h2>
                                </div>

                                <div className="subtitle_experience">
                                    <h3>{information.where}</h3>
                                    <span> {">>"} </span>
                                    <h3>{information.period}</h3>
                                </div>

                                <div className="experience_information">
                                    <ul>
                                        {information.description.map((activity, idx) => (
                                            <li key={idx}>{activity}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <section className="education_experience">
                        <div className="education_box">
                            <div className="education_experience_title" >
                                <h2>Education</h2>
                            </div>
                            <div className="unir">
                                <div className="education_experience_subtitle" >
                                    <h3>Beloit College </h3>
                                    <spa>-</spa>
                                    <h3>Beloit, Wisconsin</h3>
                                </div>
                                <div className="education_information">
                                    <ul>
                                        <li>Majors: Creative Writing, English Literature, German Language and Literature</li>
                                        <li>Minor: History</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </section>
        </>
    );
};
