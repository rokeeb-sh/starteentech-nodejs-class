const mydefaultError = new Error("Oh geeez, something went wrong!")

// this will throw an error
try {
    cole.log("Enioluwa")
} catch (error) {
    // throw the actually error
    console.log(error)
}

// this works
try {
    console.log("Enioluwa")
} catch {
    // this throws the default error
    console.log(mydefaultError)
}