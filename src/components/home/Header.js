import React from "react";
import "../../styles/header.css";
const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row d-flex header-container p-3">
        <div className="col-md-6 col-xs-12 brand-bar text-start">
          
          <h2>
            TRUTH<span>SPEECH</span>
          </h2>
          <p>Uncompromising in preaching the truth</p>
         
        </div>
        <div className="col-md-6">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Archive search: Enter title"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span class="input-group-text" id="basic-addon2">
            <i class="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
