import '../styles/sections/about.css';
import profilePic from '../files/profile-star.png';
function About() {
    return (
        <>
            <div class="section">
                <div class='content-container'>
                    <div class="hello">Hello, my name is</div>
                    <div class="name">Rayna Jakeer Hussain</div>
                    <div class="description">Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>
                </div>
                <img class = "profile-star" src={profilePic} alt="profile-star"/>
            </div>

        </>

    );
}

export default About;