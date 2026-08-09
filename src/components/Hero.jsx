import "./Hero.css";
import profileImage from "../assets/unnamed-removebg-preview(1).png";
function Hero() {
    return (
        <section id="Home" className="hero">
            <div className="hero-content">
                <h2>MY NAME IS ABEL MINAS </h2>
                <p>UI/UX Designer and Front-End dev</p>
                <p>Based on East Africa in A.A</p>
                <button className="hero-btn">let talk with me</button>
                <p>+251973252525</p>
                <a href="mailto:abelmina1515@gmail.com">abelmina1515@gmail.com</a>
            </div>
            <div className ="hero-image">
            
                 <img src = {profileImage} alt ="Abel mina prof" /> 
                 <p>Welcome</p>
            </div>
        </section>
    )
}
export default Hero