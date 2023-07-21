import classes from "./Error.module.scss";

const Error = () => {
  return (
    <div className={classes.error}>
      Failed to add data ! after reload progress will be lost
      <div className={classes.bar} />
    </div>
  );
};

export default Error;
