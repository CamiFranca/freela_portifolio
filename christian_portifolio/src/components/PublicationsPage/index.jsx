import "./style.css"
import cards from "../data/card.json"
// import {cards} from "../data/card.json"


export const PublicationsPage = () => {

    return (

        <>


            <div className="publications_container">
                <section className="card_title">
                    <h1>Latest Publications</h1>
                </section>

                <div className="card_container">
                    {console.log(cards)}
                    {cards.map((item, index) => (
                        <section key={index} className="card">
                            <div className="image_card">
                                <img src={item.image} alt={item.image}></img>

                            </div>


                            <div className="card_information" >

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
                </div>
            </div>
        </>
    )
}