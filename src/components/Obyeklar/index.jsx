import styles from "./style.module.scss";

function Obyektlar() {
  return (
    <section id={styles.obyektlar}>
      <div className="container">
        <h1 className="sec-title" data-aos="fade-up">
          SXF Qurilish Obyektlari
        </h1>
        <div className={styles.row}>
          <div className={styles.row_content}>
            <div className={styles.row_content_img}></div>
            <div className={styles.row_content_txt}></div>
          </div>
          <div className={styles.row_content}>
            <div className={styles.row_content_img}></div>
            <div className={styles.row_content_txt}></div>
          </div>
          <div className={styles.row_content}>
            <div className={styles.row_content_img}></div>
            <div className={styles.row_content_txt}></div>
          </div>
          <div className={styles.row_content}>
            <div className={styles.row_content_img}></div>
            <div className={styles.row_content_txt}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Obyektlar;
