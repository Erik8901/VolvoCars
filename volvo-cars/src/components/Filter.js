import React, { useState,useEffect}  from 'react'

//CSS 
import './styles/stylesFilter.css'


function Filter(props) {
    const [carList2, setCarList2] = useState([]);
    console.log(props.cars)
    //setCarList2(props.cars)
  useEffect( () => { 
      console.log("loading Filter Page")

},[]) //useEffect 1 


  return (
    <div className="filter-div">
        <span>Filter by Bodytype</span>
    </div>
  );
}

export default Filter;
