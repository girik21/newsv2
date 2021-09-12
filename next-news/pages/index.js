import { Toolbar } from '../components/toolbar';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div className="page-container">
     <Toolbar/>

      <div className={styles.main}>
        <h1>News App</h1>

        <h2>Your favourite stop for all the latest trending news going all around the world! Click on the Feed option to get started.</h2>
        <h3>Have a suggestion for us? </h3>
           <h4>Please write us at   <u>newsnoreply@gmail.com</u></h4>
      </div>
    </div>
  )
}