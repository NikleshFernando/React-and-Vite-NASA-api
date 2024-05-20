import React from "react";
import logo from "../../public/NASA_logo.svg.png";

function FooterMain() {
  return (
    <footer className="footerMain" data-testid="footer-main">
      <div className="container-footer">
        <img src={logo} alt="logo-footer" className="img-footer" />
        <h3 className="text-muted">NASA API</h3>
        <div className="my-details">
          <p>
            <strong>Student ID:</strong> IT21809224
          </p>
          <p>
            <strong>Student Name:</strong> Fernando W.S.N.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterMain;
