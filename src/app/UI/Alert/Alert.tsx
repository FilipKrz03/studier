"use client";
import ErrorIcon from "@mui/icons-material/Error";
import classes from "./Alert.module.scss";

type Params = {
  alertMessage: string;
};

const Alert = ({ alertMessage }: Params) => {
  return (
    <div className={classes.alert}>
      <ErrorIcon className={classes.icon} />
      <p>{alertMessage}</p>
    </div>
  );
};

export default Alert;
