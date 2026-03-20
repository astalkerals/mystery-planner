import mystery from "./images/another-ai-murder-mystery.jpeg";
import detective from "./images/ai-detective.jpeg";

const Review = () => {
    return(
        <div id="intro">
            <div>
                <img src={mystery} alt="Crime scene"/>
            </div>

            <div id="intro-text">
                <p>
                    Give your guests an unforgettable night by planning a fun and engaging party tailored to your participants with the help of our Murder Mystery Planner.
                </p>

                <p id="endorsement">
                    Planning a murder mystery party has never been easier!
                    With this site I was able to create a hilarious plot that entertained me and my friends for hours.
                    <br/><br/>
                    -Satisfied customer
                </p>
            </div>

            <div>
                <img src={detective} alt="Detective"/>
            </div>
        </div>
    );
};

export default Review;