---
title: Five Things you Should Know (by Heart) about var, let, and const in JavaScript
date: "2020-05-14T22:23:03.284Z"
description: "A simple recall about var, let, and const JS key-word"
published: true
cover: "cover.png"
---

Today, I want to refresh our memory with some basic notions about `var`, `let`, and `const`; the keywords we use almost every day when we are coding our software in JavaScript.

## -1- They are all used to create bindings, aka variables

Do you remember those things that help us catch and hold values? We use these three words for that purpose, but they don't all mean the same thing.

- `var` (short for "variable"): old-fashioned, this is the way we used to do in pre-2015 JavaScript
- `const` (short for "constant"): the modern way of creating bindings.
- `let`: modern way too

```javascript
var name = "Sarah"
const greeting = "Hello"
console.log(greeting + name)
// Hello Sarah

let age = 1
console.log("You're " + age)
// You're 1
```

## -2- Only `var` is global scope

Just to recall you, the visibility and lifetime of a given variable is determined by its scope. As such, a variable is not visible/accessible outside the scope in which it is declared.

A variable has global scope if it is declared outside a function, block... scope. It can be accessed from everywhere in your program.

```javascript
userScore = 4
var userScore
```

## -3- They are all function scope

This means that you cannot access them outside the function.

Let's try to access var out of the function `doSomething()`...

```js
function doSomething() {
  var someVar = "Something"
}

console.log(someVar)
```

... if you run this code, you'll get a `ReferenceError` saying that `someVar is not defined`.

You'll get the same thing if you try to replace `var` by `let` or `const`.

## -4- Only `const` and `let` are block scope

The block scope is defined with curly braces (`{}`).

```js
function listFruits() {
  if (true) {
    const fruit1 = "orange" //it exists in block scope
    let fruit2 = "avocado" //it exists in block scope
    var fruit3 = "banana" // it exists in function scope
  }

  console.log(fruit1)
  console.log(fruit2)
  console.log(fruit3)
}

listFruits()
//===result:
//error: fruit1 is not defined
//error: fruit2 is not defined
// banana
```

As you can see in the code above, only `fruit3` is accessed; because `var` does not have block scope.

## -5- `let` and `var` can be reassigned but `const`

`const` is still unique as long as the program lives. `var` and `let` can be reassigned as much as needed.

```javascript
var name = "Sarah"
const greeting = "Hello"
console.log(greeting + name)
// Hello Sarah

const greeting = "Hi" // if we try to set again greeting, we get an error
// Uncaught SyntaxError: Identifier 'greeting' has already been declared
var name = "Patience"
console.log(greeting + name)
// Hello Patience

let age = 1
console.log("You're " + age)
// You're 1

let age = 5 // we reset the age but no error
console.log("You're " + age)
// You're 5
```
