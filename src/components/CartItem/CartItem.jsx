import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import { useHistory } from "react-router-dom";
import './CartItem.css';

export const CartItem = ({ item, cantidad }) => {
    const { changeItemQuantityFromCartById, deleteItemFromCartById } = useContext(CartContext);
    const history = useHistory();
    const [count, setCount] = useState(cantidad);

    const handlerCount = (id, newCantidad) => {
        if(newCantidad === 0) {
            deleteItemFromCartById(id);
        } else if(newCantidad <= item.stock){
            changeItemQuantityFromCartById(id, newCantidad);
            setCount(newCantidad);
        }
    }

    return (
        <div className="cart-item bdr-g-l_3 bg-g-l_1 b-r_5 row-to-column_in-980">
            <img src={item.img_url} alt={item.name} />
            <h3 onClick={() => { history.push(`/item/${item.id}`) }}>{item.name}</h3>
            <p className="price">${item.price * cantidad}</p>
            {
                <div className="count-container">
                    <button onClick={() => handlerCount(item.id, count+1)} className="clean-button">+</button>
                    <p>{count}</p>
                    <button onClick={() => handlerCount(item.id, count-1)} className="clean-button">-</button>
                </div>
            }
        </div>
    )
}