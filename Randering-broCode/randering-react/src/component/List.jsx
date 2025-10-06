

function List(){

    // const fruits = ['Banana', 'Orange', 'Mango', 'Pineapple'];



    
    const fruits = [{id: 1, name: 'Banana', calories: 100},
                    {id: 2, name: 'Orange', calories: 80}, 
                    {id: 3, name: 'Mango', calories: 150},
                    {id: 4, name: 'Pineapple', calories: 90}];  // making the fruits array of objects

                    fruits.sort ((a, b) => a.calories - b.calories); // sorting the array of objects in ascending order of calories
                
    const listItems = fruits.map(fruit  => <li key = {fruit.id}>{fruit.name}: &nbsp;
                
                                                  <b> {fruit.calories} calories </b> 
                                                        </li>);

    return(
        // <ul>{listItems}</ul> // for unordered list
        <ol>{listItems}</ol>    // for ordered list... randering numbers
    );

}

export default List