"use client";
import { useRef, useState, useEffect } from "react";
import Magnetic from "@/commons/Magnetic";
import styles from "./style.module.scss";
import { Link } from "react-scroll";
import { BsMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  const sliderRef = useRef(null);
  const [headerOpen, setHeaderOpen] = useState(false);
  const [themeDark, setThemeDark] = useState(false);
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
          <div className={styles.nav__logo}>
            <h1 onClick={() => (window.location.href = "/")}>SXF</h1>
          </div>
          <ul
            className={` ${
              headerOpen ? styles.headerOpen : styles.headerClose
            }`}
          >
            <Link
              href="/"
              to="#"
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
              to="#"
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
              to="#"
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
              to="#"
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
              to="#"
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
              to="#"
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
              to="#"
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
              to="#"
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
              to="#"
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
              to="#"
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
              <button
                onMouseEnter={(e) => {
                  const left = e.currentTarget.offsetLeft;
                  const width = e.currentTarget.getBoundingClientRect().width;
                  sliderRef.current.style.left = `${left + width / 2}px`;
                  sliderRef.current.style.width = `5px`;
                  sliderRef.current.style.height = `5px`;
                  sliderRef.current.style.borderRadius = `50%`;
                }}
                onMouseLeave={(e) => {
                  sliderRef.current.style.left = `15px`;
                  sliderRef.current.style.width = `50px`;
                  sliderRef.current.style.height = `3px`;
                  sliderRef.current.style.borderRadius = `15px`;
                }}
                onClick={() => {
                  document.body.classList.toggle("dark");
                  setThemeDark(!themeDark);
                }}
              >
                {themeDark ? <FaSun size={25} /> : <BsMoonFill size={25} />}
              </button>
            </Magnetic>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
