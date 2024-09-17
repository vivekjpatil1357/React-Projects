import React, { useEffect, useRef, useState } from 'react'
import './todo.css'
const Todo = () => {
    const [list, setList] = useState([])
    const [work, setWork] = useState('')
    const [update, setUpdate] = useState(false)
    const [editId,setEditId]=useState(null)
    const [editText, setEditText] = useState(null)
    const inputRef=useRef()
    useEffect(() => {
        inputRef.current.focus()
    })
    const handleAdd = () => {
        
        if (work.trim() !== '') {
            const listItem = {
                id: new Date().getTime(),
                text: work
            }
            setList([...list, listItem])
            setWork('')
        }
    }
    const handleDelete = (e) => {
        setList(
            list.filter((item)=>e.id!==item.id)
        )
    }
    const handleUpadate = (e) =>
    {
        setWork(e.text)
        setUpdate(true)
        setEditId(e.id)
        setEditText(e.text)

    }
    const handleEdit = () => {
        const updated=list.map((e) => {
            if (e.id === editId) {
                return {...e,text:work}
            }
            return e
        })
        setList(updated)
        setUpdate(false)
        setWork('')
    }
    return (
        <div className='container2'>
            <p style={{fontWeight:"900",color:'black',marginBottom:'50px',fontSize:'80px'}}>TODO List</p>
            <div className='card'>
                <div className='input'>
                    <input type="text" ref={inputRef} className='text' value={work} onChange={(e) => {
                        setWork(e.target.value)
                    }} />
                    { 
                        update?<button className='btn' onClick={handleEdit}>Update</button>:<button className='btn' onClick={handleAdd}>Add</button>
                    }
                </div>
                <div >
                    {
                        list.length>0?list?.map((e) => {
                            return <div key={e.id} className='list'>
                                <span>{e.text}</span>
                                <div>
                                    
                                <button className='delete' onClick={()=>handleDelete(e) }>Delete</button>
                                <button className='update' onClick={()=>handleUpadate(e)}>Update</button>
                                </div>
                            </div>
                        }):<div align='center'> List is Empty</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Todo