import React from "react";
import { Link } from "react-router-dom";
import style from "./Breadcrumbs.module.scss";

const Breadcrumbs = ({ goBack }) => {
  return (
    <ul className={style.list}>
      <li className={style.item}>
        <Link className={style.link} to="/" onClick={goBack}>
          Homepage
        </Link>
      </li>
      <li className={style.item}>Product</li>
    </ul>
  );
};

export default Breadcrumbs;
