import Header from "@/components/Header";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import Gipermarket from "@/components/Gipermarket";
import Mexmonxonalar from "@/components/Mexmonxonalar";

export default function Home() {
  return (
    <>
      <Loader />
      <Header />
      <Hero />
      <Mexmonxonalar />
      <Gipermarket />
    </>
  );
}
