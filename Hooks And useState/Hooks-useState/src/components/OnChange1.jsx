
import React, {useState} from "react"   


function OnChange1() {

   const [name, setName] = useState("Guest");

   const [quantity, setQuantity] = useState(1);

  const [comment, setComment] = useState("");


  function handleCommentChange(event) {
        setComment(event.target.value);
   }


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
      <br />
      <textarea value={comment} onChange={handleCommentChange} placeholder="Enter your comment"></textarea>
      <p>Your comment is: {comment}</p>
    </div>
  )
}
export default OnChange1;