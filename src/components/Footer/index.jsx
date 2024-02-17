import Image from "next/image";
import styles from "./style.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer_row}>
          <div className={styles.footer_side}>
            <br />
            <br />
            <Image
              src={"/images/png/logo.png"}
              alt="logo"
              width={80}
              height={70}
            />
            <br />
            <br />
            <span>Telefon</span>
            <h2>+998 90 000 00 00</h2>
            <br />
            <span>Ofis</span>
            <h2>
              Amir Temur Street, 32, Xo'ja Ahrori Valiy, Samarkand city,
              Samarqand Region, Uzbekistan
            </h2>
            <br />
            <p>Copyright &copy; 2024, Inc.</p>
          </div>
          <div className={styles.footer_side}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5360.632262878358!2d66.94281527073956!3d39.64949159509555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19ae1a5a2c57%3A0xf4f2c37c0c964553!2sSamarkand%20City%20turar-joy%20majmuasi!5e0!3m2!1sen!2s!4v1708190671378!5m2!1sen!2s"
              width="100%"
              height="400px"
              style={{ border: "none", position: "relative", right: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
