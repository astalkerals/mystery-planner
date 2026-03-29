import tempImg from "./images/ai-brony.png";
import {useRef} from "react";
/*<ul>
                <li>Occuption: {char.occupation}</li>
                <li>General Background: {char.generalBackground}</li>
                <li>Personality: {char.personality}</li>
                <li>Relation to Deceased: {char.relationToDeceased}</li>
                <li>Suspicious Attributes: {char.suspiciousAttributes}</li>
                <li>Biggest Secret: {char.biggestSecret}</li>
            </ul> */
const Character = (char) => {

    const descRef = useRef(null);

    const readMore = (e) => {
        descRef.current.classList.toggle("hidden");
        (e.target.innerHTML === "Read More")? e.target.innerHTML = "Read Less" : e.target.innerHTML="Read More";
    }

    return(
        <section className="one">
            <div className="imgCon">
                <img src={tempImg} alt="james"/>
            </div>
            <h3>{char.name}</h3>
            <ul id="small-desc">
                <li>Occupation: {char.occupation}</li>
                <li>General Background: {char.generalBackground}</li>
            </ul>
            <ul id="full-desc" className="hidden" ref={descRef}>               
                <li>Personality: {char.personality}</li>
                <li>Relation to Deceased: {char.relationToDeceased}</li>
                <li>Suspicious Attributes: {char.suspiciousAttributes}</li>
                <li>Biggest Secret: {char.biggestSecret}</li>
            </ul>
            <button id="btn-read" onClick= {readMore}>Read More</button>
        </section>
    )
}

export default Character;