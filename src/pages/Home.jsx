import "../css/General.css"
import "../css/Home.css";
import GalleryNav from "../components/GalleryNav.jsx";
import Review from "../components/Review.jsx";
import FancyHeader from "../components/FancyHeader.jsx";

const Home = () => {
    return (
        <div id="full-page">
            <main id="home" className="content">
                <FancyHeader />
                <GalleryNav />
                <Review />
            </main>
        </div>
    );
};

export default Home;