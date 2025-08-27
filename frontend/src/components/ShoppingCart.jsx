import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useEffect } from "react";
import { loadObjFromStorage, saveObjToStorage } from "./utils/utils";

export default function shoppingCart() {
    const { shoppingCart, setShoppingCart } = useContext(CartContext);
    console.log('shopping cart', shoppingCart)

    function checkCart() {
        if (!shoppingCart || shoppingCart.length < 1) {
            return (<div>No items in your cart! Get to shopping!</div>)
        } else {
            /** @type {Array} */
            console.log('shopping cart', shoppingCart)
            let workingCart = shoppingCart.slice()
            console.log('working cart', workingCart)
            let elementHolder
            elementHolder = workingCart.map((cartItem, index) => {
                /** @type {import("./utils/utils").rfiProduct} */
                let product = cartItem['item']
                return (
                    <li className="cartLineItem">

                        {product.picture ? (
                            <img
                                className="cartLineItemThumb"
                                src={product.picture}
                                alt={product.product_name}
                            />
                        ) : (
                            "image"
                        )}
                        <span>{product.product_name}</span>
                        <span>{product.price}</span>
                        <span>{cartItem['qty']}</span>
                        <span>{cartItem['qty'] * product.price}</span>
                    </li>
                )

            })
            return (
                <ol>{elementHolder}</ol>
            )
        }
    }

    let cartElement = checkCart()

    return (
        <div className="cartContainer">
            <header>
                <h1>Shopping Cart</h1>
            </header>
            {cartElement}
        </div>
    )
}
