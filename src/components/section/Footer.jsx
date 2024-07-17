import React from "react";
import Logo from "../../assets/images/img/logo.svg";
function Footer() {
  return (
    <footer id="footer" className="footer py-5 text-white">
      <div className="container">
        <div className="row">
          <div className="col px-3 text-center my-3">
            <img src={Logo} alt="" className="img-fluid" />
            <p className="text-secondary desc my-5 text-white w-75 mx-auto">
              At Sweet Delights Bakery, we believe that every celebration
              deserves a touch of sweetness. Our cakes are crafted with love and
              attention to detail, ensuring that each bite is as memorable as
              the occasion it celebrates.
            </p>
            <p className="title">© 2024 Sweet Delights Bakery</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
