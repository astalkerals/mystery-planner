import Header from "../components/Header";
import mystery from "../components/images/another-ai-murder-mystery.jpeg";
import "../css/About.css";
import Steps from "../components/Steps";
import Map from "../components/Map";
import ContactForm from "../components/ContactForm";

const About = () => {
    return(
        <main id="about" className="main-content"title="About">
            <Header title="About"/><br/>
            <div className="columns" id="basic-description">
                <section className="one">
                    <img src={mystery}/>
                </section>
                <section className="two">
                    <h2>Where Every Party Has a Killer Plot</h2>
                    <p>Planning a murder mystery party should be thrilling—not overwhelming. That’s why we built Murder Mystery Planner, a planning hub designed to help you create unforgettable murder mystery parties with confidence, creativity, and just the right amount of dramatic flair.
                        <br/><br/>Whether you’re hosting your first whodunit or you’re a seasoned sleuth looking to level up, we’re here to help you turn a fun idea into a fully playable experience.
                    </p>
                    <h2>What we do</h2>
                    <p>We give you the building blocks of a great mystery—and the tools to make it your own.</p>
                    <p><b>Example Plotlines: </b>Choose from a growing library of ready-made mystery setups, ranging from classic drawing-room murders to modern scandals, holiday disasters, and over-the-top themed events. Each plotline is designed to spark ideas, not lock you into a script.</p> 
                    <p><b>Characters with Secrets: </b>Every great mystery needs suspects. Our example characters come with personalities, motivations, relationships, and secrets, making it easy to assign roles your guests will love playing.</p>
                </section>
            </div>
            <Steps />
            <div id="reach-us" className="columns">
                <section className="one" id="map">
                    <Map />
                </section>
                <section className="one" id="contact-us">
                    <ContactForm />
                </section>
            </div>

        </main>
    );
};

export default About;
