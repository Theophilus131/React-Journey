import { Link } from 'react-router-dom'



const NavBar = () => {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <img src="" alt="" />

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>

          </ul>

          <button>Get Started</button>
     

      </div>
    

   
  )
}

export default NavBar