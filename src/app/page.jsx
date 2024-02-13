import Header from "@/components/Header";
import styles from "./page.module.css";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Loader />
    </>
  );
}
