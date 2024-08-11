import React, { memo } from "react";
import style from "./SignUp.module.scss";
import ReactHookForm from "../../components/ReactHookForm/ReactHookForm";

const SignUp = () => {
  return (
    <div className={style.registration}>
      <h2>Sign up</h2>
      <ReactHookForm />
    </div>
  );
<<<<<<< HEAD
  //  <div>
  //    <Link to="/signup">
  //      <img className="signup__icon" src={SignUpIcon} alt="" />
  //      Sign up
  //    </Link>
  //  </div>
=======
>>>>>>> mentor/main
};

export default memo(SignUp);
