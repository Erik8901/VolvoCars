import React, { useState,useEffect}  from 'react'

//CSS 
import './styles/stylesFilter.css'


function Filter(props) {
    const [carList2, setCarList2] = useState([]);
    const [bodyTypes, setBodyTypes] = useState([])
    console.log(props.cars)
    
  useEffect( () => { 
      console.log("loading Filter Page")
      
    
    //  setCarList2(props.cars)
},[]) //useEffect 1 


  return (
    <div className="filter-div">
        <span>Filter by Bodytype</span>
        <div>
            { carList2.map((car, index) => {
                return <li key={index}>
                    <div>
                        <span>{car.bodyType}</span>
                    </div>
                </li>
            })}
        </div>
    </div>
  );
}

export default Filter;
