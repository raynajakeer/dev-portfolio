import '../styles/components/contact-stars.css';
import linkedinStar from '../files/linkedin-star.png';
import gitHubStar from '../files/github-star.png';
import emailStar from '../files/email-star.png';
function ContactStars() {
    return (
        <>
            <div class="star-container">
                <div className="linkedin">
                <div className="linkedin-title">linkedin</div>
                <a href="https://www.linkedin.com/in/rayna-jakeer-hussain/" target="_blank" rel="noopener noreferrer">
                    <img className="linkedin-star" src={linkedinStar} alt="LinkedIn" />
                </a>
                </div>

                <div className="github">
                <div className="github-title">github</div>
                <a href="https://github.com/raynajakeer" target="_blank" rel="noopener noreferrer">
                    <img className="github-star" src={gitHubStar} alt="GitHub" />
                </a>
                </div>

                <div className="email">
                <div className="email-title">email</div>
                <a href="mailto:raynajakeer@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img className="email-star" src={emailStar} alt="Email" />
                </a>
                </div>
            </div>
        </>
    );
}

export default ContactStars;