import React from "react";
import styled from "styled-components";
import HeaderImg from "../../assets/images/img/headerBcg.jpeg";

function Banner() {
  return (
    <BannerBackground className="container-fluid xoverlay">
      <div className="row max-height justify-content-center align-items-center">
        <div className="col-10 mx-auto banner text-center">
          <h1>
            Welcome to <strong>Cake Cakey Cake</strong>
          </h1>
          <a href="">explore</a>
        </div>
      </div>
    </BannerBackground>
  );
}

export default Banner;

const BannerBackground = styled.div`
  .max-height {
    min-height: calc(100vh - 69px);
  }

  background-image: url(${HeaderImg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
