import Header from "../components/Header";
import TextFields from "../components/TextFields";
import "../css/Build.css";
import {useState} from "react";
import Outline from "../components/Outline";
import Theme from "../components/Theme";
import Tone from "../components/Tone";
import GalleryNav from "../components/GalleryNav";
import dinnerParty from "../components/images/ai-dinner-party.jpg";
import holiday from "../components/images/ai-holiday-party.jpg";
import speakeasy from "../components/images/ai-speakeasy.jpg";
import victorian from "../components/images/ai-victorian.avif";
import brony from "../components/images/ai-brony.png";
import carlise from "../components/images/aicarlise.avif";
import elaine from "../components/images/aielaine.jpg";

/*    return(
        <div id="gallery2-tone" className="columns">
            <section className="one" id="different">
                <img src={brony} alt="brony"/>
                <div className="label">Entirely Silly</div>
            </section>
            <section className="one" id="bigger2">
                <img src={carlise} alt="carlise"/>
                <div className="label">Mixed</div>
            </section>
            <section className="one">
                <img src={elaine} alt="elaine"/>
                <div className="label">Serious</div>
            </section>
        </div>*/

const CustomBuild = () => {
    const [titleValue, setTitleValue] = useState("");
    const [themeSelection, setThemeSelection] = useState("");
    const [toneSelection, setToneSelection] = useState("");
    return (
        <main id="main-content">
            <Header title="Custom Build"/>
            <h1>Step 1: Basic Details</h1>
            <div id="two-things" className="columns">
                <section className="one">
                    <TextFields setTitleValue={setTitleValue}/>
                </section>
                <section className="one">
                    <Outline titleValue={titleValue} themeSelection={themeSelection} toneSelection={toneSelection}/>
                </section>
            </div>
            <h2>Theme:</h2>
            <div id="gallery1" class="columns">
                <Theme setThemeSelection={setThemeSelection} imgSrc={speakeasy} label="1920s Speakeasy"/>
                <Theme setThemeSelection={setThemeSelection} imgSrc={holiday} label="Holiday Party"/>
                <Theme setThemeSelection={setThemeSelection} imgSrc={dinnerParty} label="Dinner Party"/>
                <Theme setThemeSelection={setThemeSelection} imgSrc={victorian} label="Classic Victorian"/>
            </div>
            
            <h2>Tone: </h2>
            <div id="gallery2-tone" class="columns">
                <Tone setToneSelection={setToneSelection} imgSrc={brony} label="Entirely Silly"/>
                <Tone setToneSelection={setToneSelection} imgSrc={carlise} label="Mixed"/>
                <Tone setToneSelection={setToneSelection} imgSrc={elaine} label="Serious"/>
            </div>
            
            <br/><br/>
            <h2>What would you like to do next?</h2>
            <GalleryNav />
            
        </main>
    )
}

export default CustomBuild;