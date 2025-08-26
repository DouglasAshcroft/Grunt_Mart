    /**
     * Test function to show basic JSdoc functionality
     * @param {string} inString - A string
     * @returns {string} The same string passed in
     */
function sqlDebugTest(inString){
    console.log('test',inString||'No inString Given')
    return inString
}

    /**
     * PLACEHOLDER Function that will check if a user exists in the usersDB, 
     * and if the supplied hash matches existing hashed password. Params not implemented, returns true.
     * @param {string} userName - A string of the user's name
     * @param {string} passHash - A hashed password
     * @returns {boolean} Boolean that returns true if authenticated, false if not authenticated, and errors null NOTE: Is this needed?
     */
function authenticateUser(){
    return true //PLACEHOLDER
}

/**
     * PLACEHOLDER Function that will create a user with a given email, username, and password.
     * 
     * Ideal implementation will have checks for existing userName/email.
     * Stretch goals for scanning for invalid characters and password requirements.
     * ***Placeholder returns userId 999 for testing purposes
     * @param {string} email - A valid email address
     * @param {string} userName - A string of the user's desired name
     * @param {string} passHash - A hashed password
     * @returns {number} The created user's userId. Returns -1 if an error occurs. ***Placeholder always returns 999
     */
function createUser(){
    return 999 //PLACEHOLDER
}

    /**
     * PLACEHOLDER Function that will attempt to create an order for a given user and array of item objects.
     * Ideal implementation will have function check all items and quantities before executing updates of stock in tables, to prevent errors midway through order.
     * ***Function currently returns 101 by default as a placeholder.
     * @param {number} userId - A user's id number
     * @param {array} orderArray - An array of item objects to order. Object structure can be determined later. Recommend minimum itemId and Qty.
     * @returns {number} UniqueID of order if successfully created. Function returns -1 on any error or unfulfillable order. 
     */
function createOrder(){
    return 101
}

module.exports = {
    sqlDebugTest:sqlDebugTest,
    authenticateUser:authenticateUser,
    createUser:createUser,
    createOrder:createOrder
};