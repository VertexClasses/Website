import React from 'react';
import '../Styles/MarqueeModified.css';

const Marquee = (props) => {
//   const message = 'New Batch for Class XII is starting from 12th May';
const message=props.message;
  // Repeat the message 10000 times with 4 rem space between each message
  const repeatedMessage = Array.from({ length: 100 }, () => message + '\xa0\xa0\xa0\xa0').join('\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0');

  return (
    <div className="marquee-container">
      <div className="marquee-text">
        {repeatedMessage}
      </div>
    </div>
  );
};

export default Marquee;


