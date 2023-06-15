import { Feature } from "@/types/Feature";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EventIcon from "@mui/icons-material/Event";
import GradeIcon from "@mui/icons-material/Grade";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export const features: Feature[] = [
  {
    title: "Lesson Plan",
    description: "You are able to add your lesson plan and manage him",
    icon: CalendarTodayIcon,
  },
  {
    title: "Events",
    description: "You are able to add upcoming events like : tests , homeworks , oral answer etc.. ",
    icon: EventIcon,
  },
  {
    title: "Grade Managment",
    description: "You are able to add grades to each subject with category and libra",
    icon: GradeIcon,
  },
  {
    title: "Analythics",
    description: "You can use our analythic program which will tell you about projected end notes etc..",
    icon: TrendingUpIcon,
  },
  {
    title: "Notifications",
    description: "We can send you an email when you want remainder",
    icon: NotificationsNoneIcon,
  },
];
