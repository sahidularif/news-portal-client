// import logo from '../images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/dashboard.css';
const SideNav = () => {
    return (
        <div className="sidenav-container">
            <div className="row bg-top justify-content-between g-0 align-items-center">
                <div className="col-md-12 brand-icon d-block g-0 border">
                   <h2>TRUTH<span>SPEECH</span></h2>
                   <p>UNCOMPROMISING IN PREACHING THE TRUTH</p>
                </div>
                {/* <div className="col-md-9 ps-2">
                    <h5><strong>Technext HR</strong></h5>
                </div> */}
            </div>
            <div className="sidemenu">
                <ul>
                    <li>
                    <i class="fas fa-user-shield"></i> <b>ADMIN</b>
                        <ul>
                            <li><Link to="/"><i class="fas fa-users"></i> Add Admin</Link></li>
                            <li><Link to="/addEmployee"><i class="fas fa-user-plus"></i> Post Article</Link></li>                            
                        </ul>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
};

export default SideNav;