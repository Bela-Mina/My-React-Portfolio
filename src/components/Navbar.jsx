
import "./Navbar.css";
function Navbar({ darkMode, setDarkMode }) {
    return (
        <nav className="nav">
            <h1>Bela Portfolio</h1>
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
                <button
                    className="theme-btn"
                    onClick={() => setDarkMode(!darkMode)}
                >
                     {darkMode ? "☀️" : "🌙"}
                </button>
        </nav>
    );
}

export default Navbar;