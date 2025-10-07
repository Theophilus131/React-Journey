
import React, { useState } from 'react';


function Hello() {

    const [name, setName] = useState("Guest");
     
    const [age, setAge] = useState(0);

    const updateName = () => {
        setName("John Doe");

    }
    const updateAge = () => {
        setAge(30);
    }

    const increamentAge = () => {
        setAge(age + 1);
    }


  return (
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
    
        <p>Age: {age}</p>
        <button onClick={increamentAge}>increament Age</button>
        </div>
  );
}
export default Hello;