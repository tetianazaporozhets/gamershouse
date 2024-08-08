import { memo } from "react";
import styles from "./ButtonLoad.module.scss";

const ButtonLoad = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Load more
    </button>
  );
};

export default memo(ButtonLoad);
