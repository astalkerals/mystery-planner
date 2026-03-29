
import "../css/Questions.css";

const Theme = ({setThemeSelection, label, imgSrc}) => {
    const clear = () => {
        document.getElementById("placeholder-text").classList.add("hidden");
    }

    const select = (e) => {
        clear();
        document.querySelectorAll(".selected").forEach(el =>{
            el.classList.remove("selected");
        });
        e.target.classList.add("selected");
        setThemeSelection("Theme: " + label);
    }

    return(
        <section className = "one" onClick={select}>
            <img src={imgSrc} alt=""/>
            <div className="label">{label}</div>
        </section>
    )
};

export default Theme;