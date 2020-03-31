const express = require("express")
const app = express()
const request = require("request")
const port = 3000

app.set("view engine", "ejs")

app.get("/", function(req, res){
    res.render("search")
})

app.get("/results", function(req, res){
    let movie = req.query.movie
    request(`http://www.omdbapi.com/?s=${movie}&apikey=<yourAPIkey>`, function(error, response, body){
        if(!error && response.statusCode == 200) {
            let parsedData = JSON.parse(body)
            res.render("results", {data: parsedData})
        }
    })
})

app.listen(port, function(){
    console.log(`Movie app started on port: ${port}`)
})
