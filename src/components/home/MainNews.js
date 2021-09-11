import React from 'react';
import { Link } from 'react-router-dom';

const MainNews = (props) => {
    const { author, title, category, image, article, _id} = props.article;
    return (
        <div className="col-md-6 main-news">
            <div className="card" style={{ width: '22rem' }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <Link to={`article/` + _id } className="btn btn-primary">Read more</Link>
                </div>
            </div>
        </div>
    );
};

export default MainNews;
