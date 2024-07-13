import { memo } from "react";
import "./ButtonLoad.css";

const ButtonLoad = ({ onClick }) => {
  return (
    <button className="button__load" onClick={onClick}>
      Load more
    </button>
  );
};

export default memo(ButtonLoad);
