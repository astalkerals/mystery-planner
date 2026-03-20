import DocumentsGallery from "../components/DocumentsGallery";
import PhotoshopGallery from "../components/PhotoshopGallery";
import Header from "../components/Header";

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
        </main>
    )
};

export default Collection;