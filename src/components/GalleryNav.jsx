import {Link} from "react-router-dom";
import party from "./images/ai1920sparty.jpeg";
import props from "./images/ai-mystery-props.jpeg";
import oldman from "./images/ai-old-man.jpeg";
import "../css/GalleryNav.css";

const GalleryNav = () => {
    return (
        <div id= "gallery" className="columns">
            <section>
                <Link to="/buildCrime">
                <img src={party} alt="Determine plotlines"/>
                <div class="label">Determine plotlines</div></Link>
            </section>

            <section>
                <Link to="/buildCrime">
                <img src={props} alt="Forge evidence"/>
                <div class="label">Forge evidence</div></Link>
            </section>

            <section>
                <a href="#">
                <img src={oldman} alt="Create characters"/>
                <div class="label">Create characters</div></a>
            </section>
        </div>
    )
};

export default GalleryNav;