---
title: Null versus undefined in JavaScript
date: "2022-08-04T22:23:03.284Z"
description: ""
---

When you come across `null` and `undefined`, you might be tempted to think that they are  synonyms. In this shot, we discover how this, in fact, is not the case. Let's discuss below.

## Null

**`null`** represents an empty or non-existent value, and it must be assigned.

```js
const myVar = null; // assign null to myVar

console.log(myVar) // shows null
```

## Undefined

**`undefined`** means that a variable #key# exists: is declared #key# but has not yet been assigned a value. 

```js
var myVar; // declaration of the var

console.log(myVar) // shows undefined
```

You can also explicitly assign `undefined` to a variable like this:

```js
const myVar = undefined;

console.log(myVar) // shows undefined
```

If you try to look up non-existent properties in an object, JavaScript will also send you `undefined`. Take a look below.

```js
const myObj = {
    name: 'Sarah',
    age: 0
};

console.log(myObj.gender) // shows undefined
```

The same happens if you don't have an explicit return in a function.

```js
const myFun = () => {};

console.log(myFun()) // shows undefined
```

Finally, the type of `undefined` is `undefined`.

```js
const myVar= undefined; // declaration of the var

console.log(typeof myVar) // shows undefined
````

## Conclusion

`null` is a value that represents *no value*, whereas `undefined` is the default value for a variable that has not been assigned a specific value, for a function that has no explicit return value, or for non-existent properties in an object.