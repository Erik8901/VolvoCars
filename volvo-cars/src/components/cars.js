import React, { useState, useEffect}  from 'react'
import { A } from 'hookrouter';

//CSS
import './styles/stylesCars.css';

import Filter from './Filter'

//imgs
import blueArrow from '../docs/chevron-small.svg'

function Cars() {
    const [carsList, setCarsList] = useState([]);
    
    useEffect( () => { 
       fetch('api/cars.json')
            .then((res) => res.json())
            .then((data) => {
                   // console.log('data:', data);
                    setCarsList(data)
        })
    },[]) //useEffect 1 
    
 return (
        <div className="cars-page">
             <Filter cars={carsList} />
            <div className="div-cars">
                { carsList.map((car, index) => { 
                    return <li key={index}>
                                <div className="car-info-div-1">
                                    <span className="bodyType">{car.bodyType.toUpperCase()}</span>
                                        <div className="car-info-div-2" >
                                            <span>{car.modelName}</span>
                                            <span className="car-model-type">{car.modelType}</span>
                                        </div>
                                </div> 
                                    <img src={car.imageUrl} alt="failed to load" />
                                        <div className="btn-div">
                                                <A href={`/Learn/${car.id}`}>
                                                    <span>LEARN</span>
                                                    <img className="blue-arrows" src={blueArrow} alt="failed to load"/> 
                                                </A> 
                                                <A href={`/Shop/${car.id}`}>
                                                    <span>SHOP</span>
                                                    <img className="blue-arrows" src={blueArrow} alt="failed to load"/> 
                                                </A>
                                        </div>
                            </li>
                    })
                }
            </div> 
        </div> //cars-page
    );
}


export default Cars;
