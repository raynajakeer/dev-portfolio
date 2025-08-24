import nebula1 from "../files/nebula-1.png";
import nebula2 from "../files/nebula-2.png";

import softwareDev from "../files/it-software-dev.png";
import awsCloud from "../files/cloud-practitioner.png";
import python from "../files/it-python.png";

import '../styles/sections/certifications.css';

function Certifications() {
    return (
        <>            
            <div class="certifications-background">
                <div class="certifications-title">Certifications</div>
                <div class="certifications-description">Hover to learn more!</div>
                <div class="software-dev"><img src={softwareDev} alt=""></img></div>
                <div class="aws-cloud"><img class="aws-cloud" src={awsCloud} alt=""></img></div>
                <div class="python"><img class="python" src={python} alt=""></img></div>
                <div class="blob-move"><div class="nebula-1"><img src={nebula1} alt=""></img></div></div>
                <div class="nebula-2"><img src={nebula2} alt=""></img></div>
            </div>
        </>
    )
}

export default Certifications;  