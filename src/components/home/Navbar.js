import React, { useState } from "react";
import '../../styles/header.css';
const Navbar = () => {
  const [res, setRes] = useState(false);
  
  return (
    <div className={res?'topnav responsive':'topnav'} id="myTopnav">
    <a href="/" className="active"> HOME</a>
    <a href="/news">BUSINESS</a>
    <a href="/contact">TECHNOLOGY</a>
    <a href="/education">EDUCATION</a>
    <a href="/politics">POLITICS</a>
    <a href="/peoples">PEOPOLES</a>
    <a href="/media">MEDIA</a>
    <a href="/pages">PAGES</a>
    <a href="/blog">BLOG</a>
    <a href="/about">ABOUT</a>
    <a href="/dashboard" className="admin-btn text-end">Dashboard</a>
    
    <a href={void(0)} className="icon" onClick={()=>setRes(true)}>
      <i className="fa fa-bars"></i>
    </a>
  </div>
  );
};

export default Navbar;
