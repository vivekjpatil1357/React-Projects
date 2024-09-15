import React from 'react'
import '../styles/card.css'
const Card = (props) => {
  const {img,title,price,author}=props.data
  // console.log(props.data);
  const handleClick=props.handleClick
  return (
    <div className='card'>
      
      <img src={img}></img>
      <div style={{width:'auto'}}>
      <p style={{ fontWeight: "bold" }}>{title}</p>
      <p style={{ fontWeight: "bold" }}>{author}</p>
      </div>
      <p>For Rs. { price}</p>
      <button onClick={()=>{handleClick(props.data)}}>Add To Cart</button>
    </div>
  )
}

export default Card