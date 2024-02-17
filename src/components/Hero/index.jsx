import Magnetic from "@/commons/Magnetic";
import styles from "./style.module.scss";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <div>
          <h1>SAMARQAND CITY</h1>
          <p>O'z kelajakimizni o'zimiz quramiz!</p>
          <Magnetic>
            <button>
              <Magnetic>
                <span>Bog'lanish</span>
              </Magnetic>
            </button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
};

export default Hero;
