import Navigation from "./Navigation.jsx";

const FancyHeader = () => {
    return(
        <header id="main-header-home">
            <div className="overlay">
                <h1>Murder Mystery Planner</h1>
                <Navigation />
            </div>
        </header>
    )
};

export default FancyHeader;