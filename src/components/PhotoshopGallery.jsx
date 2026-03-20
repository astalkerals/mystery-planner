import vampire from "./images/vampiresnap.png";
import snoop from "./images/snoop.png";
import brony from "./images/brony.png";
import "../css/PhotoshopGallery.css";

const PhotoshopGallery = () => {
    return(
                    <div id="gallery3" className="columns">
                <section className="one" id="rotate">
                    <img src={vampire}/>
                </section>

                <section className="one" id="alsorotate">
                    <img src={snoop}/>
                </section>
                <section className="one">
                    <img src={brony}/>
                </section>
                <section className="one">
                    <a href="#"><p>Click to access gallery</p></a>
                </section>
            </div>
    )
}

export default PhotoshopGallery;