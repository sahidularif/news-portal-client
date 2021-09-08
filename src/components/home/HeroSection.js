import React, { useEffect, useState } from "react";
import "../../styles/hero.css";
import SlidingBanner from "./SlidingBanner";

const HeroSection = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/articles')
      .then(res => res.json())
      .then(data => {
        setArticles(data);
      })
  }, []);
  console.log(articles);
  const text = [
    {
      name: "arif",
      age: 30
    },
    {
      name: "arif",
      age: 30
    },
    {
      name: "arif",
      age: 30
    },
  ]

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
              <div>
                {
                  articles.map(pd =>
                    <div className="top-news d-flex">
                      <img src={`data:image/png;base64,${pd.image.img}`} alt="" className="img-fluid" />
                      <div className="top-content ps-2 pe-2">
                        <h6>
                          {pd.title}
                        </h6>
                        <p className="justify-content-between d-flex">
                          <span>11 JUL 2021</span>
                          <span><i class="far fa-eye"></i> 41 <i class="fas fa-comments"></i> 22</span>
                        </p>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-12">
              <h1>arif</h1>
              {
                    text.map(pd => 
                      <h1>{pd.name}</h1>
                   )
                }
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
