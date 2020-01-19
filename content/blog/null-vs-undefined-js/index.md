---
title: "Understanding JavaScript: Null vs Undefined"
date: "2020-01-03T22:23:03.284Z"
description: "Do you think they are the same? Follow me to in this tutorial and you'll see that they different"
---

When you come across `null` and `undefined` you might be tempeted to think that they are just synonym. In this tutorial you'll discover that they are not. Let's go.

## Null

It represents an empty or non-existant value and it must be assigned.  

```js
const myVar = null; // assign null to myVar

console.log(myVar) // shows null
```

In the example above, our variable (`myVar`) as been set to `null` and shows `null` in the console.  

The `typeof` `null` is  `object` (though this is an implementation error since the very begining of JavaScript)

```js
console.log(typeof myVar) // shows object
```

## Undefined

It means that a variable exists (is declared) but  has not yet assigned a value.

```js
const myVar; // declaration of the var

console.log(myVar) // shows undefined
``` 

You can also explicitly assign `undefined` to a variable like this:

```js
const myVar = undefined;

console.log(myVar) // shows undefined
```

If you try to look up a non-existing properties in an object, JavaScript will send you `undefined` too: 

```js
const myObj = {
    name: 'Sarah',
    age: 0
};

console.log(myVar.gender) // shows undefined
```

Same if you don't have an explicit return in a function

```js
const myFun = () => {};

console.log(myFunr()) // shows undefined
```

Finally, the type of `undefined` is `undefined`.

```js
const myVar; // declaration of the var

console.log(typeof myVar) // shows undefined
``` 

## Conclusion

`null` is a value that represents no value whereas `undefined` is the default value for a variable that  has not been assigned a specific value, or a function that has no explicit return value, or non-existing properties in an object.

Thank you for reading!