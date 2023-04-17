// JavaScript (and CoffeeScript by extension) is a language that is heavily dependent on a run-time environment. While most people learn JS in a browser environment, there are other environments that run outside of a browser. Codewars runs your code in a Node.js environment.

// This kata is an attempt to introduce the NodeJS environment.

// Environment Differences
// The runtime environment gives your code the ability to interact with software outside of the language itself. For example, a browser environment has several built-ins that let you interact with a webpage. You can use functions like getElementById or XMLHttpRequest.

// Node.js, however, cannot use those browser-specific built-ins (go ahead, try). Node.js is an environment for javascript that is meant to run on your computer (server-side). So while you lose the ability to work with browser built-ins, you gain access to NodeJS-specific code.

// Kata
// We are going to replicate the kata Base64 Encoding, but instead of creating our own encoding / decoding functions, we will use NodeJS' Buffer module to do it for us.

// Create the function String.prototype.toBase64 that encodes a string in Base64. Also create the function String.prototype.fromBase64 that decodes a Base64 string into utf8.


String.prototype.toBase64 = function() {
    return Buffer.from(this).toString('base64');
  }
  
  String.prototype.fromBase64 = function() {
    return Buffer.from(this, 'base64').toString()
  }