
import NavBar from "./components/NavBar"
import Home  from "./pages/HomePage"  
import About from "./pages/AboutPage" 
import Contact from "./pages/ContactPage"
import Products from "./pages/Products"
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (

  <div>

    <NavBar/>

        <div className="container">
            
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/products" element={<Products/>}/>

              </Routes>
            
        </div>


    </div>
  )
}

export default App