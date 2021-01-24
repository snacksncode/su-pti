import Container from "../components/Container";
import styles from "../styles/notFoundPage.module.scss";
import Link from "next/link";

const Page404 = () => {
  return (
    <Container className={styles.wrapper}>
      <div className={styles["error-code"]}>404</div>
      <h2 className={styles.heading}>Strona nie znaleziona</h2>
      <Link href="/">
        <a className={styles.button}>Strona główna</a>
      </Link>
    </Container>
  );
};

export default Page404;
