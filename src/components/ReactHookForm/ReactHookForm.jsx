import React, { memo } from "react";
import style from "./ReactHookForm.module.scss";
import { useForm } from "react-hook-form";
import ButtonRegister from "../ButtonRegister/ButtonRegister";
import { useNavigate } from "react-router-dom";

const ReactHookForm = () => {
  const { register, handleSubmit, formState, getValues } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = () => {
    console.log("Form submit");
    navigate("/thank-you");
  };
  const onError = (errors) => {
    console.log("Form errors", errors);
  };

  return (
    <form
      className={style.form}
      onSubmit={handleSubmit(onSubmit, onError)}
      action=""
    >
      <div className={style.field}>
        <label htmlFor="name">Name</label>
        <input
          className={style.input}
          {...register("name", {
            required: "Field is required",
            minLength: {
              value: 2,
              message: "Field must be at least 2 characters long",
            },
          })}
          type="text"
          id="name"
          name="name"
          placeholder="Enter name"
        />
        {formState.errors.name && (
          <p className={style.error__message}>
            {formState.errors.name.message}
          </p>
        )}
      </div>
      <div className={style.field}>
        <label htmlFor="email">Email adress</label>
        <input
          className={style.input}
          {...register("email", { required: "Field is required" })}
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
        />
        {formState.errors.email && (
          <p className={style.error__message}>
            {formState.errors.email.message}
          </p>
        )}
      </div>
      <div className={style.field}>
        <label htmlFor="password">Password</label>
        <input
          className={style.input}
          {...register("password", {
            required: "Field is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
        />
        {formState.errors.password && (
          <p className={style.error__message}>
            {formState.errors.password.message}
          </p>
        )}
      </div>
      <div className={style.field}>
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          className={style.input}
          {...register("confirmPassword", {
            required: "Field is required",
            validate: (value) =>
              value === getValues("password") || "The password must match",
          })}
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm password"
        />
        {formState.errors.confirmPassword && (
          <p className={style.error__message}>
            {formState.errors.confirmPassword.message}
          </p>
        )}
      </div>
      <ButtonRegister />
    </form>
  );
};

export default memo(ReactHookForm);
