import React from "react";
import labImage from '../images/mental-maths6-8.png';

function Content() {
  return (
    <div className="contents">
      <div className="right-side">
        <h4 className="title">Maths</h4>
        <h2>MENTAL MATHS</h2>
        <p>
          Have Fun with Math! Get rid of your Math phobia. Become a Human
          <br /> Calculator yourself and be able to calculate 10-15 times faster than before!
        </p>

        <div className="grid">
          <div className="grid-col">6 - 8 Year</div>
          <div className="grid-col">7 - 8 Students</div>
          <div className="grid-col">60 Mins per class</div>
          <div className="grid-col">5 week duration</div>
        </div>

        <div className="price">
          <h3>₹1499 INR For 10 Live Classes</h3>
        </div>
      </div>
      <div className="left-side">
        <img src={labImage} alt="lan-image" />
      </div>
    </div>
  );
}

export default Content;
