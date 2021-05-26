import perf from "./perfFunctions.mjs";

/* cloneObject */
const person = {
  age: 27,
  name: "Manolo"
};

const person2 = perf.cloneObject(person);
++person.age;
console.log(`person.age ${person.age}
person2.age ${person2.age}`);


/* addStrings */
const str1 = "abc"
const str2 = "def"
const str3 = "ghi";

console.log(perf.addStrings(str1, str2, str3));


