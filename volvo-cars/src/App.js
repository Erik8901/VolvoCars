import React, { useState, useEffect}  from 'react'
import {useRoutes, A } from 'hookrouter';

import Cars from './components/cars'
import Learn from './pages/Learn';
import Shop from './pages/Shop';


//CSS
import './styles/App.css';

//imgs
import blueArrow from './docs/chevron-small.svg'
import pageArrows from './docs/chevron-circled.svg'

const routes = {
   '/cars': () => <Cars />,
  '/learn': () => <Learn/>,
 '/shop*': () => <Shop />,
}



function App() {
  const page = useRoutes(routes)
  
 

 return (
    <div className="App">
      <h1>Volvo Cars App</h1>
      <Cars />
      {page}
      {/* <Learn/>
      <Shop /> */}
        <div className="pages-btns-div">
          <img src={pageArrows} className="arrows-pages" style={{WebkitTransform: 'scaleX(-1)', transform: 'scaleX(-1)'}} alt="failed to load" />
          <img src={pageArrows} className="arrows-pages" alt="failed to load" />
      </div>
    </div>
  );
}

export default App;
