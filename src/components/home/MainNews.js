import React from 'react';

const MainNews = (props) => {
    const { author, title, category, image, article } = props.article;
    return (
        <div className="col-md-6">
            <div class="card" style={{width: '22rem'}}>
                <img src={`data:image/png;base64,${image.img}`} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default MainNews;