const express = require("express")
const app = express()
const request = require("request")
const port = 3000

// app.set("view engine", "ejs")

app.get("/", function(req, res){
    res.send("Welcome to Movie App")
})

app.get("/results", function(req, res){
    request("http://www.omdbapi.com/?s=california&apikey=<yourAPIkey>", function(error, response, body){
        if(!error && response.statusCode == 200) {
            let parsedData = JSON.parse(body)
            res.send(parsedData["Search"][0]["Title"])
        }
    })
})

app.listen(port, function(){
    console.log(`Movie app started on port: ${port}`)
})
