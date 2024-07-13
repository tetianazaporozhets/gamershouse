import React, { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import PixlIcon from "../../assets/icons/pixl.svg";
import "./Footer.css";
import FooterIcon1 from "../../assets/icons/footerIcon1.svg";
import FooterIcon2 from "../../assets/icons/footerIcon2.svg";
import FooterIcon3 from "../../assets/icons/footerIcon3.svg";

const Footer = () => {
  const navigate = useNavigate();
  const handleIconClick = () => {
    navigate("/home");
  };
  return (
    <div className="footer">
      <div className="footer__icons">
        <img src={FooterIcon2} className="footer__icon" alt="FooterIcon2" />
        <img src={FooterIcon1} className="footer__icon" alt="FooterIcon1" />
        <img src={FooterIcon3} className="footer__icon" alt="FooterIcon3" />
      </div>
      <div className="footer__block container">
        <img
          className="footer__icon"
          src={PixlIcon}
          alt=""
          onClick={handleIconClick}
        />
        <ul className="footer__list">
          <Link className="footer__item">F.A.Q</Link>
          <Link className="footer__item">Privacy</Link>
          <Link className="footer__item">About Us</Link>
          <Link className="footer__item">Refund policy</Link>
        </ul>
        <a className="footer__phone-number" href="tel:+48556677889">
          +48 556 677 889
        </a>
      </div>
    </div>
  );
};

export default memo(Footer);
