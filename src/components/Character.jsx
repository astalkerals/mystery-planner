import tempImg from "./images/ai-brony.png";
import {useRef, useState} from "react";
/*<ul>
                <li>Occuption: {char.occupation}</li>
                <li>General Background: {char.generalBackground}</li>
                <li>Personality: {char.personality}</li>
                <li>Relation to Deceased: {char.relationToDeceased}</li>
                <li>Suspicious Attributes: {char.suspiciousAttributes}</li>
                <li>Biggest Secret: {char.biggestSecret}</li>
            </ul> */
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
        <section className="one" onClick={openDialog}>
            <div className="imgCon">
                <img src={"https://hello-world-xxig.onrender.com/characters/" + char.imgsrc} alt="james"/>
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
            {showDialog?(
                <h1>hi</h1>
            ):(
                <h1>Bye</h1>
            )}
        </section>
        {showDialog?(
            <div id="id01" class="w3-modal">
                <div class="w3-modal-content">
                    <div class="w3-container">
                    <span onclick="document.getElementById('id01').style.display='none'"
                    class="w3-button w3-display-topright">&times;</span>
                    <p>Some text in the Modal..</p>
                    <p>Some text in the Modal..</p>
                    </div>
                </div>
            </div> 
        ):("")}
        
        </>
    )
}

export default Character;