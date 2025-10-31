
import logo from '../assets/libraryLogo.webp'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" width={130} height={100} />

        <ul>
           <Link to={'/'}><li>Home</li></Link>
          <Link to={'/about'}><li>About</li></Link>  
          <Link to={'/contact'}><li>Contact</li></Link>  
          <Link to={'/products'}><li>Products</li></Link>  
            
        </ul>
        
        <button>Get Started</button>
    </div>
  )
}

export default NavBar