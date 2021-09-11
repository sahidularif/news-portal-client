import React from 'react';

const AllNews = (props) => {
    const { author, title, category, image, article } = props.article;
    return (
        <div className="col-md-6">
            <div className="top-news d-flex align">
                <img src={image} alt="" className="img-fluid" />
                <div className="top-content ps-2 pe-2">
                    <h6>
                        {title}
                    </h6>
                    <p className="justify-content-between d-flex">
                        <span>11 JUL 2021</span>
                        <span><i className="far fa-eye"></i> 41 <i className="fas fa-comments"></i> 22</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AllNews;