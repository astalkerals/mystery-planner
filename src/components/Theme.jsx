import dinnerParty from "./images/ai-dinner-party.jpg";
import holiday from "./images/ai-holiday-party.jpg";
import speakeasy from "./images/ai-speakeasy.jpg";
import victorian from "./images/ai-victorian.avif";

import "../css/Questions.css";

const Theme = () => {
    return(
        <div id="gallery1" className="columns">
            <section className="one">
                <img src={speakeasy} alt="speakeasy"/>
                <div className="label">1920s Speakeasy</div>
            </section>
            <section className="one" id="bigger">
                <img src={holiday} alt="holiday party"/>
                <div className="label">Holiday Party</div>
            </section>
            <section className="one">
                <img src={dinnerParty} alt="dinner party"/>
                <div className="label">Modern Dinner Party</div>
            </section>
            <section className="one">
                <img src={victorian} alt="victorian tea party"/>
                <div className="label">Classic Victorian</div>
            </section>
            <section id="other" className="one">
                <h3>Other</h3>
            </section>
        </div>
    )
};

export default Theme;