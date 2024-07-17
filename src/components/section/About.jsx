import React from "react";
import sweet from "../../assets/images/img/sweets-1.jpeg";
// import "./About.css";
import styled from "styled-components";

function About() {
  return (
    <section className="about py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-5">
            <h1 className="text-capitalize about">
              about <strong>us</strong>
            </h1>

            <p className="desc">
              Welcome to Sweet Delights Bakery, where every cake is a work of
              art and every bite is a taste of happiness. Our passion for baking
              is matched only by our commitment to quality and creativity. We
              specialize in crafting custom cakes for all occasions, from
              birthdays and weddings to anniversaries and corporate events.
            </p>
            <p className="desc">
              Our team of skilled bakers and decorators use only the finest
              ingredients to create cakes that are not only beautiful but also
              delicious. Whether you have a specific design in mind or need
              inspiration, we're here to bring your cake dreams to life. Join us
              on this sweet journey and discover the magic of Sweet Delights
              Bakery.
            </p>

            <a href="##" className="book__btn xlo">
              explore
            </a>
          </div>
          <div className="col-10 mx-auto col-md-6 my-5 align-self-center">
            <ImageContainer className="img__container">
              <img src={sweet} alt="" className="img-fluid" />
            </ImageContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

const ImageContainer = styled.div`
  position: relative;
  z-index: 1000;
  &:before {
    content: "";
    position: absolute;
    top: -1rem;
    left: -1.3rem;
    width: 100%;
    height: 100%;
    outline: 0.3rem solid #9492924d;
    z-index: -1;
    transition: all 0.5s linear;
  }
  ,
  &:hover:before {
    top: 0;
    left: 0;
    background: #9492924d;
    outline 1;
  }
`;
