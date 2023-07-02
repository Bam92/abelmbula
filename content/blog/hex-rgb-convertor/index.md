---
title: Create a Hex to RGB Convertor App with HTML, CSS, and JavaScript (1/2)
date: "2019-12-31T22:40:32.169Z"
description: Combine your HTML, CSS, and JavaScript knowledge to build a useful app.
published: true
---

With just a little knowledge of HTML, CSS, and JavaScript (JS), you can create something really great. This tutorial aims to showcase how you can combine your knowledge of these three languages and build a functional app.

## What are we building?

As you may have read in the title, the app you'll build at the end of this lesson takes a hex (short for hexadecimal) color (e.g **#457a7a**) as input and returns an rgb equivalent as output (**rgb(69,122,122)**).

Let call our app **RGBizer App**. As a bonus feature, the submitted color will be the background color on the right side of the page, and as the color for the RGB text.

You can see the finished app https://codepen.io/bam92/pen/QWwOMYR.

We will be building our app in two parts. This is the first one, and it is focusing on HTML and CSS.

## The Basic Formula

It all starts with the HTML.

```html
<main>
  <div class="main-child">
    <h1>Color Hex to RGB convertor</h1>
    <p>
      Enter the hexadecimal code of your favarite color in the box below to get
      rgb() equivalente
    </p>

    <form>
      <label for="hex-code">#</label>
      <input
        type="text"
        placeholder="Enter hex code without #"
        name="hex-code"
        id="hex-code"
      />
      <input type="submit" value="Convert" />
    </form>
    <div id="wrapper-rgb">
      <p>RGB color is <span id="rgb"></span></p>
    </div>
  </div>
  <div id="preview" class="main-child">
    <p>This is your color preview</p>
  </div>
</main>
```

We create a simple form with an input where the user can enter the hex code, and a submit button to start conversion. A hex color always starts with **#**, so no need to enter it, and has six symbols in the range [0-9a-f].

The output will be printed in the `span` element above after the user has submitted the form.

## The Style with CSS Flex

Let's start by the body:

```css
body {
  box-sizing: border-box;
  margin: 0;
}
```

We use `box-sizing: border-box` because it makes it much easier to size elements. `margin: 0` let us occupy the whole viewpoint.

Next, we style `main` element as a flex container with a height of `45em` as this...

```css
main {
  display: flex;
  height: 47em;
}
```

...so that we have two flex items placed in the horizontal axis (row).

In order to let us easily center content horizontally and vertically, we make our two flex items flex containers:

```css
.main-child {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
```

The content is aligned in the column (`flex-direction: column`) and occupy all available space in `height` and half of it in `width`. To center horizontally we use `justify-content: center` and `align-items: center` is used to center vertically. We can add `background: green` to the second bloc just to distinguish our two blocs, and have in mind that we will be applying background color there every time the user submit a color.

```css
.main-child:last-child {
  background: green;
}
```

For the text in the `.main-child:last-child`, let's use `floralwhite` for the color:

```css
.main-child:last-child p {
  color: floralwhite;
}
```

To finish, let's add some style to the `:first-child` of `.main-child` class.

```css
.main-child:first-child input[type="text"] {
  width: 25em;
}

.output {
  visibility: hidden;
}

#rgb {
  font-weight: bold;
}
```

Nothing tricky here. We have modified a bit our markup to add `.output` class to the `div` element so that we hide it.

## Conclusion

In this first part of our tutorial, we have defined the markup of our app (do you remember it name? **RGBizer**). To style it we used CSS flexbox. In the second and last part of this tutorial, you will learn how to make it functional with JavaScript. You can see this state of our app here https://codepen.io/bam92/pen/BayrRZV.

Before you go, thank you for reading. If you found this interesting don't hesitate to share with friends.

Happy hacking!
