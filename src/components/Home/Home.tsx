import styles from "./styles/home.module.scss";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.main}>
        <h2>Hi! My Name Is</h2>
        <h1 className={styles.home__name}>
          Offiong <span className={styles.username_last}>Francis</span>
        </h1>
        <h2>Web Engineer & Cyber Security Enthusiast</h2>

        <Footer />
      </div>
    </section>
  );
};

export default Home;
