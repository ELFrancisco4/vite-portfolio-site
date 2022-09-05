import styles from "./styles/projects.module.scss";
import Footer from "../Footer/Footer";
import Project from "./atoms/Project";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
} from "../../hooks/useImage";
const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.projects__bio_image}>
        <div className={styles.about__bio}>
          <h1 className="text__secondary"> My Projects</h1>
        </div>
      </div>
      <div className={styles.projects__items}>
        <Project
          btnClass={styles.projects__btns}
          imgClass={styles.img}
          className={styles.projects__item}
          src={image1}
          alt={"My Project 1"}
        />
        <Project
          btnClass={styles.projects__btns}
          imgClass={styles.img}
          className={styles.projects__item}
          src={image2}
          alt={"My Project 2"}
        />
        <Project
          btnClass={styles.projects__btns}
          imgClass={styles.img}
          className={styles.projects__item}
          src={image3}
          alt={"My Project  3"}
        />
        <Project
          btnClass={styles.projects__btns}
          imgClass={styles.img}
          className={styles.projects__item}
          src={image4}
          alt={"My Project  4"}
        />
        <Project
          btnClass={styles.projects__btns}
          imgClass={styles.img}
          className={styles.projects__item}
          src={image5}
          alt={"My Project  5"}
        />
        <Project
          btnClass={styles.projects__btns}
          imgClass={styles.img}
          className={styles.projects__item}
          src={image6}
          alt={"My Project  6"}
        />
      </div>
      <Footer />
    </section>
  );
};

export default Projects;
