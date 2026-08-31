const express=require('express');
const app=express();
const port=3000

const users=[
    {id:101,name:"John",email:"john@example.com"},
    {id:102,name:"Jane",email:"jane@example.com"},
    {id:103,name:"Bob",email:"bob@example.com"},
    {id:104,name:"Alice",email:"alice@example.com"},
]


app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Home Page</h1>");
});

app.get("/about",(req,res)=>{
    res.send(u);
});





app.listen(3000, () => {
    console.log('Server is running on port 3000');
});