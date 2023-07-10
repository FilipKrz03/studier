import classes from "./DelateConfrimer.module.scss";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  onConfirm: () => void;
  onRefuse: () => void;
};

const DelateConfrimer = ({ onConfirm, onRefuse }: Props) => {
  return (
    <div className={classes.confrimer}>
      <CloseIcon onClick={onRefuse} className={classes.icon} fontSize="large" />
      <h3>Are you sure that you want to delate this lesson from plan ? </h3>
      <div className={classes.buttons}>
        <button className={classes.confirm} onClick={onConfirm}>
          Yes
        </button>
        <button className={classes.refuse} onClick={onRefuse}>
          No
        </button>
      </div>
    </div>
  );
};

export default DelateConfrimer;
