import DocumentsGallery from "../components/DocumentsGallery";
import PhotoshopGallery from "../components/PhotoshopGallery";
import Header from "../components/Header";
import Characters from "../components/Characters";
import "../css/Collection.css";
import "../css/Character.css";

const Collection = () => {
    return(
        <main id="collection" className="main-content" title="Collection">
            <Header title="Collection"/>
            <br/><br/>
            <h2>Example Fake Documents:</h2>
            <br/>
            <DocumentsGallery />
            <br/><br/>
            <h2>Example photoshopped images: </h2>
            <br/>
            <PhotoshopGallery />
            <br/><br/>
            <h2>Example characters:</h2><br/>
            <Characters />
        </main>
    )
};

export default Collection;