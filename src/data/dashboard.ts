import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AppsIcon from "@mui/icons-material/Apps";
import GradeIcon from "@mui/icons-material/Grade";
import InsightsIcon from "@mui/icons-material/Insights";
import SeventeenMpIcon from "@mui/icons-material/SeventeenMp";

export const dashboard: { title: string; icon: any; link: string }[] = [
  { icon: AppsIcon, title: "Main", link: "/dashboard" },
  { icon: CalendarMonthIcon, title: "Scheadule", link: "/dashboard/scheadule" },
  { icon: GradeIcon, title: "Grades", link: "/dashboard/grades" },
  { icon: SeventeenMpIcon, title: "Events", link: "/dashboard/events" },
  { icon: InsightsIcon, title: "Analythics", link: "/dashboard/analythics" },
];
