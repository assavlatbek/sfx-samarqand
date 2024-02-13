import Header from "@/components/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.bg}>
        <div>
          <h1>SFX SAMARQAND</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            molestiae commodi blanditiis eveniet porro architecto itaque beatae
            repellendus vero numquam voluptates modi, quam perferendis
            aspernatur aperiam quibusdam suscipit velit quae!
          </p>
        </div>
      </div>
    </main>
  );
}
