const perf = {};

perf.cloneObject = obj => {
  let clone = {};
  for(let key in obj) {
    clone[key] = obj[key];
  }
  return clone;
}

perf.addStrings = (...str) => str.reduce( (res, act) => res += act);

export default perf;
