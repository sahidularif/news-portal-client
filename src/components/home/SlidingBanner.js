import React, { useEffect, useState } from "react";
import "../../styles/hero.css";

const SlidingBanner = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/articles')
      .then(res => res.json())
      .then(data => {
        setArticles(data);
      })
  }, []);
  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div class="carousel-inner">
      
          
            <div class="carousel-item active" data-bs-interval="10000">
              <img src={`data:image/png;base64,${articles[0]?.image.img}`} class="d-block w-100 img-fluid" alt="news" />
              <div class="carousel-caption d-none d-md-block">
                <h6>{articles[0]?.title} </h6>
                {/* <p>Some representative placeholder content for the first slide.</p> */}
              </div>
            </div>
          
        
        {
          articles.map((article) =>
            <div class="carousel-item" data-bs-interval="10000">
              <img src={`data:image/png;base64,${article.image.img}`} class="d-block w-100 img-fluid" alt="news" />
              <div class="carousel-caption d-none d-md-block">
                <h6>{article.title} </h6>
                {/* <p>{article.article}</p> */}
              </div>
            </div>
          )
        }
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default SlidingBanner;
