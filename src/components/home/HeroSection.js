import React from "react";
import img1 from "../../images/AAO6Jo5.jpg";
import img2 from "../../images/ronaldo.jpg";
import img3 from "../../images/taliban.jpg";
import "../../styles/hero.css";
import SlidingBanner from "./SlidingBanner";
const HeroSection = () => {
  return (
    <div className="container-fluid g-0 m-0 p-0">
      <div className="row hero-section g-0">
        <div className="col-md-11 hero-container">
            <div className="row g-0">
                <div className="col-md-8 d-flex align-items-center">
                    <div className="label col-md-4"><span>Top Topics</span></div>                    
                </div>
                <div className="col-md-4"></div>
            </div>
          <div className="row">
            <div className="col-md-8 carousel-banner border g-0">
              <SlidingBanner />
            </div>
            <div className="col-md-4 border g-0">
              <h5 className="top-news-heading">Top News</h5>
              <div className="top-news d-flex">
                <img src={img1} alt="" className="img-fluid" />
                <div className="top-content ps-2 pe-2">
                  <h6>
                    Nat Sciver admits England missed experienced players after
                    defeat to New Zealand
                  </h6>
                  <p className="justify-content-between d-flex">
                    <span>11 JUL 2021</span>
                    <span><i class="far fa-eye"></i> 41 <i class="fas fa-comments"></i> 22</span>
                  </p>
                </div>
              </div>
              <div className="top-news d-flex">
                <img src={img2} alt="" />
                <div className="top-content ps-2 pe-2">
                  <h6>
                    Nat Sciver admits England missed experienced players after
                    defeat to New Zealand
                  </h6>
                  <p className="justify-content-between d-flex">
                    <span>11 JUL 2021</span>
                    <span><i class="far fa-eye"></i> 41 <i class="fas fa-comments"></i> 22</span>
                  </p>
                </div>
              </div>
              <div className="top-news d-flex">
                <img src={img3} alt="" />
                <div className="top-content ps-2 pe-2">
                  <h6>
                    Nat Sciver admits England missed experienced players after
                    defeat to New Zealand
                  </h6>
                  <p className="justify-content-between d-flex">
                    <span>11 JUL 2021</span>
                    <span><i class="far fa-eye"></i> 41 <i class="fas fa-comments"></i> 22</span>
                  </p>
                </div>
              </div>
              <div className="top-news d-flex">
                <img src={img3} alt="" />
                <div className="top-content ps-2 pe-2">
                  <h6>
                    Nat Sciver admits England missed experienced players after
                    defeat to New Zealand
                  </h6>
                  <p className="justify-content-between d-flex">
                    <span>11 JUL 2021</span>
                    <span><i class="far fa-eye"></i> 41 <i class="fas fa-comments"></i> 22</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
