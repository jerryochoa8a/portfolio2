import React from 'react';
import styles from './NavBar.module.css';
// import { Navbar, Nav } from 'bootstrap';

function TopNavBar() {
    return (
        <div className={styles.bcolor}>
            <nav style={{backgroundColor:' #343434'}} className="navbar navbar-expand-lg  navbar-dark fixed-top ">
                <a className={styles.name} href="#top">JO</a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className={styles.cool} href="#about">About<span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item active">
                            <a className={styles.cool} href="#skill">Skills</a>
                        </li>
                        <li className="nav-item active">
                            <a className={styles.cool} href="#work">Work</a>
                        </li>
                        <li className="nav-item active">
                            <a className={styles.cool} href="#cont">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )

}

export default TopNavBar;