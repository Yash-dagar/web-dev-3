const express=require("express");
const app=express();
const PORT=3000;
const bodyParser=require("body-parser");
const cors=require("cors");
const morgan=require("morgan");
const helmet=require("helmet");
const rateLimit=require("express-rate-limit");

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());


app.get("/age-check/:age", (req, res, next)=> {
    let age =parseInt(req.params.age);
    try {
        if(age<18){
            throw new Error("You are  not eligible to vote")
        }else{
            res.send("You are eligible to vote")
        }
    } catch (error) {
        // res.status(500).json({success: false, message: "Age is less than 18"})
        next(error);
    }
})

app.use((err, req, res, next) =>{
    res.status(500).json({success: false, message: err.message})
})

app.use((req,res)=>{ //invalid route middleware
    res.status(404).json({success: false, message: "Route not found"})
})



app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    
})

app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
}))

app.get("/api", (req, res) => {
    res.send("Welcome to the API");
})
app.get("/api/data", (req, res) => {
    res.send("Here is some data");
})
app.get("/api/info", (req, res) => {
    res.send("Here is some info");
})
app.get("/api/stats", (req, res) => {
    res.send("Here are some stats");
})