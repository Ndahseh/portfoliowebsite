import "./FooterStyles.css";
import React from 'react';
import {FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <h4><FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    <p>Residence Kotto</p>
                    <p>Douala</p></h4>
                  </div>
                
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    <p>+237 676031722</p>
                    <p>+237 698426110</p></h4>
                </div>

                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    <p>fofungtumndahseh@gmail.com</p></h4>

                </div>

            </div>

            <div className="right">
                <h4>About the company</h4>
                <p>This is Fofungtum Ndahseh. CEO and Founder of NdahsTech. 
                    I enjoy discusing new projects and design challenges.</p>
                <div className="social">
                    <FaFacebook
                      size={30}
                      style={{color: "#fff", marginRight: "1rem"}}
                      />
                      <FaTwitter
                      size={30}
                      style={{color: "#fff", marginRight: "1rem"}}
                      />
                      <FaInstagram
                      size={30}
                      style={{color: "#fff", marginRight: "1rem"}}
                      />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
