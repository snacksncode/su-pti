import styles from "./Hero.module.scss";
import Container from '../Container';

import Scroll from "../Scroll";

import classNames from 'classnames';

import TeamStyles from "../Team/Team.module.scss";
import LuckyNumberStyles from "../LuckyNumber/LuckyNumber.module.scss";

const imgUrl = "https://images.unsplash.com/photo-1609612006487-e6211790ece5?crop=entropy&fit=crop&fm=jpg&h=1080&q=80&w=1920";

const Hero = () => {
  return (
  	<div id={styles.wrapper}>
      <img 
        className={styles.image}
        src={imgUrl}/>

      <Container className={styles.container}>
        <div>
          <div className={styles.welcomeText}>Witamy na stronie</div>
          <div>Samorządu</div>
          <div className={styles.studentText}>Uczniowskiego</div>
        </div>

        <div className={styles.buttonContainer}>
          <Scroll to={TeamStyles.wrapper} withOffset={true}>
            <div className={styles.button}>
              Zobacz skład
            </div>
          </Scroll>

          <Scroll to={LuckyNumberStyles.wrapper} withOffset={true}>
            <div className={classNames(styles.button, styles.secondaryButton)}>
              Szczęśliwy numerek
            </div>
          </Scroll>
        </div>
      </Container>
  	</div>
  );
};

export default Hero;
