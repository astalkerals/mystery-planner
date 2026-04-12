import Character from "./Character";
import {useState, useEffect} from "react";
import axios from "axios";
import AddCharacter from "./AddCharacter";
import "../css/Character.css";

const Characters = () => {
    const[showAddDialog,setShowAddDialog] = useState(false);
    const [characters, setCharacters] = useState([]);

    const [newChar, setNewChar] = useState(false);

    const openAddDialog = () => {
        setShowAddDialog(true);
    };

    const closeAddDialog = () => {
        setShowAddDialog(false);
    };

    const addCharacterToList = (char) => {
        //adds the new character to the list of characters
        setCharacters((characters) => [...characters,char]);
    };

    //after the page has loaded
    useEffect(() => {
        const loadCharacters = async() => {
            const urlRender = "https://hello-world-xxig.onrender.com/api/characters";
            const urlLocal= "http://localhost:3002/api/characters";
            const response = await axios.get("https://hello-world-xxig.onrender.com/api/characters");
            setCharacters(response.data);
        };

        

        loadCharacters();

    }, []);

    return(
    <>
    <button id="btn-add" onClick={openAddDialog}>+</button>
        <div className="characters">
            
            {showAddDialog?(<AddCharacter 
            closeAddDialog={closeAddDialog}
            addCharacterToList={addCharacterToList}
            setNewChar = {setNewChar}
                />):("")}
            
            {characters.map((character) => (

                <Character newChar = {newChar}
                    key={character._id}
                    name={character.name}
                    occupation={character.occupation}
                    generalBackground={character.generalBackground}
                    personality={character.personality}
                    relationToDeceased={character.relationToDeceased} 
                    suspiciousAttributes={character.suspiciousAttributes}
                    biggestSecret={character.biggestSecret}
                    imgsrc={character.imgsrc}/>

            ))}
        </div>
        </>
    )
}

export default Characters;