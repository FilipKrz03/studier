import HeroContainer from "./components/HeroContainer/HeroContainer";
import classes from "./page.module.scss";

export const metadata = {
  title: "Dashboard",
  description: "Studier Aplication",
};

export default function Dashboard() {
  return (
    <div className={classes["page-container"]}>
      <HeroContainer />
    </div>
  );
}
