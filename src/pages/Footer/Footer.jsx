import React from "react";
import { Link } from "react-router-dom";
import PixlIcon from "../../assets/icons/pixl.svg";
import "./Footer.css";
import FooterIcon1 from "../../assets/icons/footerIcon1.svg";
import FooterIcon2 from "../../assets/icons/footerIcon2.svg";
import FooterIcon3 from "../../assets/icons/footerIcon3.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__icons">
        <img src={FooterIcon2} className="footer__icon" alt="FooterIcon2" />
        <img src={FooterIcon1} className="footer__icon" alt="FooterIcon1" />
        <img src={FooterIcon3} className="footer__icon" alt="FooterIcon3" />
      </div>
      <div className="footer__block container">
        <img src={PixlIcon} alt="" />
        <ul className="footer__list">
          <Link className="footer__item">F.A.Q</Link>
          <Link className="footer__item">Privacy</Link>
          <Link className="footer__item">About Us</Link>
          <Link className="footer__item">Refund policy</Link>
        </ul>
        <div>+48 556677889</div>
      </div>
    </div>
  );
};

export default Footer;
