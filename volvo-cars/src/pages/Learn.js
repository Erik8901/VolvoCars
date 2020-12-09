import React, { useState, useEffect}  from 'react'




function Learn() {
  
  useEffect( () => { 
      console.log("loading Learn Page")
},[]) //useEffect 1 

  return (
      <div className="Learn" style={{background: "yellow"}}>
          <h1>Learn Page</h1>
      </div>
  );
}

export default Learn;
