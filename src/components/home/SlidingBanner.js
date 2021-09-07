import React, { useEffect, useState } from "react";
import img1 from "../../images/AAO6Jo5.jpg";
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
    <div
      id="carouselExampleDark"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div class="carousel-inner">
        {
          articles.map(pd =>
            <div class="carousel-item active" data-bs-interval="10000">
              <img src={img1} class="d-block w-100 img-fluid" alt="news" />
              <div class="carousel-caption d-none d-md-block">
                <h5>{pd.title} </h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
          )
        }
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default SlidingBanner;
