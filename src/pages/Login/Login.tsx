import "../../sass/_typography.scss";
import styles from "./Login.module.scss";
import clsx from "classnames"
import { Outlet } from "react-router-dom";

export const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
export const USER_FULLNAME = /^[a-zA-Z]+(?:[\s' -][a-zA-Z]+)*$/;
export const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@$%]).{8,}$/;
export const EMAIL_REGEX = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

const Login = () => {
  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.image}></div>
      <div className={clsx(styles.iconContainer,"text")}>Logo</div>
      <div className={styles.loginFormContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default Login;
