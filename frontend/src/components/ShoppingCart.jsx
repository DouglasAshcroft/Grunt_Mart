import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function shoppingCart() {
    const { shoppingCart, setShoppingCart } = useContext(CartContext);

    function checkCart() {
        if (!shoppingCart) {
            return (<div>No items in your cart! Get to shopping!</div>)
        } else {
            const workingCart = shoppingCart.slice()
            workingCart.map((item,key)=>{
                
            })
        }
    }

    cartElement = checkCart()

    return (
    <div className="cartContainer">
        <header>
            <h1>Shopping Cart</h1>
        </header>
        {cartElement}
    </div>
)
}
