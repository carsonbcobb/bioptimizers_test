import React, { useState } from 'react';

import '../styles/colorSection.styles.scss';

const ColorSection = () => {

  const [color, setColor] = useState('blue');

  return (
      <div className="colorSection">
        <div className="colorSection__colorbox" style={{background: color}}>
          
        </div>

        <div className="colorSection__button">
          <button onClick={() => setColor('red')}>Change my color!</button>
        </div>

        <div className="colorSection__statement">
            <p>I am the color {color}!</p>
        </div>

      </div>
  )
};

export default ColorSection;