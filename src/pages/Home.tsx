import styles from "./home.module.scss";
import Header from "../components/Header";
import paper from "/papers1.png";
import rock from "/rock1.png";
import scissors from "/scissors1.png";

function Home({ user, setUser }) {
  return (
    <div className={styles.home}>
      <Header user={user} setUser={setUser} />
      <div className={styles.homeImg}>
        <img src={rock} className={styles.rock} />
        <img src={paper} className={styles.paper} />
        <img src={scissors} className={styles.scissors} />
      </div>
    </div>
  );
}

export default Home;
