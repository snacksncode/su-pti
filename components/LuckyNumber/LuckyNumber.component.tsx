import Container from "../Container";
import styles from "./LuckyNumber.module.scss";

const LuckyNumber = ({ number }) => {
  return (
    <Container id={styles.wrapper}>
      <div className={styles.textContainer}>
        <div className={styles.todays}>Dzisiejszy</div>

        <div className={styles.header}>Szczęśliwy numer</div>

        <div className={styles.date}>{new Date().toLocaleDateString()}</div>
      </div>

      <div className={styles.container}>
        <div className={styles.background}>
          <span className={styles.number}>{number.number}</span>
        </div>
      </div>
    </Container>
  );
};

export default LuckyNumber;
