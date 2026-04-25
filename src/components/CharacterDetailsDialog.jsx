const CharacterDetailsDialog = (char) =>{

    const urlRender = "https://hello-world-xxig.onrender.com/images/";
    const urlLocal = "http://localhost:3002/images/";

    return(
    <div className="modal-content">
            <div>
                <span className="close" onClick = {char.closeDialog}>&times;</span>
                <img src={urlRender + char.imgsrc} alt=""/>
            </div>
            <div className="columns modal-name">
                <h2>{char.name}</h2>
                <div id="edit-links">
                    <a href="edit-link" onClick={char.showEdit}>&#9998;</a>
                    <a href="delete-link" onClick={char.showDelete}>&#x2715;</a>
                </div>
            </div>
            <div>
                
                <ul>
                    <li>Occupation: {char.occupation}</li>
                    <li>General Background: {char.generalBackground}</li>
                    <li>Personality: {char.personality}</li>
                    <li>Relation to Deceased: {char.relationToDeceased}</li>
                    <li>Suspicious Attributes: {char.suspiciousAttributes}</li>
                    <li>Biggest Secret: {char.biggestSecret}</li>
                </ul>
            </div>

        </div> 
    )
    
}

export default CharacterDetailsDialog;