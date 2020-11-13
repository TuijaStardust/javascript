// MISC - Must know info about JS

// ANONYMOUS FUNCTIONS

// Usually functions have names ... 
// Anonymous functions are functions that are used as arguments 
// AND are likely not used anywhere else (No way to call it elsewhere 'cause it doesn't have a name)

document.addEventListener("click", function() {
    console.log("Awesome that you clicked for no reason!")
} )

// ARROW FUNCTIONS
// Uses minimalized syntax

document.addEventListener("click", () => console.log("Awesome that you clicked for no reason!")) 

let myNumbers = [100, 500, 2000]

// Instead of: let doubledNumbers = myNumbers.map((x) => {return x * 2})

let doubledNumbers = myNumbers.map(x => x * 2) 
// ^ no need to use return
// If there is a single parameter, there's no need for parentheses around it; () Are needed if there is 0 or multiple parameters

console.log(doubledNumbers)

/* "When we call a function that doesn't belong to an object... 
* or I should say when we call a function that isn't a method,
* JS considers the object that is calling/executing that function 
* to be the environment's global object. 
*/ 

// Arrow functions don't change the value of the "this" keyword !!!
// (Arrow functions don't contain separate "this" keyword like regular functions)
// Uses the same zoom-out strategy to look up existing variables as in scoping

let ziggy = {
    firstName: "Ziggy",
    lastName: "Stardust",
    driveCar() {
        let imAFunctionNotAMethod= () => console.log(this) // <- this points to nearest object upwards => object named ziggy

        imAFunctionNotAMethod() // ... is actually window.imAFunctionNotAMethod() -> Window is a built-in global JS object
        console.log(this.firstName + " " + this.lastName + " is driving a car.") 
    }
} 

ziggy.driveCar()

// FUNCTION HOISTING

// Usually the order of code lines matters in JS 
// Variables can't be accessed above the line where they are created
// JS hoists (=lifts up) functions, that are defined with the keyword function following the name, to the top lines of the file

// Functions with other type of syntax need to pay more attention to the line order!! 

// TEMPLATE LITERALS

// Easier to write strings that contain dynamic content
// SYNTAX: `Regular text string that contains a previously defined ${variable}`

let myName = "Tuija"
console.log(`My name is ${myName} and this is a glorious day!`)

// - - - - -
// Semicolons are the sign for ending a code "sentence"
// JS has automatic semicolon insertion => adds semicolon automatically as long as the code is kept clean and organized with white space and line breaks