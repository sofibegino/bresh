import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
const Footer = () => {

  return (
    <footer className="center">
    <div id="copyright">
      <p>Bresh</p>
      <Link to={{ pathname: "https://www.instagram.com/fiestabresh/" }} target="_blank" style={{ marginRight: '2%' }}>
        <i class="fa fa-instagram" style={{ color: 'white' }}></i></Link>
      <Link to={{ pathname: "http://www.fiestabresh.com/" }} target="_blank" style={{ color: 'white', textDecoration: 'none' }} >
        <p>www.fiestabresh.com</p></Link>
    </div>
  </footer>
  );
};

export default Footer;
