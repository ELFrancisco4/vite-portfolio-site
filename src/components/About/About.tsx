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
            I am a Security focused Web Engineer with experience in building
            front end applications using React, Typescript and SASS. I have
            knowledge of backend technologies such as Nodejs, Expressjs and
            MongoDB. My primary tech stack is the MERN stack. I am a passionate
            Cyber Security Analyst with an ardent zeal to learn and solve
            problems.
          </p>
        </div>
      </div>

      <div className={styles.jobs}>
        <div className={styles.job}>
          <h2 className="text__secondary">2023-current</h2>
          <h3>Benjamin Family Initiative</h3>
          <h6>Cyber Security Analyst</h6>
          <p>
            I am currently wprking as a Cyber Security Analyst and Tutor at
            Benjamin Family Initiative (BFI)
          </p>
        </div>
        <div className={styles.job}>
          <h2 className="text__secondary">2022 (From May to December)</h2>
          <h3>Federal Ministry of Communications and Digital Economy</h3>
          <h6>Intern</h6>
          <p>
            I worked as an intern in the ICT department of the Federal Ministry
            of Communications and Digital Economy
          </p>
        </div>
        <div className={styles.job}>
          <h2 className="text__secondary">2019-2023</h2>
          <h3>Ritman University</h3>
          <h6>Student</h6>
          <p>I studied B.Sc Cyber Security for 4 years at Ritman University.</p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
