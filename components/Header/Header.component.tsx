import { useState } from "react";
import Container from "../Container";
import styles from "./Header.module.scss";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";

import Scroll from "../Scroll";

import Logo from "react-svg-loader!./logo.svg";

import HeroStyles from '../Hero/Hero.module.scss';
import LuckyNumberStyles from '../LuckyNumber/LuckyNumber.module.scss';
import TeamStyles from '../Team/Team.module.scss';


const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0,
    initialInView: true,
  });

  const handleMenuStateToggle = () => {
    setMenuOpened((currentMenuState) => !currentMenuState);
  };
  const wrapperClasses = classNames(styles.wrapper, {
    [`${styles["wrapper--white"]}`]: !inView,
    [`${styles["nav--opened"]}`]: menuOpened,
  });
  
  return (
    <>
      <div className={wrapperClasses}>
        <Container className={styles.container}>
          <Scroll to={HeroStyles.wrapper}>
            <Logo className={styles.logo} />
          </Scroll>

          <div onClick={handleMenuStateToggle} className={styles["menu-toggler"]}>
            <div className={styles.bar}/>
            <div className={styles.bar}/>
            <div className={styles.bar}/>
          </div>
          
          <div className={styles.nav}>
            <div className={styles["nav__item"]}>
              <Scroll to={LuckyNumberStyles.wrapper} withOffset={true} onClick={() => setMenuOpened(false)}>
                Szczęśliwy numer
              </Scroll>
            </div>

            <div className={styles["nav__item"]}>
              <Scroll to={TeamStyles.wrapper} withOffset={true} onClick={() => setMenuOpened(false)}>
                Skład samorządu
              </Scroll>
            </div>
          </div>
        </Container>
      </div>
      <div ref={ref} className={styles.threshold} />
    </>
  );
};

export default Header;
