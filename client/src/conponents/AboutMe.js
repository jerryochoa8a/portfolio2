import React from 'react';
import styles from './AboutMe.module.css';

function AboutMe() {
  return (
      <div id='about' className={styles.background}>


        <div className={styles.container}>
          <div className={styles.descBox}>
            <h1>About Me</h1>
            <p>I am a highly motivated fullstack developer with a passion for learning new technologies. I have experience in different fields of work such as professions in the health industry, automotive mobile repair, and electronic retail, but none of these occupations can come close to my interest for coding. Developing web applications to best help users is not only an accomplishment a but also a great feeling know that my work will be used to benefit someone.
 to see something I created benefiting an individual.
</p>
              <div className={styles.jobBox}>
                <h3>I've worked for:</h3>
                <div className={styles.bestBuy}></div>
                <div className={styles.rv}></div>
                <div className={styles.scv}></div>
                <div className={styles.saugus}></div>
                <div className={styles.geek}></div>
              </div>
          </div>
          
          <div className={styles.imageBox}/>
        
        </div>

    </div>
  );
}

export default AboutMe;