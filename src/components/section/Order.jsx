import React from "react";
import cake from "../../assets/images/img/trans-cake.png";
import cake1 from "../../assets/images/img/trans-custom.png";
import cake2 from "../../assets/images/img/trans-wedding.png";
function Order() {
  return (
    <section id="cakes" className="cakes py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-sm-6 text-center">
            <h1 className="about">
              Order <strong>Cake</strong>
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-11 mx-auto col-md-4 col-lg-4 my-4 text-center">
            <h3 className="py-3 title-prop xxo">Birthday Cake</h3>
            <div className="text-muted desc">
              <p className="my-3">birthday Cake with a name</p>
              <p className="my-3">Custom size</p>
              <p className="my-3">Custom design</p>
              <a href="#orderme" className="book__btn py-2 px-3 ">
                Order Now
              </a>
              <p className="text-lowercase mb-4 mt-3 order">starting at $5</p>
              <img src={cake} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-sm-11 mx-auto col-md-4 col-lg-4 my-4 text-center">
            <h3 className="py-3 title-prop xxo">Custom Cake</h3>
            <div className="text-muted desc">
              <p className="my-3">birthday Cake with a name</p>
              <p className="my-3">Custom size</p>
              <p className="my-3">Custom design</p>
              <a href="#orderme" className="book__btn py-2 px-3 ">
                Order Now
              </a>
              <p className="text-lowercase mb-4 mt-3 order">starting at $5</p>
              <img src={cake1} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-sm-11 mx-auto col-md-4 col-lg-4 my-4 text-center">
            <h3 className="py-3 title-prop xxo">Wedding Cake</h3>
            <div className="text-muted desc">
              <p className="my-3">birthday Cake with a name</p>
              <p className="my-3">Custom size</p>
              <p className="my-3">Custom design</p>
              <a href="#orderme" className="book__btn py-2 px-3 ">
                Order Now
              </a>
              <p className="text-lowercase mb-4 mt-3 order">starting at $5</p>
              <img src={cake2} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Order;
