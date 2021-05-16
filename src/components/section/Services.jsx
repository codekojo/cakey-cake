import React from "react";
import bread from "../../assets/images/img/bread-icon.png";
import cupcake from "../../assets/images/img/cupcake-icon.png";
import candy from "../../assets/images/img/candy-icon.png";
import "./Services.css";
function Services() {
  return (
    <section id="id" className="services py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center my-4">
            <img src={bread} alt="Bread for sale" />
            <h6 className="my-3 services-title about text-white">Bread</h6>
            <p className="desc text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              culpa ea commodi sunt! Ipsam reprehenderit labore quia
              consequuntur, in excepturi.
            </p>
          </div>
          <div className="col-md-4 text-center my-4">
            <img src={cupcake} alt="Bread for sale" />
            <h6 className=" my-3 services-title about text-white">Yoghurt</h6>
            <p className="desc text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              culpa ea commodi sunt! Ipsam reprehenderit labore quia
              consequuntur, in excepturi.
            </p>
          </div>
          <div className="col-md-4 text-center my-4">
            <img src={candy} alt="Bread for sale" />
            <h6 className="about text-white my-3 services-title">cupcakes</h6>
            <p className="desc text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              culpa ea commodi sunt! Ipsam reprehenderit labore quia
              consequuntur, in excepturi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
