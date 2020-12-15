import React, { useState, useEffect}  from 'react'
import { A } from 'hookrouter';

//CSS
import './styles/stylesCars.css';

//imgs
import blueArrow from '../docs/chevron-small.svg'

function Cars() {
    const [carsList, setCarsList] = useState([]);
    const [bodyTypes, setBodyTypes] = useState([]);
    const [allCars, setAllCars] = useState([]);
    const [showBackBtn, setShowBackBtn] = useState(true);
    
    useEffect( () => { 
       fetch('api/cars.json')
            .then((res) => res.json())
            .then((data) => {
                setCarsList(data)
                setAllCars(data)
        })
    
    },[]) //useEffect 1 

    useEffect( () => { 
        let list = []
        carsList.forEach(car => list.push(car.bodyType))
        let bodies = [...new Set(list)]
        setBodyTypes(bodies)
    },[carsList]) //useEffect 2
     
     function sortByBodyType(body) {
        let result = carsList.filter(cars =>  { return cars.bodyType.includes(body) });
        setCarsList(result)
        setShowBackBtn(false)
     } //sortByBodyType

     function goBack() {
        setCarsList(allCars)
        setShowBackBtn(!showBackBtn)
    } //goBack
    
 return (
        <div className="cars-page">
            <div className="filter-bar">
                { !showBackBtn && <span className="btn-back" onClick={() => goBack()}>Go Back</span> }
                    <div className="btn-filter-div">
                    { bodyTypes.map((body, index) => {
                        return  <li key={index}>
                                        <span className="btn-body-type" onClick={() => sortByBodyType(body)}>{body.charAt(0).toUpperCase() + body.slice(1)}</span>
                                </li>
                                
                    })}
                    </div>
                </div>
        
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
