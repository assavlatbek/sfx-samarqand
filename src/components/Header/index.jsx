"use client";
import { useRef, useState, useEffect } from "react";
import Magnetic from "@/commons/Magnetic";
import styles from "./styles.module.scss";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-scroll";
import Image from "next/image";

const Header = () => {
  const sliderRef = useRef(null);
  const [headerOpen, setHeaderOpen] = useState(false);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isShrink = window.scrollY > 100;
      setShrink(isShrink);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sliderMouseOver = (e) => {
    const left = e.currentTarget.offsetLeft;
    const width = e.currentTarget.getBoundingClientRect().width;
    console.log(left);
    console.log(width);
    sliderRef.current.style.left = `${left + width / 2}px`;
    sliderRef.current.style.width = `${width}px`;
  };
  const sliderMouseLeave = (e) => {
    sliderRef.current.style.left = `15px`;
    sliderRef.current.style.width = `50px`;
    sliderRef.current.style.height = `3px`;
    sliderRef.current.style.borderRadius = `15px`;
  };
  return (
    <header className={`${styles.header} ${shrink ? styles.shrink : ""}`}>
      <div className="container">
        <nav className={styles.nav}>
          <div ref={sliderRef} className={styles.indicator}></div>
          <div className={styles.nav__logo}>
            <h1 onClick={() => (window.location.href = "/")}>SFX</h1>
          </div>
          <ul className={`${headerOpen ? styles.headerOpen : ""}`}>
            <Link
              href="/"
              to="skills"
              activeClass="activeHeader"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.category}
            >
              <Magnetic>
                <li
                  onMouseEnter={(e) => sliderMouseOver(e)}
                  onMouseLeave={(e) => sliderMouseLeave(e)}
                >
                  Gipermarket
                </li>
              </Magnetic>
            </Link>
            <Link
              href="/"
              activeClass="activeHeader"
              to="experiences"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.category}
            >
              <Magnetic>
                <li
                  onMouseEnter={(e) => sliderMouseOver(e)}
                  onMouseLeave={(e) => sliderMouseLeave(e)}
                >
                  Bank
                </li>
              </Magnetic>
            </Link>
            <Link
              href="/"
              activeClass="activeHeader"
              to="students"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.category}
            >
              <Magnetic>
                <li
                  onMouseEnter={(e) => sliderMouseOver(e)}
                  onMouseLeave={(e) => sliderMouseLeave(e)}
                >
                  Mehmonxonalar
                </li>
              </Magnetic>
            </Link>
            <Link
              href="/"
              activeClass="activeHeader"
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.category}
            >
              <Magnetic>
                <li
                  onMouseEnter={(e) => sliderMouseOver(e)}
                  onMouseLeave={(e) => sliderMouseLeave(e)}
                >
                  Ko'p qavatli xonadonlar
                </li>
              </Magnetic>
            </Link>
            <Link
              href="/courses"
              activeClass="activeHeader"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.category}
            >
              <Magnetic>
                <li
                  onMouseEnter={(e) => sliderMouseOver(e)}
                  onMouseLeave={(e) => sliderMouseLeave(e)}
                >
                  Katejlar
                </li>
              </Magnetic>
            </Link>
            <Link
              href="/"
              activeClass="activeHeader"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.category}
            >
              <Magnetic>
                <li
                  onMouseEnter={(e) => sliderMouseOver(e)}
                  onMouseLeave={(e) => sliderMouseLeave(e)}
                >
                  Pinthouslar
                </li>
              </Magnetic>
            </Link>
            <Link
              href="/"
              activeClass="activeHeader"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.category}
            >
              <Magnetic>
                <li
                  onMouseEnter={(e) => sliderMouseOver(e)}
                  onMouseLeave={(e) => sliderMouseLeave(e)}
                >
                  Bog'
                </li>
              </Magnetic>
            </Link>
            <Link
              href="/"
              activeClass="activeHeader"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.category}
            >
              <Magnetic>
                <li
                  onMouseEnter={(e) => sliderMouseOver(e)}
                  onMouseLeave={(e) => sliderMouseLeave(e)}
                >
                  Maganizlar
                </li>
              </Magnetic>
            </Link>
            <Link
              href="/"
              activeClass="activeHeader"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.category}
            >
              <Magnetic>
                <li
                  onMouseEnter={(e) => sliderMouseOver(e)}
                  onMouseLeave={(e) => sliderMouseLeave(e)}
                >
                  Qurilish Obyektlari
                </li>
              </Magnetic>
            </Link>
            <Link
              href="/"
              activeClass="activeHeader"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.category}
            >
              <Magnetic>
                <li
                  onMouseEnter={(e) => sliderMouseOver(e)}
                  onMouseLeave={(e) => sliderMouseLeave(e)}
                >
                  Biz haqimizda
                </li>
              </Magnetic>
            </Link>
            <Link
              href="/"
              activeClass="activeHeader"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.category}
            >
              <Magnetic>
                <li
                  onMouseEnter={(e) => sliderMouseOver(e)}
                  onMouseLeave={(e) => sliderMouseLeave(e)}
                >
                  Bog'lanish
                </li>
              </Magnetic>
            </Link>
          </ul>
          <div className={styles.nav__actions}>
            <Magnetic>
              <Image
                src={
                  headerOpen ? "/images/png/close.png" : "/images/png/open.png"
                }
                onClick={() => {
                  setHeaderOpen(!headerOpen);
                }}
                alt="menu"
                width={50}
                height={50}
              />
            </Magnetic>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
