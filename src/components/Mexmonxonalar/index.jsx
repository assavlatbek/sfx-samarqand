import Image from "next/image";
import styles from "./style.module.scss";

function Mexmonxonalar() {
  return (
    <section id={styles.mexmonxonalar}>
      <div className="container">
        <h1 className="sec-title">Mexmonxonalar</h1>
        <div className={styles.first_content}>
          <Image
            src={"/images/mexmonxonalar/1.jpg"}
            width={1000}
            height={800}
            alt="image"
          />
          <h2>Mexmonxonalar</h2>
        </div>
        <div className={styles.row}>
          <div className={styles.row_content}>
            <Image
              src={"/images/mexmonxonalar/4.jpg"}
              width={300}
              height={300}
              alt="image"
            />
            <h2>Mexmonxonalar</h2>
          </div>
          <div className={styles.row_content}>
            <Image
              src={"/images/mexmonxonalar/3.jpg"}
              width={300}
              height={300}
              alt="image"
            />
            <h2>Mexmonxonalar</h2>
          </div>
          <div className={styles.row_content}>
            <Image
              src={"/images/mexmonxonalar/2.jpg"}
              width={300}
              height={300}
              alt="image"
            />
            <h2>Mexmonxonalar</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mexmonxonalar;
