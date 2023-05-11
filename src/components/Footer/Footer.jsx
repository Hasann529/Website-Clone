import React from "react";
import "./Footer.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <div>
          <p>Our Address</p>
          <span>
            EM-Kitchen-5/East Building, Rani Kamlapati Railway Station, Habib
            Ganj, Bhopal, Madhya Pradesh 462023
          </span>
        </div>
        <div>
          <p>Opening Hours</p>
          <span>Mon - Sun 10:00 AM - 11:30 PM</span>
        </div>
        <div>
          <p>Contact Us</p>
          <span>Email : info@toneopeats.com Phone: 7400989898</span>
        </div>
      </div>
      <div></div>
      <div>
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
        <LinkedInIcon />
        <YouTubeIcon />
      </div>
      <div>© Copyright All rights reserved by TONEOPEATS</div>
    </div>
  );
};

export default Footer;
