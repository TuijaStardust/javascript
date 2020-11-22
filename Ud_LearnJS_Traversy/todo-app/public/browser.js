// FRONT END CODE - Code for the browser side actions

// make sure Axios library is available via server.js; CDN https://github.com/axios/axios

function itemTemplate(item) {
    return `<li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
                <span class="item-text">${item.text}</span>
                <div>
                <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
                <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">Delete</button>
                </div>
            </li>`
}

// Initial page load render ("Client side rendering")
let ourHTML = items.map(function(item) {
    return itemTemplate(item)
}).join('')
document.getElementById("item-list").insertAdjacentHTML("beforeend", ourHTML) 

// Create feature
let createField = document.getElementById("create-field")

document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault()
    axios.post('/create-item', {text: createField.value}).then(function(response) {
        // this is what runs after axios request is complete
        // "Create the HTML for a new item"
        document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data))
        // Clear the textfield after adding an item
        createField.value = ""
        // Place the tab focus on textfield
        createField.focus()
    }).catch( function() {
         console.log("Please try again later.")
     })
})


// arg 1.) The name of the event
// arg 2.) Function that runs when the event occurs  
document.addEventListener("click", function(e) {
    // "only if the element that was actually clicked on contains the class of edit-me do we want the function body code to run"
    
    // Delete feature
    if (e.target.classList.contains("delete-me")) {
        if (confirm("Are you shure you want to delete this item ")) {
            axios.post('/delete-item', {id: e.target.getAttribute("data-id")}).then(function() {
                // this is what runs after axios request is complete
                 e.target.parentElement.parentElement.remove()   
             }).catch( function() {
                 console.log("Please try again later.")
             })
        }
    }

    // Update feature
    if (e.target.classList.contains("edit-me")) {
        // save user input into a variable
        let userInput = prompt("Enter your desired new text", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML)
        
        if(userInput) {
        // send the text and _id values to node server through axios
        axios.post('/update-item', {text: userInput, id: e.target.getAttribute("data-id")}).then(function() {
           // this is what runs after axios request is complete
            e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput
        }).catch( function() {
            console.log("Please try again later.")
        })  
        // ^ post() arg 1.) the url where to send post request; make up an address that makes sense, arg 2.) data that is sent along the url request
        // -> returns a "promise" - useful when it is uncertain how long an action is going to take
        // ^ then() arg is a function that won't run until post() action is complete
        // ^ catch() arg is a function that will run IF the the post() action runs into a problem
        }
    }
})

// ---> go to server.js and add app.post() method for /update-item