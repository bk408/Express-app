const express = require("express");       // first we import the express module


const app = express();           // create an app 
const port = 80;                // run on port on 80


// app.get("/", (req, res)=>{
//       res.send("This is homepage of my first express app with BK")
// });

app.get("/", (req, res)=>{
    res.status(200).send("This is homepage of my first express app with BK")
});

app.get("/about", (req, res)=>{
    res.send("This is about page of my first express app with BK")
});

app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found")
});

app.post("/about", (req, res)=>{
    res.send("This is a post request about page of my first express app with BK")
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)    // to run the app on port
});