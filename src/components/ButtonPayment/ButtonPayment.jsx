import React, { memo } from "react";
import "./ButtonPayment.css";

const ButtonPayment = () => {
  return <button className="button__payment">Go to payment</button>;
};

export default memo(ButtonPayment);
