import "../styles/components/navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#interests">Interests</a></li>
                <li><a href="#techstack">Tech Stack</a></li>
                <li><a href="#certifications">Certifications</a></li>
                <li><a href="#contactme">Contact Me</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;