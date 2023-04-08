'use strict';

const fs = require('fs');

//Read the data from the file and returned
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

console.log(textIn);

// How to write into a new file

const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;

fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written!');

// Blocking and Non-Blocking Asynchronous nature of Node.js

/**
 * Each line wait for the previous one to end and execute -> Blocking
 */

// Asynchronous is non-blocking -> Runs on the background
// Read on the background and move to the next one
