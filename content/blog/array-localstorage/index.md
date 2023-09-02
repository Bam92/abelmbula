---
title: How to Store an Array in localStorage
date: "2023-09-02"
description: ""
published: true
---
# How to store an array in localStorage

The `localStorage` is a web storage object that allows us to persist data in the browser. The data, which must be of type string, is saved as a key/value pair.

Given that `localStorage` only stores strings, how do we store data of other types, like arrays or objects? That's what this article is about. We will learn how to store an array data structure in `localStorage` JavaScript.

## Short answer

To store an array in `localStorage`, we use JSON methods `stringfy()` and `parse()` :

- `stringfy()`: converts an array into a string
- `parse()`: parses a string and constructs an array

Should you wonder why we need to use these two methods, remember these two points:

- `localStorage` only stores strings, so you have to stringify (or convert into a string) your array before saving it
- when you retrieve your data from the `localStorage`, you’ll get a string. In order to manipulate it, you need to convert it back into an array

Let’s now move on to implementation. But before that, we need to know what we want to implement. 

The functionality we want to implement is very simple. It consists of saving some chapters from the Bible Book of Genesis. No, it’s not a complete CRUD app we want to build here. We’ll only focus on creating (store/save) and reading. For that, `localStorage` provides respectively `setItem(key, value)` and `getItem(key)`.

## Code implementation

First, let’s declare the list of our chapters.

```jsx
const chapters = [1, 25, 32, 33, 45, 46]
```

Next, we stringify

```jsx
JSON.stringify(chapters)
```

The array becomes a string and is ready to be stored in the browser's local storage.

### Store in localStorage

```jsx
const chapters = [1, 25, 32, 33, 45, 46]
localStorage.setItem('genesis', JSON.stringify(chapters))
```

Nothing special here. We store our stringified chapters with the key `genesis`.

To see the `localStorage` in action, run the code above in the console of your browser. After doing that, go to the **Storage** tab and click on the **Local Storage** (Firefox).

You should see an array of integers, as shown in the image below.

![localStorage-blog-example.png](How%20to%20store%20an%20array%20in%20localStorage%209cc49749d9314a979f62bf03cc24d596/localStorage-blog-example.png)

### Read from localStorage

From your console, read the stored data thanks to it key

```jsx
const arr = localStorage.getItem('genesis') // localStorage.genesis
console.log(arr) // "[1,25,32,33,45,46]"
```

The returned value is a string rather than an array as we might expect. Let’s now parse it and see how it becomes an array.

```jsx
JSON.parse(arr)
console.log(arr) // [1,25,32,33,45,46]
```

That’s all. Let’s put it all together and improve the code.

```jsx
// store chapters array as a string
const chapters = [1, 25, 32, 33, 45, 46]
localStorage.setItem('genesis', JSON.stringify(chapters))

// read the stringified data converted to an array
const selectedChapters = JSON.parse(localStorage.getItem('genesis'))
```

## Wrap up

So far, we learned how to work with array data types and local storage. The `localStorage`web storage API that only store strings. It has the `setItem()`and `getItem()`methods to respectively store to and read from the local storage. Now comes to our main question: how do we store non string data type?

In order to store an array (or an object) data type, the tip is to use `stringfy()`method. Then if you want to read a strongfied value, you’ll have to parse it with `parse()`method.

That’s all for today!