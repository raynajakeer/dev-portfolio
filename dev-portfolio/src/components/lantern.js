import '../styles/components/lantern.css';
import light from '../files/light.png';
function Lantern({ description, title }) {
    return (
        <>
            <div class="lantern-container">
                <div class="light-stand"></div>
                <div class="string-container">
                    <div class="string"></div>
                    <div class="string"></div>
                </div>
                <img class="light-pic" src={light} alt="light"></img>
                <div class="glow"></div>
                <div class="moon">
                    <div class="moon-text">
                        {description}
                    </div>
                </div>
                <div class="moon-description">{title}</div>
            </div>
        </>
    );
}

export default Lantern;