import React, { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import PixlIcon from "../../assets/icons/pixl.svg";
import styles from "./Footer.module.scss";
import FooterIcon1 from "../../assets/icons/footerIcon1.svg";
import FooterIcon2 from "../../assets/icons/footerIcon2.svg";
import FooterIcon3 from "../../assets/icons/footerIcon3.svg";

const Footer = () => {
  const navigate = useNavigate();
  const handleIconClick = () => {
    navigate("/home");
  };
  return (
    <div className={styles.footer}>
      <div className={styles.icons}>
        <img src={FooterIcon2} alt="FooterIcon2" />
        <img src={FooterIcon1} alt="FooterIcon1" />
        <img src={FooterIcon3} alt="FooterIcon3" />
      </div>
      <div className={`${styles.block} container`}>
        <img
          className={styles.logo}
          src={PixlIcon}
          alt=""
          onClick={handleIconClick}
        />
        <ul className={styles.list}>
          <Link className={styles.item}>F.A.Q</Link>
          <Link className={styles.item}>Privacy</Link>
          <Link className={styles.item}>About Us</Link>
          <Link className={styles.item}>Refund policy</Link>
        </ul>
        <a className={styles.phone__number} href="tel:+48556677889">
          +48 556 677 889
        </a>
      </div>
    </div>
  );
};

export default memo(Footer);
