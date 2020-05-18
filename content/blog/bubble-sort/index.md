---
title: How to Implement Bubble Sort Algorithm in JavaScript
date: "2020-05-17T22:23:03.284Z"
description: "A quick introduction on bubble sort algorithm"
---

As some of you know, I am runnig a [challenge](https://twitter.com/abelmbula/status/1260575365162041350) that consists of writing a blog post everyday (plus other activities) for the next 100 days.

For today (day 4 / 100), I want to share with you about **Bubble Sort Algorithm** and how to implement it in JavaScript language.

Let's go!

## A little Words about Bubble Sort

What does Wikipedia say about it?

> is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

Simply speaking, Bubble Sort compares all the element one by one and sort them based on their values.

For example, given a list of integers that is to sort in ascending order. Using Bubble Sort, we begin by comparing the first item of the list with the next one; if the first item is greater than the second one, we swap both of them. We will then compare the second item with the third one and continue like this until we reach the last item.

## Implementation

Let's consider a sample array with the expected output.

- array: `[4, 3, 5, 9, 1]`
- output: `[1, 3, 4, 5, 9]`

Here is how bubble sort will sort this sample array step by step. Items in **bold** are those that are being compared.

**First iteration**:

[**4**, **3**, 5, 9, 1] --> [3, 4, 5, 9, 1], 4 > 3 so swap

[3, **4**, **5**, 9, 1] --> [3, 4, 5, 9, 1], 4 < 5 so no swapping

[3, 4, **5**, **9**, 1] --> [3, 4, 5, 9, 1], 5 < 9 so no swapping

[3, 4, 5, **9**, **1**] --> [3, 4, 5, 1, 9], 9 < 1 so swap

**Second iteration**

[**3**, **4**, 5, 1, 9] --> [3, 4, 5, 1, 9], 3 < 4 so no swapping

[3, **4**, **5**, 1, 9] --> [3, 4, 5, 1, 9], 4 < 5 so no swapping

[3, 4, **5**, **1**, 9] --> [3, 4, 1, 5, 9], 5 > 1 so swap

[3, 4, 1, **5**, **9**] --> [3, 4, 1, 5, 9], 5 < 9 so no swapping

**Third iteration**

[**3**, **4**, 1, 5, 9] --> [3, 4, 1, 5, 9], 3 < 4 so no swapping

[3, **4**, **1**, 5, 9] --> [3, 1, 4, 5, 9], 4 > 1 so swap

[3, 1, **4**, **5**, 9] --> [3, 1, 4, 5, 9], 4 < 5 so no swapping

[3, 1, 4, **5**, **9**] --> [3, 1, 4, 5, 9], 5 < 9 so no swapping

**Fourth iteration**

[**3**, **1**, 4, 5, 9] --> [1, 3, 4, 5, 9], 3 > 1 so swap

[1, **3**, **4**, 5, 9] --> [1, 3, 4, 5, 9], 3 < 4 so no swapping

[1, 3, **4**, **5**, 9] --> [1, 3, 4, 5, 9], 4 < 5 so no swapping

[1, 3, 4, **5**, **9**] --> [1, 3, 4, 5, 9], 5 < 9 so no swapping

**Fifth iteration**

[**1**, **3**, 4, 5, 9] --> [1, 3, 4, 5, 9], 1 < 3 so no swapping

[1, **3**, **4**, 5, 9] --> [1, 3, 4, 5, 9], 3 < 4 so no swapping

[1, 3, **4**, **5**, 9] --> [1, 3, 4, 5, 9], 4 < 5 so no swapping

[1, 3, 4, **5**, **9**] --> [1, 3, 4, 5, 9], 5 < 9 so no swapping

As you can see in the 4th iteration the array is already sorted, but the algorithm does not know if it is complete. The algorithm needs one **whole** pass without any **swap** to know it is sorted, reason why you see 5th iteration.


### Pseudocode
I always see it a good way to write my thinking of an algorithm in plain English before writing it in a real programming language. This is what I call the pseudocode notation (I think. Tell me if I am wrong)

```
function bubbleSort(arr)
Set isSwapped to true
WHILE isSwapped = true
    Set isSwapped to false
    FOR each item in the arr
        IF current item > next item
            swap items
            Set isSwapped to true
        ENDIF
    ENDFOR
ENDWHILE
RETURN arr
```

I am not an expert in pseudocoding, but I am totally sure that even grandma may understand this.

Let's translate our pseudocode into JavaScript.

### Bubble Sort in JavaScript

```js
function bubbleSort(arr) {
  let isSwapped = true
  while(isSwapped) {
    isSwapped = false
    arr.forEach((item, index) => {
      if(item > arr[index + 1]) {
        arr[index] = arr[index + 1]
        arr[index + 1] = item
        isSwapped = true
      }
    })
    return arr
  }
```
Nothing tricky here. I use a `while` loop and prefer `forEach` to iterate over the passed array.

## Complexity Analysis
To end our journey, let me say a just one word about the performance of this algorithm.

Bubble sort is a very simple sorting algorithm but it is too slow. You'll almost never find or use it in real world. It is mostly used for education purpose.

* Worst Case Time Complexity, aka `Big-O`: `O(n^2)`
* Best Case Time Complexity, aka `Big-omega`: `O(n)`
* Average Time Complexity, aka `Big-theta`: `O(n^2)`
* Space Complexity: `O(1)`

Note that I did not reinvent the wheel, references are there (see down)

## References
* [Bubble Sort Algorithm](https://www.studytonight.com/data-structures/bubble-sort)
* [Bubble sort on Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort)
* [Javascript Algorithms — Bubble Sort](https://medium.com/javascript-algorithms/javascript-algorithms-bubble-sort-3d27f285c3b2)
