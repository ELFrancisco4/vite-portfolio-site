import Items from "./atoms/Items";
import styles from "./styles/nav.module.scss";
import { useState } from "react";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header  onClick={() => {
      setShowMenu(!showMenu);
      console.log(showMenu);
    }}>
      <div
        className={styles.menu_btn}
       
      >
        <span
          className={showMenu ? styles.open : styles.menu_btn__burger}
        ></span>
      </div>

      <nav className={showMenu == false ? styles.closed : styles.nav}>
        <ul
          className={showMenu == false ? styles.closed_menu : styles.nav__menu}
        >
          <Items
            onClick={() => setShowMenu(false)}
            to="/"
            className={styles.menu_item}
            name="Home"
          />
          <Items
            onClick={() => setShowMenu(false)}
            to="/about"
            className={styles.menu_item}
            name="About"
          />
          <Items
            onClick={() => setShowMenu(false)}
            to="/projects"
            className={styles.menu_item}
            name="Projects"
          />
          <Items
            onClick={() => setShowMenu(false)}
            to="/contact"
            className={styles.menu_item}
            name="Contact"
          />
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
