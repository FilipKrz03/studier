import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AppsIcon from "@mui/icons-material/Apps";
import GradeIcon from "@mui/icons-material/Grade";
import InsightsIcon from "@mui/icons-material/Insights";

export const dashboard: { title: string; icon: any; link: string }[] = [
  { icon: AppsIcon, title: "Main", link: "/dashboard" },
  { icon: CalendarMonthIcon, title: "Scheadule", link: "/dashboard/scheadule" },
  { icon: GradeIcon, title: "Grades", link: "/dashboard/grades" },
  { icon: InsightsIcon, title: "Analythics", link: "/dashboard/analythics" },
];
