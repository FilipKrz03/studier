import classes from "./TimeItem.module.scss";

const TimeItem = () => {
  return (
    <div className={classes["time-item"]}>
      <div className={classes.line} />
      <div className={classes.line} />
    </div>
  );
};

export default TimeItem;
