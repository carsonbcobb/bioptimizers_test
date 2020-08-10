import React from 'react';
import '../styles/footer.styles.scss';

import SimpleReactCalendar from 'simple-react-calendar'

const Footer = () => {

  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 

  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__calendar">
        <SimpleReactCalendar activeMonth={new Date()}/>
      </div>

      <div className="footer__date">
        <p>
        {date}
        <hr/>
        {time}
      </p>
      </div>
      
      </div>

    </div>
  )
};

export default Footer;