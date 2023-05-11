import React from "react";
import "./Hero.scss";
import heroImg from '../../assets/heroImg.jpg'
import Pan from '../../assets/pan.jpg'

const ListArray = [
  "Every dish is prepared in olive oil",
  "No added sugar, color or preservatives",
  "Designed as per calorie requirements",
  "Nutrition and portions planned by expert dieticians",
  "High protein and low carb food",
  "Made with fresh and best quality ingredients",
  "Flexibility of plans",
  "On-time doorstep delivery"
];

const Hero = () => {
  return (
    <div className="hero">
      <div className="banner">
        <img
          src={heroImg}
          alt="hero"
        />
      </div>
      <div className="hero-heading">
        <h1>Health & Taste At</h1>
        <span>Your Doorstep</span>
      </div>
      <div className="hero-info">
        <div className="list">
          {ListArray.map((item,index )=> <div key={index} className="item">
                <img src="./leaf.jpg" alt="leaf" />
               
                 <span>{item}</span>
          </div>)}
        </div>
        <div className="pan">
          <img
            src={Pan}
            alt="panImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
