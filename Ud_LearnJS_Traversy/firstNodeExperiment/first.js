// Creating a localhost server that listens to incoming requests

// Writing code to node environment (not the web browser )

// Import (=require) node code package
let http = require("http") 

let ourApp = http.createServer(function (req, res) { // node environment has in-built http object (similar as document object in broswer environment)
    if (req.url == "/") {
        res.end("Hello, Awesome to see You here!")
    }
    if (req.url == "/about") {
        res.end("Thank You for paying attention!")
    }

    // ^ If request is true, response is... 

    // Fallback response
    res.end("Oh no! We can't find the page You're looking for.")
}) 
ourApp.listen(3000) // arg. Port number

// run file on node and the server is up and running
// Browser: localhost:3000 (<- port number)

// Using data submitted by user on server

