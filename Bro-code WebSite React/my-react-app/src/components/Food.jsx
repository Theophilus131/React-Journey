

function Food() {
  
    const food1 = "Pizza";
    const food2 = "Burger";
    const food3 = "Ice Cream";
  
    return (
        <ul>
            <li>{food1}</li>
            <li>{food2.toUpperCase ()}</li>
            <li>{food3}</li>
        </ul>
    
  );
}

export default Food;