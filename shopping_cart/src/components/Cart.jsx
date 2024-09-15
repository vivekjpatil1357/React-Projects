import React, { useState, useEffect } from 'react';
import '../styles/cart.css';
const Cart = ({ cart, setCart, sum }) => {
    const [total, setTotal] = useState(sum);
    useEffect(() => {
        const initialTotal = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
        setTotal(initialTotal);
    }, [cart]);
    const handleIncrement = (id) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        ));
        const item = cart.find(item => item.id === id);
        if (item) {
            setTotal(total => total + item.price);
        }
    };
    const handleDecrement = (id) => {
        setCart(cart.map(item => {
            if (item.id === id && item.quantity > 1) {
                setTotal(total => total - item.price);
                return { ...item, quantity: item.quantity - 1 };
            } else {
                return item;
            }
        }));
    };
    const handleRemove = (id) => {
        setCart(cart.filter(item => {
            if (item.id !== id) {
                return true;
            }
            setTotal(total => total - (item.quantity * item.price));
            return false;
        }));
    };
    if (cart.length === 0) {
        return <h1 style={{ paddingTop: '100px', color: 'white', background: 'brown' }}>
            Your Cart is EMPTY
        </h1>;
    }
    return (
        <div>
            {
                cart?.map((i) => {
                    const quantity = i.quantity || 1;
                    return (
                        <div key={i.id} className='cart-container'>
                            <div className='single'>
                                <img src={i.img} alt="" />
                                <div className='data'>
                                    <p>{i.title}</p>
                                    <p>{i.author}</p>
                                    <p><strong>Rs.{i.price * quantity}</strong></p>
                                    <div className='btn-grp'>
                                        <button onClick={() => handleIncrement(i.id)}>+</button>
                                        <p>{quantity}</p>
                                        <button onClick={() => handleDecrement(i.id)}>-</button>
                                    </div>
                                    <button onClick={() => handleRemove(i.id)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            <h1 style={{ color: 'white', padding: '100px', border: '2px solid black', position: 'fixed', background: 'Orange', borderRadius: '10px', bottom: '10px', right: '10px' }}>
                TOTAL Rs.<span style={{ fontSize: '50px' }}>{total}</span>
            </h1>
        </div>
    );
};
export default Cart;
