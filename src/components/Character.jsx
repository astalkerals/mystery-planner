import "../css/Character.css";
import {useRef, useState} from "react";
import CharacterDetailsDialog from "./CharacterDetailsDialog";
import CharacterEditDialog from "./CharacterEditDialog";
import CharacterDeleteDialog from "./CharacterDeleteDialog";


const Character = (char) => {
    const [character, setCharacter] = useState(char);
    const [showContent, setShowContent] = useState("details");
    const [showDialog, setShowDialog] = useState(false);
    const [showCharacter, setShowCharacter] = useState(true);
    const renderImageLink = `https://hello-world-xxig.onrender.com/images/${char.imgsrc}`;
    const localImageLink= `http://localhost:3002/images/${char.imgsrc}`;
    

    const showEdit = (e) => {
        e.preventDefault();
        setShowContent("edit");
    }

    const showDelete = (e) => {
        e.preventDefault();
        setShowContent("delete");
    }

    const openDialog = (e) => {
        setShowDialog(true);
    };

    const closeDialog = () => {
        setShowDialog(false);
        setShowContent("details");
    };

    const updateCharacter = (newCharacter) =>{
        setCharacter(newCharacter);
    }

    const hideCharacter = () => {
        setShowCharacter(false);
    }

    const descRef = useRef(null);

    /*<button id="btn-read" onClick= {readMore}>Read More</button>

    const readMore = (e) => {
        descRef.current.classList.toggle("hidden");
        (e.target.innerHTML === "Read More")? e.target.innerHTML = "Read Less" : e.target.innerHTML="Read More";
    }*/

    return(
        <>
        {showCharacter?(
        <section className="character" onClick={openDialog}>
            <div className="imgCon">
                <img src={renderImageLink} alt=""/>
            </div>
            <h3>{character.name}</h3>
            <ul id="small-desc">
                <li>Occupation: {character.occupation}</li>
                <li>General Background: {character.generalBackground}</li>
            </ul>
        </section>
        ):("")}
        {showDialog?(
            <div id="myModal" className={`modal ${showDialog ? "" : "hidden"}`}>
                
                {showContent==="details"?(
                    <CharacterDetailsDialog 
                        imgsrc = {character.imgsrc}
                        localImageLink = {renderImageLink}
                        showEdit = {showEdit}
                        showDelete = {showDelete}
                        closeDialog = {closeDialog}
                        name={character.name}
                        occupation={character.occupation}
                        personality={character.personality}
                        generalBackground={character.generalBackground}
                        relationToDeceased={character.relationToDeceased}
                        suspiciousAttributes={character.suspiciousAttributes}
                        biggestSecret={character.biggestSecret}/>
                ) : showContent==="edit"?(
                    <CharacterEditDialog
                    _id={char._id}
                    name={character.name}
                    updateCharacter={updateCharacter}
                    closeEditDialog = {closeDialog}
                    occupation={character.occupation}
                    personality={character.personality}
                    generalBackground={character.generalBackground}
                    relationToDeceased={character.relationToDeceased}
                    suspiciousAttributes={character.suspiciousAttributes}
                    biggestSecret={character.biggestSecret}
                    />
                ) : (
                    <CharacterDeleteDialog 
                    _id = {char._id}
                    name = {character.name}
                    closeDeleteDialog = {closeDialog}
                    hideCharacter = {hideCharacter}/>
                )}
                
            </div>
        ):("")}
        
        </>
    )
}

export default Character;