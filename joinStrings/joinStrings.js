const str1 = "abc";
const str2 = "defghijklmnñopqrstuvwxyz";


const strPlusStr = times => {
  let str = "";
  for(let i = 0; i < times; ++i) {
    str += str1 +  str2;
  }
  return str;
}

const strToArrayPush = times => {
  let str = [];
  for(let i = 0; i < times; ++i) {
    str.push(str1);
    str.push(str2);
  }
  return str.join("");
}

const strPush = times => {
  let str = [];
  for(let i = 0; i < times; ++i) {
    str.push(str1, str2);
  }
  return str.join("");
}

const strConcatStr = times => {
  let str = [];;
  for (let i = 0; i < times; ++i) {
    str.push(str1.concat(str2));
  }
  return str.join("");
}


const _ = console.log;
//const _ = alert; // For Android Browser Testing


const test = times => {
  let time;
  let results = [];

  time = new Date();
  strPlusStr(times);
  results.push(new Date() - time);

  time = new Date();
  strToArrayPush(times);
  results.push(new Date() - time);

  time = new Date();
  strPush(times);
  results.push(new Date() - time);

  time = new Date();
  strConcatStr(times);
  results.push(new Date() - time);

  _(`
Config:
  - Running ${times} times

Results:
strPlusStr -> ${results[0]}ms
strToArrayPush -> ${results[1]}ms
strPush -> ${results[2]}ms
strConcatStr -> ${results[3]}ms
`);
}

/*
test(1)
test(10)
test(100)
test(1000)
test(10000)
test(100000) */
//test(1000000)
test(30000); // qjs bug on strPlusStr function

/* > qjs joinStrings.js

Config:
  - Running 30000 times

Results:
strPlusStr -> 8100ms           HERE
strToArrayPush -> 19ms
strConcatStr -> 24ms


> node joinStrings.js

Config:
  - Running 30000 times

Results:
strPlusStr -> 13ms        THIS IS ALL GOOD
strToArrayPush -> 14ms
strConcatStr -> 13ms

*/

