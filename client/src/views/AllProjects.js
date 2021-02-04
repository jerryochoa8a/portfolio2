import React from 'react';
import styles from './AllProjects.module.css';

//npm install react-player
import ReactPlayer from "react-player"



function AllProjects() {

    window.scrollTo(0, 0)

  return (
      <>
        <div id='top' className={styles.project}>
            <h1 style={{color:'black', fontSize:'60px'}}>Projects</h1>
        </div>
    <div className={styles.background}>

        <div className={styles.projectBox}>
            <div className={styles.leftBox}>
                <div className={styles.titleBox}>
                    <h2 className={styles.outline}>Clothing_store</h2>
                </div>
            <div className={styles.videoBox}>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=mj5-8X4M6OY"
                controls
                width="400px"
                height="230px"
                />
            </div>
                <div className={styles.descBox}>
                    <p>Built With: Python | Django | JavaScript | HTML | CSS | Stripe Payment | Bcrypt Hash</p>
                    <p>Developed an e-commerce clothing store. The clothing store uses Stripe Payment and has an easy to use checkout system. In this web app logged in users will have their orders saved to their account. </p>
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
        </div>
        {/* <div className={styles.line}/> */}


        <div className={styles.projectBox}>
            <div className={styles.leftBox}>
                <div className={styles.titleBox}>
                    <h2 className={styles.outline}>Magic 8ball</h2>
                </div>
                    <div className={styles.videoBox}>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=8ww-SWDEiog"
                        controls
                        width="400px"
                        height="230px"
                        />
                    </div>
                <div className={styles.descBox}>
                    <p>Built With: React | JavaScript | HTML | CSS | Node | Yelp API</p>
                    <p>Designed to help the user make a decision on what restaurant to choose. 
                        This API call is made by random and chooses from the surrounding zip code given to us by the user.</p>
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
        </div>
        {/* <div className={styles.line}/> */}


        <div className={styles.projectBox}>
            <div className={styles.leftBox}>
                <div className={styles.titleBox}>
                    <h2 className={styles.outline}>To-do List</h2>
                </div>
                    <div className={styles.videoBox}>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=S02PjszslXM&feature=youtu.be"
                        controls
                        width="400px"
                        height="230px"
                        />
                    </div> 
                <div className={styles.descBox}>
                    <p>Built With: React | JavaScript | HTML | CSS | MongoDB | Express | Node </p>
                    <p> The To-do List web app is developed with the MERN Stack. Developed with full CRUD operations to create, read, update, and delete tasks. </p>
                </div>
                <div className={styles.buttonBox}>
                    <div className={styles.box}>
                        <a href="https://github.com/jerryochoa8a/appt.app.frontend">
                            <div className={styles.gitImage}/>
                        </a>
                    </div>
                    <div className={styles.box}></div>
                </div>
            </div>
        </div>

        <div className={styles.projectBox}>
            <div className={styles.leftBox}>
                <div className={styles.titleBox}>
                    <h2 className={styles.outline}>Covid Testing Sites</h2>
                </div>
            <div className={styles.videoBox}>
            <ReactPlayer
                url="https://youtu.be/7BOOhnGDaIk"
                controls
                width="400px"
                height="230px"
                />
            </div>
                <div className={styles.descBox}>
                    <p>Built With: React | Google Maps API | Yelp API | JavaScript | JSX | CSS </p>
                    <p>Developed a Covid-19 testing site locator. Implemented the Yelp API to retrieve hospitals and testing sites. Implemented the Google Map API to display where the sites are located on the map.</p>
                </div>
                <div className={styles.buttonBox}>
                    <div className={styles.box}>
                        <a href="https://github.com/jerryochoa8a/covidTestSites">
                            <div className={styles.gitImage}/>
                        </a>
                    </div>
                    {/* <div className={styles.box}>
                    <a href="http://ec2-3-101-47-30.us-west-1.compute.amazonaws.com/">
                            <div className={styles.wwwImage}/>
                        </a>
                    </div> */}
                    <div className={styles.box}></div>
                </div>
            </div>
        </div>

    </div>

    {/* <div className={styles.background}> part two */}

        
        


        
    {/* </div> */}
                </>
  );
}

export default AllProjects;