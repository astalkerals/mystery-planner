import {useState} from "react";

const AddCharacter = (props) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");

    const uploadImage = (e) => {
        setPrevSrc(URL.createObjectURL(e.target.files[0]));
    };

    const addCharacterToServer = async(e) => {
        e.preventDefault();
        setResult("Sending...");

        const formData = new FormData(e.target);
        console.log([...formData]);

        const postUrlRender = "https://hello-world-xxig.onrender.com/api/characters";
        const postUrlLocal= "http://localhost:3002/api/characters";
        const response = await fetch(postUrlLocal, {
            "method" : "POST",
            "body" : formData
        });

        if(response.status === 200){
            setResult("Character added");
            props.closeAddDialog();
            props.addCharacterToList(await response.json());
        }
        else{
            setResult("Error Sending House");
        }

        
    };

    return(
    <div id="myModal" >

        <div className="modal-content">
            
                <span className="close" onClick={props.closeAddDialog}>&times;</span>
            <div id="character-dialogue-content">
                <form onSubmit={addCharacterToServer}>
                    <h3>Create New Character</h3>

                    <p>
                        <label htmlFor="name">Character Name:</label><br/>
                        <input type="text" id="name" name="name" required min="3"></input>
                    </p>
                    <p>
                        <label htmlFor="occupation">Occupation:</label><br/>
                        <input type="text" id="occupation" name="occupation" required min="3"></input>
                    </p>
                    <p>
                         <label htmlFor="generalBackground">General Background:</label><br/>
                         <textarea id="generalBackground" name="generalBackground"></textarea>
                    </p>
                    <p>
                         <label htmlFor="personality">Personality:</label><br/>
                         <textarea id="personality" name="personality"></textarea>
                    </p>
                    <p>
                         <label htmlFor="relationToDeceased">Relation to Deceased:</label><br/>
                         <textarea id="relationToDeceased" name="relationToDeceased"></textarea>
                    </p>
                    <p>
                         <label htmlFor="suspiciousAttributes">Suspicious Attributes:</label><br/>
                         <textarea id="suspiciousAttributes" name="suspiciousAttributes"></textarea>
                    </p>
                    <p>
                         <label htmlFor="biggestSecret">Biggest Secret:</label><br/>
                         <textarea id="biggestSecret" name="biggestSecret"></textarea>
                    </p>

                    <section>
                        <p id="img-prev-section">
                            {prevSrc===""?(""):(
                                <img id="img-prev" name="cool-img" src={prevSrc} alt="your-image" />
                            )}
                        </p>
                        
                        <p>
                            <label htmlFor="img">Select Image</label>
                            <input type="file" id="imgsrc" accept="images/*" onChange={uploadImage}></input>
                        </p>
                    </section>

                    <p><button type="submit">Submit</button></p>
                    <p>{result}</p>
                </form>
            </div>

        </div>

    </div>
        
    )

}

//author, nail stylist

//wrestler

//diana crane, 

//beans mcgee

export default AddCharacter;