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
              <p>I am a highly motivated developer with a passion for
              learning new technologies. Developing web applications to best help users is not only an
              accomplishment a but also a great feeling knowing that my work will be used to benefit others.
              I enjoy learning new technologies in order to solve problems and bring more value to the industry while working on building bigger ideas and solutions
            </p>
            </div>

            <div className={styles.jobBox}>
              <h3>I've worked for:</h3>
              <div data-aos="fade-right" data-aos-duration="4000" className={styles.funburger}></div>
              <div data-aos="fade-left" data-aos-duration="4000" className={styles.rv}></div>
              <div data-aos="fade-right" data-aos-duration="4000" className={styles.scv}></div>
              {/* <div data-aos="fade-left" data-aos-duration="4000" className={styles.saugus}></div> */}
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