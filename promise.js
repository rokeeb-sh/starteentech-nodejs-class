const enioluwa = new Promise(function (resolve, reject) {
    const daddyAnswerToEnioluwa = "NO"; // Saying yes to enioluwa

    if (daddyAnswerToEnioluwa === "YES") {
        resolve("The answer is yes");
    } else {
        reject("The answer is otherwise");
    }
})


enioluwa
.then(() => console.log("Thank you daddy!"))
.catch(() => console.log("Sad emoji"))


async function register() {

    try {
        // insert your info in their database
        await sendEmailFunction() // to the new registered user's email

        /// other functions to run here
    } catch {
        console.log("Just Error");
    }
}