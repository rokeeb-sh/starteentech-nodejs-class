// import using the type (commonjs)
// const dotenv = require('dotenv')
// const os = require('os');
// const fs = require('fs')
// const { subtraction, addition, multiplication } = require("./functions-commonjs.js");

// import using the type (module)
import { subtraction, addition, multiplication } from "./functions-module.js";
import os from "os"
import fs from "fs"
import dotenv from "dotenv"

dotenv.config();

console.log("Hello world!")
console.log("We are using node "+process.env.NODE_ENGINE+" for this class")
console.log(`We are using node ${process.env.NODE_ENGINE} for this class`)
console.log(os.totalmem())

fs.readFile('attendance.txt', 'utf8', (err, data) => console.log(data))
console.log("Testing nodemon")


// Today's class
subtraction(100, 19)
addition(100, 19)
multiplication(100, 19)
console.log("My PC Total Memory " + os.totalmem())