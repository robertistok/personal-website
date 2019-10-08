---
title: Debugging Simple Arrow Functions More Efficiently
template: post
slug: debugging-simple-arrow-functions-more-efficiently
draft: false
featured: false
date: "2019-07-30T15:00:00.000Z"
description: >-
  Never convert an arrow function again to use curly braces if you only want to use console.log for debugging with this simple technique.
cover: "./debugging-simple-arrow-functions-more-efficiently-cover.jpeg"
category: JavaScript
tags:
  - Debugging
  - Programming
---

[![Photo by Markus Spiske on Unsplash](/debugging-simple-arrow-functions-more-efficiently-cover.jpeg)](https://bit.ly/2PxBrxn)

<div class="separator"></div>

Let's say we have the function below.

```js
const complexFunction = (a, b) => a + b;
```

It works fine, but we seem to encounter a weird bug from time to time. So what's the first step we take in debugging? Yes, you got it, we will start by logging the function parameters.

In order to do that though, we would need to refactor our function to something like the one below. Including the curly brackets, writing the console.log and adding the return statement. It's a lot of extra steps, right?

```js
const complexFunction = (a, b) => {
  console.log("[DEBUG]", a, b);
  return a + b;
};
```

But it does not have to be! If we just want to log the parameters, the version of the function below is a quick way to do it. We no longer have to convert our single line arrow function into a multi-line one.

```js
const complexFunction = (a, b) => console.log("[DEBUG]", a, b) || a + b;
```

(Just don't forget to remove the `console.log` once you've finished debugging.)

It seems a little hacky though and why does this even work? The statement is valid because of how logical operators work in JavaScript.

> "Logical operators are typically used with [Boolean](https://mzl.la/2zF1uIp "The Boolean object is an object wrapper for a boolean value.") (logical) values. When they are, they return a Boolean value. However, the `&&` and `||` operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they will return a non-Boolean value" --- [MDN web docs](https://mzl.la/2zEJFsO)

Because `console.log` resolves to `falsy`, the function will return the second part of it, which in our case is the `a + b`. Pretty neat, right?

## Final words

Discovering this small trick was game-changer when it comes to debugging arrow functions more efficiently. What do you think of this technique? Did you know about this before? Let's continue the discussion in the comments section.

Thanks for reading, and subscribe to do not miss out on any of my future posts! 🙏
