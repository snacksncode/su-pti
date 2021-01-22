import styles from "./Hero.module.scss";
import Container from '../Container';

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
          <div className={styles.govText}>Samorządu</div>
          <div className={styles.studentText}>Uczniowskiego</div>
        </div>
      </Container>
  	</div>
  );
};

export default Hero;
