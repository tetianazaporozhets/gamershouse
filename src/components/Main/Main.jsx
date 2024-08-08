import React, { memo } from "react";
import styles from "./Main.module.scss";
import MySlider from "../MySlider/MySlider";

const Main = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Gamer’s house</h1>
      <MySlider />
    </div>
  );
};

export default memo(Main);
