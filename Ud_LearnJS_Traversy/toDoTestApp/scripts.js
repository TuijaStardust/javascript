// Trying to learn everything at once and getting confused and giving up... 


let addItemForm = document.getElementById("addItemForm")
// ^ This method return OBJECT that represents HTML form element
let addTaskField = document.getElementById("addTaskField")
let taskList = document.getElementById("taskList")

addItemForm.addEventListener("submit", (event) => {
    event.preventDefault() // Prevent the default behaviour of web browser (reloading/refreshing the webpage) and sending off the data somewhere)
    createItem(addTaskField.value) // <- Passing the value as an argument... (Calling the function that is actually below...)
})

// !!! You can't add an event listener to something that doesn't exist yet...

function createItem(x) { 
    let itemHTML = ` <li>${x} <button onclick="deleteItem(this)">Delete</button></li>`

    taskList.insertAdjacentHTML("beforeend", itemHTML) 
    // arg 1. : Where in the element do we want to add the new bit of content?
    // arg. 2 : Content/HTML that is added to the element

    addTaskField.value = "" // clears the input field (sets the value to empty string)
    addTaskField.focus() // moves the focus to the input field
}

function deleteItem(elementToDelete) {
    elementToDelete.parentElement.remove() // Deletes "this" element (button) AND the element that is housing button element => <li>  
    // ^ remove() method removes...
}