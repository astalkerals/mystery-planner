import {useState} from "react";
import CountryHouse from "../components/images/ai-hallway-portraits.jpeg";
import "../css/Slideshow.css";

const Slideshow = () => {
    const[slideIndex,setSlideIndex] = useState(0);
    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(
        require.context("../components/images", false, /\.(png|jpe?g|svg$|webp)/)
    );

    const slideForward = () => {
       /*if(slideIndex == images.length-1){
            setSlideIndex(0);
        }else{
            setSlideIndex(slideIndex+1);
        }*/
       setSlideIndex(slideIndex==images.length-1? 0:slideIndex+1);
    };

    const slideBackward = () => {
        setSlideIndex(slideIndex == 0? images.length - 1:slideIndex-1);
    }

    return(
        <section className="slideshow">
            <img src={CountryHouse} />
            <a id="next-arrow" onClick={slideForward} className="arrow" href="#">&rsaquo;</a>
            <a id="prev-arrow" onclick={slideBackward} className="arrow" href="#">&lsaquo;</a>
        </section>
    )
}

export default Slideshow;