/**
 * GLOSSARY
 * 
 *  = Should equal
 *  == check if values are equal
 *  != true if value is anything but...
 */


// FUNCTIONS
// ---------

function greet(name, favCol) {
    // body of the function
    alert("Heiheihei, my name is " + name + " and my favorite color is "+ favCol + ".");
}

greet(Tuija, green);


/* A HIGHER-ORDER FUNCTION
*  -----------------------
* A function that either
*   - Accepts a function as an argument
*   - Returns a function
*/

// Function that accepts another function as an argument (not very common idea in other languages...)
document.addEventListener("click", clickbaitFunction()); 

function clickbaitFunction() {
    console.log("Hooray! You clicked the bait!")
}

// Function that returns a function
function createMultiplier(multiplier) {
     return function(x) {
        return x * multiplier;
     }
}

let doubleMe = createMultiplier(2);
// ^ replaces arg. multiplier with value 2  
let tripleMe = createMultiplier(3);
// ^ replaces arg. multiplier with value 3  
let quadrupleMe = createMultiplier(4);
// ^ replaces arg. multiplier with value 4  

console.log(doubleMe(5)); 
// ^ replaces arg. "x" with value 10

//Objects (data containers )

let cat = {
    // include multiple peaces of data -> Properties and methods (= functions within objects)
    name: "Roger",
    age: 9,
    eyeColor: "Green",
    meoow() {
        alert("meoooow!");
    },
    // data can be nested with objects within objects
    foods: {
        favorite: "porridge",
        icky: "cabbage"
    }
}

cat.name();
cat.meoow();
cat.foods.icky();

// document object model -> Document is a prebuilt object that contains methods and properties 
 
document.addEventListener("click", awesomeFunction ); 
// 1st argument: which event we are listening for
// 2nd argument: reference to the function we want to run whenever the event happends !!! No parentheses !!!

function awesomeFunction() {
    alert("This is awesome!")
}

// Arrays (Collections of items)
let myFavNumbers = [8,13,18,38,42];
let myFavColors = ["green", "turquoise", "yellow", "orange"];
let myFavPets = [
    {name: "Betsy", type: "Dachshund", age: 9},
    {name: "Skippy", type: "Cat", age: 2},
    {name: "Jolly", type: "Horse", age: 1},
    {name: "Reese", type: "Cat", age: 6}
    ];
// Facebook is a collection (= an array) of post objects that we scroll through
// Alot of programming is just working with arrays

// Array Methods
// -------------
// Array is a special type of object (built-in JavaScript object) that has access to it's methods

//How to retrieve value of an object within array:
console.log(myFavPets[1].type);

// push()
// ------
// action: push() method adds value that is passed as an argument to the end of (defined) array -> !! Mutates the array !! 
// return: value of push() method is the counted number of values (= length) in the array afterwards
//  -> return value can be stored in a variable / printed out / passed as value in a function
myFavColors.push("green");


// splice()
// --------
// Removes value from the arrays
myFavColors.splice(1, 1);
// 1st argument: index of the removed item
// 2nd argument: how many items you want to remove starting from 1st arg. index

// map()
// -----
// Create an array based on another array
// accepts function as an argument 
// returns a value that is a new array -> created of values from another array
// calls arg. function for each item in original array

let petNames = myFavPets.map(nameOnly);

// Whatever this function returns gets added to the new array
function nameOnly(pet) { // value of the pet argument is passed from myFavPets array through map() 
    return pet.name;
}

// filter()
// --------
// Create an array based on another array that contains certain filtered values
// function as an argument
// returns a value that is a new array -> created of values from another array
// calls arg. function for each item in the original array; filters the ones that match the conditions

let cats =  myFavPets.filter(onlyCats);

function onlyCats(pet){
    // passes items from filtered array (myFavPets) as arguments
    // returns true or false; original array item will or won't be added to the new array depending if the condition is true or false
    return pet.type == "Cat";
}

function onlyBabies(pet) {
    return pet.age < 3;
}

// Actions can be chained together instead of writing them out as separate commands
let babyCatNames = myFavPets.filter(onlyCats).filter(onlyBabies).map(nameOnly);

// ----- CONDITIONING AND LOOPING -----

// IF STATEMENT
// ============

let wienerdogCount = 18;

if (wienerdogCount > 10) { // true of false? If true, code runs. (Boolean values: true / false)
    console.log("Woof Woof!");
} else { // else is the fallback...; not necessary
    console.log("Should we have another one?");
}

// LOOPING
// =======

// WHILE LOOP
// Leveraging the true or false value
// While loop keeps repeating it self as long as the condition is true.
// Without the leveraging it ends up into an infinite loop. Not good.

let catCount = 2; 

while(catCount < 20) {
    document.write("There are " + catCount + " Cats.<br>");
    catCount++
} 

// FOREACH
// In JS all arrays have access to method forEach()

let myColors =["red", "blue", "green"]

myColors.forEach(saySomethingNice);

function saySomethingNice(color) { 
    // when running the forEach method for an array, it is going to pass array values as parameters to the function it asks to run for each value
     console.log(color + " is a nice color.<br>")
}

// Scope (variables) & Context (objects)
// =====================================
// Scope -> Where we can access the variables
// Code can reach outwards but not inwards (scope can be zoomed out but not in)

function scopeExFunction() {
    let myDog = "Dachshund"; // <-- Variable myDog is scoped to this block; cannot be accessed from outside the function body block 
    console.log(myDog);
}

scopeExFunction();

// *****

let myCat = "Skippy"; // <-- Global scope variable can be referred to anywhere (below)

function scopeGloFunction() {
    let myCat = "Skappy"; // <-- This variable has the same name as global myCat but it is in fact it's own entity as a variable 
    if (2 + 2 == 4) {
        let myCat = "Babbi"; // <-- Block level scope variable
        console.log("inside if statement lives " + myCat);
    }
    console.log("inside function lives " + myCat);

}

scopeGloFunction();
console.log("in global scope lives " + myCat);


// Context ->
// The "this" keyword points towards the object that is EXECUTING the current Function.


let ziggy = {
    firstName: "Ziggy",
    lastName: "Stardust",
    driveCar() {
        function imAFunctionNotAMethod() {
            console.log(this) // <- this points to a global object "window"
        }
        imAFunctionNotAMethod() // ... is actually window.imAFunctionNotAMethod() -> Window is a built-in global JS object
        console.log(this.firstName + " " + this.lastName + " is driving a car.") 
    }
} 

ziggy.driveCar()

// *****

let ziggy = {
    firstName: "Ziggy",
    lastName: "Stardust",
    driveCar() {
        function imAFunctionNotAMethod() {
            console.log(this) // <- this points to a global object "window"
        }
        imAFunctionNotAMethod() // ... is actually window.imAFunctionNotAMethod() -> Window is a built-in global JS object
        console.log(this.firstName + " " + this.lastName + " is driving a car.") 
    }
} 

ziggy.driveCar()

function breathe() {
    console.log(this.firstName + " " + this.lastName + " just inhaled and exhaled .") 
}

breathe.call(ziggy)

// ^ In JS a function is an object that has access to methods
// -> call() method is going to execute the function, but first controls the "this" keyword
// -> this will point to whatever is used as a parameter for the call method