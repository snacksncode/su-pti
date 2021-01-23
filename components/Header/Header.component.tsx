import { useEffect, useState } from "react";
import Container from "../Container";
import styles from "./Header.module.scss";
import classNames from "classnames";
import Logo from "./Logo";
import { useInView } from "react-intersection-observer";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0,
    initialInView: true,
  });
  const handleMenuStateToggle = () => {
    setMenuOpened((currentMenuState) => !currentMenuState);
  };
  const navClasses = classNames(styles.nav, {
    [`${styles["nav--opened"]}`]: menuOpened,
  });
  const wrapperClasses = classNames(styles.wrapper, {
    [`${styles["wrapper--white"]}`]: !inView,
  });
  return (
    <>
      <div className={wrapperClasses}>
        <Container className={styles.container}>
          <Logo className={styles.logo} />
          <div onClick={handleMenuStateToggle} className={styles["menu-toggler"]}>
            {menuOpened ? "Close" : "Open"}
          </div>
          <div className={navClasses}>
            <div className={styles["nav__item"]}>
              <a href="#">Szczęśliwy numerek</a>
            </div>
            <div className={styles["nav__item"]}>
              <a href="#">Sponsorzy</a>
            </div>
            <div className={styles["nav__item"]}>
              <a href="#">Skład</a>
            </div>
          </div>
        </Container>
      </div>
      <div ref={ref} className={styles.threshold}></div>
    </>
  );
};

export default Header;
