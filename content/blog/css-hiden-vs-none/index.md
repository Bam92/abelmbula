---
title: "Understanding CSS: visibility hidden vs display none"
date: "2020-01-01T22:23:03.284Z"
description: "All these two properties are used to hide content on the page, let see how they are different"
---

When it comes to hide HTML content to the client, we have two main techniques in CSS: ```visibility: hidden``` and ```display: none```. Some people think they are just synonyms, others are just confused and don't know which one to use in which case. Let make things clear in this tutorial.

These two rules are not synonyms, no. 
* ```visibility: hidden``` means that the element won't be visible but the space is allocated for it in the page in other word the element is hidden from the view but not the page flow, leaving space for it on the page.
*  ```display: none``` unlike the first one means the element will not appear on the page at all. In this case the tag is removed from the normal flow of the page, allowing other elements to fill in.

>In one word, in ```visibility: hidden``` the space is allocated but in ```display: none``` no space allocated. 

Let understand the difference with some examples:

## Example 1:

The HTML code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Understanding CSS: visibility hidden vs display none</title>
</head>
<body>
    <h1>Understanding CSS: visibility hidden vs display none</h1>
    <div id="container">
      <div id="left">
          <div>
              <p>When it comes to hide HTML content to the client</p> 
              <p>visibility: hidden and display: none. </p>
          </div>
      <div>
          <p>These two rules are not synonyms, no:</p> 
          <ul>
              <li>visibility: hidden means that the element won't be visible but the space is allocated</li>
              <li>display: none unlike the first one means the element will</li>
          </ul>
      </div>
      <div>
          <p>The DNA strand is missing the pairing element.</p> 
          <p>For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]</p>
      </div>  
      <div>
          <p>Our goal of this exercice is to <span>return the missing trand</span>  into a 2d array</p> 
          <p>Some people think they are just synonyms, others are just confused </p>
      </div>
                
      </div>

      <div id="right">
          <div class="vh">
              <p>When it comes to hide HTML content to the client</p> 
              <p>visibility: hidden and display: none. </p>
              </div>
              <div>
                  <p>These two rules are not synonyms, no:</p> 
                  <ul>
                      <li>visibility: hidden means that the element won't be visible but the space is allocated</li>
                      <li>display: none unlike the first one means the element will</li>
                  </ul>
              </div>
              <div class="dn">
                  <p>The DNA strand is missing the pairing element.</p> 
                  <p>For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]</p>
              </div>
              <div>
                  <p>Our goal of this exercice is to <span class="vh">return the missing trand</span>  into a 2d array</p> 
                  <p>Some people think they are just synonyms, others are just confused </p>
              </div>
              
        </div>
    </div>
</body>
</html>
```

The CSS code:

```css
#container {
    display: flex;
    justify-content: space-between;
    width: 71em;
}

#left,
#right {
    width: 35em;

}

#left div:first-child,
#right div:first-child {
    background: olivedrab;
}

#left div:nth-child(2),
#right div:nth-child(2) {
    background: orange;
}

#left div:nth-child(3),
#right div:nth-child(3) {
    background:cadetblue;
}

#left div:last-child,
#right div:last-child {
    background:orchid;
}

.vh {
    visibility: hidden;
}

.dn {
    display: none;
}
```

The result: 

https://codepen.io/bam92/pen/MWYGYyE