import CloseIcon from "@mui/icons-material/Close";
import classes from './DelateConfrimer.module.scss';

type Props = {
  onConfirm: () => void;
  onRefuse: () => void;
  item: string;
};

const DelateConfrimer = ({ onConfirm, onRefuse, item }: Props) => {
  return (
    <div className={classes.confrimer}>
      <CloseIcon onClick={onRefuse} className={classes.icon} fontSize="large" />
      <h3>Are you sure that you want to delate this {item} from plan ? </h3>
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
