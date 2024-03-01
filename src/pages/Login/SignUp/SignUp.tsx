import { useForm } from "react-hook-form";
import "../../../sass/_typography.scss";
import styles from "./SignUp.module.scss";
import { Link } from "react-router-dom";
import { USER_REGEX, PWD_REGEX, EMAIL_REGEX } from "../Login";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  return (
    <form className={styles.signUpContainer} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.signUpinputs}>
        <h2 className="title2">Create your account</h2>
        <label className="text text_label">Fill name and surname</label>
        <div className="inputWrapper">
          <input
            placeholder="Enter your full name"
            {...register("fullname", { required: true, pattern: USER_REGEX })}
            className={`${errors.fullname && "inputError"}`}
          />
          <p
            className={
              errors.fullname ? "text_label text_error errors" : "hidden"
            }
          >
            {errors.fullname?.type === "pattern"
              ? "Invalid fullname"
              : "fullname is required"}
          </p>
        </div>
        <label className="text text_label">Email</label>
        <div className="inputWrapper">
          <input
            placeholder="Enter your email"
            {...register("email", { required: true, pattern: EMAIL_REGEX })}
            className={`${errors.email && "inputError"}`}
          ></input>
          <p
            className={errors.email ? "text_label text_error errors" : "hidden"}
          >
            {errors.email?.type === "pattern"
              ? "Invalid email"
              : "email is required"}
          </p>
        </div>
        <label className="text text_label">Password</label>
        <div className="inputWrapper">
          <input
            placeholder="Enter your password"
            {...register("password", { required: true, pattern: PWD_REGEX })}
            className={`${errors.password && "inputError"}`}
          ></input>
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
      </div>

      <div>
        <button>Sign Up </button>
        <p className="text text_normal">
          Already have an account?
          <Link to={"/login/signin"} className="text text_normal">
            SignIn
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignUp;
