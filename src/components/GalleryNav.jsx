import party from "./images/ai1920sparty.jpeg";
import props from "./images/ai-mystery-props.jpeg";
import oldman from "./images/ai-old-man.jpeg";

const GalleryNav = () => {
    return (
        <div id= "gallery" className="columns">
            <section>
                <a href="./build/index.html">
                <img src={party} alt="Determine plotlines"/>
                <div class="label">Determine plotlines</div></a>
            </section>

            <section>
                <a href="#">
                <img src={props} alt="Forge evidence"/>
                <div class="label">Forge evidence</div></a>
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