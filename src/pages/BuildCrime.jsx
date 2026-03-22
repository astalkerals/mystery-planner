import TextFields2 from "../components/TextFields2";
import Header from "../components/Header";
import GalleryNav from "../components/GalleryNav";
import Outline from "../components/Outline";
import "../css/BuildCrime.css";

const BuildCrime = () => {
    return(
        <main id="main-content">
            <Header title="Custom Build"/>
            <h1>Step 2: The Crime</h1>
            <TextFields2 />
            <div id="two-things" className="columns">
                <section className="one">
                    <h3>When does the crime appear?</h3><br/>
                    <ul>
                        <li>Before the party begins</li>
                        <li>During the party</li>
                        <li>Revealed gradually through clues</li>
                    </ul>
                </section>
                <section className="one">
                    <Outline />
                </section>
                
            </div>
            <GalleryNav />
        </main>
    )
};

export default BuildCrime;