"use client";
import classes from "./Description.module.scss";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

const Description = () => {
  return (
    <p className={classes.description}>
      <PriorityHighIcon />
      Outdated events will be automaticlly removed , so you do not need to worry
      about it !
    </p>
  );
};

export default Description;
