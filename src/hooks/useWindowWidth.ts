import { useEffect, useState } from "react";
const useWindowWidth = () => {
  const [windowWidth, setWindowwidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowwidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};

export default useWindowWidth;
