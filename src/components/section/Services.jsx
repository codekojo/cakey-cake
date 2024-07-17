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
            <img src={bread} alt="Freshly baked bread" />
            <h6 className="my-3 services-title about text-white">Bread</h6>
            <p className="desc text-white">
              Enjoy our freshly baked bread, made daily with the finest
              ingredients. Perfect for any meal or occasion, our bread is
              crafted to perfection.
            </p>
          </div>
          <div className="col-md-4 text-center my-4">
            <img src={cupcake} alt="Delicious cupcakes" />
            <h6 className="my-3 services-title about text-white">Cupcakes</h6>
            <p className="desc text-white">
              Our cupcakes are little bundles of joy, available in a variety of
              flavors and designs. Perfect for parties, events, or simply
              treating yourself.
            </p>
          </div>
          <div className="col-md-4 text-center my-4">
            <img src={candy} alt="Assorted candies" />
            <h6 className="my-3 services-title about text-white">Candies</h6>
            <p className="desc text-white">
              Indulge in our delightful assortment of candies, each piece
              crafted with care and bursting with flavor. A sweet treat for any
              time of the day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
