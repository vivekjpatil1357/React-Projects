import React from 'react'
// import logo from './logo.png'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../styles/navbar.css'
const Navbar = ({count,handleIconClick}) => {
  return (
    <nav>
      <span className='logo'>Book Store</span>
      <span className='cart' onClick={()=>{handleIconClick()}} >
        <i className='fas fa-cart-plus icon'></i>
        <span>{count}</span>
      </span>



    </nav>
  )
}
export default Navbar