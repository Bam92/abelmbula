---
title: A Quick Review Before Your Next Interview
date: "2020-07-25T22:23:03.284Z"
description: "If you want ace your chance to be hired, learn the fundamental theories behind most of the tools you are using..."
published: true
---

Early this week I mentored a developer who was preparing their interview for a Frontend position. The session (1 hour) was so good that I thought my notes could help other developers, like you, who might not the chance to work with before their next interviews.  

In this post you'll learn about some JavaScript fundamental notions like IIFE, data structure, algorithm, design pattern, best practice, DB, Angular and TDD. We'll finish our tutorial with some common questions asked on an interview

Let's go!

> **Note**<br>
> My mentee interview was not a coding one, just theory

# A Quick Advise
You need to be yourself and speak naturally and professionally to your interviewer. 

They are not interested in how strong you are at memorizing encyclopedic definitions but in **your understanding** of any concept you may be using or asked to explain.

# JS Fundmental
## IIFE
It is an acronym for **I**mmediately-**I**nvorded **F**unction **E**xpression.

**What**: a function that runs as soon as it is created<br>
**Why**: protect the scope of the function and variables within it<br>
**Design Pattern**: Self-Executing Anonymous Function

Let's see an example of how to create such a function.

```js
(() => {
    const greeting = "Hi"
    const name = "Abel"

    console.log(greeting + ' ' + name)
})()
```

## Closure
inner function can still access parent function variables even after it is already executed.

```js
counter = () => {
    let count = 0
    result = () => count += 1

    return result
}

const countValue = counter()
countValue() // 0
countValue() // 1
countValue() // 2
```

## Prototypal Inheritance

Before talking about inheritance, let's first understand what is a prototype.

A prototype is a (special) hidden property of objects. It is either null or reference another object.

[WIP]

## `this` key-word

[WIP]

special object

its value depend on how the code is executed

> **Note**:<br>
> We mostly always use `this` in the context of a function. But, in case it is used globally (i.e.: out of a function) `this` refers to the global object which is `window` in the browser and `global` in Nodejs.

## Promise & asyn/await

# Data structure

# Algorithms

If you want to learn more, I share with you some of the useful references I used. 

# References

* https://www.studytonight.com/data-structures/introduction-to-data-structures
* https://www.studytonight.com/data-structures/heap-sort
* https://www.studytonight.com/data-structures/stack-using-queue
* https://www.studytonight.com/data-structures/time-complexity-of-algorithms
* https://javascript.info/promise-basics
* https://javascript.info/async-await
* https://medium.com/better-programming/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8
* https://alligator.io/js/this-keyword/
* https://www.freecodecamp.org/news/javascript-closure-tutorial-with-js-closure-example-code/
* https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
* https://javascript.info/prototype-inheritance
* https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9
* https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174
* https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6
* https://developer.mozilla.org/en-US/docs/Glossary/IIFE