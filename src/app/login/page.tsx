import LoginForm from "./components/LoginForm"
import Welcome from "./components/Welcome";
import classes from './page.module.scss';

export default function Login() {
  return (
    <div className={classes.page}>
    <Welcome />
    <LoginForm />
    </div>
  )
}
