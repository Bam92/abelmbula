---
title: Five Ways to Solve the DNA Pairing Challenge in JavaScript
date: "2019-12-30T22:23:03.284Z"
description: "Step by step guide on how to solve the FCC DNA Pairing Challenge in five different ways"
published: true
---

Computer Science is awesome and amazing, trust me! There is always more than one way to come to a solution to a given problem in most cases.

In this tutorial, we will learn how to solve the [Free Code Camp **DNA Pairing Challenge**](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing) in five different ways.

## Algorithm Challenge

> The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
> Base pairs are a pair of AT and CG. Match the missing element to the provided character.
> Return the provided character as the first element in each array.
> For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
> The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

```javascript
function pairElement(str) {
  return str
}

pairElement("GCG")
```

## Provided Test Cases

- **_pairElement("ATCGA")_** should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
- **_pairElement("TTGAG")_** should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
- **_pairElement("CTCTA")_** should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]

## Understanding the Problem

As you may have read in the challenge description above, the goal of this exercise is to return the missing trand into a 2d array.
In biology class, we learned about DNA base pairs (need a refresher? [Wikipedia](https://en.wikipedia.org/wiki/Base_pair) is your friend). They are A - T and C - G, and they go both ways. So every time we have:

- **A** string we return an array ['A', 'T']
- **T** string we return an array ['T', 'A']
- **C** string we return an array ['C', 'G']
- **G** string we return an array ['G', 'C']

## 1. Using For Loop, and If Statement

For this solution, we will loop over the parameter passed to the function and use _if statement_ to return the correct pair.

```javascript
function pairElement(str) {
  // Step 1. Declare the variable of type array that will encapsulate other paired arrays
  const arrDNA = []

  // Step 2. Create the FOR loop with initializer less then str.length
  for (let i = 0; i < str.length; i += 1) {
    // Step 3. Use if statement to evaluate baise pair and push it to arrDNA
    if (str[i] === "A") arrDNA.push([str[i], "T"])
    if (str[i] === "T") arrDNA.push([str[i], "A"])
    if (str[i] === "C") arrDNA.push([str[i], "G"])
    if (str[i] === "G") arrDNA.push([str[i], "C"])
  }

  /* Here "GCG"'s length equals 3
      For each iteration: i = 0 and arrDNA = [[str[i], 'corresponding pair']]
      First iteration:  i = 0        arrDNA = [['G', 'C']]
      Second iteration: i = 1        arrDNA = [['G', 'C'], ['C', 'G']] 
      Third iteration:  i = 2        arrDNA = [['G', 'C'], ['C', 'G'], ['G', 'C']]         

    End of the FOR Loop*/

  // Step 4. Return the 2D array
  return arrDNA
}

pairElement("GCG")
```

### Without comments:

```javascript
function pairElement(str) {
  const arrDNA = []

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === "A") arrDNA.push([str[i], "T"])
    if (str[i] === "T") arrDNA.push([str[i], "A"])
    if (str[i] === "C") arrDNA.push([str[i], "G"])
    if (str[i] === "G") arrDNA.push([str[i], "C"])
  }

  return arrDNA
}

pairElement("GCG")
```

## 2. Using For Loop, CharAt(), and If Statement

In this solution, we will make use of the traditional for loop and if statements once more in combination with the String object's charAt() method. This method (**String.prototype.charAt()**) returns the character at the specified index in a string.

```javascript
function pairElement(str) {
  // Step 1. Create an empty array that will encapsulate other paired arrays
  const arrDNA = []

  // Step 2. Iterate through the str with a FOR loop
  for (let i = 0; i < str.length; i += 1) {
    // Step 3. Use if statement to evaluate base pair and push it to arrDNA

    // If the current str character is X create an array of current str with its corresponding pair and push the array to arrDNA

    if (str.chartAt(i) === "A")
      // if A
      arrDNA.push([str[i], "T"]) // ...push [A - T]
    else if (chartAt(i) === "T")
      // if T
      arrDNA.push([str[i], "A"]) //...push [T - A]
    else if (chartAt(i) === "C")
      // if C
      arrDNA.push([str[i], "G"]) // ...push [C - G]
    else if (chartAt(i) === "G")
      // if G
      arrDNA.push([str[i], "C"]) // ...push [G - C]
  }

  // Step 4. Return the 2D array
  return arrDNA
}

pairElement("GCG")
```

### Without Comments:

```javascript
function pairElement(str) {
  const arrDNA = []

  for (let i = 0; i < str.length; i += 1) {
    if (str.chartAt(i) === "A") arrDNA.push([str[i], "T"])
    else if (chartAt(i) === "T") arrDNA.push([str[i], "A"])
    else if (chartAt(i) === "C") arrDNA.push([str[i], "G"])
    else if (chartAt(i) === "G") arrDNA.push([str[i], "C"])
  }

  return arrDNA
}

pairElement("GCG")
```

## 3. Using For...of

The `for...of` creates a loop iterating over iterable objects (built-in String, Array, Array-like objects).

```javascript
function pairElement(str) {
  // Step 1. Create an empty array that will encapsulate other paired arrays
  const arrDNA = []

  // Step 2. Create an object of base pair
  const basePair = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  }

  // Step 3. Iterate through the str with a for of loop
  for (const letter of str) {
    // Step 4. Create an array of letter with its corresponding pair and  push to arrDNA
    arrDNA.push([letter, basePair[letter]])
  }

  // Step 5. Return the 2D array
  return arrDNA
}

pairElement("GCG")
```

### Without Comments:

```javascript
function pairElement(str) {
  const arrDNA = []

  const basePair = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  }

  for (const letter of str) {
    arrDNA.push([letter, basePair[letter]])
  }

  return arrDNA
}

pairElement("GCG")
```

## 4. Using Split and Map

Let's try to resolve using `String.prototype.split()` and `Array.prototype.map()`. The first method (`split()`) is used to convert a string into an array. The `map()` method creates a new array with the results of calling a function for every array element.

```javascript
function pairElement(str) {
  // Step 1. Create an object of base pair
  const basePair = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  }
  // Step 2. convert the str into an array with split and store the result into arrStr variable
  const arrStr = str.split("")

  /* Step 3. Map through the arrStr and return an array of current value and it baise
  Keep the result of mapping under arrDNA variable
  */
  const arrDNA = arrStr.map((letter) => [letter, basePair[letter]])

  // Step 4. Return the 2D array
  return arrDNA
}

pairElement("GCG")
```

### Without Comments:

```javascript
function pairElement(str) {
  const basePair = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  }
  const arrStr = str.split("")

  const arrDNA = arrStr.map((letter) => [letter, basePair[letter]])

  return arrDNA
}

pairElement("GCG")
```

or even better use `split()` `map()` in one line

```javascript
function pairElement(str) {
  const basePair = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  }

  return str.split("").map((letter) => [letter, basePair[letter]])
}

pairElement("GCG")
```

## 5. Using Split, ForEach, and Switch

In this solution will take help of `split()`, `forEach()`, and `switch`. we have already discussed `split()` in another solution above. Let talk a bit about the remaining two:

- `array.forEach()`: this method executes a provided function once for each array element
- `switch`: is similar to `if`, it gives a more descriptive way to compare a value with multiple variants.

```javascript
function pairElement(str) {
  // Step 1. Create an empty array that will encapsulate other paired arrays
  const arrDNA = []

  // Step 2. convert the str into an array with split and store the result into arrStr variable
  const arrStr = str.split("")

  // Step 3. Loop through arrStr using forEach
  arrStr.forEach((x) => {
    /* Step 4. Use switch statement to test x and push the corresponding array to arrDNA */
    switch (x) {
      case "G": // in case x = G
        arrDNA.push(["G", "C"]) // ...push ["G","C"] to arrDNA
        break // break tells the script to run from the case where the criterion is met
      case "C":
        arrDNA.push(["C", "G"])
        break
      case "T":
        arrDNA.push(["T", "A"])
        break
      case "A":
        arrDNA.push(["A", "T"])
        break
    }
  })

  // Step 5. Return the 2D array
  return arrDNA
}
pairElement("GCG")
```

### Without Comments:

```javascript
function pairElement(str) {
  const arrDNA = []

  const arrStr = str.split("")

  arrStr.forEach((x) => {
    switch (x) {
      case "G":
        arrDNA.push(["G", "C"])
        break
      case "C":
        arrDNA.push(["C", "G"])
        break
      case "T":
        arrDNA.push(["T", "A"])
        break
      case "A":
        arrDNA.push(["A", "T"])
        break
    }
  })

  return arrDNA
}
pairElement("GCG")
```

## Wrap up

That is it for this tutorial. We have used five different ways to solve the DNA Pairing challenge that is available on FreeCodeCamp.

Which of these solutions is fine for you? Do you have any other solutions? Share with us. Among all these solutions if I have to chose just one, I'd go for the 3rd one that makes use of `for...of`.
