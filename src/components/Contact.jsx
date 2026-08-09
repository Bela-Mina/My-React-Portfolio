import "./Contact.css";
function Contact() {
    return (
        <>
            <section className="contact-header">
                <h2>Contact Me</h2>
            </section>
            <section id="Contact" className="contact">
                <div className="contact-content">
                    <label htmlFor="email">Enter your Email: </label>
                    <input type ="email" id="email" placeholder="Enter your email"/>
                </div>
                <div className="contact-content">
                    <label htmlFor="number" id="number">Enter your phone Number: </label>
                    <input type="tel" id="number" placeholder="enter your phone Number"/>
                </div>
            </section>
            <section className="contact-btn">
              <button>Submit</button>
            </section>
        </>

        
    )
}
export default Contact