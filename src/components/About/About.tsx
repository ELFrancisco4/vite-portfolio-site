import Footer from "../Footer/Footer";
import styles from "./styles/about.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__bio_image}>
        <div className={styles.about__bio}>
          {" "}
          <h2 className={styles.text__secondary}>BIO</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi dolor
            totam sapiente dolore omnis expedita iste fugiat sunt nemo sit ipsa,
            cumque quod corrupti, quisquam aspernatur adipisci animi recusandae
            ex.
          </p>
        </div>
      </div>

      <div className={styles.jobs}>
        <div className={styles.job}>
          <h2 className="text__secondary">2017-current</h2>
          <h3>Google</h3>
          <h6>Full Stack Developer</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolor
            tempora delectus iure corporis ea.
          </p>
        </div>
        <div className={styles.job}>
          <h2 className="text__secondary">2015-2017</h2>
          <h3>Microsoft</h3>
          <h6>SOC Analyst</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolor
            tempora delectus iure corporis ea.
          </p>
        </div>
        <div className={styles.job}>
          <h2 className="text__secondary">2012-2015</h2>
          <h3>Amazon</h3>
          <h6>Dev Ops Engineer</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolor
            tempora delectus iure corporis ea.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
