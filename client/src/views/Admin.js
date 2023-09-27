import React, { useState } from 'react';
import styles from './Admin.module.css';


export default () => {
    const [page, setPage]= useState("About");
    const currentButton = {backgroundColor: "aquamarine", color:"black"}
    
    const [aboutStyle, setAboutStyle] = useState(null);
    const [techStyle, setTechStyle] = useState(null);
    const [newStyle, setNewStyle] = useState(null);
    const [projectsStyle, setProjectsStyle] = useState(null);
    const [linkStyle, setLinkStyle] = useState(null);

    function changeButton(){
        if(page == 'About'){
            setAboutStyle(currentButton)
        }
        if(page =="Tech"){
            setTechStyle(currentButton)
        }
        if(page == 'New'){
            setNewStyle(currentButton)
        }
        if(page =="Projects"){
            setProjectsStyle(currentButton)
        }
        if(page == 'Link'){
            setLinkStyle(currentButton)
        }
    }

    const setPageName = event =>{
        setPage(event)
        changeButton();

    }

    // page
    
    return(
        <>
        
        <div className={styles.Body_Con}>
            
            <div className={styles.Control_Con}>
                <button onClick={e =>{setPageName("About")}} style={aboutStyle} >About</button>
                <button onClick={e =>{setPageName("Tech")}} style={techStyle} >Tech</button>
                <button onClick={e =>{setPageName("New")}} style={newStyle} >Add New Project</button>
                <button onClick={e =>{setPageName("Projects")}} style={projectsStyle} >Projects</button>
                <button onClick={e =>{setPageName("Link")}} style={linkStyle} >Links/Contact Me</button>
            </div>

            <div className={styles.Form_Con}>
                {/* <h1>About</h1>
                <h1>tech</h1>
                <h1>new</h1>
                <h1>project</h1>
                <h1>link</h1> */}
                <h1>{page}</h1>
            </div>

        </div>
        
        </>
    )
}