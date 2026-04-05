import tempImg from "./images/ai-brony.png";
import "../css/Character.css";
import {useRef, useState} from "react";

const Character = (char) => {
    const [showDialog, setShowDialog] = useState(false);

    const openDialog = () => {
        setShowDialog(true);
    };

    const closeDialog = () => {
        setShowDialog(false);
    };

    const descRef = useRef(null);

    const readMore = (e) => {
        descRef.current.classList.toggle("hidden");
        (e.target.innerHTML === "Read More")? e.target.innerHTML = "Read Less" : e.target.innerHTML="Read More";
    }

    return(
        <>
        <section className="one" onClick= {showDialog? (openDialog) : (closeDialog)}>
            <div className="imgCon">
                <img src={"https://hello-world-xxig.onrender.com/images/" + char.imgsrc} alt=""/>
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
        {showDialog?(
            <div id="myModal" class="modal">

                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>Some text in the Modal..</p>
                </div>

            </div>
        ):("")}
        
        </>
    )
}

export default Character;