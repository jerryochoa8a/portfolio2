import React from 'react';
import styles from './JerryInfo.module.css';

function JerryInfo() {
  return (
    <>
    <div className={styles.background}>
        <div className={styles.titleCon}>
            <div className={styles.nameBox}>
                <h1>Jerry A. Ochoa</h1>
            </div>

            <div className={styles.titleBox}>
                <h3>Full Stack Web Developer</h3>
            </div>
        </div>

    </div>
    </>
  );
}

export default JerryInfo;