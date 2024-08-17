import "./AboutContentStyles.css"
import Photo1 from "../assets/5.jpg"
import Photo2 from "../assets/14.png"

import { Link } from "react-router-dom";
import React from 'react'

const AboutContent = () => {
return  (
    <div classname="about">
        <div className="left">
            <h1> Who am I </h1>
            <br/>
            <p> I am a young enthusiast who is keen on IT and anything about it since my first steps to High School. <br/>
            During the past few years, I gained lots of experience in this field due to the strong desire of becoming <br/>
            an expert in my field. I'm pretty swift at learning new technologies which has contributed to my adaptive skills, <br/>
            easily adapting to new environments and new tech. <br/></p>
            <p> “For me, frontend development is more than coding. It's a canvas with a blank page and I am the artist to paint <br/>
            it with colors of coding. NOW! WHAT DO YOU WANT ME TO PAINT?”.</p>
            <br/>

            <Link to="/Contact">
            <button className="btn"> Contact </button>
            </Link>
        </div>

            <div className="right">
                <div className="image-container">
                    <div className="img-stag top">
                        <img src={Photo1} className="img" alt="Photo1 "/>
                    </div>

                    <div className="img-stag bottom">
                        <img src={Photo2} className="img" alt="Photo2 "/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutContent;