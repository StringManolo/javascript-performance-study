/* This commentaries are made by hand to be processed by https://github.com/StringManolo/docu */

/* lang -> javascript
* name -> perfFunctions
* title -> perfFunctions - Documentation
* filetype -> ES6 module
* description -> Good performant functions to accomplish basic tasks in javascript 
* summary -> Good performant javascript functions library.
*/

/* object -> perf
* summary -> Exported object holding the library methods to export.
*/
const perf = {};

/* method -> perf.cloneObject
* summary -> Get a dereferenced clone of a basic object
* param -> obj -> Object -> The object to be cloned
* return -> clone -> Object -> The new cloned object
* example -> import perf from "./perfFunctions";

const car = {
  model: "Mustang",
  color: "Blue
}

const referenceToCar = car;

const blueCar = perf.cloneObject(car);
blueCar.model = "Raptor";

// car model is "Mustang"
// referenceToCar model is "Mustang"
// blueCar model is "Raptor"

referenceToCar.model = "Transit";

// car model is "Transit"
// referenceToCar model is "Transit"
// blueCar model is "Raptor"

*/
perf.cloneObject = obj => {
  let clone = {};
  for(let key in obj) {
    clone[key] = obj[key];
  }
  return clone;
}

/* method -> perf.addStrings
* Summary -> Add 2 or more strings
* param -> (...str) -> String -> Strings to add
* return -> res -> String -> Joined strings
* example -> const helloWorld = addStrings("hello", "world", "!");
*/
perf.addStrings = (...str) => str.reduce( (res, act) => res += act);

export default perf;
