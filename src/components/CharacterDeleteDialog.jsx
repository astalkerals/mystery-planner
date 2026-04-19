import React, {useState} from "react"

const CharacterDeleteDialog = (props) =>{
    const[result, setResult] = useState("");
    const deleteUrlRender = "https://hello-world-xxig.onrender.com/api/characters";
    const deleteUrlLocal = "http://localhost:3002/api/characters";

    const deleteCharacterPlan = async() => {
        setResult("Sending ...");
        const response = await fetch(deleteUrlRender + `/${props._id}`,
        {
            method:"DELETE"
        }
        );

        if(response.status === 200){
            setResult("Successfully deleted");
            props.closeDeleteDialog();
            props.hideCharacter();
        } else {
            setResult("Unsuccessful delete");
        }
    }

    return (
        <div id="delete-content">
            <h3>Are you sure you want to delete {props.name}?</h3> 
            <center><section>
              <button onClick = {props.closeDeleteDialog}>No</button>            
              <button onClick={deleteCharacterPlan}>Yes</button>
            </section></center>
            <p>{result}</p>
        </div>
    );

}

export default CharacterDeleteDialog;