import '../styles/sections/about.css';
import profilePic from '../files/profile-star.png';
import aboutBG from '../files/about-bg.png';
function About() {
    return (
        <>
            <div
                className="section"
                style={{
                    backgroundImage: `linear-gradient(180deg, #1B3368 0%, #0F1F42 100%), url(${aboutBG})`,
                    backgroundBlendMode: 'overlay',
                    backgroundSize: '100% 100%, 100% 100%',
                    backgroundPosition: 'center center, center center',
                    backgroundRepeat: 'no-repeat, no-repeat',
                }}
                >
                <div className='content-container'>
                    <div className="hello">Hello, my name is</div>
                    <div className="name">Rayna Jakeer Hussain</div>
                    <div className="description">I am a versatile individual that is majoring in Computer Science at the Georgia Institute of Technology. My passions lie in the Software Development and Product Management fields as I am avid to build sustainable and innovative technologies.</div>
                </div>
                <img className="profile-star" src={profilePic} alt="profile-star" />
            </div>
        </>

    );
}

export default About;