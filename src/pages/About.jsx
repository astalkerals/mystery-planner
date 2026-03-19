import House from "../components/House";

const About = () => {
    return(
        <main id="about" className="main-content">
            <h2>About</h2>
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
