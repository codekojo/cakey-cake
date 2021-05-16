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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              enim atque? Fugiat accusantium animi incidunt adipisci fugit
              cupiditate sunt quae nihil laborum, culpa, tempore expedita rerum,
              quasi velit voluptates nostrum quibusdam quia officiis numquam ab
              labore nemo quam facere sit?
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
