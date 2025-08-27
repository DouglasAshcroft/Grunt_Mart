
//const backendAddress = localhost
//const backendPort = 3000
const backendDestination = `http://localhost:3000`
//Ensure that these addresses and port are correctly set if something fails
//console.log(backendDestination) //***Uncomment this line to debug endpoint issues



export function saveObjToStorage(key,savedObj) {
    localStorage.setItem(key, JSON.stringify(savedObj))
}

export function loadObjFromStorage(key) {
    if (localStorage.getItem(key) == null) {
        return false
    } else
        return JSON.parse(localStorage.getItem(key))
}

/**
 * UNTESTED Function that will fetch from the /items/ endpoint and get all products
 * @returns {Promise<Array>} Promise that resolves into an array of products
 */

export async function getAllItems() {
    return fetch(`${backendDestination}/items/`).then((res) => res.json());
}

/**
 * UNTESTED Function that will fetch from the /category/ endpoint and get all categories
 * @returns {Promise<Array>} Promise that resolves into an array of categories
 */
export async function getAllCategories() {
    return fetch(backendDestination + `/category/`).then((res) => res.json());
}

/**
 * UNTESTED Function that will fetch from the /roles/ endpoint and get all roles
 * @returns {Promise<Array>} Promise that resolves into an array of roles
 */
export async function getAllRoles() {
    return fetch(backendDestination + `/roles/`).then((res) => res.json());
}

/**
 * UNTESTED Function that will fetch from the /user/:id/ endpoint and get any users if they exist
 * @param {number} userId The uniqueId of the user
 * @returns {Promise<Array>} Promise that resolves into an array of matching users
 */
export async function getUserById(userId) {
    return fetch(backendDestination + `/user/${userId}/`).then((res) =>
        res.json()
    );
}

/**
 * UNTESTED Function that will fetch from the /items/:id/ endpoint and get any items if they exist
 * @param {number} itemId The uniqueId of the item
 * @returns {Promise<Array>} Promise that resolves into an array of matching items
 */
export async function getItemById(itemId) {
    return fetch(backendDestination + `/items/${itemId}/`).then((res) =>
        res.json()
    );
}

/**
 * UNTESTED Function that will fetch from the /category/:id/ endpoint and get any categories if they exist
 * @param {number} categoryId The uniqueId of the category
 * @returns {Promise<Array>} Promise that resolves into an array of matching categories
 */
export async function getCategoryById(categoryId) {
    return fetch(backendDestination + `/category/${categoryId}/`).then((res) =>
        res.json()
    );
}

/**
 * UNTESTED Function that will fetch from the /role/:id/ endpoint and get any roles if they exist
 * @param {number} categoryId The uniqueId of the role
 * @returns {Promise<Array>} Promise that resolves into an array of matching roles
 */
export async function getRoleById(roleId) {
    return fetch(backendDestination + `/role/${roleId}/`).then((res) =>
        res.json()
    );
}

/**
 * UNTESTED Function that will fetch from the /user/:userid/orders/ endpoint and get any orders for a user if they exist
 * @param {number} userId The uniqueId of the user
 * @returns {Promise<Array>} Promise that resolves into an array of orders for a userId
 */
export async function getUserOrders(userId) {
    return fetch(backendDestination + `/user/${userId}/orders/`).then((res) =>
        res.json()
    );
}

/**
 * UNTESTED Function that will fetch from the /user/:userid/orders/:orderID endpoint and get any matching orders for a user if they exist
 * @param {number} userId The uniqueId of the user
 * @param {number} orderId The uniqueId of the order
 * @returns {Promise<Array>} Promise that resolves into an array of matching orders for a userId
 */
export async function getUserOrdersById(userId, orderId) {
    return fetch(backendDestination + `/user/${userId}/orders/${orderId}`).then(
        (res) => res.json()
    );
}
/**
 * @param {number} mftrId the unique manufacturer ID
 */
export async function getMftrById(mftrId) {
  return fetch(backendDestination + `/mftr/${mftrId}/`).then((res) => res.json());
}

//Shopping Cart Functions

/**
 * @typedef rfiProduct
 * @type {object}
 * @property {number} product_id - Uniqued number ID of the product
 * @property {string} product_name - string name of product
 * @property {number} category - category id
 * @property {number} mftr - manufacturer id
 * @property {number} rating - current rating of product (#.#)
 * @property {string} description - string description
 * @property {number} price - price in USD
 * @property {string} picture - string url to picture reference
 * @property {number} quantity - current in stock quanitity
 * @property {string} nsn - National Stock Number in String format
 * 
 */

/**
 * UNTESTED Function that will add an Item to the cart
 * @param {rfiProduct} addedItem Item object to be purchased
 * @param {Array.rfiProduct} cartState Supplied cart via context, defaults to empty
 * @param {function} setCartState Function to fire to change cartState
 * @param {number} quantity Quanitity to add to cart, defaults to one
 * @returns {boolean} True if cart was updated successfully, ALWAYS TRUE ATT
 */

export function addItemToCart(addedItem, [cartState = [], setCartState], quantity = 1) {
    /** @type {array}*/
    let updatedCart = cartState.slice()
    if (updatedCart.length > 0) {
        let indexCheck = updatedCart.findIndex(element => element.item.product_id == addedItem.product_id)
        if (indexCheck > -1) {
            updatedCart[indexCheck].qty += 1
        } else {
            updatedCart.push({ 'item': addedItem, 'qty': quantity })
        }
    } else {
        updatedCart.push({ 'item': addedItem, 'qty': quantity })
    }


    setCartState(updatedCart)
    console.log(cartState)
    return true
}


//Shopping Cart Functions

/**
 * @typedef rfiProduct
 * @type {object}
 * @property {number} product_id - Uniqued number ID of the product
 * @property {string} product_name - string name of product
 * @property {number} category - category id
 * @property {number} mftr - manufacturer id
 * @property {number} rating - current rating of product (#.#)
 * @property {string} description - string description
 * @property {number} price - price in USD
 * @property {string} picture - string url to picture reference
 * @property {number} quantity - current in stock quanitity
 * @property {string} nsn - National Stock Number in String format
 * 
 */

/**
 * UNTESTED Function that will add an Item to the cart
 * @param {rfiProduct} addedItem Item object to be purchased
 * @param {Array.rfiProduct} cartState Supplied cart via context, defaults to empty
 * @param {function} setCartState Function to fire to change cartState
 * @param {number} quantity Quanitity to add to cart, defaults to one
 * @returns {boolean} True if cart was updated successfully, ALWAYS TRUE ATT
 */

export function addItemToCart(addedItem, [cartState=[],setCartState],quantity=1){
    let updatedCart = cartState.slice()
    let indexCheck = updatedCart.findIndex(element=>element.item.product_id==addedItem.product_id)
    if(indexCheck>-1){
        updatedCart[indexCheck].qty+=1
    } else {
updatedCart.push({'item':item,'qty':quantity})
    }
    
    setCartState(updatedCart)
    console.log(cartState)
    return true
}


// // utils.js

// // ✅ Central base URL (use VITE_API_URL if set, fallback to localhost:3000)
// const BASE = import.meta.env?.VITE_API_URL ?? "http://localhost:3000";

// /**
//  * Wrapper for fetch that handles errors + JSON
//  */
// async function request(path, options = {}) {
//   const res = await fetch(BASE + path, {
//     headers: { "Content-Type": "application/json", ...(options.headers || {}) },
//     credentials: "include", // include cookies (useful later for auth)
//     ...options,
//   });

//   if (!res.ok) {
//     const text = await res.text().catch(() => "");
//     throw new Error(`${res.status} ${res.statusText}: ${text}`);
//   }
//   return res.json();
// }

// // ---- API Calls ----

// // Products
// export function getAllItems() {
//   return request("/items/");
// }
// export function getItemById(itemId) {
//   return request(`/items/${itemId}/`);
// }

// // Categories
// export function getAllCategories() {
//   return request("/category/");
// }
// export function getCategoryById(categoryId) {
//   return request(`/category/${categoryId}/`);
// }

// // Roles
// export function getAllRoles() {
//   return request("/roles/");
// }
// export function getRoleById(roleId) {
//   return request(`/role/${roleId}/`);
// }

// // Users
// export function getUserById(userId) {
//   return request(`/user/${userId}/`);
// }
// export function getUserOrders(userId) {
//   return request(`/user/${userId}/orders/`);
// }
// export function getUserOrdersById(userId, orderId) {
//   return request(`/user/${userId}/orders/${orderId}/`);
// }
