const express=require("express");
const morgan=require("morgan")

const app=express();
const PORT=3000;



// app.use(morgan()); // Third Party Middleware

const logMiddleware=(req, res, next) => {
    // console.log(req.name) 
    req.name="John Date"
    console.log(`${req.method} ${req.url}`);
    console.log('"Time:', new Date().toLocaleString())
    // res.send("Hello from middleware")
    next();
}

const apiCheckMiddleware = (req,res,next) => {
    if(req.query.API_KEY=="1234"){
        console.log("Authenthicated");
        next();
    } else{
        res.send("API Invalid")
    }
}

// app.use(logMiddleware);
// app.use(apiCheckMiddleware); //global middleware

app.get("/", (req, res) => {
    console.log("Requestname:", req.name);
    console.log("Hello World")
    res.send("Hello world")
})

app.get("/data",apiCheckMiddleware , (req,res)=>{ //route level middleware
    res.json(
        {
            city: "New York",
            Country: "USA",
            temp: 32,
            humidity: 80
        }
    )
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    
})