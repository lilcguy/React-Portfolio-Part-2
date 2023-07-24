//displays the little navbar of about work contact resume sections, and handles info displaying based on conditionals.

import React from 'react';

import '../components/styles/style.css';

export default function Navigation({handleInfoChange}) {
    return(

    <div className="nav">
        <a href="#about" id="about" className="button" onClick={() => handleInfoChange('About')}>About</a>
        <a href="#work" id="work" className="button" onClick={() => handleInfoChange('Work')}>Work</a>
        <a href="#contact" id="contact" className="button" onClick={() => handleInfoChange('Contact')}>Contact</a>
        <a href="#resume" id="resume" className="button" onClick={() => handleInfoChange('Resume')}>Resume</a>
    </div>

    ); 
}

//onClick = handleInfoChange, which is defined in Content, where this component is used.
//that sets the state of currentInfo, which is then checked with the function renderInfo, which displays information conditionally.

