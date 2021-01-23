import Container from '../Container';
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <span>{new Date().getFullYear()} &#169;</span>
      </Container>
    </div>
  );
};

export default Footer;