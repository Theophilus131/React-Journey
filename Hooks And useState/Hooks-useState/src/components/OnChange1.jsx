
import React, {useState} from "react"   


function OnChange1() {

   const [name, setName] = useState("Guest");

   const [quantity, setQuantity] = useState(1);

  const [comment, setComment] = useState("");

  const [payment, setPayment] = useState("");

  const [shipping, setShipping] = useState("");

  function handlePaymentChange(event) {
        setPayment(event.target.value);
   }


  function handleCommentChange(event) {
        setComment(event.target.value);
   }


   function handleQuantityChange(event) {
        setQuantity(event.target.value);
   }

   function handleNameChange(event) {
        setName(event.target.value);
   }

   function handleShippingChange(event) {
        setShipping(event.target.value);
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

      <br />
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select Payment Method</option>
        <option value="creditcard">Credit Card</option>
        <option value="paypal">PayPal</option>
        <option value="bitcoin">Bitcoin</option>
      </select>
      <p>Your selected payment method is: {payment}</p>
      <br />

      <label>
        <input type="radio" value="standard" checked={shipping === "standard"} onChange={handleShippingChange} />
        Standard Shipping
      </label>
      <label>
        <input type="radio" value="express" checked={shipping === "express"} onChange={handleShippingChange} />
        Express Shipping
      </label>
      <p>Your selected shipping method is: {shipping}</p>

    </div>
  )
}
export default OnChange1;