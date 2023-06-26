"use client";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import classes from "./LoadingBody.module.scss";

const LoadingBody = () => {
  return (
    <div className={classes.loading}>
      <CircularProgress color="secondary"/>
    </div>
  );
};

export default LoadingBody;
