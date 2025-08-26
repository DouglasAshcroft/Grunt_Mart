//This file is for utils that are front-end only and project-agnostic.

import { useEffect } from "react";

/**
 * Function intended for easy tracking of state updates inside of components.
 * Best Practice is to place after all internal component logic and before the component's return statements.
 * ***WARNING***: Do NOT place inside other useEffects or conditionals, as this will throw an error in React of inconsistent hook orders.
 * @param {any} stateValue The state to be tracked. Input the state variable name without any quotes.
 * @param {string} stateName The string name for the state to be shown in the console log. Cannot be the same variable as stateValue, must be an actual string. Defaults to "Unnamed State"
 * @returns {Function} Returns a useEffect function that logs when the given stateValue triggers a reload.
 * @example //Logs "userName has changed, new value is bob"
 * const [userName,setUserName] = useState('');
 * stateMonitor(userName,'userName')
 * //Some event occurs to change the userName, and the stateMonitor fires
 */
export function stateMonitor(stateValue, stateName = "Unnamed State") {
  return useEffect(() => {
    console.log(`${stateName} changed, new value is`, stateValue);
  }, [stateValue]);
}

/**
 * Function for simplifying capitalization on a string. Good for when names are stored as lower case in DBs, or enforcing title case as needed.
 * Also enforces lower case for other characters in the string.
 * @param {string} str The state to be tracked. Input the state variable name without any quotes.
 * @returns {string} Returns the properly-capitalized string.
 * @example
 * // returns 'Foo'
 * let MyTitle = toTitleCase('foo')
 * @example
 * // returns 'Bar'
 * let myString = 'bAR'
 * let myTitle = toTitleCase(myString)
 */
export function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}