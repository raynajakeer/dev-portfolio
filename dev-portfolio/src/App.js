import './App.css';
import About from './sections/about';
import Interests from './sections/interests';
import TechStack from './sections/tech_stack';
import Certifications from './sections/certifications';
import ContactMe from './sections/contact_me';

import StarCursor from './components/star-cursor';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <StarCursor />
      <Navbar />
      <div className="content">
        <section id="about">
          <About />
        </section>
        <section id="interests">
          <Interests />
        </section>
        <section id="techstack">
          <TechStack />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="contactme">
          <ContactMe />
        </section>
      </div>
    </>
  );
}

export default App;
