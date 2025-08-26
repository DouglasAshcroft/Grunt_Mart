
const backendAddress = localhost
const backendPort = 3000
const backendDestination = `${backendAddress}:${backendPort}`
//Ensure that these addresses and port are correctly set if something fails
//console.log(backendDestination) //***Uncomment this line to debug endpoint issues


/**
 * UNTESTED Function that will fetch from the /items/ endpoint and get all products
 * @returns {Promise} Promise that resolves into an array of products
 */

export async function getAllItems(){
    return fetch(backendDestination+`/items/`).then(res=>res.json())
}

/**
 * UNTESTED Function that will fetch from the /category/ endpoint and get all categories
 * @returns {Promise} Promise that resolves into an array of categories
 */
export async function getAllCategories(){
    return fetch(backendDestination+`/category/`).then(res=>res.json())
}

/**
 * UNTESTED Function that will fetch from the /roles/ endpoint and get all roles
 * @returns {Promise} Promise that resolves into an array of roles
 */
export async function getAllRoles(){
    return fetch(backendDestination+`/roles/`).then(res=>res.json())
}

/**
 * UNTESTED Function that will fetch from the /user/:id/ endpoint and get any users if they exist
 * @param {number} userId The uniqueId of the user
 * @returns {Promise} Promise that resolves into an array of matching users
 */
export async function getUserById(userId){
    return fetch(backendDestination+`/user/${userId}/`).then(res=>res.json())
}

/**
 * UNTESTED Function that will fetch from the /items/:id/ endpoint and get any items if they exist
 * @param {number} itemId The uniqueId of the item
 * @returns {Promise} Promise that resolves into an array of matching items
 */
export async function getItemById(itemId){
    return fetch(backendDestination+`/items/${itemId}/`).then(res=>res.json())
}

/**
 * UNTESTED Function that will fetch from the /category/:id/ endpoint and get any categories if they exist
 * @param {number} categoryId The uniqueId of the category
 * @returns {Promise} Promise that resolves into an array of matching categories
 */
export async function getCategoryById(categoryId){
    return fetch(backendDestination+`/category/${categoryId}/`).then(res=>res.json())
}

/**
 * UNTESTED Function that will fetch from the /role/:id/ endpoint and get any roles if they exist
 * @param {number} categoryId The uniqueId of the role
 * @returns {Promise} Promise that resolves into an array of matching roles
 */
export async function getRoleById(roleId){
    return fetch(backendDestination+`/role/${roleId}/`).then(res=>res.json())
}

/**
 * UNTESTED Function that will fetch from the /user/:userid/orders/ endpoint and get any orders for a user if they exist
 * @param {number} userId The uniqueId of the user
 * @returns {Promise} Promise that resolves into an array of orders for a userId
 */
export async function getUserOrders(userId){
    return fetch(backendDestination+`/user/${userId}/orders/`).then(res=>res.json())
}

/**
 * UNTESTED Function that will fetch from the /user/:userid/orders/:orderID endpoint and get any matching orders for a user if they exist
 * @param {number} userId The uniqueId of the user
 * @param {number} orderId The uniqueId of the order 
* @returns {Promise} Promise that resolves into an array of matching orders for a userId
 */
export async function getUserOrdersById(userId,orderId){
    return fetch(backendDestination+`/user/${userId}/orders/${orderId}`).then(res=>res.json())
}