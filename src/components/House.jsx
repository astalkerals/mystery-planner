import "../css/House.css";
import housePic from "../images/house.webp";

const House = (props) => {
    return (
        <section className="house">
            <h2>{props.title}</h2>
            <img src={housePic}/>
        </section>
    )
};

export default House;