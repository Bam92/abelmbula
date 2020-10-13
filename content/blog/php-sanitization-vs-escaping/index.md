---
title: "PHP Security: Understanding Sanitization and Escaping"
date: "2020-10-12T22:23:03.284Z"
description: ""
published: true
cover: "./cover.png"
---

As software developers, we are required to take security of our apps. to be continued

In this tutorial, I want you to learn how to **sanitize** and **escape data** in your PHP apps.

Let's go.

# Sanitization

Simply speaking, sanitization is the process or act of cleaning or filtering your input data. These data can come from various sources: user inputs via a form, API or web service.

> Never never trust user inputs. Sanitize as much as you can, especially when you don’t know what to expect or you don’t want to be strict with data validation.

## Simple Input Field

Imagine we have an input field named `login`.

```
<input type="text" id="login" name="login">
```

You can sanitize the input data with the `filter_input()` function as follow:

```php
<?php

$login = filter_input(INPUT_POST, 'login', FILTER_SANITIZE_STRING);
```

# Escaping

# Closing Notes
