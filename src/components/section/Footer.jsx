import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <h1 className="text-center">
              <strong>Cakey Cakey</strong>
            </h1>
            <div className="footer-icon my-3 d-flex justify-content-around flex-wrap">
              <a href="#fb">fb</a>
              <a href="#fb">yt</a>
              <a href="#fb">twi icon</a>
              <a href="#fb">pin icon</a>
            </div>
          </div>
          <div className="col-sm-6 mx-auto text-center">
            <h3>contact</h3>
            <p className="d-flex flex-wrap">
              <span>icon</span>
              <span>123 abesim street</span>
            </p>
            <p className="d-flex flex-wrap">
              <span>icon</span>
              <span>123 abesim street</span>
            </p>
            <p className="d-flex flex-wrap">
              <span>icon</span>
              <span>123 abesim street</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
