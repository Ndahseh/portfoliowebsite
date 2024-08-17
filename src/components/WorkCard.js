import "./WorkCardStyles.css";
import pro1 from "../assets/14.png";
import { NavLink } from "react-router-dom";
import React from "react";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

const WorkCard = () => {
  return (
  <div classname="work-container">
      <h1 classname="project-heading"> Projects </h1>
      <div classname="project-container">
        <div classname="project-card" style={{background: '#1a1919'}}>
          <img src={pro1} alt="image" />
          <h2 classname="project-title" style={{color:'white'}} > Project Title</h2>
          <div classname="pro-details">
            <p>Podcast thriving facebook community and top-ranked</p>
            <div className="pro-btns"> 
                    <NavLink to ="url.com" 
                    className="btn"> View 
                    </NavLink>
                    <NavLink to ="url.com" 
                    className="btn"> Source 
                    </NavLink>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default WorkCard;
