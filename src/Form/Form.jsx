import { useState } from "react";
import { useForm } from "react-hook-form";
import './Form.css';

function Form() {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    await delay(2);

    if (data.username !== "shubham") {
      setError("myform", { message: "Username is invalid" });
    }
    if (data.username === "rohan") {
      setError("blocked", { message: "You have been blocked" });
    }
  };

  return (
    <>
      {isSubmitting && <div className="loading">Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 3,
                message: "Minimum length is 3",
              },
              maxLength: {
                value: 13,
                message: "Maximum length is 13",
              },
            })}
            type="text"
            placeholder="Enter your username"
          />
          {errors.username && <div>{errors.username.message}</div>}

          <label htmlFor="password">Password</label>
          <input
            id="password"
            {...register("password", {
              minLength: {
                value: 3,
                message: "Minimum length is 3",
              },
            })}
            type="password"
            placeholder="Enter your password"
          />
          {errors.password && <div>{errors.password.message}</div>}

          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myform && <div>{errors.myform.message}</div>}
          {errors.blocked && <div>{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  );
}

export default Form;
