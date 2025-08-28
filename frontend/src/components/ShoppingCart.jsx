import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useEffect } from "react";
import { loadObjFromStorage, saveObjToStorage } from "./utils/utils";
import { toTitleCase, formatCurrency } from "./utils/reactUtils";
import { Link, useNavigate } from "react-router-dom";
import "../styles/ShoppingCart.css";

export default function shoppingCart() {
    const { shoppingCart, setShoppingCart } = useContext(CartContext);
    const navigate = useNavigate();
    console.log('shopping cart', shoppingCart)

    let currencyHandler = formatCurrency(`USD`)

    const handleNavigation = () => {;};

    function dumpShoppingCart() {
        saveObjToStorage('browserShoppingCart', [])
        setShoppingCart([])
    }

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
                    <li key={index} className="cartLineItem">
                            {product.picture ? (
                                <img
                                    className="cartLineItemThumb"
                                    src={product.picture}
                                    alt={product.product_name}
                                    onClick={()=>navigate(`../details/${product.product_id}`)}
                                    style={{ cursor: 'pointer' }}
                                />
                            ) : (
                                "image"
                            )}
                            <span 
                            className="cartLineItemName" 
                            
                            onClick={()=>navigate(`../details/${product.product_id}`)} 
                            style={{ cursor: 'pointer' ,color: 'var(--link)'}}>
                                {toTitleCase(product.product_name)}
                            </span>

                        <span>Unit Price: {currencyHandler.format(product.price)}</span>
                        <span>Quantity: {cartItem['qty']}</span>
                        <span>Subtotal: {currencyHandler.format(cartItem['qty'] * product.price)}</span>
                    </li>
                )

            })
            let grandTotal = workingCart.reduce(((accumulator, currentItem) =>
                accumulator + (currentItem['qty'] * currentItem['item']['price'])), 0)

            return (
                <div className="cartContainer">
                    <ol className="cartList">{elementHolder}</ol>
                    <footer className="cartBottom">
                        <button className="clearCartButton" onClick={() => dumpShoppingCart()}>Empty Cart</button>
                        <span className="cartTotal">{currencyHandler.format(grandTotal)}</span>
                        <button className="purchaseButton" onClick={() => console.log(`Checked out $ ${grandTotal}`)}>Checkout</button>
                    </footer>
                </div>

            )
        }
    }

    let cartElement = checkCart()

    return (
        <div className="cartWindow">
            <header>
                <h1>Shopping Cart</h1>
            </header>
            {cartElement}
        </div>
    )
}
