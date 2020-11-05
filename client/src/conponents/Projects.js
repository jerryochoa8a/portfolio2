import React from 'react';
import styles from './Projects.module.css';

//npm install react-player
import ReactPlayer from "react-player"



function Projects() {


  return (
    <div id='work' className={styles.background}>
        <div className={styles.project}>
            <h1>Projects</h1>
            <p>Take a look at some of my projects!</p>
        </div>

        <div className={styles.projectBox}>
            <div className={styles.leftBox}>
                <div className={styles.titleBox}>
                    <h2 className={styles.outline}>Clothing_store</h2>
                </div>
                <div className={styles.descBox}>
                    <p>Built With: Python | Django | JavaScript | HTML | CSS | Stripe Payment | Bcrypt Hash</p>
                    <p>Developed a e-commerce clothing store. The clothing store uses Stripe Payment and has an easy to use checkout system. Logged in users will have their orders saved to their account. </p>
                </div>
                <div className={styles.buttonBox}>
                    <div className={styles.box}>
                        <a href="https://github.com/jerryochoa8a/clothing_store">
                            <div className={styles.gitImage}/>
                        </a>
                    </div>
                    <div className={styles.box}>
                    <a href="http://ec2-3-101-47-30.us-west-1.compute.amazonaws.com/">
                            <div className={styles.wwwImage}/>
                        </a>
                    </div>
                    <div className={styles.box}></div>
                </div>
            </div>
            <div className={styles.videoBox}>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=mj5-8X4M6OY"
                controls
                width="400px"
                height="230px"
            />
            </div>
        </div>
        <div className={styles.line}/>


        <div className={styles.projectBox}>
            <div className={styles.leftBox}>
                <div className={styles.titleBox}>
                    <h2 className={styles.outline}>Magic 8ball</h2>
                </div>
                <div className={styles.descBox}>
                    <p>Built With: React | JavaScript | HTML | CSS | Node | Yelp API</p>
                    <p>Designed to help the user make a decision on where to eat. This decision is made by random and picks from what’s around the given zip code.</p>
                </div>
                <div className={styles.buttonBox}>
                    <div className={styles.box}>
                        <a href="https://github.com/jerryochoa8a/magic-8ball/tree/master">
                            <div className={styles.gitImage}/>
                        </a>
                    </div>
                    {/* <div className={styles.box}>
                    <a href="">
                            <div className={styles.wwwImage}/>
                        </a>
                    </div> */}
                    <div className={styles.box}></div>
                </div>
            </div>
            <div className={styles.videoBox}>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=8ww-SWDEiog"
                controls
                width="400px"
                height="230px"
            />
            </div>
        </div>
        <div className={styles.line}/>


        <div className={styles.projectBox}>
            <div className={styles.leftBox}>
                <div className={styles.titleBox}>
                    <h2 className={styles.outline}>Todo List</h2>
                </div>
                <div className={styles.descBox}>
                    <p>Built With: React | JavaScript | HTML | CSS | MongoDB | Express | Node </p>
                    <p> Todo List web app developed with the MERN Stack. Developed with full CRUD operations to create, read, update, and delete tasks. </p>
                </div>
                <div className={styles.buttonBox}>
                    <div className={styles.box}>
                        <a href="https://github.com/jerryochoa8a/appt.app.frontend">
                            <div className={styles.gitImage}/>
                        </a>
                    </div>
                    {/* <div className={styles.box}>
                    <a href="">
                            <div className={styles.wwwImage}/>
                        </a>
                    </div> */}
                    <div className={styles.box}></div>
                </div>
            </div>
            <div className={styles.videoBox}>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=S02PjszslXM&feature=youtu.be"
                controls
                width="400px"
                height="230px"
            />
            </div> 
        </div>
        <div className={styles.line}/>

        
    </div>
  );
}

export default Projects;