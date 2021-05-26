const person = {
  age: 27,
  name: "Manolo"
}

const cloneUsingJSON = times => {
  let clone;
  for(let i = 0; i < times; ++i) {
    clone = JSON.parse(JSON.stringify(person));
  }
}

const cloneAssigningProperties = times => {
  let clone;
  for(let i = 0; i < times; ++i) {
    clone = {};
    for(let key in person) {
      clone[key] = person[key];
    }
  }
}

const cloneUsingObjectAssign = times => {
  let clone;
  for (let i = 0; i < times; ++i) {
    clone = {};
    Object.assign(clone, [person]);
  }
}


const _ = console.log;
//const _ = alert; // For Android Browser Testing


const test = times => {
  let time;
  let results = [];

  time = new Date();
  cloneUsingJSON(times);
  results.push(new Date() - time);

  time = new Date();
  cloneAssigningProperties(times);
  results.push(new Date() - time);

  time = new Date();
  cloneUsingObjectAssign(times);
  results.push(new Date() - time);

  _(`
Config:
  - Running ${times} times

Results:
cloneUsingJSON -> ${results[0]}ms
cloneAssigningProperties -> ${results[1]}ms
cloneUsingObjectAssign -> ${results[2]}ms
`);
}


test(1)
test(10)
test(100)
test(1000)
test(10000)
test(100000)
test(1000000)
