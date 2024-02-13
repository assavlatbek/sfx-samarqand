"use client";
import { useEffect, useState } from "react";
import "./style.css";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 6000);
  }, []);
  return (
    <div className={`loader-bg ${isVisible ? "visible" : "hidden"}`}>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
