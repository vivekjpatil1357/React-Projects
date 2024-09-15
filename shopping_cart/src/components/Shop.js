import React from 'react'
import products from '../List.js'
import '../styles/shop.css'
import Card from './Card.js'
const Shop = ({handleClick}) => {
  return (
      <div className='container'>
          {
              products.map((e) => {                
                return <Card key={e.id} data={ e} handleClick={handleClick} />
              })
          }
    </div>
  )
}
export default Shop