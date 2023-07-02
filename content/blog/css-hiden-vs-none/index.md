---
title: "Understanding CSS: visibility hidden vs display none"
date: "2020-01-01T22:23:03.284Z"
description: "All these two properties are used to hide content on the page, let see how they are different"
published: true
---

When it comes to hide HTML content to the client, we have two main techniques in CSS: `visibility: hidden` and `display: none`. Some people think they are just synonyms, others are just confused and don't know which one to use in which case. Let make things clear in this tutorial.

These two rules are not synonyms, no.

- `visibility: hidden` means that the element won't be visible but space is allocated for it in the page. In other words, the element is hidden from the view but not the page flow, leaving space for it on the page.
- `display: none` unlike the first one, this CSS rule means the element will not appear on the page at all. In this case the tag is removed from the normal flow of the page, allowing other elements to fill in.

> In one word, in `visibility: hidden` the space is allocated but in `display: none` no space allocated.

Let understand the difference with some examples:

## Example 1:

The HTML code:

```html
<h1>Understanding CSS: visibility hidden vs display none</h1>
<div id="container">
  <div id="left">
    <div>
      <p>When it comes to hide HTML content to the client</p>
      <p>visibility: hidden and display: none.</p>
    </div>
    <div>
      <p>These two rules are not synonyms, no:</p>
      <ul>
        <li>
          visibility: hidden means that the element won't be visible but the
          space is allocated
        </li>
        <li>display: none unlike the first one means the element will</li>
      </ul>
    </div>
    <div>
      <p>The DNA strand is missing the pairing element.</p>
      <p>
        For example, for the input GCG, return [["G", "C"], ["C","G"],["G",
        "C"]]
      </p>
    </div>
    <div>
      <p>
        Our goal of this exercice is to
        <span>return the missing trand</span> into a 2d array
      </p>
      <p>Some people think they are just synonyms, others are just confused</p>
    </div>
  </div>

  <div id="right">
    <div class="vh">
      <p>When it comes to hide HTML content to the client</p>
      <p>visibility: hidden and display: none.</p>
    </div>
    <div>
      <p>These two rules are not synonyms, no:</p>
      <ul>
        <li>
          visibility: hidden means that the element won't be visible but the
          space is allocated
        </li>
        <li>display: none unlike the first one means the element will</li>
      </ul>
    </div>
    <div class="dn">
      <p>The DNA strand is missing the pairing element.</p>
      <p>
        For example, for the input GCG, return [["G", "C"], ["C","G"],["G",
        "C"]]
      </p>
    </div>
    <div>
      <p>
        Our goal of this exercice is to
        <span class="vh">return the missing trand</span> into a 2d array
      </p>
      <p>Some people think they are just synonyms, others are just confused</p>
    </div>
  </div>
</div>
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
  background: cadetblue;
}

#left div:last-child,
#right div:last-child {
  background: orchid;
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

As you can see the result, I have two blocs right (control) and left (test). They have the same exact elements which are four `div`s and one `span` elements mainly. On the left all contents are visible whereas on the right bloc we use `visibility: hidden` and `display: none` for some tags. Let's analyze the result now.

`visibility: hidden` is used for the first div in the test bloc (right), as result the content is hidden but the space for it is still available. This is because `visibility: hidden` hide the element but still leaves it on the page flow.

Next, we apply `display: none` to the div 3. What you see is that the content disappears completely and its space is used by other elements (div 4 in this example). As we said above, `display: none` hide element and removes it from the normal flow of the page.

You can also remark that in `div` 4 we used `visibility: hidden` for the `span` element.

## Example 2

In this example we'll see the behavior with child nodes. We will use inline CSS styling here.

```html
<div id="parent" style="visibility:hidden;">
  <p>This is the parent area</p>
  <div id="child" style="visibility:visible;">
    <p>I am the child</p>
  </div>
</div>
```

In the code snippet above the parent area is hidden but the child one is visible. But if we use `display: none` in the same context like this:

```html
<div id="parent" style="display: none;">
  <p>This is the parent area</p>
  <div id="child" style="display: bloc;">
    <p>I am the child</p>
  </div>
</div>
```

Nothing is shown to the user though we asked to display the child `div` (by using `display: bloc`). This is because of `display: none` applied to the parent `div` that removes everything in the page flow.

https://codepen.io/bam92/pen/jOEeGaV

Still confused with `visibility: hidden` and `display: none`? Imagine yourself in a room with two other persons. The first person hides behind a curtain while the second person leaves the room.

The first person is not visible but still in the room and occupy its space: that is `visibility: hidden` rule. The second one left the room, he is not visible as the first one but he does not occupy any space in the room: that is `display: none` rule.

I hope that this tutorial helped you understand the difference between these two CSS rules: `visibility: hidden` and `display: none`. Share it with friends if you find it interesting.
