---
title: How I Write my Pseudocode
date: "2020-05-18T22:23:03.284Z"
description: "A quick introduction on how you can write your own pseudocode"
---

I am working a lot on algorithms nowadays, and I find it easy to use pseudocode to express my thinking on a given algorithm. So, I have decided to share with you on that topic.

## Intro to Pseudocode
> Please man tell me, is pseudocode a new language by Facebook or Google?

I knew that you could ask the question above, so I have prepared a simple answer for you. Read down.

To answer quickly to your question, I'd say that it is not all a language, so nothing with GAFAM here.

Let's hear what Wikipedia says about it:

>  an informal high-level description of the operating principle of a computer program or other algorithm. It uses the structural conventions of a normal programming language, but is intended for human reading rather than machine reading.

In short, pseudocode is just the resolution of an algorithm writen in plain English (I mean in a human language: french, chinese, lingala...).

## Benefits
There are many benefit out there for you to use pseudocode. Let's me cite some that I know (you may complete me if you have others):
* reinforce your understanding of your solution before you implement it
* easy to share and explain as it is written in human language
* no constraint: you use any format you want
* programming language-free: a solution of an algorithm written in pseudocode can be understood by all developers even though they don't use the same programming language
* and more (comple here)  

## Implementation
I think this is the section you were looking for.

Let's take an exemple: implement the bubble sort algorithm.

```
function bubbleSort(arr)
Set isSwapped to true
WHILE isSwapped = true
    Reset isSwapped to false
    FOR each item in the arr
        IF current item > next item
            swap items
            Reset isSwapped to true
        ENDIF
    ENDFOR
ENDWHILE
RETURN arr
```
As you can see, I am just explain my logic flow so you can easilly implement it in your prefered language.

I use `function` key-word here just to let you know that it is a function, other people use `procedure` key-word. Eveytime I use a bloc(for, if...) I make sure I use endBloc at the end (they are called scope terminators) of it and I also capitalize them (but I think all these are optional, although they may be recommanded). 

I think you also see that I use indentation as much as I can. I suggest you to do so for readability.

## Better to Know
The main rule for pseudocode is that there is `no-rule` at all. It depends upon schools, companies or just personal preferences. 

Just make sure:

* your logical flow is clear and easy enough to be understood by kids or grandpa
* you're consistent on the format you opt to use.

Don't be astonished to see pseudocode follows the format of a given language. A C developer will naturally format his pseudocode following C coding style, that is so for a fortran dev and others. The main thing is that your pseudocode must be easy to consume by almost everyone without so many efforts. Don't hesitate to be creative if you want :).

## Some Key-words to Use

**Loops and selections**

* Do While...EndDo; 
* Do Until...Enddo; 
* Case...EndCase; 
* If...Endif; 
* Call ... with (parameters); 
* Call; 
* Return 
* ....

**Verbs and other words**

* Generate, 
* Compute, 
* Process, etc. 
* Set, 
* Reset, 
* Increment, 
* Compute, 
* Calculate, 
* Add, 
* Sum, 
* Multiply,
* Print, 
* Display, 
* Input, 
* Output, 
* Edit, 
* Test,
* Etc. 

And you? Can you share with us your pseudocode? 

## Closing Notes

A pseudocode is a plain English (or other language) written process of how you can proceed to resolve an algorithm or any givem computer problem.

There's no formal rule at all, it's all depend upon your personal style or schools or entreprise. The most important thing is consistency in your chosen style. You can make use of key-word as `Do While...EndDo`, `If...Endif`, `Return`.