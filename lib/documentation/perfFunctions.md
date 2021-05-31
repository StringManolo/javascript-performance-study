  
code: javascript  
# perfFunctions
---  
### ES6 module
---  
#### Good performant functions to accomplish basic tasks in javascript
---  
Good performant javascript functions library.  
  
  
  
##### _object_ **perf**  
Exported object holding the library methods to export.  
  
  
  
##### _method_ **perf.cloneObject**  
Get a dereferenced clone of a basic object  
Argument: **obj** _Object_   The object to be cloned  
Return: **clone** _Object_   The new cloned object  
```javascript
import perf from "./perfFunctions";

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
```  
  
  
##### _method_ **perf.addStrings**  
Argument: **(...str)** _String_   Strings to add  
Return: **res** _String_   Joined strings  
```javascript
const helloWorld = perf.addStrings("hello", "world", "!");
```
