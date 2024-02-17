"use client";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 6000);
  }, []);
  return (
    <div
      className={`${styles.loader_bg} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    >
      <div>
        <Image
          src={"/images/svg/loader.svg"}
          alt="loader"
          width={200}
          height={200}
        />
        <br />
        <TypeAnimation
          sequence={["SXF BUILDING GROUP", 6000]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "1.8em",
            display: "inline-block",
            color: "#0088ff",
          }}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default Loader;
