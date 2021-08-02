// change the count-el in the HTML to reflect the new count
let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
    
}

function save() {
    console.log(count)
}
save()

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el")

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
let myName = "Elyor Doniyorov"
let greeting = "Welcome back, "

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting + myName




