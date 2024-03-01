import styles from "./SignIn.module.scss";
import "../../../sass/_typography.scss";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "../Login";
import { Link } from "react-router-dom";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = async () => {};

  return (
    <form className="signInContainer" onSubmit={handleSubmit(onSubmit)}>
      <div className="signInInputs">
        <h2 className="title2">Sign in</h2>
        <label className="text text_label">Email</label>
        <div>
          <input
            placeholder="Enter your email"
            {...register("email", { required: true, pattern: EMAIL_REGEX })}
            className={`${errors.email && "inputError"}`}
          />
          <p
            className={errors.email ? "text_label text_error errors" : "hidden"}
          >
            {errors.email?.type === "pattern"
              ? "Invalid email"
              : "email is required"}
          </p>
        </div>
        <label className="text text_label">Password</label>
        <div>
          <input
            placeholder="Enter your password"
            {...register("password", { required: true, pattern: /^.{4,}$/ })}
            className={`${errors.password && "inputError"}`}
          />
          <p
            className={
              errors.password ? "text_label text_error errors" : "hidden"
            }
          >
            {errors.password?.type === "pattern"
              ? "Invalid password"
              : "password is required"}
          </p>
        </div>
        <Link className="text text_forgotPassword" to={"/login/forgot"}>
          Forgot your password?
        </Link>
      </div>
      <div>
        <button>Sign In</button>
        <p className="text text_normal">
          Dont have an account?{" "}
          <Link to={"/login/signup"} className="text text_normal">
            Create one
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignIn;
