import React from "react";
import styles from "./ButtonRegister.module.scss";

const ButtonRegister = ({ onClick }) => {
  return (
    <button className={styles.button} type="submit" onClick={onClick}>
      Register
    </button>
  );
};

export default ButtonRegister;
