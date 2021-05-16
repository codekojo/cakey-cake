import React from "react";
import sweet1 from "../../assets/images/img/sweets-1.jpeg";
import sweet11 from "../../assets/images/img/sweets-2.jpeg";
import sweet12 from "../../assets/images/img/sweets-3.jpeg";
import sweet2 from "../../assets/images/img/doughnut-1.jpeg";
import sweet3 from "../../assets/images/img/doughnut-2.jpeg";
import sweet4 from "../../assets/images/img/doughnut-3.jpeg";
import sweet5 from "../../assets/images/img/cupcake-1.jpeg";
import sweet51 from "../../assets/images/img/cupcake-2.jpeg";
import sweet52 from "../../assets/images/img/cupcake-3.jpeg";
import sweet6 from "../../assets/images/img/cake-1.jpeg";
import sweet66 from "../../assets/images/img/cake-2.jpeg";
import sweet666 from "../../assets/images/img/cake-3.jpeg";
import { FaPhoneAlt } from "react-icons/fa";
import "./Store.css";

function Store() {
  return (
    <section id="store" className="store py-5">
      <div className="container my-5">
        <div className="row">
          <div className="col-10 mx-auto col-sm-6 text-center">
            <h2 className="about">Our Store</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto d-flex justify-content-around flex-wrap my-4">
            <a href="#all" className="book__btn m-2 px-4 py-1">
              all
            </a>
            <a href="#cakes" className="book__btn m-2 px-4 py-1">
              cakes
            </a>
            <a href="#cupcak" className="book__btn m-2 px-4 py-1">
              cupcakes
            </a>
            <a href="#sweets" className="book__btn m-2 px-4 py-1">
              sweets
            </a>
            <a href="#doughnut" className="book__btn m-2 px-4 py-1">
              doughnuts
            </a>
          </div>
        </div>

        <div className="row" id="store">
          <div className="col-12 col-sm-6 col-lg-4 mx-auto my-3">
            <div className="card single-item">
              <div className="img-container">
                <img src={sweet1} alt="" className="card-img-top store-img" />
                <span className="store-item-icon">
                  <FaPhoneAlt />
                </span>
              </div>
              <div className="card-body">
                <div className="card-text d-flex justify-content-between">
                  <h5 className="title">Sweets Item</h5>
                  <h5 className="price">
                    $<strong>5</strong>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12  col-sm-6 col-lg-4 mx-auto my-3">
            <div className="card single-item">
              <div className="img-container">
                <img src={sweet11} alt="" className="card-img-top store-img" />
                <span className="store-item-icon">
                  <FaPhoneAlt />
                </span>
              </div>
              <div className="card-body">
                <div className="card-text d-flex justify-content-between">
                  <h5 className="title">Sweets Item</h5>
                  <h5 className="price">
                    $<strong>5</strong>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 mx-auto my-3">
            <div className="card single-item">
              <div className="img-container">
                <img src={sweet12} alt="" className="card-img-top store-img" />
                <span className="store-item-icon">
                  <FaPhoneAlt />
                </span>
              </div>
              <div className="card-body">
                <div className="card-text d-flex justify-content-between">
                  <h5 className="title">Sweets Item</h5>
                  <h5 className="price">
                    $<strong>5</strong>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 mx-auto my-3">
            <div className="card single-item">
              <div className="img-container">
                <img src={sweet2} alt="" className="card-img-top store-img" />
                <span className="store-item-icon">
                  <FaPhoneAlt />
                </span>
              </div>
              <div className="card-body">
                <div className="card-text d-flex justify-content-between">
                  <h5 className="title">Sweets Item</h5>
                  <h5 className="price">
                    $<strong>5</strong>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 mx-auto my-3">
            <div className="card single-item">
              <div className="img-container">
                <img src={sweet3} alt="" className="card-img-top store-img" />
                <span className="store-item-icon">
                  <FaPhoneAlt />
                </span>
              </div>
              <div className="card-body">
                <div className="card-text d-flex justify-content-between">
                  <h5 className="title">Sweets Item</h5>
                  <h5 className="price">
                    $<strong>5</strong>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 mx-auto my-3">
            <div className="card single-item">
              <div className="img-container">
                <img src={sweet4} alt="" className="card-img-top store-img" />
                <span className="store-item-icon">
                  <FaPhoneAlt />
                </span>
              </div>
              <div className="card-body">
                <div className="card-text d-flex justify-content-between">
                  <h5 className="title">Sweets Item</h5>
                  <h5 className="price">
                    $<strong>5</strong>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 mx-auto my-3">
            <div className="card single-item">
              <div className="img-container">
                <img src={sweet5} alt="" className="card-img-top store-img" />
                <span className="store-item-icon">
                  <FaPhoneAlt />
                </span>
              </div>
              <div className="card-body">
                <div className="card-text d-flex justify-content-between">
                  <h5 className="title">Sweets Item</h5>
                  <h5 className="price">
                    $<strong>5</strong>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 mx-auto my-3">
            <div className="card single-item">
              <div className="img-container">
                <img src={sweet51} alt="" className="card-img-top store-img" />
                <span className="store-item-icon">
                  <FaPhoneAlt />
                </span>
              </div>
              <div className="card-body">
                <div className="card-text d-flex justify-content-between">
                  <h5 className="title">Sweets Item</h5>
                  <h5 className="price">
                    $<strong>5</strong>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 mx-auto my-3">
            <div className="card single-item">
              <div className="img-container">
                <img src={sweet52} alt="" className="card-img-top store-img" />
                <span className="store-item-icon">
                  <FaPhoneAlt />
                </span>
              </div>
              <div className="card-body">
                <div className="card-text d-flex justify-content-between">
                  <h5 className="title">Sweets Item</h5>
                  <h5 className="price">
                    $<strong>5</strong>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 mx-auto my-3">
            <div className="card single-item">
              <div className="img-container">
                <img src={sweet6} alt="" className="card-img-top store-img" />
                <span className="store-item-icon">
                  <FaPhoneAlt />
                </span>
              </div>
              <div className="card-body">
                <div className="card-text d-flex justify-content-between">
                  <h5 className="title">Sweets Item</h5>
                  <h5 className="price">
                    $<strong>5</strong>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 mx-auto my-3">
            <div className="card single-item">
              <div className="img-container">
                <img src={sweet66} alt="" className="card-img-top store-img" />
                <span className="store-item-icon">
                  <FaPhoneAlt />
                </span>
              </div>
              <div className="card-body">
                <div className="card-text d-flex justify-content-between">
                  <h5 className="title">Sweets Item</h5>
                  <h5 className="price">
                    $<strong>5</strong>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 mx-auto my-3">
            <div className="card single-item">
              <div className="img-container">
                <img src={sweet666} alt="" className="card-img-top store-img" />
                <span className="store-item-icon">
                  <FaPhoneAlt />
                </span>
              </div>
              <div className="card-body">
                <div className="card-text d-flex justify-content-between">
                  <h5 className="title">Sweets Item</h5>
                  <h5 className="price">
                    $<strong>5</strong>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Store;
