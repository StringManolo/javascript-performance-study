# javascript-performance-study
Finding the fastest way to do things

Android 10; ART-L29 Build HUAWEIART-L29

## Clone Simple Objects 
Config:  
```Cloning 1.000.000 times```  
  

#### Chrome (88.0.4324.152)   
|    Method     |     Time     |
| :-----------: | :----------:  |
|     JSON      |    2.069 s   |
| Assign Props  |    0.163 s   |
| Object.assign |    1.488 s   |

  

#### Firefox (Nightly 210310)  
|    Method     |     Time     |
| :-----------: | :----------: |
|     JSON      |    3.116 s   |
| Assign Props  |    0.162 s   |
| Object.assign |    0.460 s   |
  
  

#### Node (v14.15.4)   
|    Method     |     Time     |
| :-----------: | :----------: |
|     JSON      |    3.833 s   |
| Assign Props  |    0.179 s   |
| Object.assign |    3.080 s   |

#### Quickjs (v2020-11-08)  
|    Method     |     Time     |
| :-----------: | :----------: |
|     JSON      |    7.820 s   |
| Assign Props  |    2.508 s   |
| Object.assign |    1.604 s   |
  
  
  
Winner function:
```js
// Assign Props
const cloneObject = obj => {
  let clone = {};
  for(let key in obj) {
    clone[key] = obj[key];
  }
  return clone;
}
```

Worst function:
```js
// JSON
const cloneObject = obj => {
  let clone = JSON.parse(JSON.stringify(obj));
  return clone;
}
```
