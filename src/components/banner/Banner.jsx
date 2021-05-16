import React from "react";

function Banner() {
  return (
    <div className="container-fluid xoverlay banner">
      <div className="row max-height justify-content-center align-items-center">
        <div className="col-10 mx-auto banner text-center">
          <h1 className="title-prop ">
            Welcome to <strong className="cake">Cake Cakey Cake</strong>
          </h1>
          <a href="#explore" className="book__btn py-1 px-3 m-3">
            explore
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
