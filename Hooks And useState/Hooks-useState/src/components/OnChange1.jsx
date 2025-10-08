
import React, {useState} from "react"   


function OnChange1() {

   const [name, setName] = useState("Guest");

   const [quantity, setQuantity] = useState(1);

   function handleQuantityChange(event) {
        setQuantity(event.target.value);
   }

   function handleNameChange(event) {
        setName(event.target.value);
   }



  return (
    <div>
      <input value={name} onChange={handleNameChange}></input>
      <p>Your name is: {name}</p>
      <br />
      <input type="number" value={quantity} onChange={handleQuantityChange}></input>
      <p>Your order quantity is: {quantity}</p>
    </div>
  )
}
export default OnChange1;