import "./HeroImgStyles.css";
import IntroImg from "../assets/5.jpg";
import { Link } from "react-router-dom";
import React from "react";

const HeroImg = () => {
  return (
    <div className="Hero">
        <div className="mask">
          <img className="Into-Img" src=
          {IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
          <p>HI, I'm FOFUNGTUM NDAHSEH</p>
          <h1>React Developer.</h1>
          <div>
            <Link to="/project" className="btn" >Projects</Link>
          
            <Link to="/contact" className="btn btn-light" >Contact</Link>
          </div>
        </div>
    </div>
  );
}

export default HeroImg;
