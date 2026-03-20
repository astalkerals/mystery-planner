import "../css/DocumentsGallery.css";
import newspaper from "./images/news.png";
import tweet from "./images/fakehusbandevidence1.PNG";

const DocumentsGallery = () => {
    return(
        <div id="gallery2" className="columns">
            <section className="one">
                <a href="news.docx.pdf">
                    <img src={newspaper}/>
                </a>
            </section>
            <section className="one">
                <a href="#">
                    <img src={tweet}/>
                </a>
            </section>
            <section className="one">
                <a href="#">
                    <p>Click to access gallery</p>
                </a>
            </section>
        </div>
    )
}

export default DocumentsGallery;