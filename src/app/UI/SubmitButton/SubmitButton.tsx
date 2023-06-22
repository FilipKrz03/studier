import classes from "./SubmitButton.module.scss";

type Params = {
  description: string;
};

const SubmitButton = ({ description }: Params) => {
  return (
    <button className={classes.btn} type="submit">
      {description}
    </button>
  );
};

export default SubmitButton;
