import React, { useEffect, useState } from "react";
import "../../styles/hero.css";
import AllNews from "./AllNews";
import MainNews from "./MainNews";
import SlidingBanner from "./SlidingBanner";

const HeroSection = () => {
  const [articles, setArticles] = useState([])
  const [topNews, setTopNews] = useState([])
  const [category, setCategory] = useState(null)
  const [selectedArticle, setSelectedArticle] = useState([])
  const [mainArticles, setMainArticles] = useState([])  
  const handleCategory = (e) => {
    setCategory(e.target.value)
  }
  useEffect(() => {
    //
    fetch(`https://aqueous-fortress-58437.herokuapp.com/articles/?results=3`)
    .then(res => res.json())
    .then(json => {
      const reduceArticles = [];
      json.forEach(articles => {
        if (reduceArticles.length < 3) {
          reduceArticles.push(articles);
        }
      });
      setTopNews(reduceArticles);
    });

    fetch(`https://aqueous-fortress-58437.herokuapp.com/articles/?results=6`)
      .then(res => res.json())
      .then(json => {
        const reduceArticles = [];
        json.forEach(articles => {
          if (reduceArticles.length < 6) {
            reduceArticles.push(articles);
          }
        });
        setArticles(reduceArticles);
      });
    // selected articles
    fetch(`https://aqueous-fortress-58437.herokuapp.com/articles`)
      .then(res => res.json())
      .then(json => {
        if (category) {
          let article = json.filter((article) =>{
            return article.category == category;
          });
          setSelectedArticle(article);
        }
        if(!category) {
          setSelectedArticle(json);
        }
      });
   
  }, []);

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
              <SlidingBanner /><hr />
              <div className="row all-news mt-3">
                {
                  articles.map((article) => <AllNews article={article}></AllNews>)
                }
              </div>
              <div className="row main-news-container">
                <h4 className="d-flex justify-content-between">Main News <span>
                  <form className="row gy-2 gx-3 align-items-center">
                    <div className="col-auto">
                      <label className="visually-hidden" for="autoSizingSelect">Preference</label>
                      <select className="form-select" id="autoSizingSelect" onChange={handleCategory}>
                        <option selected>Select Article Category</option>
                        <option value="business">Business</option>
                        <option value="technology">Technology</option>
                        <option value="politics">Politics</option>
                        <option value="sports">Sports</option>
                      </select>
                    </div>
                  </form>
                </span></h4>
                <div className="col-md-12">
                  <div className="row">
                    {
                      selectedArticle.map((article) => <MainNews article={article}></MainNews>)
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 g-0 px-4 border">
              <h5 className="">Top News</h5>
              <div>
                {
                  topNews.map((article, id) =>
                    <div className="top-news d-flex" key={id}>
                      <img src={article.image} alt="" className="img-fluid" />
                      <div className="top-content ps-2 pe-2">
                        <h6>
                          {article.title}
                        </h6>
                        <p className="justify-content-between d-flex">
                          <span>11 JUL 2021</span>
                          <span><i className="far fa-eye"></i> 41 <i className="fas fa-comments"></i> 22</span>
                        </p>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
