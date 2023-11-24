import React from 'react';
import useEasingScroll from '../dist/useEasingScroll';

const ScrollComponent: React.FC = () => {
  useEasingScroll('easeInOutQuad', 1000, 'scroll-link');

  return (
    <div>
      <a href="#target" className="scroll-link" id="test-link">Scroll to Target</a>
      <div style={{height: "120vh"}}>
        hey
      </div>
      <div id="target" style={{ height: '1000px', backgroundColor: 'lightgray' }}>
        Target Div with Some Text
      </div>
    </div>
  );
};

export default ScrollComponent;
