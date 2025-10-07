
import List from './component/List';
import Button from './component/Button';

function App() {

  const fruits = [{id: 1, name: 'Banana', calories: 100},
                  {id: 2, name: 'Orange', calories: 80}, 
                  {id: 3, name: 'Mango', calories: 150},
                  {id: 4, name: 'Pineapple', calories: 90}];  // making the fruits array of objects

  return (
    <>
    <List items ={fruits} category = "fruits" />

    <Button />
    
    
    
    
    </>

  )



  }

  export default App;