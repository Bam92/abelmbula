---
title: Five Ways to Solve the DNA Pairing Challenge in JavaScript
date: "2019-12-30T22:23:03.284Z"
description: "Computer Science is awesome and amazing, trust me!"
---

Computer Science is awesome and amazing, trust me! There are always more than one way to come to a solution to a given problem in most cases.

In this tutorial we will learn how to solve the [Free Code Camp **DNA Pairing Challenge**](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing) in five different ways.

## Algorithm Challenge 

> The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
> Base pairs are a pair of AT and CG. Match the missing element to the provided character.
> Return the provided character as the first element in each array.
> For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
> The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

```javascript
function pairElement(str) {
  return str;
}

pairElement("GCG");
```

## Provided Test Cases

* ***pairElement("ATCGA")*** should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
* ***pairElement("TTGAG")*** should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
* ***pairElement("CTCTA")*** should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]

## Understanding the Problem

As you may have read in the challenge description above, the goal of this exercice is to return the missing trand into a 2d array.
In biology class we learned about DNA baise pairs (need a refresher? [Wikipedia](https://en.wikipedia.org/wiki/Base_pair) is your friend). They are A - T and C - G, and they go both way. So everytime we have:
* **A** string we return an array ['A', 'T']
* **T** string we return an array ['T', 'A']
* **C** string we return an array ['C', 'G']
* **G** string we return an array ['G', 'C']

## 1. Using For Loop and If Statement

For this solution we will loop over the parametor passed to the function and use if statement to return the correct pair.
```javascript
function pairElement(str) {
  // Step 1. Declare the variable of type array that will encapsulate other paired arrays
  const arrDNA = [];

  // Step 2. Create the FOR loop with initializer less then str.length
  for (let i = 0; i < str.length; i += 1) {
    // Step 3. Use if statement to evaluate baise pair and push it to arrDNA
    if (str[i] === 'A') arrDNA.push([str[i], 'T']);
    if (str[i] === 'T') arrDNA.push([str[i], 'A']);
    if (str[i] === 'C') arrDNA.push([str[i], 'G']);
    if (str[i] === 'G') arrDNA.push([str[i], 'C']);
  }

  /* Here "GCG"'s length equals 3
      For each iteration: i = 0 and arrDNA = [[str[i], 'corresponding pair']]
      First iteration:  i = 0        arrDNA = [['G', 'C']]
      Second iteration: i = 1        arrDNA = [['G', 'C'], ['C', 'G']] 
      Third iteration:  i = 2        arrDNA = [['G', 'C'], ['C', 'G'], ['G', 'C']]         

    End of the FOR Loop*/

  // Step 4. Return the 2D array
  return arrDNA;
}

pairElement("GCG");
```

### Without comments:

```javascript
function pairElement(str) {
  
  const arrDNA = [];

  for (let i = 0; i < str.length; i += 1) {
    
    if (str[i] === 'A') arrDNA.push([str[i], 'T']);
    if (str[i] === 'T') arrDNA.push([str[i], 'A']);
    if (str[i] === 'C') arrDNA.push([str[i], 'G']);
    if (str[i] === 'G') arrDNA.push([str[i], 'C']);

  }

  return arrDNA;
}

pairElement("GCG");
```

## 2. Using For Loop, CharAt(), and If Statement

In this solution we will make use of the loop and if statements once mores in combination with the String object's charAt() method. 
* **String.prototype.charAt()** method returns the character at the specified index in a string.

```javascript
function pairElement(str) {
  // Step 1. Create an empty array that will encapsulate other paired arrays
  const arrDNA = [];

  // Step 2. Iterate through the str with a FOR loop 
  for (let i = 0; i < str.length; i += 1) {
    // Step 3. Use if statement to evaluate baise pair and push it to arrDNA
    
    // If the current str character is X create an array of current str with its corresponding pair and push the array to arrDNA
    
    if (str.chartAt(i) === 'A') // if A
      arrDNA.push([str[i], 'T']); // ...push [A - T]
    else if (chartAt(i) === 'T') // if T 
      arrDNA.push([str[i], 'A']); //...push [T - A]
    else if (chartAt(i) === 'C') // if C
      arrDNA.push([str[i], 'G']); // ...push [C - G]
    else if (chartAt(i) === 'G') // if G
      arrDNA.push([str[i], 'C']); // ...push [G - C]

  }

  // Step 4. Return the 2D array
  return arrDNA;
}

pairElement("GCG");
```

### Without Comments:

```javascript
function pairElement(str) {
  const arrDNA = [];

  for (let i = 0; i < str.length; i += 1) {
    
    if (str.chartAt(i) === 'A') 
      arrDNA.push([str[i], 'T']); 
    else if (chartAt(i) === 'T') 
      arrDNA.push([str[i], 'A']); 
    else if (chartAt(i) === 'C') 
      arrDNA.push([str[i], 'G']); 
    else if (chartAt(i) === 'G') 
      arrDNA.push([str[i], 'C']); 

  }

  return arrDNA;
}

pairElement("GCG");
```
