import React from 'react'
import Cars from './components/cars'

//CSS
import './styles/App.css';

//imgs
import pageArrows from './docs/chevron-circled.svg'


function App() {
        
    return (
        <div className="App">
            <Cars />
                <div className="pages-btns-div">
                    <img src={pageArrows} className="arrows-pages" style={{WebkitTransform: 'scaleX(-1)', transform: 'scaleX(-1)'}} alt="failed to load" />
                    <img src={pageArrows} className="arrows-pages" alt="failed to load" />
                </div> 
                <div className="circle-btns-div">
                    <span className="circle-btn" />
                </div>
      </div>
    );
}

export default App;
