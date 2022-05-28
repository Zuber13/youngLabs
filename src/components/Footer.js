import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="box">
        <span>Your friend, your guide and your partner in the journey of parenting</span>
        <p>© 2022 All Rights Reserved. Younglabs</p>
      </div>

      <div className="box">
        <span>Quick links</span>
        <ul>
          <li>About</li>
          <li>Privacy Policy</li>
          <li>Terms And Conditions</li>
          <li>Shipping And Deleivery</li>
        </ul>
      </div>

      <div className="box">
        <span>Address</span>
        <ul>
          <li>A-39, Sector - 4, Noida -201301</li>
          <li>( +91) 92890 29696</li>
          <li>info@younglabs.in</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
