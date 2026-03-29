import Map from "../components/Map";
import ContactForm from "../components/ContactForm";
const Contact = () => {
    return(
        <main id="contact" className="main-content">
            <h2>Contact Us</h2>
            <div className="columns">
                <div className="one">
                    <Map />
                </div>
                <div className="one">
                    <ContactForm />
                </div>
            </div>
        </main>
    )
}

export default Contact;