import React, { useState } from 'react';
import '../styles/likeSection.styles.scss'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';


const LikeSection = () => {

  const [count, setCount] = useState(0);

  const photo = require("../assets/my-photo.JPG");

  return (
<div className="likeSection">
  <div className="likeSection__photo">
    <img src={photo} alt="Carson Cobb" />
  </div>

  <div className="likeSection__counter">
    {count < 1 ? <FontAwesomeIcon icon={faHeartBroken} /> : <FontAwesomeIcon icon={faHeart}/>}
  <p>{count}</p>
  </div>

  <div className="likeSection__button">
      <button onClick={() => setCount(count + 1)}>Like Me!</button>
  </div>
</div>
)};

export default LikeSection;