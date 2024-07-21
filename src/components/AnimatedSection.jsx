// src/components/AnimatedSection.jsx
import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedSection = ({ name, children }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={props}>
      <section id={name} className="section">
        {children}
      </section>
    </animated.div>
  );
};

export default AnimatedSection;
