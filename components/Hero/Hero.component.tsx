import styles from "./Hero.module.scss";
import Container from '../Container';

import classNames from 'classnames';

const imgUrl = "https://images.unsplash.com/photo-1609612006487-e6211790ece5?crop=entropy&fit=crop&fm=jpg&h=1080&q=80&w=1920";

const Hero = () => {
  return (
  	<div className={styles.wrapper}>
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
          <button className={styles.button}>
            Zobacz skład
          </button>

          <button className={classNames(styles.button, styles.secondaryButton)}>
            Szczęśliwy numerek
          </button>
        </div>
      </Container>
  	</div>
  );
};

export default Hero;
