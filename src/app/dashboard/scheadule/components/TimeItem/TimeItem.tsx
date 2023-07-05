import classes from "./TimeItem.module.scss";

type Props = {
  children:React.ReactNode
}

const TimeItem = ({children}:Props) => {
  return (
    <div className={classes["time-item"]}>
      <div className={classes.line} />
      <div className={classes.line} />
      {children}
    </div>
  );
};

export default TimeItem;
