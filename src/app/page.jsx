"use client";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import Gipermarket from "@/components/Gipermarket";
import Mexmonxonalar from "@/components/Mexmonxonalar";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Pinthouslar from "@/components/Pinthouslar";
import Footer from "@/components/Footer";
import Obyektlar from "@/components/Obyektlar";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1300,
      delay: 200,
      once: false,
    });
  }, []);
  return (
    <>
      <Loader />
      <Header />
      <Hero />
      <Mexmonxonalar />
      <Gipermarket />
      <Pinthouslar />
      <Obyektlar />
      <Footer />
    </>
  );
}
