import styles from "./styles/contact.module.scss";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Footer/Footer";
const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2>Contact Me..</h2>
      <div className={styles.contact__list}>
        <div className={styles.contact__email}>
          <FontAwesomeIcon icon={faEnvelope} /> Email
          <div className="text__secondary">offiongfrancis14@gmail.com</div>
        </div>
        <div className={styles.contact__phone}>
          <FontAwesomeIcon icon={faPhone} /> Phone
          <div className="text__secondary">+234 818 7154 411</div>
        </div>
        <div className={styles.contact__address}>
          <FontAwesomeIcon icon={faHouse} /> Address
          <div className="text__secondary"> Abuja, Nigeria</div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
