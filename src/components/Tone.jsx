
const Tone = ({imgSrc,label,setToneSelection}) => {
    const clear = () => {
        document.getElementById("placeholder-text").classList.add("hidden");
    }

    const select = (e) => {
        clear();
        document.querySelectorAll(".selectedT").forEach(el =>{
            el.classList.remove("selectedT");
        });
        e.target.classList.add("selectedT");
        setToneSelection("Tone: " + label);
    }
    return(
        <section className="one" onClick={select}>
            <img src={imgSrc} alt=""/>
            <div className="label">{label}</div>
        </section>
    )
}

export default Tone;