import React, { useEffect, useState } from "react";
import "../../styles/hero.css";
import AllNews from "./AllNews";
import MainNews from "./MainNews";
import SlidingBanner from "./SlidingBanner";

const HeroSection = () => {
  const [articles, setArticles] = useState([])
  const reduceArticles = [];
  useEffect(() => {
    fetch(`http://localhost:4000/articles/?results=6`)
      .then(res => res.json())
      .then(json => {
        json.forEach(articles => {
          if (reduceArticles.length < 6) {
            reduceArticles.push(articles);
          }
        });
        setArticles(reduceArticles);
      });
  }, []);
  console.log(articles);
  return (
    <div className="container-fluid g-0 m-0 p-0">
      <div className="row hero-section g-0">
        <div className="col-md-11 hero-container">
          <div className="row g-0">
            <div className="col-md-12 d-flex align-items-center">
              <div className="label col-md-4"><span>Top Topics</span></div>
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="row">
            <div className="col-md-8 carousel-banner px-3 g-0">
              <SlidingBanner /><hr/>
              <div className="row all-news mt-3">

                {
                  articles.map((article) => <AllNews article={article}></AllNews>)
                }

              </div>
              <div className="row">
                <h5>Main News</h5>
                <div className="col-md-12">
                  <div className="row">
                    {
                      articles.map((article) => <MainNews article={article}></MainNews>)
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 g-0 px-4 border">
              <h5 className="top-news-heading">Top News</h5>
              <div>
                {
                  articles.map((article) =>
                    <div className="top-news d-flex">
                      <img src={`data:image/png;base64,${article.image.img}`} alt="" className="img-fluid" />
                      <div className="top-content ps-2 pe-2">
                        <h6>
                          {article.title}
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
