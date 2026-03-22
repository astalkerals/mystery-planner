import DocumentsGallery from "../components/DocumentsGallery";
import PhotoshopGallery from "../components/PhotoshopGallery";
import Header from "../components/Header";
import Character from "../components/Character";
import "../css/Collection.css";

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
            <div className="characters">
                <Character name="James Pyrix-McIntosh" occupation="stay at home husband/father" generalBackground="James Pyrix-McIntosh is a loving husband and father who is married to Winona Pyrix-McIntosh, the owner of a tupperware mlm." personality="Nerdy and paranoid; loves his wife; secretly incredibly confident when he is Jamesbodash" relationToDeceased="College Friend" suspiciousAttributes="Paranoid about his wife finding out his biggest" biggestSecret="He’s a brony. He’s worried that his wife will judge him and think less of him if she finds out, so he very elaborately hides it from her. He collects My Little Pony figurines and has a Twitch channel where he streams to other bronies, watching My Little Pony and playing My Little Pony-themed video games."/>
                <Character name="James Pyrix-McIntosh" occupation="stay at home husband/father" generalBackground="James Pyrix-McIntosh is a loving husband and father who is married to Winona Pyrix-McIntosh, the owner of a tupperware mlm." personality="Nerdy and paranoid; loves his wife; secretly incredibly confident when he is Jamesbodash" relationToDeceased="College Friend" suspiciousAttributes="Paranoid about his wife finding out his biggest" biggestSecret="He’s a brony. He’s worried that his wife will judge him and think less of him if she finds out, so he very elaborately hides it from her. He collects My Little Pony figurines and has a Twitch channel where he streams to other bronies, watching My Little Pony and playing My Little Pony-themed video games."/>
                <Character name="James Pyrix-McIntosh" occupation="stay at home husband/father" generalBackground="James Pyrix-McIntosh is a loving husband and father who is married to Winona Pyrix-McIntosh, the owner of a tupperware mlm." personality="Nerdy and paranoid; loves his wife; secretly incredibly confident when he is Jamesbodash" relationToDeceased="College Friend" suspiciousAttributes="Paranoid about his wife finding out his biggest" biggestSecret="He’s a brony. He’s worried that his wife will judge him and think less of him if she finds out, so he very elaborately hides it from her. He collects My Little Pony figurines and has a Twitch channel where he streams to other bronies, watching My Little Pony and playing My Little Pony-themed video games."/>
            </div>
        </main>
    )
};

export default Collection;