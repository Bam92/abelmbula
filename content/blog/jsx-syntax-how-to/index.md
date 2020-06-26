---
title: How to Use React JSX Syntax
date: "2020-06-26T22:23:03.284Z"
description: "Getting started with React JSX Syntax"
published: true
---
![](react-jsx.png)

JSX is a syntactic sugar available in the React library. This new syntax makes it easy to develop apps.

Let's learn how to use it.

## JSX - the Big Picture
JSX stands for **JavaScript + XML**. It is written like this 
```js 
const divElt = <div>Hello World</div>;
```
Don’t think of it as `HTML` but as a kind of *template language* with the full power of JavaScript.
With this new syntax, React has ‘broken’ the traditional dogma of building web sites or apps such as separation of concerns: markup (HTML), style (CSS), behavior (JS). 

You can even use any JS operator or expression and more with JSX.

```js
const target = 'Africa' 
const divElt = <div>Hello, {target}</div>;
```

## How it Works
When using JSX, notice that under the hood it calls `React.createElement()`, an API responsible for creating React elements. 

Let's see it in action.

Given our initial code written with JSX: 
```js 
const divElt = <div>Hello World</div>;
```
Without JSX, it will look like this:

```js 
React.createElement(
  'div',
  'Hello World'
)
``` 
You may notice that we don't yet talk about rendering here!

## Exercise
Time for practice now.

>**Warning:**<br>Be aware that JSX is not a regular JS. As a consequence, a browser cannot execute JS files that contain JSX code. If you're working offline or using React with `script` tag, make sure you add `Babel` in your project.

## Why Use JSX?
It is not mandatory to use JSX when writing React code, but JSX is highly recommended and massively adopted by the community.

Here are some reasons:

* The code is concise, as a result, JSX is helpful as a visual aid
* It allows React to show more useful error and warning messages
* It prevents injection attacks 
* It is easy to maintain the code
* etc.

https://codepen.io/bam92/pen/MWaRKZo

>**Tips:** 
>* To comment in JSX: `{/* This is a comment */}`
>* To add a `class` property: `const divElt = <div className="greeting">Hello World</div>;` 

## Closing Notes
In this tutorial, we have learned that JSX provides syntactic sugar for the `React.createElement()` API. It is concise and let us combine everything (HTML, CSS, JS) in our component.

It requires `Babel` to be transpiled into plain JavaScript.