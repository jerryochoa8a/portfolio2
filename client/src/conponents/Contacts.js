import React from 'react';
import styles from './Contacts.module.css';

import Pdf from '../images/Jerry Ochoa - Resume.pdf';

import resLogo from '../images/res2.png';
import emailLogo from '../images/email3.png';
import linkLogo from '../images/link.png';
import githubLogo from '../images/github.png';



function Contacts() {

    
    const showTxt = (e) => {
        console.log("hello")
    }
    
    return (
        <div id='cont' className={styles.background}>
            <div>
                <h1>Contact Me</h1>

                <div className={styles.contactBox}>

                
                    <div className={styles.box}>
                        <a href="mailto:jerryochoa8a@aol.com"  onMouseOverCapture={showTxt} target="_blank" rel="noopener noreferrer">
                            <img className={styles.buttonBox} src={emailLogo} />
                            {/* <p>Email</p> */}
                        </a>
                    </div>
                

                    
                        <div className={styles.box}>
                            <a href="https://www.linkedin.com/in/jerry-ochoa-389ab0183/" target="_blank" rel="noopener noreferrer">
                                <img className={styles.buttonBox} src={linkLogo} />
                                {/* <p>Linkedin</p> */}
                            </a>
                        </div>
                    
                    
                    
                        <div className={styles.box}>
                            <a href="https://github.com/jerryochoa8a" target="_blank" rel="noopener noreferrer">
                                <img className={styles.buttonBox} src={githubLogo} />
                                {/* <p>GitHub</p> */}
                            </a>
                        </div>
                    

                    
                        <div className={styles.box}>
                            <a href = {Pdf} target = "_blank">
                                <img className={styles.buttonBox} src={resLogo} />
                                {/* <p>res</p> */}
                            </a>
                        </div>
                </div>
            </div>

            <div className={styles.BTTC}>
                <a href="#top">
                    <button className={styles.BTT}>Back To Top</button>
                </a>
            </div>

        </div>
    );
}

export default Contacts;