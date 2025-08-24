import { useEffect, useRef } from 'react';
import '../styles/components/star-cursor.css';

function StarCursor() {
  const starRef = useRef(null);
  const trailRefs = useRef([]);

  useEffect(() => {
    const star = starRef.current;

    // Clear previous trail elements on re-render
    trailRefs.current.forEach(t => t.remove());
    trailRefs.current = [];

    // Create trail stars
    for (let i = 0; i < 7; i++) {
      const trail = document.createElement('div');
      trail.className = 'star-trail';
      document.body.appendChild(trail);
      trailRefs.current.push(trail);
    }

    function onMouseMove(e) {
      const x = e.clientX;
      const y = e.clientY;

      // Move main star
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;

      // Move trailing stars with delay and offset for smooth trailing
      trailRefs.current.forEach((trail, index) => {
        const delay = (index + 1) * 20;
        setTimeout(() => {
          trail.style.left = `${x - (index + 1) * 18}px`;
          trail.style.top = `${y + (index + 1) * 8}px`;
          trail.style.opacity = `${0.6 - index * 0.08}`;
        }, delay);
      });
    }

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      trailRefs.current.forEach(t => t.remove());
      trailRefs.current = [];
    };
  }, []);

  return <div ref={starRef} className="star-cursor"></div>;
}

export default StarCursor;
