import Container from "../Container";
import ProgressiveImage from 'react-progressive-graceful-image';
import classNames from 'classnames';
import styles from "./Team.module.scss";

const folks = [
  {
    name: "Patryk Kulec",
    img: "https://source.unsplash.com/random/250x250/?nature,fog",
    role: "Przewodniczący",
    isLeader: true,
    desc: "Lorem ipsum dolor sit amet."
  },
  {
    name: "Maximilian Cyprys",
    img: "https://source.unsplash.com/random/250x250/?nature,forest",
    role: "Skarbnik",
    isLeader: false,
    desc: "Lorem ipsum dolor sit amet."
  },
  {
    name: "Szymon Babik",
    img: "https://source.unsplash.com/random/250x250/?fog,forest",
    role: "Zastępca",
    isLeader: false,
    desc: "Lorem ipsum dolor sit amet."
  }
]

const Team = () => {
  return (
    <Container className={styles.wrapper}>
      <div className={styles.header}>
        Skład samorządu
      </div>

      <div className={styles.container}>
        {folks.map((person, i) => (
          <div key={i} className={classNames(styles.card, (person.isLeader ? styles.leader : ""))}>
            <ProgressiveImage src={person.img} placeholder="">
              {(src, loading) => (
                  <div className={styles.imageContainer}>
                    <img className={styles.img} src={src}/>
                    <div className={styles.placeholder} style={{ opacity: loading ? 1 : 0 }}/>
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
  );
};

export default Team;