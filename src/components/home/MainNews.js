import React from 'react';
import { Link } from 'react-router-dom';

const MainNews = (props) => {
    const { author, title, category, image, article, _id} = props.article;
    return (
        <div className="col-md-6 main-news">
            <div class="card" style={{ width: '22rem' }}>
                <img src={`data:image/png;base64,${image.img}`} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <Link to={`article/` + _id } class="btn btn-primary">Read more</Link>
                </div>
            </div>
        </div>
    );
};

export default MainNews;
{/* <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route> */}