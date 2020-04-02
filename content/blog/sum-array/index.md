---
title: How to Get the Sum of an Array in JavaScript
date: "2020-01-10T22:23:03.284Z"
description: "How to compute a single value from an array"
---


In today's post, we will learn 4 ways you can use to get the total of a given array.

Let take an example, an array of `1, 4, 0, 9, -3` should return `11`. 

## -1- Using traditional for loop
```js
function sumArray(array){
  let sum = 0 // the sum is initialed to 0

/*iterate until you reach the last item. remember, js arrays are zero-index based
ourArray.length = 5, the initialization block is set to 0.
the last item is index 4 that is < 5 (what we define in the condition block)
*/
for (let i = 0; i < array.length; i += 1) {
  // take every item in the array and add it to sum variable
  sum += array[i]
  // initial: sum = 0 
  // iteration 1: 0 + 1 => sum = 1
  // iteration 2: 1 + 4 => sum = 5
  // iteration 3: 5 + 0 => sum = 5
  // iteration 4: 5 + 9 => sum = 14
  // iteration 5: 14 + -3 => sum = 11

}

console.log(sum) // 11
// return sum
return sum
}

// call the function and give it our array
sumArray([1, 4, 0, 9, -3]); // logs 11
```

### Without comments

```js
function sumArray(array) {
  let sum = 0; 

for (let i = 0; i < array.length; i += 1) {
  sum += array[i];

}

console.log(sum); 
return sum;
}

sumArray([1, 4, 0, 9, -3]);
```

Live test on codepen
https://codepen.io/bam92/pen/LYVrQjj

## -2- Using forEach

I like forEach as it is builtin or an array-like method. It's simple, just like English. Don't take my words as that, see by yourself below.

```js
function sumArray(array) {
  let sum = 0; 

/*Go through each item in the array and execute this function which adds
each item to sum 
*/
  array.forEach(item => {
    sum += item;
  });

  console.log(sum); 
  return sum;
}

sumArray([1, 4, 0, 9, -3]); //logs 11
```
As you can see, the solution is short and clean. Let delete comments

### Without comments
```js
function sumArray(array) {
  let sum = 0; 

  array.forEach(item => {
    sum += item;
  });

  console.log(sum); 
  return sum;
}

sumArray([1, 4, 0, 9, -3]);
```

https://codepen.io/bam92/pen/rNVKJby

## -3- Using for...of
`for...of` lets us iterate over an array, so we can make use of it to get the sum of an array. As we keep the same style of fucntions above, let copy and adjust.

```js
function sumArray(array) {
  let sum = 0; 

  /*loop over array and add each item to sum
  */
  for (const item of array) {
    sum += item;
  }
 
 // return the result 
  console.log(sum); 
  return sum;
}

sumArray([1, 4, 0, 9, -3]); //logs 11
```

We still have the same result as other methods we used. You can test it on the pen below
https://codepen.io/bam92/pen/MWwXVQE

Last, but not least. Let use `reduce` method.

## -4- Using reduce
I know that `reduce` is a bit difficult to use, for beginners, that's why I introduce it as the last method in this serie. Don't worry, I'll try my best to make you understand it.

In the solutions above, you have noticed that everytime we have to mutate the `sum` variable. Using this solution (`reduce()`) will save us from mutating.

`reduce` accepte two mandatory parametors, the `accumulator` (total) and the `currentValue` (item). cycles through each number in the array much like it would in a traditional for loop.

```js
function sumArray(array) {
  /*Go through array and loop
  total starting point is 1 and item = 4
  */
  const sum = array.reduce((total, item) => total + item); 

  /*
  1st call: total = 1, item = 4 => sum = 1 + 4 = 5
  2nd call: total = 5, item = 0 => sum = 5 + 0 = 5
  3rd call: total = 5, item = 9 => sum = 5 + 9 = 14
  4th call: total = 14, item = -3 => sum = 14 + -3 = 11
  */
 
 // return the result 
  console.log(sum); 
  return sum;
}

sumArray([1, 4, 0, 9, -3]); //logs 11
```
You have noticed that we made four calls instead of five. It's because initially reduce takes the first and second items, so next time we jump to the third item. When there are no more numbers left in the array the method returns the total value.

If you are afraid of arrow functions, here is the traditional way (old fationned)


```js
function sumArray(array) {
  /*Go through array and loop
  total starting point is 1 and item = 4
  */
  const sum = array.reduce(function(total, item) {
    return total + item;
  }); 

  /*
  1st call: total = 1, item = 4 => sum = 1 + 4 = 5
  2nd call: total = 5, item = 0 => sum = 5 + 0 = 5
  3rd call: total = 5, item = 9 => sum = 5 + 9 = 14
  4th call: total = 14, item = -3 => sum = 14 + -3 = 11
  */
 
 // return the result 
  console.log(sum); 
  return sum;
}

sumArray([1, 4, 0, 9, -3]); //logs 11
```
### Without comments

```js
function sumArray(array) {
  
  const sum = array.reduce((total, item) => total + item); 
 
  console.log(sum); 
  return sum;
}

sumArray([1, 4, 0, 9, -3]); 
```

Old fationned

```js
function sumArray(array) {
  
  const sum = array.reduce(function(total, item) {
    return total + item;
  }); 

  console.log(sum); 
  return sum;
}

sumArray([1, 4, 0, 9, -3]); 
```

Live test it on codepen 

https://codepen.io/bam92/pen/rNVKvgB

## Wrap up
In this tutorial we learned how to find the sum of an array of numbers. I showed you 4 methods, among which my prefered is the 3rd one (Using `for...of`). And you?

There might be other ways of doing the same operaton that exist, feel free to share with us.

I advice you not to go with `map` method for this problem as it is an anti-pattern. 

