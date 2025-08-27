
//const backendAddress = localhost
//const backendPort = 3000
const backendDestination = `http://localhost:3000`
//Ensure that these addresses and port are correctly set if something fails
//console.log(backendDestination) //***Uncomment this line to debug endpoint issues

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
