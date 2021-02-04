import React, { useEffect, useState, Image } from 'react';
import { Router, Link } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './Home';
import TopNavBar from '../conponents/TopNavBar';
import AllProjects from './AllProjects';



export default () => {


    return (
        <div>
            <>
            {/* <meta name="viewport" content="width=500"></meta> */}
            <meta name="viewport" content="width=device-width"></meta>

            <TopNavBar/>


            <Router>
                <Home path="/"/>
                <AllProjects path="/AllProjects" />
            </Router>

            </>

        </div>
    )
}