import React, { useState, useEffect}  from 'react'
import {useRoutes} from 'hookrouter';



function Shop() {
  
  useEffect( () => { 
      console.log("loading Shop Page")

},[]) //useEffect 1 


  return (
    <div className="Shop">
        <h1>Shop Page</h1>
    </div>
  );
}

export default Shop;
