import React, { memo } from "react";
import "./ReactHookForm.css";
import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  const { register, handleSubmit, formState, getValues } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const handleSubmitForm = () => {
    console.log("Form submit");
  };
  return (
    <form className="form" onSubmit={handleSubmit(handleSubmitForm)} action="">
      <div className="form__field">
        <label htmlFor="name">Name</label>
        <input
          className="form__input"
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
          <p className="error-message">{formState.errors.name.message}</p>
        )}
      </div>
      <div className="form__field">
        <label htmlFor="email">Email adress</label>
        <input
          className="form__input"
          {...register("email", { required: "Field is required" })}
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
        />
        {formState.errors.email && (
          <p className="error-message">{formState.errors.email.message}</p>
        )}
      </div>
      <div className="form__field">
        <label htmlFor="password">Password</label>
        <input
          className="form__input"
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
          <p className="error-message">{formState.errors.password.message}</p>
        )}
      </div>
      <div className="form__field">
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          className="form__input"
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
          <p className="error-message">
            {formState.errors.confirmPassword.message}
          </p>
        )}
      </div>
      <button className="form__button" type="submit">
        Register
      </button>
    </form>
  );
};

export default memo(ReactHookForm);
