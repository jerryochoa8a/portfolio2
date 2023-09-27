import React, { useState } from 'react';
import styles from './Projects.module.css';
import { Router, Link } from '@reach/router';

//npm install react-player
import ReactPlayer from "react-player"
import AOS from 'aos';
AOS.init();


function Projects() {

    const [projectView, setProjectView] = useState('');
    const [currentTab, setCurrentTab] = useState('');

    //look at the tabs on the laptop


    return (
        <>
            <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

            <div id='work' className={styles.background}>
                <div className={styles.project}>
                    <h1>Projects</h1>
                    <p>Take a look at some of my projects!</p>
                </div>

                {/* <div className={styles.projectButtonBox}>
                    <button className={styles.projectButtons}>Python</button>
                    <button className={styles.projectButtons}>MERN Stack</button>
                    <button className={styles.projectButtons}>HTML Email</button>
                </div> */}

                <div data-aos="fade-left" data-aos-duration="40000" className={styles.projectBox}>
                    <div className={styles.leftBox}>
                        <div className={styles.titleBox}>
                            <h2 className={styles.outline}>Clothing_store</h2>
                        </div>
                        <div className={styles.descBox}>
                            <p>Built With: Python | Django | JavaScript | HTML | CSS | Stripe Payment | Bcrypt Hash</p>
                            <p>Developed an e-commerce clothing store. The clothing store uses Stripe Payment and has an easy to use checkout system. In this web app logged in users will have their orders saved to their account. </p>
                        </div>
                        <div className={styles.buttonBox}>
                            <div className={styles.box}>
                                <a href="https://github.com/jerryochoa8a/clothing_store">
                                    <div className={styles.gitImage} />
                                </a>
                            </div>
                            <div className={styles.box}>
                                <a href="http://ec2-3-101-47-30.us-west-1.compute.amazonaws.com/">
                                    <div className={styles.wwwImage} />
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
                <div className={styles.line} />


                <div data-aos="fade-right" data-aos-duration="40000" className={styles.projectBox}>
                    <div className={styles.leftBox}>
                        <div className={styles.titleBox}>
                            <h2 className={styles.outline}>Covid Testing Sites</h2>
                        </div>
                        <div className={styles.descBox}>
                            <p>Built With: React | Google Maps API | Yelp API | JavaScript | JSX | CSS </p>
                            <p>Developed a Covid-19 testing site locator. Implemented the Yelp API to retrieve hospitals and testing sites. Implemented the Google Map API to display where the sites are located on the map.</p>
                        </div>
                        <div className={styles.buttonBox}>
                            <div className={styles.box}>
                                <a href="https://github.com/jerryochoa8a/covidTestSites">
                                    <div className={styles.gitImage} />
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
                            url="https://youtu.be/7BOOhnGDaIk"
                            controls
                            width="400px"
                            height="230px"
                            // style={{width:"600px",height:"300px"}}
                            
                        />
                    </div>
                </div>
                <div className={styles.line} />


                <div data-aos="fade-left" data-aos-duration="40000" className={styles.projectBox}>
                    <div className={styles.leftBox}>
                        <div className={styles.titleBox}>
                            <h2 className={styles.outline}>To-do List</h2>
                        </div>
                        <div className={styles.descBox}>
                            <p>Built With: React | JavaScript | HTML | CSS | MongoDB | Express | Node </p>
                            <p> The To-do List web app is developed with the MERN Stack. Developed with full CRUD operations to create, read, update, and delete tasks. </p>
                        </div>
                        <div className={styles.buttonBox}>
                            <div className={styles.box}>
                                <a href="https://github.com/jerryochoa8a/appt.app.frontend">
                                    <div className={styles.gitImage} />
                                </a>
                            </div>
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
                <div className={styles.line} />
                <div style={{ width: "100%", textAlign: "center" }}>
                    <Link to={"/AllProjects"} style={{ fontSize: "30px", width: "100%", cursor: "pointer" }}>See More of My Projects...</Link>
                </div>


            </div>
        </>
    );
}

export default Projects;