---
id: getting-started
title: Getting Started
sidebar_position: 2
---

To get started, you'll need both the AstraX extension and the API needed to integrate with it.

### Install the AstraX extension.

You'll want a local version of the extension to test with.

- Head over to the [Chrome extension store](https://chrome.google.com/webstore/category/extensions?hl=en) and install AstraX into your browser.

### Install AstraX API

Now we need a way to communicate with the extension. To facilitate this, we created a Javascript library called AstraX API that will let you send and receives messages from the extension.

#### If developing your application using Node.js

- Install the module using npm: `npm install @bajetech/astrax-api`

or

- Install the module using yarn: `yarn add @bajetech/astrax-api`

#### For browser-based applications NOT being built using Node.js

- Install the module using npm or yarn as described above, then you can use the minified file found at `node_modules/@bajetech/astrax-api/build/index.min.js`. Copy this file into any folder you want to load it from and then link directly to the copied file within your HTML via a script tag. So let's say, for example, that you copied the file to the path `assets/js/astrax-api/index.min.js` in your project structure, then your script tag may be like so:

```html
<script src="/assets/js/astrax-api/index.min.js"></script>
```
