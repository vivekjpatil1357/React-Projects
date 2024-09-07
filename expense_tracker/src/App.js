import React, { useRef, useState } from 'react'
import './App.css'
const App = () => {
  const count = useRef(0)
  const [list, setList] = useState([])
  const [expense, setexpense] = useState('')
  const [amount, setamount] = useState('')
  const handleAdd = () => {
    if (!expense || !amount) {
      return
    }
    const temp = {
      id: count.current + 1,
      title: expense,
      amount: amount
    }
    setList(
      [...list, temp]
    )
    count.current = count.current + 1
    setexpense('')
    setamount('')
  }
  const handleDelete = (id) => {
    setList(
      list.filter((item) => item.id != id)
    )
  }

  return (
    <>
      <div className='container'>
        <div className='tracker-card'>
          <h1>Expense Tracker</h1>
          <div className='inputs'>

            <input placeholder='Enter Expense' value={expense} onChange={(e) => { setexpense(e.target.value) }} className='input' type='text'></input>
            <input placeholder='Enter Amount' value={amount} onChange={(e) => { setamount(e.target.value) }} className='input' type='number'></input>
            <input type='button' className='input' onClick={handleAdd} value='Add'></input>
          </div>
          <div className='output'>
            <li className='list-item'><div>Id</div>
              <div>Expense</div>
              <div>Amount</div>
              <div>Delete</div>
            </li>
            {
              list.map((item) =>
                <li key={item.id} className='list-item'>
                  <div>
                    {item.id}
                  </div>
                  <div>
                    {item.title}
                  </div>
                  <div>
                    {item.amount}
                  </div>
                  <div>
                    <input type='button' onClick={() => handleDelete(item.id)} className='delete-button' value={'Delete'} />
                  </div>
                </li>
              )
            }
          </div>

        </div>
      </div>
    </>
  )
}

export default App