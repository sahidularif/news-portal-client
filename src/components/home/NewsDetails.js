import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../home/Navbar';
import Header from './Header';
const NewsDetails = () => {
    const [article, setArticle] = useState([])
    const { _id } = useParams();
    useEffect(() => {

        fetch(`https://aqueous-fortress-58437.herokuapp.com/articles`)
            .then(res => res.json())
            .then(json => {
                let data = json.find((article) => {
                    return article._id === _id
                });
                setArticle(data);
            });

    }, []);
    return (
        <div className="container-fluid">
            <div className="row">
                <Header />
                <Navbar />
            </div>
            <div className="row align-items-center justify-content-center">

                <div className="col-md-10">
                    <div class="card mb-3">
                        <img src={article.image} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{article.title}</h5>
                            <p class="card-text">{article.article} </p>
                            <p class="card-text">
                                <small className="text-primary">Published by: {article.author}</small><br/>
                                <small className="text-muted">Posted 3 mins ago</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;