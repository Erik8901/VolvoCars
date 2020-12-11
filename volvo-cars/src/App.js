import React from 'react'
//import { useRoutes } from 'hookrouter'; { useState, useEffect}

import Cars from './components/cars'
// import Learn from './pages/Learn';
// import Shop from './pages/Shop';


//CSS
import './styles/App.css';

//imgs
import pageArrows from './docs/chevron-circled.svg'

// const routes = {
//     '/Cars': () => <Cars />,
//     '/Learn': () => <Learn/>,
//     '/Shop': () => <Shop />,
// }

function App() {

   
    return (
        <div className="App">
            <Cars />
          {/* <Learn/>
          <Shop /> */}
            <div className="pages-btns-div">
                <img src={pageArrows} className="arrows-pages" style={{WebkitTransform: 'scaleX(-1)', transform: 'scaleX(-1)'}} alt="failed to load" />
                <img src={pageArrows} className="arrows-pages" alt="failed to load" />
            </div> 
            <div className="circle-btns-div">
                <span className="circle-btn" />
                {/* <span className="circle-btn" /> */}
            </div>
      </div>
    );
}

export default App;
