    /**
     * Test function to show basic JSdoc functionality
     * @param {string} inString - A string
     * @returns {string} The same string passed in
     */

function sqlDebugTest(inString){
    console.log('test',inString||'No inString Given')
    return inString
}

module.exports = sqlDebugTest;