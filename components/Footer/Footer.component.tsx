import Container from "../Container";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <span>
          Made by{" "}
          <b>
            <a href="https://github.com/filipkania">Filip Kania</a>
          </b>{" "}
          &{" "}
          <b>
            <a href="https://github.com/snacksncode">Ilya Dolotov</a>
          </b>
        </span>
        <span>All rights reserved &#169; {new Date().getFullYear()}</span>
      </Container>
    </div>
  );
};

export default Footer;
