import Container from "../Container";
import ProgressiveImage from 'react-progressive-graceful-image';
import styles from "./Team.module.scss";

const folks = [
  {
    name: "Maximilian Cyprys",
    img: "https://source.unsplash.com/random/250x250/?nature,fog,forest",
    role: "Skarbnik",
    desc: "Lorem ipsum dolor sit amet, "//consectetur adipiscing elit. Pellentesque odio augue, cursus sed ipsum sit amet, condimentum scelerisque tortor. Mauris euismod purus nisi, et vulputate sapien tempor a."
  }
]

const Team = () => {
  return (
    <Container className={styles.wrapper}>
      <div className={styles.header}>
        Skład samorządu
      </div>

      <div className={styles.container}>
        {folks.map(person => (
          <div className={styles.card}>
            <div>
              <ProgressiveImage src={person.img} placeholder="">
                {(src, loading) => (
                    <div>
                      <img src={src}/>
                      <div className={styles.imagePlaceholder} style={{ opacity: loading ? 1 : 0 }}/>
                    </div>
                  )}
              </ProgressiveImage>
            </div>
            <div>
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