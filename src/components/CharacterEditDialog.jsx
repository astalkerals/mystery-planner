import {useState} from "react";

const CharacterEditDialog = (props) =>{
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("http://localhost:3002/images/${char.imgsrc}");


    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };

    const onSubmit = async(event) => {
        event.preventDefault();
        setResult("... sending");
        const postURLLocal = "http://localhost:3002/api/characters";
        const postURLRender = "https://hello-world-xxig.onrender.com/api/characters";

        const formData = new FormData(event.target);
        console.log(...formData);

        const response = await fetch(postURLLocal + `/${props._id}`,
        {
            method: "PUT",
            body: formData
        });
        if(response.status == 200){
            setResult("Character has been updated");
            event.target.reset();
            props.closeEditDialog();
            props.updateCharacter(await response.json());
        } else{
            setResult("Error updating character");
        }
    };

    

    return (
        <div className="add-character-prompts edit-box">
            <span className="close close-add" onClick={props.closeEditDialog}>&times;</span>
    <form onSubmit={onSubmit}>
        <h3>Create New Character</h3>

        <p>
            <label htmlFor="name">Character Name:</label><br/>
            <input type="text" id="name" name="name" required min="3" defaultValue = {props.name} />
        </p>
        <p>
            <label htmlFor="occupation">Occupation:</label><br/>
            <input type="text" id="occupation" name="occupation" required min="3" defaultValue = {props.occupation}/>
        </p>
        <p>
                <label htmlFor="generalBackground">General Background:</label><br/>
                <textarea id="generalBackground" name="generalBackground" defaultValue = {props.generalBackground}></textarea>
        </p>
        <p>
                <label htmlFor="personality">Personality:</label><br/>
                <textarea id="personality" name="personality" defaultValue = {props.personality}></textarea>
        </p>
        <p>
                <label htmlFor="relationToDeceased">Relation to Deceased:</label><br/>
                <textarea id="relationToDeceased" name="relationToDeceased" defaultValue = {props.relationToDeceased}></textarea>
        </p>
        <p>
                <label htmlFor="suspiciousAttributes">Suspicious Attributes:</label><br/>
                <textarea id="suspiciousAttributes" name="suspiciousAttributes" defaultValue = {props.suspiciousAttributes}></textarea>
        </p>
        <p>
                <label htmlFor="biggestSecret">Biggest Secret:</label><br/>
                <textarea id="biggestSecret" name="biggestSecret" defaultValue = {props.biggestSecret}></textarea>
        </p>

        <section>
            <p id="img-prev-section">
                {prevSrc===""?(""):(
                    <img id="img-prev"  src={prevSrc} alt="your-image" />
                )}
            </p>
            
            <p>
                <label htmlFor="img">Select Image</label>
                <input type="file" name="img" id="imgsrc" accept="images/*" defaultValue = {props.imgsrc} onChange={uploadImage}></input>
            </p>
        </section>

        <p><button type="submit">Submit</button></p>
        <p>{result}</p>
    </form>

    </div>

    )
}

export default CharacterEditDialog;