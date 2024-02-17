import Image from "next/image";
import styles from "./style.module.scss";

function Pinthouslar() {
  return (
    <section id={styles.pinthouslar}>
      <div className="container">
        <h1 className="sec-title" data-aos="fade-up">
          Pinthouslar
        </h1>
        <div className={styles.row}>
          <div className={styles.row_content} data-aos="zoom-out">
            <Image
              src={"/images/pinthouslar/1.jpg"}
              width={300}
              height={300}
              alt="image"
            />
            <h2>Pinthouslar</h2>
          </div>
          <div className={styles.row_content} data-aos="zoom-out">
            <Image
              src={"/images/pinthouslar/2.jpg"}
              width={300}
              height={300}
              alt="image"
            />
            <h2>Pinthouslar</h2>
          </div>
          <div className={styles.row_content} data-aos="zoom-out">
            <Image
              src={"/images/pinthouslar/3.jpg"}
              width={300}
              height={300}
              alt="image"
            />
            <h2>Pinthouslar</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pinthouslar;
