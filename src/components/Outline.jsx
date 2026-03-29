import "../css/Outline.css";

const Outline = ({titleValue, themeSelection, toneSelection}) => {
    return(
        <div id="outline">
            <h2>{titleValue}</h2>
            <h2>Outline:</h2>
            <p id="theme">{themeSelection}</p>
            <p id="tone">{toneSelection}</p>
            <p id="guests"></p>
            <p id="advice"></p>
            <p id="placeholder-text">Begin answering the questions to create an outline.</p>
            
        </div> 
    )
    
}

export default Outline;