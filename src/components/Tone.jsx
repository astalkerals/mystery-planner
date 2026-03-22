import brony from "./images/ai-brony.png";
import carlise from "./images/aicarlise.avif";
import elaine from "./images/aielaine.jpg";

const Tone = () => {
    return(
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
        </div>
    )
}

export default Tone;