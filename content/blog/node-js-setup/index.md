---
title: How to Setup a Minimal Node.js Server
date: "2020-08-24T22:23:03.284Z"
description: ""
published: true
cover: "./cover.png"
---

Node.js is a JavaScript engine that let us use JS language in the backend. You can say goodbye to Apache, Ngix servers or something similar for your backend needs. Thanks to Node.js, your JS knowledge is enough to work in the backend.

[TL;DR–Explore the example repository](https://github.com/Bam92/node-starter)

# Goals

- bootstrap a Node.js server
- serve up an HTML file

# Prerequisites

- have Node.js installed in your local machine (at least version 10)
- have a basic knowledge of CLI (command-line interface)

To check your Node.js installation, open your terminal and type

```sh
node --version
```

mine is `v14.4.0`

Check also the packet manager that comes with Node.js `npm`

```sh
npm --version
```

mine is `6.14.7`

In case you don't have `Node.js`, go [here](https://nodejs.org/en/download/) to download it.

# The project initialization

We need a folder to locate our project. Create one and name it as you want and move to it. In this tutorial, I'm using the CLI.

```sh
mkdir node-server
cd node-server
```

The folder name is `node-server`.

Once in our project folder, from the CLI, we can now initialize the `npm` project like this:

```sh
npm init -y
```

Nothing tricky here, we're initializing an npm project with default values (`-y` flag). If you leave `-y` flag you'll be answering questions interactively. Maybe you should try it :).

Did you notice it? npm has created a file (`ls` to see it) called:

# package.json

_package.json_ is an important file in any Node.js project as it keeps all info (values) for the projet: author, licence, packages...

If you want to see defaults info in _package.json_, use this command:

```sh
npm config list
```

In case you want to change defaults, use `npm set <key><value>`

```sh
npm set init.author.name "<Your Name>"
npm set init.author.email "you@example.com"
npm set init.author.url "example.com"
npm set init.license "MIT"
```

There's much to say about the _package.json_ file, but I think we can stop by there for now.

Now is the time to discuss the file organization.

# The file structure

There are many file organizations out there. You should feel free to go with one that works fine for you. In this section, I'm showing you one of the ways I do.

Make sure you're in our initial project folder (`node-server`). From there create an `src` folder and within it create `server.js` and `app.js` and `views` and `public`.

```sh
mkdir src && cd src
touch server.js app.js
mkdir views public
```

I find it better to separate API declarations (`app.js`) from network concerns (`server.js`), but I see many friends using just one file either server.js or app.js. The `views` folder is about the screen (html files or template like `pug`). In `public` folder I put images, styles and scripts.

In final, my file structure looks like this

Now, we can start coding.

# Bootstrapping a Node.js server with Express.js

To create a Node.js server, it's easy and recommended to use a framework like Express.js. To add a JS package as a dependency in your project, you use this syntax: `npm install --save <package name>`.

Let's install Express.js package.

```sh
npm install --save express
```

If the installation is successful, you'll see a `node_modules` folder created in your project directory. Also, in the _package.json_ under `dependencies` property `express` is added with its version (`"express": "^4.17.1"`).

> **Note**:<br>
> If you're using **git**, do add `node_modules` in **.gitignore**.

We can now make use of `express`.

Go to `app.js` and add this code:

```js
// app.js
const express = require("express")

const app = express()

module.exports = app
```

Nothing tricky here. We require `express`, we create an instance of it so that we can use it in the project and at the end we export the file.

We can now start the server in `server.js`

```js
const app = require("./app")
const port = 4000

app.listen(port, () => console.log(`The server is listening on port ${port}`))
```

We use `app.listen()` function that binds and listens the connections on the specified host and port. To see if everything is OK we can start the server like this:

```js
node src/server.js
```

You should get this message on the console `The server is listening on port 4000`. But if you go on `localhost:4000` you'll get an error (`Cannot GET /`) because we did not define any route yet. We can add a simple route like this:

```js
// app.js
// previous code here...

app.get("/", (req, res) => {
  res.send("Hello")
})
```

For productivity purposes, we can add color to our console messages and a logger to get the log on the console. Install these packages:

```sh
npm install chalk morgan
```

Once done, we can configure them like this:

```js
// server.js
const color = require("chalk")

app.listen(port, () =>
  console.log(`The server is listning on port ${color.green(port)}`)
)
```

I'm using `chalk` green color here. You can use the one you want. Check the [doc](https://www.npmjs.com/package/chalk)!

```js
// app.js
const logger = require("morgan")

app.use(logger("tiny"))
```

`morgan` is a logger middleware. You can log anything you want on the console. You can log as much info as you want. Here I only want some basic info, so I use `tiny`. Other options are `combined`, `dev`, `common`, `short`. Try them yourself and see the output or read the [doc](https://www.npmjs.com/package/morgan).

Run the server (`node src/server.js`) and see the result. On the browser you have `Hello`, on the console 4000 is in green color and some other info printed there.

Just one more thing before we jump to serving up an html file. Instead of typing everytime `node src/server.js`, we can add it to our _package.json_ so that we can use the automated tools out there like `npm start`. So, under `scripts` property add

```js
"start": "node src/server.js"
```

Even better, add `src/server.js` as the value of `main` property and modify the "start" script like so:

```js
"start": "node ."
```

To start the server, you simply have to do `npm start`.

To finish this section, add the string "world" after "Hello" and go to the browser to see the result. Do you see "world"? No, sorry :(. The reason is that, the server did not restart to serve up new modifications. Stop the server (`Ctrl + C`) and restart it. Now you can see "Hello world" on the browser.

To allow the automatic restart of the server, we can use `nodemon` package. Install it and modify the "start" script as so: `"start": "nodemon ."`.

Congratulations! Your server is up and listening fine on port `4000`.

Now is the time to serve up HTML file.

# Serving files

In the `views` forlder, create a file called `index.html` and add this content:

```html
<!--views/index.html-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Node.js Starter</title>
  </head>
  <body>
    <h1>Hello!</h1>
    <p>If you can see this text, your server is running properly.</p>
  </body>
</html>
```

> How can we see the content of the file above on the browser?

Let's learn how to:

## Deal with files and directories
To work with files and directories in a Node.js app, we need these elements:

- **sendFile()**: an Express.js method available on the response object (**res**) that is used to render a file 
- **path**: a buit-in module that gives us all of the tools we need to handle cross-platform paths.
- **__dirname**: a global object that return the absolute path of the directory containing the currently executing file

Let's put all into practice.

```js
res.sendFile(path);
```
The path we want send is this `views/index.html`. We could just do this to define our path:

```js
res.sendFile(__dirname + "views/index.html");
```

The code above will just work fine if you are on a UNIX-like system. If you're developing in a Windows machine you'll encounter some problems as paths do not work the same on Windows OS and MacOSX or GNU/Linux. To avoid having troubles, we can let Node.js handle this for us. Welcome `path` module!

```js
// app.js
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
```

I include the `path` module in the project and use its `.join()` method to join (concatenate) all paths into a string. The final path after I run the server will look like this: 

```
/home/abelmbula/Documents/dev/educative-courses/node-starter/src/views/index.html
```
# Wrap up
In this lesson, we learned how to create a simple Node.js server with Express framework and how to render an html file. You can find the full code [here](https://github.com/Bam92/node-starter). 