import House from "../components/House";
import Header from "../components/Header";

const About = () => {
    return(
        <main id="about" className="main-content"title="About">
            <Header title="About"/>
            <p>I'm about this</p>
            <h2>Listings</h2>
            <div id="houses" className="columns">
                <House 
                    title="Cabin"
                    description="Outdoor getaway" />
                <House 
                    title="Farm House"
                    description="Chickens..."/>
                <House 
                    title="Modern Home"
                    description="Lots of corners"/>
            </div>
        </main>
    );
};

export default About;
