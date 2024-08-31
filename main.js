require('dotenv').config()
const os = require('os');
const fs = require('fs')

console.log("Hello world!")
console.log("We are using node "+process.env.NODE_ENGINE+" for this class")
console.log(`We are using node ${process.env.NODE_ENGINE} for this class`)

console.log(os.totalmem())

fs.readFile('attendance.txt', 'utf8', (err, data) => {
    console.log(data)
})

console.log("Testing nodemon")