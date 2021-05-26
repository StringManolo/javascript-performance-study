## Add 2 strings
Config:
```Adding 1.000.000 times```
```Android 10; ART-L29 Build HUAWEIART-L29```

#### Chrome (88.0.4324.152)
|    Method     |     Time     |
| :-----------: | :----------: |
|      +=       |    0.191 s   |
|   [].push(1)  |    0.308 s   |
|   [].push(2)  |    0.312 s   |
|  "".concat()  |    0.248 s   |



#### Firefox (Nightly 210310)
|    Method     |     Time     |
| :-----------: | :----------: |
|      +=       |    0.068 s   |
|   [].push(1)  |    0.142 s   |
|   [].push(2)  |    0.261 s   |
|  "".concat()  |    0.502 s   |



#### Node (v14.15.4)
|    Method     |     Time     |
| :-----------: | :----------: |
|      +=       |    0.412 s   |
|   [].push(1)  |    0.373 s   |
|   [].push(2)  |    0.291 s   |
|  "".concat()  |    0.197 s   |

#### Quickjs (v2020-11-08)
|    Method     |     Time     |
| :-----------: | :----------: |
|      +=       |     slow s   |
|   [].push(1)  |    0.666 s   |
|   [].push(2)  |    0.432 s   |
|  "".concat()  |    0.773 s   |

Winner:
```js
const addStrings = (s1, s2) => s1 + s2;
```

Loser:
```js
const addStrings = (s1, s2) => s1.concat(s2);
```
