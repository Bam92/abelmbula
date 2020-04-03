---
title: From vanilla JS to React - Migrate with Easy
date: "2020-04-01T22:23:03.284Z"
description: "How to display 'Hello World' on the UI using React library"
---


You know vanilla JavaScript like no one in the world, and you are so confident that you can do whatever you want on the DOM with only pure JS. No need of a framework or a library. Yeah?

Let's do a tour and see if your "commitment" of JS world will still be the same. In this tutorial, we will display the string **Hello Wolrd** to the UI using both your very loved vanilla JS and React, a new library I want to try when it comes to work with the view (UI).`

Before diving in dept, let's say something about React.

## #React: What & Why

What is React? To answer this, let's borrow the definition from the official site

>[React is] a JavaScript library for building user interfaces --*reactjs.org*

That is it. React is what it claims to be, the **view (V)** in a MVC architecture. It helps manage UIs (User Interface) in a efficient way.

It's OK. But is React worth of learning? You can ask. This question takes me to the *Why* section.

There are many reasons out there for why you might give React a try. 

When it comes to building app you need the right tools to do the right job. If you're working on front end stuffs in this modern Web, React is right for you. It is fast (thanks to its virtual DOM). If you are looking for a way to gain in performance for your apps, you should give React a try. It is easy to learn and integrate to an existing app. If you are thinking of the learning curve how to migrate your existing code base, know that React was built in a way that it can be easy to introduce it in existing Facebook app. It is so popular, backed by Facebook (I am not paid by them) and adopted by many big companies (Instagram, Dropbox). If you're looking front-end jobs, Reack skill is a must-have. 

Let's now start our tour.

## #Displaying "Hello World" on the DOM

We are not going to build something big. We only want to display the traditional "Hello world" starting with how you do it in vanilla JS and how you can do it now in React.

### The vanilla JS way

I can't teach you anything here, you are the JS ninja.

Let's create a simple `div` in `HTML` and use JS to append `Hello World`.

```html
<body>
    <div id="root"></div>

    <!-- JS goes here -->
    <script>
        const rootElt = document.getElementById('root');
        const childElt = document.createElement('div');
        childElt.textContent = 'Hello World';
        childElt.className = 'container';
        rootElt.appendChild(childElt);
    </script>
</body>
```
Nothing tricky here. To create a simple UI in JS, you simply need a place where you are going to append your generated DOM. We access our `div` element and create a `sub-div` of `container` `class` and `Hello World` string. At the end, we append the newly created `div` to the the existing `div` (`root div`).

You can view the UI live on codepen 
https://codepen.io/bam92/pen/xxGedoz

Now is the time to try React.

### The React way

React and it realated tools are `npm` packages. It means that you need a `CLI` (command line interface) tool to work with it. But for sake of simplicity, we'll use a service called `unpackage.com`. This service is a CDN (content delivery network) for everything on `npmjs.com`. It will provide us with a file of the package we need, that we'll later add on our page in a script tag.

To work with React we need two packages:

* `react`: responsible for creating React elements,
* `react-dom`: responsible for rendering of created elements on the page

Let's use the same code as above and modify where it is necessary.

```html
<body>
    <div id="root"></div>

    <!-- JS goes here -->
    <script src="https://unpkg.com/react@^16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@^16/umd/react-dom.development.js"></script>
    <script>
        const rootElt = document.getElementById('root');
        const childElt = React.createElement('div', {}, 'Hello World');
        // childElt.textContent = 'Hello World';
        // childElt.className = 'container';
        // rootElt.appendChild(childElt);
    </script>
</body>
```

We first add the two scripts we want in order to effectivelly use React.

As you can see here, we don't directly make use of the `createElement` API but `React.createElement()`. Here is how it works.

The `React.createElement` has three parametors of which the last two are optional.

The first parametor is the `type`of element we want to create, in our case a `<div>` tag. But it can also be any valid `HTML` tag or a React component.

The second parametor is an object containing properties (aka 'props' in React terms) that get passed to the component. We'll be using it in a while.

The last argument is the children of the component. This can be a string as in our example or a reference to another component.

Now that we have our element created, we can render it to the page using `ReactDOM.render()`. It takes two parametors. The first one is what we want to render (`childElt` in our case), and the last on is the target DOM node to render things into (`rootElt` here). 

```html
<body>
    <!-- ... -->
    <script>
        const rootElt = document.getElementById('root');
        const childElt = React.createElement('div', {}, 'Hello World');

        // childElt.textContent = 'Hello World';
        // childElt.className = 'container';
        // rootElt.appendChild(childElt);
        ReactDOM.render(childElt, rootElt);
    </script>
</body>
```

The final code looks like this:

```html
<body>
    <div id="root"></div>

    <!-- JS goes here -->
    <script src="https://unpkg.com/react@^16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@^16/umd/react-dom.development.js"></script>
    <script>
        const rootElt = document.getElementById('root');
        const childElt = React.createElement('div', {}, 'Hello World');

        // childElt.textContent = 'Hello World';
        // childElt.className = 'container';
        // rootElt.appendChild(childElt);
        ReactDOM.render(childElt, rootElt);
    </script>
</body>
```
We have `Hello World` displayed on the page just as in vanilla JS. But there is one more thing we need to do to get the exact same thing as in vanilla JS. Our created element must be of `class` `container`. Let's refactor our code.

```html
<body>
   <!-- ... -->
    <script>
        // ...
        const childElt = React.createElement('div', {
            children: 'Hello World',
            className: 'container'
        });

        // childElt.textContent = 'Hello World';
        // childElt.className = 'container';
        // rootElt.appendChild(childElt);
        ReactDOM.render(childElt, rootElt);
    </script>
</body>
```
What you can notice here is that we no longer use the last argument in stead, we have props object as our second argument with the children and the class name. We can omit the `children` prop and add its value as the third argument:

`const childElt = React.createElement('div', { className: 'container' }, 'Hello World')`

We have fixed everything to reflect the initial project. You can view it on codepen

https://codepen.io/bam92/pen/vYOMogy

Let's move to the next level in our React journey: `JSX` syntax.

### Write React code like a pro: use JSX syntax

`JSX` stands for `JavaScript + XML`. It is written like this `const divElt = <div>Hello World</div>;`. Don't think of it as `HTML` but as a kind of template language with the full power of JavaScript.

With this new syntax, React has 'broken' the traditional rules of building web sites/app such as separation of technologies: markup (HTML), style (css), behaviour (JS). This new syntax makes it easy to develop app.

When using `JSX` notice that under the hood it calls `React.createElement()`. It is not mandatory to use `JSX` when writing React code, you can use only `React.createElement()`. But `JSX` is a recomandation and massivilly adopted by the community. 

Time for practice.

Before starting to write our new code there is a notice for your. `JSX` is not a regualar JS, no. As consequence, a browser cannot execute JS files that contain JSX code. 

To be able to execute JSX code we need a to transpile it using `Babel`

```html
<div id="root"></div>

<!-- JS goes here -->
<script src="https://unpkg.com/@babel/standalone@7.9.4/babel.min.js"></script>  <!-- Got this from Babel doc: https://babeljs.io/docs/en/babel-standalone -->

<script type="text/babel"> // Add this: type="text/babel"
// code ...
</script>
```

We add the script the will be in charge of transforming JSX into plain JS. Also the wrapper script for our JSX code is defined as type of `text/babel` not the traditional `text/javascript`.

We can now write our JSX code

```html

<script type="text/babel"> // Add this: type="text/babel"

    // create element
    const childElt = <div className="container">Hello world</div>

    // and render it 
    ReactDOM.render(childElt, rootElt);    
  </script>
```
The only thing that change here is the way we create our `childElt`. See the full code:

```html
<div id="root"></div>

<!-- JS goes here -->
<script src="https://unpkg.com/react@^16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@^16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone@7.9.4/babel.min.js"></script> 

<script type="text/babel"> 
    const rootElt = document.getElementById('root');
    const childElt = <div className="container">Hello world</div>
    ReactDOM.render(childElt, rootElt);    
</script>
```
Concise and cool, no?

See the output on codepen

https://codepen.io/bam92/pen/oNXRvgw

## Conclusion

In this tutorial we tried to get started with React by building a simple UI that says `Hell World`. We used both `React.createElement()` and `JSX` syntax coupled with `React.render()`. I think this gives a taste of React.

Tell me if you'll go for React or not yet.
