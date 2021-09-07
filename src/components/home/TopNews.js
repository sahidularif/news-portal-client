import React from 'react';

const TopNews = (props) => {
    const{author, title, category, image, article} = props.art;
    return (
        <div className="top-news d-flex">
            <img src="" alt="" className="img-fluid" />
            <div className="top-content ps-2 pe-2">
                <h6>
                   {title}
                </h6>
                <p className="justify-content-between d-flex">
                    <span>11 JUL 2021</span>
                    <span><i class="far fa-eye"></i> 41 <i class="fas fa-comments"></i> 22</span>
                </p>
            </div>
        </div>
    );
};

export default TopNews;