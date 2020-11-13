// !! Express needs to be downloaded with npm to project folder before it can be required
let express = require("express")

let ourApp = express() // Creates a server

// use() is always included to an express project (boiler-plate); enables the feature in express so that the users input is easily accessible fromt the request.body oject
ourApp.use(express.urlencoded({extended: false}))

ourApp.get('/', function(req, res) { // get() arg 1.) URL we want to look out for; arg. 2.) A function Express runs when someone sends a request to arg.1. URL
    res.send(`
        <form action="/answer" method="POST">
            <p>What is the color of grass?</p>
            <input name="grassColor" autocomplete="off">
            <button>Submit answer</button>
        </form>
    `)
}) 

ourApp.post('/answer', function(req, res) {
    if (req.body.grassColor.toUpperCase() == "GREEN") { // body is the body of the post >> inside that the grassColor property (html field / value)
        res.send(`
        <p>YESSS! Grass is always greener on the other side!</p>
        <a href="/">Back to start</a>
        `)
    } else {
        res.send(`
        <p>NOPE! Wrong color! Try again</p>
        <a href="/">Back to start</a>
        `)
    }
} )

ourApp.get('/answer', function(req, res) {
    res.send("Nothing to see here. Go away.")
} )


ourApp.listen(3000)

// ^ action is the URL where the form values are sent to 
// ^ method is the type of request the browser is going to send to the server

// toUpperCase() method converts string all capital letters