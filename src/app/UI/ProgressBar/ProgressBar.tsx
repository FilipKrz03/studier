"use client";
import ProgressBar from "next-nprogress-bar";
import { useTheme } from "next-themes";
const ProgressBarPage = () => {
  const { theme } = useTheme();
  const color = theme === "light" ? "#00253e" : "#f2f2f2";

  return (
    <ProgressBar
      height="4px"
      color={color}
      options={{ showSpinner: false }}
      shallowRouting
      appDirectory={true}
    />
  );
};

export default ProgressBarPage;
