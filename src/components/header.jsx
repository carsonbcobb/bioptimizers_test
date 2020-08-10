import React from 'react';
import '../styles/header.styles.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Header = () => (
  <div className="header">
    <ul className="header__list">
        <li>
          <a className="header__list--link" href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGoogle}/></a>
          </li>
        <li>
          <a className="header__list--link" href="https://github.com/carsonbcobb/bioptimizers_test" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
          </li>
        <li>
          <a className="header__list--link" href="https://carson-cobb.com" target="_blank" rel="noopener noreferrer">Portfolio</a>
          </li>
        <li>
          <a className="header__list--link" href="https://www.linkedin.com/in/carsoncobb/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
          </li>
        <li>
          <a className="header__list--link" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF}/></a>
          </li>
    </ul>
  </div>
);

export default Header;