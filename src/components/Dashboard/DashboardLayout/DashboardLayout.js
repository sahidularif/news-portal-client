import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import '../../../styles/dashboard.css';
import SideNav from "./SideNav";
const DashboardLayout = (props) => {
  return (
    <div className="container-fluid mx-0 px-0 gx-0">
      <div className="row mx-0 px-0 gx-0">
        <div className="col-md-3">
          <SideNav />
        </div>
        <div className="col-md-9 right-side">
          <div className="row justify-content-end main-container gx-0">
            <div className="header">
              <a href="/" className="logo">
                {props.title}
              </a>
              {/* <div className="header-right">
                            <a className="active" href="#home">LOG OUT</a>
                        </div> */}
            </div>
          </div>
          <div className="row g-0 m-0">
          {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
