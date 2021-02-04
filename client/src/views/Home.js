import React, { useEffect, useState, Image } from 'react';
import axios from 'axios'
import styles from '../views/Main.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import JerryInfo from '../conponents/JerryInfo';
import AboutMe from '../conponents/AboutMe';
import Technology from '../conponents/Technology';
import Projects from '../conponents/Projects';
import Contacts from '../conponents/Contacts';
import Background1 from '../conponents/Background1';
import Background2 from '../conponents/background2';
import Background3 from '../conponents/Background3';
import TopNavBar from '../conponents/TopNavBar';



export default () => {


    return (
        <div>

            <JerryInfo />

            <AboutMe />

            <Background1 />

            <Technology />

            <Background2 />

            <Projects />

            <Background3 />

            <Contacts />

        </div>
    )
}