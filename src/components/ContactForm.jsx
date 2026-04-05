import "../css/ContactForm.css";
import React from "react";
import {useState} from "react";

const ContactForm = () => {
    const [feedback,setFeedback] = useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "03cc27bb-05a3-4bc7-b662-31d4d2f53965");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        setFeedback("Sending...");

        const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Submitted", res);
            setFeedback("Submitted!")
        }else {
            setFeedback("Error sending email");
        }
    };

    return (
        <form className="contact-form" onSubmit={onSubmit}>
            <div className = "row">
            <label htmlFor="name">Name: </label><input id="name" type="text" name="name"/>
            </div>
            <div className = "row">
            <label htmlFor="email">Email: </label><input type="email" name="email"/>
            </div>
            <div className = "row">
            <label htmlFor="message">Message: </label><textarea name="message" id="message"></textarea>
            </div>
            <div></div>
            <button type="submit">Submit Form</button>
            <p>{feedback}</p>
        </form>
        
    );
}

export default ContactForm;