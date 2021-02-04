import React from 'react';
import styles from './Technology.module.css';

function Technology() {
  return (
    <div id='skill' className={styles.background}>

        <div className={styles.box}>
            <div className={styles.title}>
                <h1>Under The Hood</h1>
                <p>These are some of the technologies that I'm familiar with:</p>
            </div>
            <div className={styles.pcGif}/>
        </div>

        <div className={styles.techBox}>
            <div className={styles.reactJS}></div>
            <div className={styles.aws}></div>
            <div className={styles.bootstrap}></div>
            <div className={styles.django}></div>
            <div className={styles.html5}></div>
            <div className={styles.mongodb}></div>
            <div className={styles.mySql}></div>
            <div className={styles.python}></div>
            <div className={styles.sqlite}></div>
            <div className={styles.node}></div>
            <div className={styles.mamp}></div>
            <div className={styles.postman}></div>
            <div className={styles.gitBash}></div>
        </div>

    </div>
  );
}

export default Technology;