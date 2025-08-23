import '../styles/components/lantern.css';
import light from '../files/light.png';
function Lantern() {
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
                        Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </div>
                </div>
                <div class="moon-description">title</div>
        
            </div>


        </>
    );
}

export default Lantern;