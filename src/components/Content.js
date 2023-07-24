//primary content page (so aptly named)

import React, {useState} from 'react'; //useState import

//page info imports -v
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume'; //will display resume info, and offer a download link

//component imports -v
import Navigation from './Navigation';


// style imports -v
import '../components/styles/Content.css' //this needs to be here becuase otherwise the background gif wont load. ??
import '../components/styles/style.css';

export default function Content() {

    const [currentInfo, setCurrentInfo] = useState(''); //state set up

    const renderInfo =() => { 
        if (currentInfo === 'About') {
            return <About />
        }
        if (currentInfo === 'Contact') {
            return <Contact />
        }
        if (currentInfo === 'Work') {
            return <Portfolio />
        }
        if (currentInfo === 'Resume') {
            return <Resume />
        }

    }

    function handleInfoChange(info) {
        setCurrentInfo(info); //sets the state of currentInfo.
        //renderInfo();
        console.log("info changed");
        console.log("currentInfo: " + currentInfo);
    }


    return(
    <div>
            <div class="avatar" id="name-n-contacts">
                <div>
                    <h1>Colin Bradshaw</h1>
                        <p>Humble practitioner of the esoteric arts of technology.</p>
                </div>

                <img src="FAVORITE.jpg" alt="My favorite painting." className="image"></img>
            </div>
    
    <div>
        <Navigation currentInfo={currentInfo} handleInfoChange={handleInfoChange}></Navigation>
        {renderInfo()}
    </div>
    </div>
    );
}
