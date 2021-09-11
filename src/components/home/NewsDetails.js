import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../home/Navbar';
import Header from './Header';
const NewsDetails = () => {
    const [article, setArticle] = useState([])
    const { id } = useParams();
    
    useEffect(() => {

        fetch(`http://localhost:4000/articles`)
            .then(res => res.json())
            .then(json => {
                if (json) {
                    let article = json.find((article) => {
                        return article._id === id
                    });
                    setArticle(json);
                }
            });

    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <Header />
                <Navbar />
            </div>
            <div className="row align-items-center justify-content-center">
                <img src={article.image} alt="" />
                <div className="col-md-10">
                    <div className="card">
                        <div className="card-header">
                            News Details
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{article.title}</h5>
                            <p className="card-text">{article.article}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;