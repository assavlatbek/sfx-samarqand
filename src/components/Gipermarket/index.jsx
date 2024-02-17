import Image from "next/image";
import styles from "./style.module.scss";

const Gipermarket = () => {
  return (
    <section id={styles.gipermarket}>
      <div className="container">
        <h1 className="sec-title">Gipermarket</h1>
        <div className={styles.row}>
          <div className={styles.row_content}>
            <Image
              src={"/images/gipermarket/1.jpg"}
              width={300}
              height={300}
              alt="image"
            />
            <h2>Gipermarket</h2>
          </div>
          <div className={styles.row_content}>
            <Image
              src={"/images/gipermarket/3.jpg"}
              width={300}
              height={300}
              alt="image"
            />
            <h2>Gipermarket</h2>
          </div>
          <div className={styles.row_content}>
            <Image
              src={"/images/gipermarket/4.jpg"}
              width={300}
              height={300}
              alt="image"
            />
            <h2>Gipermarket</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gipermarket;
