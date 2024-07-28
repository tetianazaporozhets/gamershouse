import React, { memo } from "react";
import styles from "./ButtonPayment.module.scss";

const ButtonPayment = () => {
  return <button className={styles.button}>Go to payment</button>;
};

export default memo(ButtonPayment);
