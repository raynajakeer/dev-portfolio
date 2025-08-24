import '../styles/sections/contact_me.css';
import shootingStars from "../files/shooting-star.png"
import ContactStars from '../components/contact-stars.js';
function ContactMe() {
    return (
        <>            
            <div class="contact-background" 
            style={{
                backgroundImage: `linear-gradient(180deg, #264FA8 0%, #0F1F42 100%), url(${shootingStars})`,
                backgroundBlendMode: 'overlay',
                backgroundSize: '100% 100%, 100% 100%',
                backgroundPosition: 'center center, center center',
                backgroundRepeat: 'no-repeat, no-repeat',
            }}>
                <div class="contact-title">Contact Me</div> 
                <ContactStars />
           </div>
        </>
    )
}

export default ContactMe;  