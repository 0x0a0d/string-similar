# string-similar

```bash
npm i string-similar --save
```

***Use***
```js
const { getSameLength, getSameString } = require('./index');
const strs = [
    '/a/b/c',
    '/a/b/c/1',
    '/a/b/c/2',
    '/a/b/c/3',
];
const sameString = getSameString(strs); // '/a/b/c'
const sameLength = getSameLength(strs) === sameString.length; //true
```