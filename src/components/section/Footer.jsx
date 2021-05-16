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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam quod quos deleniti, in ullam dolorem sequi nemo rem,
              recusandae, iure ratione. Maxime libero soluta, vitae nisi alias
              assumenda temporibus molestiae.
            </p>
            <p className="title">2021 Cake Cakey Cake</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
