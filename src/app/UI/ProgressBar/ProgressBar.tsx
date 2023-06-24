"use client";
import ProgressBar from "next-nprogress-bar";
const ProgressBarPage = () => {
  return (
    <ProgressBar
      height="4px"
      color="#fc5c7d"
      options={{ showSpinner: false }}
      shallowRouting
      appDirectory={true}
    />
  );
};

export default ProgressBarPage;
