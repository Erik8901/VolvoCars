import React, { useState, useEffect}  from 'react'
import {useRoutes, A } from 'hookrouter';



//CSS
import './styles/stylesCars.css';

//imgs
import blueArrow from '../docs/chevron-small.svg'
import pageArrows from '../docs/chevron-circled.svg'



function Cars() {
    const [carsList, setCarsList] = useState([]);
    const [showMenu, setShowMenu] = useState(false)

    useEffect( () => { 
        console.log("loading")

    fetch('api/cars.json')
      .then((res) => res.json())
      .then((data) => {
       console.log('data:', data);
        setCarsList(data)
      
  })
 
  },[]) //useEffect 1 

 return (
    <div className="App">
     <div className="div-cars">
            { carsList.map((car, index) => {
                return <li key={index}>
                      <span>{car.bodyType}</span>
                      <span>{car.modelName}</span>
                      <span>{car.modelType}</span>
                      <img src={car.imageUrl} alt="failed to load" />
                          <div className="btn-div">
                          <A href={`/Learn/${car.id}`} onClick={() => setShowMenu(!showMenu)}>
                            <span>Learn</span>
                                <img className="blue-arrows" src={blueArrow} alt="failed to load"/> 
                                </A> 
                          <A href={`/Shop/${car.id}`} onClick={() => setShowMenu(!showMenu)}>
                              <span>Shop</span>
                                <img className="blue-arrows" src={blueArrow} alt="failed to load"/> 
                                </A>
                        </div>
                    </li>
          })
        }
      </div>
      {/* <div className="pages-btns-div">
          <img src={pageArrows} className="arrows-pages" style={{WebkitTransform: 'scaleX(-1)', transform: 'scaleX(-1)'}} alt="failed to load" />
          <img src={pageArrows} className="arrows-pages" alt="failed to load" />
      </div> */}
    </div>
  );
}


export default Cars;
