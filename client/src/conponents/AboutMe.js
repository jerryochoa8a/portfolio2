import React from 'react';
import styles from './AboutMe.module.css';

import AOS from 'aos';
AOS.init();

function AboutMe() {
  return (
    <div id='about' className={styles.background}>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

      <div className={styles.container}>
        <div className={styles.descBox}>
          <h1>About Me</h1>

          <div>
            <div className={styles.pBox}>
              <p>
                Motivated Computer Science student with hands-on experience in full-stack development,
                IT support, and teaching. Skilled in debugging applications, troubleshooting hardware,
                and providing technical guidance. Experienced in both educational and professional settings,
                with a passion for technology and continuous learning.
              </p>
            </div>

            <div className={styles.jobBox}>
              <h3>I've worked for:</h3>
              <div data-aos="fade-right" data-aos-duration="4000" className={styles.Castaic}></div>
              <div data-aos="fade-right" data-aos-duration="4000" className={styles.funburger}></div>
              <div data-aos="fade-left" data-aos-duration="4000" className={styles.codeNinjas}></div>
              <div data-aos="fade-left" data-aos-duration="4000" className={styles.rv}></div>
              <div data-aos="fade-right" data-aos-duration="4000" className={styles.geek}></div>
            </div>
          </div>



        </div>

        <div data-aos="fade-left" data-aos-duration="4000" className={styles.imageBox}></div>

      </div>

    </div>
  );
}

export default AboutMe;