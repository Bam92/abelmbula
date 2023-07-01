---
title: How to consume the environment variables in a React app
date: "2021-07-10T22:23:03.284Z"
description: "Getting start with .env in your React app"
published: true
---

An **environment variable** is a global system variable that can be accessed by all the processes or users running under the operating system.

It's made up of a name/value pair: 

```
DB_HOST = mysql
```

In most cases, we use environment variables to deploy apps in any environment without code changes. We also use them to make sure that #key# sensitive information : like passwords or API keys #key# is not leaked into the app's source code.

In this shot, we'll be learning how to properly work with environment variables in a React app. I will be assuming that your project is created with CRA.  

## Working with environmental variables on local
To illustrate the process so far, let's imagine that we'll be working with Firebase integration.

First things first, create an `.env` file on the root of your project. Now, we can add in all the Firebase info we have:

```xml
REACT_APP_API_KEY=key-here
REACT_APP_AUTH_DOMAIN=lorem.com
REACT_APP_DATABASE_URL=https://lorem-5fde6-default-rtdb.firebaseio.com/
REACT_APP_PROJECT_ID=lorem-5fde6
REACT_APP_STORAGE_BUCKET=lorem-5fde6.appspot.com
REACT_APP_MESSAGING_SENDER_ID=543505592089
```
> **Note**: 
> * All environment variables must start with **`REACT_APP_`** in order to work.
> * Always restart your development server after any modification in `.env` files.

The next step is to configure and initialize Firebase -- this is where we'll need to consume our environment variables. Depending on how your structure your project, you may have to go to your `firebase.js` or something similar.  

We can see this in action in the code below:

```js
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

// the code continues here...
```
All our (necessary) environment variables are stored in an object called `config`.

> **Note**: In case you want to access the environment variables in an HTML file, just do it like this:
> ```
> <title>%REACT_APP_WEBSITE_NAME%</title>
> ```

### Never deploy `.env`. It's for local use only
Yes, you read it right: you should *never* send your `.env` file along with your source code. It's intended to be used in a local environment only.

So, you might ask, how can the app be deployed or used on the other side? Good question!

First, create a `.gitignore` file (if not already done) and add your `.env` file there so that it can't be tracked by git. Now, you can create a `.env-example` file (or whatever explicit name you want) based on the `.env`, but without real sensitive data. 

When you deploy your app, your host gives you an opportunity to set the environment variables needed for your app to successfully run. In case you download the source code of the app, you'll need to create a `.env` file based on `.env-example`. 

## Conclusion
Environment variables are used for app deployment flexibility as it allows us to avoid sharing secrets in our code. All environment variables are defined in the `.env` file, which should not be shared nor tracked with Git. To let people know what environment variables are required for your app, you need to specify them in `.env-example` or in some other, similar name.
