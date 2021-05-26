# javascript-performance-study
Finding the fastest way to do things

Android 10; ART-L29 Build HUAWEIART-L29

## Clone Simple Objects 
Config:  
```Cloning 1.000.000 times```  
  

#### Chrome (88.0.4324.152)   
|    Method     |     Time     |
| :-----------: | ----------:  |
|     JSON      |    2069 ms   |
| Assign Props  |     163 ms   |
| Object.assign |    1488 ms   |

  

#### Firefox (Nightly 210310)  
|    Method     |     Time     |
| :-----------: | ----------:  |
|     JSON      |    3116 ms   |
| Assign Props  |     162 ms   |
| Object.assign |     460 ms   |
  
  

#### Node (v14.15.4)   
|    Method     |     Time     |
| :-----------: | ----------:  |
|     JSON      |    3833 ms   |
| Assign Props  |     179 ms   |
| Object.assign |    3080 ms   |

#### Quickjs (v2020-11-08)  
|    Method     |     Time     |
| :-----------: | ----------:  |
|     JSON      |    7820 ms   |
| Assign Props  |    2508 ms   |
| Object.assign |    1604 ms   |
  
  
  
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
