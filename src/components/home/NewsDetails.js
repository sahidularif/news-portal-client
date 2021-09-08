import React from 'react';
import Navbar from '../home/Navbar';
import Header from './Header';
const NewsDetails = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Header />
                <Navbar />
            </div>
            <div className="row">
                <div className="col-md-10">
                    <div class="card">
                        <div class="card-header">
                            News Details
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewsDetails;