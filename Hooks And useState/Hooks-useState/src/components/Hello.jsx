
import React, { useState } from 'react';


function Hello() {

    const [name, setName] = useState("Guest");

    const updateName = () => {
        setName("John Doe");

    }


  return (
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
        
        </div>
  );
}
export default Hello;