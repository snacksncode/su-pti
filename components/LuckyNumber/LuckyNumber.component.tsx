import Container from '../Container';
import styles from "./LuckyNumber.module.scss";

const LuckyNumber = () => {
  return (
    <Container className={styles.wrapper}>
      <div className={styles.header}>
        Szczęśliwy numer
      </div>

      <div className={styles.date}>
        {new Date().toLocaleDateString()}
      </div>

      <div className={styles.container}>
        <div className={styles.background}>
          <span className={styles.number}>
            21  
          </span>        
        </div>
      </div>
    </Container>
  );
};

export default LuckyNumber;
