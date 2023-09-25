---
title: Building Routing System in PHP from Scratch
date: "2023-09-25"
description: ""
published: true
---

If you’re just at the beginning of your journey in PHP development, chance is that you use complete file names in the URL to navigate your application, like `server/contact.php`. No worries, we all started that way, and it’s how we learn.

Today, I want you to improve how you navigate files in your application. We’ll be talking about routing, as it’s very crucial in any modern application. It’s a step forward in professional PHP development. A routing system simply maps an [HTTP](https://www3.ntu.edu.sg/home/ehchua/programming/webprogramming/HTTP_Basics.html) request to a request handler (function or method). In other words, it defines how we navigate or access different parts of your app without the need to type the file name. This is done by creating or setting routes (or paths). E.g.: the route `server/contact` lets us access the `contact.php` file.

## How routing works

Everything happens around a router. This later is the entry file of the app, and we name it `index.php`. Inside the file, we define the routing system thanks to `switch` or `match`. Last but not least, we must redirect all requests to the router. This is done in the configuration file of your PHP server. 

Before moving forward, let’s set up our project.

```bash
mkdir php-routing & cd php-routing
touch index.php .htaccess 
```

We’ll create views later. `.htaccess` is a directory-level Apache configuration file. You don’t need it if you use an Nginx server.

## **Redirect all HTTP requests to the router**

In the `.htaccess` file, add the directives below

```bash
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)＄ index.php
```

First, activate the Apache server’s runtime rewriting engine. The next directive (`RewriteCond`) limits access to physical files and lastly, all the upcoming requests are redirected to the `index.php`
file.

If it happens that your site or app is not at the root of our server (or if we don’t have a virtual host), your `.htaccess` should look like this:

```bash
RewriteEngine On
RewriteBase /folder/
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /folder/index.php [L]
```

Replace `/folder/` with the name of the folder containing your site.

Let’s see how you can redirect with an Nginx server.

If your PHP server is an Nginx server, you need to update the main configuration file named `nginx.conf` by default.

```bash
location / {
        try_files $uri $uri/ /index.php?$args;
}
```

Reload the server after the modification.

Should you miss where the configuration file is placed, try searching in one of the following directories: `/usr/local/nginx/conf` , `/etc/nginx` or `/usr/local/etc/nginx`.

## **Create the routing system**

We know how routing works, and we are even sending all requests to the router. Now is the time to write the code for the router.

In `index.php` add the code below

```php
<?php

$request = $_SERVER['REQUEST_URI'];

switch ($request) {

    case '':
    case '/':
        require __DIR__ . '/views/home.php';
        break;

    case '/views/users':
        require __DIR__ . '/views/users.php';
        break;

    case '/contact':
        require __DIR__ . '/views/contact.php';
        break;

    default:
        http_response_code(404);
        require __DIR__ . '/views/404.php';
        break;
}
```

First, we get the user request, then we call the appropriate page in the `views` directory. In case the path is not found in the server, we call the `404.php` page. I use both `''` and `'/'` to match `site.com` as well as `site.com/`.

## **Create the views**

Using the terminal, create the `views` directory in the root of the project and `cd` into it.

```bash
mkdir views
cd views
```

Create 4 files in the folder as shown below.

```bash
touch home.php users.php contact.php 404.php
```

Let’s just put some content in each file.

```php
// home.php
<h1>Home</h1>
<p>Welcome in my app.</p>
```

```php
// users.php
<h1>Users</h1>
<p>List of our users.</p>
```

```php
// contact.php
<h1>Conct us</h1>
<p>Getting in touch is easy. Just email us</p>
```

```php
// 404.php
<h1>404</h1>
<p>You've reached the end of Internet.</p>
```

## **Final thoughts**

In this tutorial, we learned how to create a basic routing system from scratch. Let’s recall the steps to follow:

- create a file name `index.php` in the root of the project. This is the router for your app
- redirect all incoming requests to the router. This is done in the configuration file of your server
- create the routing system with `switch` statement in the router

That’s all.

Happy coding!