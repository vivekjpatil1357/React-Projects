import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Cart from './components/Cart';
function App() {
  const [cart, setCart] = useState([])
  const [warning, setWarning] = useState()
  const [show,setShow]=useState(true)
  const handleClick = (item) => {
    let ispresent = false
    cart.forEach(ele => {
      if (ele.id == item.id) {
        ispresent = true
      }
    });
    if (ispresent) {
      setWarning("Already Present")
      setTimeout(() => {
        setWarning('')
      }, 2000);

      return
    }
    setCart([...cart, item])
  }
  const handleIconClick = () => {
    show?setShow(false):setShow(true)
  }
  if (cart.length == 0 && !show) {
    setShow(true)
    return <div>
      <Navbar count={cart.length} handleIconClick={handleIconClick} />
      <Shop handleClick={handleClick} />
    </div>
  }
  let sum=0
  for(let i of cart){
    sum+=i.price
  }
  return (
    <div style={{scrollBehavior:'smooth'}}>
      <Navbar count={cart.length} handleIconClick={handleIconClick} />
      {
        show ? <Shop handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} sum={sum} />
      }
      {warning && <div style={{ position: 'fixed', background: "#f22937", color: 'white', fontFamily:'sans-serif', border:'2px solid black',borderRadius:'10px',padding:'15px', top: '30px', right: '100px' }}>already In Cart</div>}
    </div>
  );
}
export default App;
