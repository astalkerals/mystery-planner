import tempImg from "./images/ai-brony.png";

const Character = (char) => {
    return(
        <section className="one">
            <div className="imgCon">
                <img src={tempImg} alt="james"/>
            </div>
            <h3>{char.name}</h3>
            <ul>
                <li>Occuption: {char.occupation}</li>
                <li>General Background: {char.generalBackground}</li>
                <li>Personality: {char.personality}</li>
                <li>Relation to Deceased: {char.relationToDeceased}</li>
                <li>Suspicious Attributes: {char.suspiciousAttributes}</li>
                <li>Biggest Secret: {char.biggestSecret}</li>
            </ul>
        </section>
    )
}

export default Character;