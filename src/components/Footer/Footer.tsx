import {
  faGithub,
  faTwitter,
  faHackerrank,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './styles/footer.module.scss'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social_icons}>
        <FontAwesomeIcon className={styles.icon} icon={faGithub} />
        <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
        <FontAwesomeIcon className={styles.icon} icon={faHackerrank} />
        <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
      </div>
      &copy; 2022 El Francisco. All Rights Reserved.
    </footer>
  );
};

export default Footer;
