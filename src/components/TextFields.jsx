import "../css/TextFields.css";

const TextFields = () => {
    return (
        <div id="small-questions">
            <p>Party title: <input id="title-text" type="text"/></p>
            <p>Number of guests: <input id="guests-num" type="number"/></p>
        </div>
    )
}


export default TextFields