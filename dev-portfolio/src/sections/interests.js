import starGroup from '../files/star-group.png';
import '../styles/sections/interests.css';
import Lantern from '../components/lantern.js';

function Interests() {
    return (
        <div
            className="interests-background"
            style={{ backgroundImage: `url(${starGroup})` }}
        >
            <Lantern description="In the creation of products, a friendly UX design always benefits the overall technology by solving problems in an intuitive manner. Through this interest, I can implement my innovations through features that are sustainable for users." title="UX / Product Design"/>
            <Lantern description="Generative AI has a transformative effect on Software Development by allowing engineers like myself to boost my productivity and concentrate on high-level problem-solving." title="Generative AI"/>
            <Lantern description="Data Privacy is a big aspect of Software Development as it contributes to long-term user loyalty. By implementing industry-relevant cybersecurity practices, I  will build resilient & functional architecture." title="Cybersecurity/Privacy" />
        </div>
    );
}

export default Interests;
