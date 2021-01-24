import Container from "../Container";
import ProgressiveImage from "react-progressive-graceful-image";
import classNames from "classnames";
import styles from "./Team.module.scss";

const Team = ({ folks }) => {
  return (
    <div className={styles.background}>
      <Container id={styles.wrapper}>
        <div className={styles.header}>Skład samorządu</div>

        <div className={styles.container}>
          {folks.map((person, i) => (
            <div key={i} className={classNames(styles.card, person.isLeader ? styles.leader : "")}>
              <ProgressiveImage src={person.img} placeholder="">
                {(src, loading) => (
                  <div className={styles.imageContainer}>
                    <img className={styles.img} src={src} />
                    <div className={styles.placeholder} style={{ opacity: loading ? 1 : 0 }} />
                  </div>
                )}
              </ProgressiveImage>

              <div className={styles.infoContainer}>
                <span className={styles.name}>{person.name}</span>
                <span className={styles.role}>{person.role}</span>
                <span className={styles.desc}>{person.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Team;
