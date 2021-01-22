import Container from "../components/Container";
import Header from "../components/Header";
import styles from "../styles/pages/Index.module.scss";

const Index = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Container>
        <h1 className={styles.test}>Hello World</h1>
      </Container>
    </div>
  );
};

export default Index;
