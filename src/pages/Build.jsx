import Header from "../components/Header";
import TextFields from "../components/TextFields";
import "../css/Build.css";
import Outline from "../components/Outline";
import Theme from "../components/Theme";
import Tone from "../components/Tone";
import GalleryNav from "../components/GalleryNav";

const CustomBuild = () => {
    return (
        <main id="main-content">
            <Header title="Custom Build"/>
            <h1>Step 1: Basic Details</h1>
            <div id="two-things" className="columns">
                <section className="one">
                    <TextFields />
                </section>
                <section className="one">
                    <Outline />
                </section>
            </div>
            <h2>Theme:</h2>
            <Theme />
            <h2>Tone: </h2>
            <Tone /><br/><br/>
            <h2>What would you like to do next?</h2>
            <GalleryNav />
            
        </main>
    )
}

export default CustomBuild;