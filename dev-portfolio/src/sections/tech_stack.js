import techGroup from '../files/tech-star-group.png';
import '../styles/sections/tech_stack.css';
function TechStack() {
    return (
        <div class='tech-container'>
            <div class='tech-title'>Tech Stack</div>
            <img class='tech-group' src={techGroup} alt=""></img>
        </div>
    );
}

export default TechStack;