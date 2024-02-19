import Image from "next/image";
import styles from "./style.module.scss";
import Link from "next/link";

function Obyektlar() {
  return (
    <section id={styles.obyektlar}>
      <div className="container">
        <h1 className="sec-title" data-aos="fade-up">
          SXF Qurilish Obyektlari
        </h1>
        <div className={styles.row}>
          <Link
            data-aos="fade-up"
            target="_blank"
            href={"https://youtu.be/WRvqPAXAud0?si=xJ6IsJBSkJuzdx8n"}
            className={styles.row_content}
          >
            <div className={styles.row_content_img}>
              <Image
                src="/images/obyektlar/1.jpg"
                alt=""
                width={250}
                height={180}
              />
            </div>
            <div className={styles.row_content_txt}>
              <h1>Samarqand City</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
                quo? Saepe facere qui cupiditate veniam provident eaque unde,
                aut distinctio?
              </p>
            </div>
          </Link>
          <Link
            data-aos="fade-up"
            target="_blank"
            href={"https://youtube.com/shorts/_7-_U9VooJk?si=Z8_3r01ugt-PSdf8"}
            className={styles.row_content}
          >
            <div className={styles.row_content_img}>
              <Image
                src="/images/obyektlar/2.jpg"
                alt=""
                width={250}
                height={180}
              />
            </div>
            <div className={styles.row_content_txt}>
              <h1>Qarshi mall</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
                quo? Saepe facere qui cupiditate veniam provident eaque unde,
                aut distinctio?
              </p>
            </div>
          </Link>
          <Link
            data-aos="fade-up"
            target="_blank"
            href={"https://youtu.be/6VcnndIt20E?si=LQMFDK3hYvaketZc"}
            className={styles.row_content}
          >
            <div className={styles.row_content_img}>
              <Image
                src="/images/obyektlar/3.jpg"
                alt=""
                width={250}
                height={180}
              />
            </div>
            <div className={styles.row_content_txt}>
              <h1>Eshonguzar City</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
                quo? Saepe facere qui cupiditate veniam provident eaque unde,
                aut distinctio?
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Obyektlar;
