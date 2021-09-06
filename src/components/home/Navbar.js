import React, { useState } from "react";
import '../../styles/header.css';
const Navbar = () => {
  const [res, setRes] = useState(false);
  
  return (
    <div className={res?'topnav responsive':'topnav'} id="myTopnav">
    <a href="#home" class="active"> HOME</a>
    <a href="#news">BUSINESS</a>
    <a href="#contact">TECHNOLOGY</a>
    <a href="#about">EDUCATION</a>
    <a href="#about">POLITICS</a>
    <a href="#about">PEOPOLES</a>
    <a href="#about">MEDIA</a>
    <a href="#about">PAGES</a>
    <a href="#about">BLOG</a>
    <a href="#about">ABOUT</a>
    <a href={void(0)} class="icon" onclick={()=>setRes(true)}>
      <i class="fa fa-bars"></i>
    </a>
  </div>
  );
};

export default Navbar;
