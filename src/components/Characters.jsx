import Character from "./Character";
import {useState, useEffect} from "react";
import axios from "axios";

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    //after the page has loaded
    useEffect(() => {
        const loadCharacters = async() => {
            const response = await axios.get("https://hello-world-xxig.onrender.com/api/characters");
            setCharacters(response.data);
        };

        loadCharacters();

    }, []);

    return(
        <div className="characters">
            {characters.map((character) => (
                <Character 
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
    )
}

export default Characters;