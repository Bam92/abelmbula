---
title: The 15 Algorithm Challenges I Solved in May
date: "2020-06-01T22:23:03.284Z"
description: "I spent time working on algo challenges. Here some 15 that are worth talking about"
published: true
---

I don't know you, but it seems to me that the year is flying away too fast. I'm looking for a [remote position](https://twitter.com/abelmbula/status/1260575365162041350) this year, so I've decided to work too hard: build tools, write blog posts, help people in forums, and of course work on data structure and algorithms.

Last month, May 2020, I did work on around 15 challenges on [FreecodeCamp](https://www.freecodecamp.org/) and [LeetCode](https://leetcode.com/). Let's take a look at them. I'll try to add some explanations, if necessary. The language I'm using to solve all these challenges is JavaScript.

Let's get started!

## -1- Sum All Numbers in a Range

The link to the challenge is [here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range).

### The Challenge Description

> We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.<br /> For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

### My Solution

```js
function sumAll(arr) {
  /*
   * 1. Let's sort the array to ensure that we have:
   * - small value on the left and
   * - big number on the right
   * E.g. [4, 1] => [1, 4]
   */
  arr.sort((a, b) => a - b)

  let res = arr[0] + arr[1] // 2. Set res with the sum of the 2 values in the array (1 + 4)

  // 3. Iterate over the second value of the array (4)
  for (let i = arr[0] + 1; i < arr[1]; i += 1) {
    res += i // 4. add the current value to res
  }
  return res // 5. return res
}

sumAll([1, 4])
```

If you run the test with this code, you'll get 100% tests pass.

Let's another way to resolve this challenge.

### Alternative Solution and Improvement

The solution above is the way I did when working on that algorithm challenge. But there are many other ways to do so. And you can also improve my code to make it robust.

Let's see how.

#### Improvement

Although our code seems to works properly in the context of this challenge, it has some weaknesses. Let's find them.

Our code only assumes that the user will always submit the right argument when this is not true in the real world.

- What happens if the user calls the function without any argument at all?
- What if the argument is not an array?
- What if the array contains more than 2 values or it contains a mix of string and numbers?

We should handle all these situations. In programming, there's a saying that says _never trust user input_.

First thing first, the requirements for our function to run properly:

- the parameter must exist
- it must be an array
- the array should only contain 2 numbers

Then the implementation:

```js
if (!arr) return "The parametor is required and must not be empty"
if (!Array.isArray(arr)) return "The parametor must be an array"
if (arr.length != 2) return "The array must be of length 2"
```

Putting all together, we get this

```js
function sumAll(arr) {
  if (
    arr &&
    Array.isArray(arr) &&
    arr.length == 2 &&
    typeof arr[0] == "number" &&
    typeof arr[1] == "number"
  ) {
    arr.sort((a, b) => a - b)
    let res = arr[0] + arr[1]

    for (let i = arr[0] + 1; i < arr[1]; i += 1) {
      res += i
    }
    return res
  } else {
    return "There'se something wrong with your argument. Please check it and try again"
  }
}

sumAll([1, 4])
```

Here we start by checking the validity of the argument sent by the user. If something is wrong, the function can't proceed and tells the user to check for the argument.

#### Alternative Solutions

The solution above is the way I did when I was working on the challenge. But I can see another way to do it and you've got another too.

Here's the idea.

- generate all array items in the range of first value - second value. E.g.: [1, 4] => [1, 2, 3, 4].
- get the sum by using **reduce()** method.

Let's implement the idea above.

```js
function sumAll(arr) {
 if(/*check arr validity here*/){
    arr.sort((a,b) => a - b)

    const newArr = [] // create a new arr

    for(let i = arr[0]; i <= arr[1]; i += 1) newArr.push(i) // add items to the new arr

    return newArr.reduce((acc, cur) => acc + cur)
 } else {
     return 'There\'se something wrong with your argument. Please check it and try again'
 }
}
```

### Resource(s)

- [Link to the challenge](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range), FreeCodeCamp
- [reduce() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce), MDN web docs
- [Array.isArray() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce), MDN web docs

## -2- Slice and Splice

[Link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice)

> You are given two arrays and an index.
> Use the array methods slice and splice to copy each element of the first array into the second array, in order.
> Begin inserting elements at index n of the second array.
> Return the resulting array. The input arrays should remain the same after the function runs.
>
> ```js
> function frankenSplice(arr1, arr2, n) {
>   return arr2
> }
> frankenSplice([1, 2, 3], [4, 5, 6], 1)
> ```

### Resources

- [slice() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), MDN web docs
- [splice() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), MDN web docs

## -3- Confirm the Ending

I've written a detailed post about this [here](confirm-ending). No time? Read below.

Let's first take the challenge description.

> Check if a string (first argument, **str**) ends with the given target string (second argument, target).
> This challenge can be solved with the **.endsWith()** method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
>
> ```js
> function confirmEnding(str, target) {
>   return str
> }
> confirmEnding("Bastian", "n")
> ```

And here's the final solution.

```js
function confirmEnding(str, target) {
  const newStr = str.split(" ").join("")
  const strL = newStr.length
  const targetL = target.length
  const targetIdx = strL - targetL
  const subStr = newStr.substring(targetIdx)

  return subStr == target
}

confirmEnding("I am a test", "st")
```

## -4- Repeat a String

This challenge is available following this [link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string). It is stated as this:

> Repeat a given string **str** (first argument) for **num** times (second argument). Return an empty string if **num** is not a positive number.
>
> ```js
> function repeatStringNumTimes(str, num) {
>   return str
> }
>
> repeatStringNumTimes("abc", 3)
> ```

My solution is

```js
function repeatStringNumTimes(str, num) {
  let repeatedStr = ""

  if (num < 0) return repeatedStr

  for (let i = 0; i < num; i += 1) repeatedStr += str

  return repeatedStr
}
```

## -5- Finders Keepers

Click [here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers) to go to the challenge.

> Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
>
> ```js
> function findElement(arr, func) {
>   let num = 0
>   return num
> }
> findElement([1, 2, 3, 4], num => num % 2 === 0)
> ```

Here's how I did solve it:

```js
function findElement(arr, func) {
  let num = 0
  // Solution 1 with for loop
  for (let i = 0; i < arr.length; i += 1) {
    if (func(arr[i]) === true) {
      num = arr[i]
      break
    } else num = undefined
  }
  // Solution 2 with forEach
  /*arr.forEach(elt => {
    if(func(elt) === true) num = elt
     else num = undefined
  })*/
  return num
}
```

As you can see, I use two solutions. One with traditional `for loop` and the second one with `forEach`

## -6- Boo who

[Link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who)

> Check if a value is classified as a boolean primitive. Return true or false.
>
> Boolean primitives are true and false.
>
> ```js
> function booWho(bool) {
>   return bool
> }
>
> booWho(null)
> ```

**The Solution**

```js
function booWho(bool) {
  return bool === true || bool === false ? true : false
}
```

## -7- Where do I Belong

Go to the [challenge](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong).

> Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.<br />
> For example, `getIndexToIns([1,2,3,4], 1.5)` should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).<br />
> Likewise, `getIndexToIns([20,3,5], 19)` should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
>
> ```js
> function getIndexToIns(arr, num) {
>   return num
> }
>
> getIndexToIns([40, 60], 50)
> ```

**Solution**

```js
// Solution 1
function getIndexToIns(arr, num) {
  arr.push(num)
  arr.sort((a, b) => a - b)

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === num) return i
  }
}

// Solution 2
function getIndexToIns(arr, num) {
  const arrSort = arr.sort((a, b) => a - b)
  let index = 0

  for (let i = 0; i < arrSort.length; i += 1) {
    if (num < arrSort[i] || num == arrSort[i]) {
      index = i
      break
    } else {
      index = i + 1
    }
  }

  return index
}
```

Nothing tricky here. I first add the passed value to the array, then after I sort the array. The last step is to loop over the array and return the index of the value in the sorted array.

## -8- Mutations

This challenge can be retrieved [here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations).

> Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.<br />
> For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.<br />
> The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".<br>
> Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
>
> ```js
> function mutation(arr) {
>   return arr
> }
>
> mutation(["hello", "hey"])
> ```

My solution is as follow:

```js
function mutation(arr) {
  const baseStr = arr[0].toLowerCase()
  const targetStr = arr[1].toLowerCase()
  const targetL = targetStr.length

  for (let i = 0; i < targetL; i += 1) {
    if (!baseStr.includes(targetStr.charAt(i))) {
      return false
      break
    }
  }

  return true
}
```

## -9- Title Case a Sentence

Challenge [link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence)

> Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
>
> For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
>
> ```js
> function titleCase(str) {
>   return str
> }
>
> titleCase("I'm a little tea pot")
> ```

**Solution**

```js
function titleCase(str) {
  const words = str.toLowerCase().split(" ")
  const arrCap = []

  words.forEach(word => {
    arrCap.push(word.charAt(0).toUpperCase() + word.slice(1))
  })

  return arrCap.join(" ")
}
```

## -10- Falsy Bouncer

[Link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer)

>

Here's how I solved it.

```js
function bouncer(arr) {
  const falsyArr = [false, null, 0, "", undefined, NaN]
  const newArr = []

  arr.forEach(item => {
    if (!falsyArr.includes(item)) newArr.push(item)
  })
  return newArr
}
```

## -11- Diff Two Arrays

Challenge [link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays).

**My solution**

```js
function diffArray(arr1, arr2) {
  var sumArr = [...arr1, ...arr2]
  const symArr = []

  sumArr.forEach(elt => {
    if (sumArr.indexOf(elt) == sumArr.lastIndexOf(elt)) {
      symArr.push(elt)
    }
  })

  return symArr
}
```

## -12- Seek and Destroy

Go here to find the [link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy).

**My solution**

```js
function destroyer(arr) {
  const toDestroy = []
  const remainArr = []

  for (let i = 1; i < arguments.length; i++) {
    toDestroy.push(arguments[i])
  }

  arr.forEach(item => {
    if (!toDestroy.includes(item)) remainArr.push(item)
  })

  return remainArr
}
```

## -13- Single Number

The challenge [link](https://leetcode.com/problems/single-number/).

Let's see the description.

> Given a non-empty array of integers, every element appears twice except for one. Find that single one.
>
> **Note**:<br>
> Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
>
> **Example 1**:<br>
>
> ```
> Input: [2,2,1]
> Output: 1
> ```
>
> **Example 2**:<br>
>
> ```
> Input: [4,1,2,1,2]
> Output: 4
> ```

And now the solution

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const uniq = []
  nums.forEach(item => {
    if (nums.indexOf(item) == nums.lastIndexOf(item)) uniq.push(item)
  })

  return uniq
}
```

## -14- Counting Bits

The link to the challenge is [here](https://leetcode.com/problems/counting-bits/) if you need it.

The challenge description is as follow.

> Given a non-negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.
>
> **Example 1**:
>
> ```
> Input: 2
> Output: [0,1,1]
> ```
>
> **Example 2**:
>
> ```
> Input: 5
> Output: [0,1,1,2,1,2]
> ```

**Starter Code**

```js
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {}
```

**My Solution**

```js
var countBits = function(num) {
  const numArr = []
  const onesCountArr = []

  for (let i = 0; i <= num; i += 1) numArr.push(i)

  numArr.forEach(val => {
    const bin = val.toString(2)
    const OnesCount = (bin.match(/1/g) || []).length
    onesCountArr.push(OnesCount)
  })

  return onesCountArr
}
```

## -15- K Closest Points to Origin

Visit the challenge [site](https://leetcode.com/problems/k-closest-points-to-origin/) if you want.

> We have a list of **points** on the plane. Find the **K** closest points to the origin **(0, 0)**.
>
> (Here, the distance between two points on a plane is the Euclidean distance.)
>
> You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in.)
>
> **Example 1**:
>
> ```
> Input: points = [[1,3],[-2,2]], K = 1
> Output: [[-2,2]]
>
> Explanation:
> The distance between (1, 3) and the origin is sqrt(10).
> The distance between (-2, 2) and the origin is sqrt(8).
> Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
> We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].
>
> ```
>
> **Example 2**:
>
> ```
> Input: points = [[3,3],[5,-1],[-2,4]], K = 2
> Output: [[3,3],[-2,4]]
> (The answer [[-2,4],[3,3]] would also be accepted.)
> ```
>
> **Note:**
> `
>
> # 1 <= K <= points.length <= 10000
>
> # -10000 < points[i][0] < 10000
>
> # -10000 < points[i][1] < 10000
>
> `

**Starter Code**

```js
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {}
```

**Solution**

```js
var kClosest = function(points, K) {
  const result = []
  const distanceObjList = [] // store Euclidian distances here

  // find Euclidian distances
  points.forEach(arr => {
    let thisDistance = arr[0] * arr[0] + arr[1] * arr[1]
    distanceObjList.push({
      d: thisDistance,
      arr,
    })
  })

  distanceObjList.sort((x, y) => x.d - y.d)

  const subArr = distanceObjList.slice(0, K)

  subArr.forEach(arr => result.push(arr.arr))

  return result
}
```

That's all for now. Thank you for reading.

Share with me your solutions on [Twitter](https://twitter.com/abelmbula).
