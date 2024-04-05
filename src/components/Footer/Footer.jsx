import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          At Style Lounge, we believe that fashion is not just about what you wear; 
          it's about how it makes you feel. Established with a passion for style and 
          comfort, we curate a collection of casual fits that seamlessly blend comfort 
          with contemporary trends.
          Our journey began with a simple idea: to provide fashion-forward individuals
          with versatile pieces that effortlessly transition from day to night. 
          With a focus on quality and affordability, we handpick each item, 
          ensuring that every piece reflects our commitment to comfort and craftsmanship.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Please feel free to email us at:
            stylelounge04@gmail.com
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Style Lounge</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;


