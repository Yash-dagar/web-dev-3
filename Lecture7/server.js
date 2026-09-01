const http = require('http');

const users =[
    {id:101, name:"Prashant", email:"prashant@example.com" },
    {id:102, name:"John", email:"john@example.com" },
    {id:103, name:"Jane", email:"jane@example.com" },
    {id:104, name:"Alice", email:"alice@example.com" }
]

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // console.log(req.method);
    if(req.url=="/"&& req.method=="GET"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Welcome to the Home Page</h1>");
        res.end();
    }else if(req.url=="/about"&& req.method=="GET"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Welcome to the About Page</h1>");
        res.end();
    }else if(req.url=="/contact"&& req.method=="GET"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Welcome to the Contact Page</h1>");
        res.end();
    }else if(req.url=="/users"&& req.method=="GET"){
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify(users));
        res.end();
    }else if(req.url=="/users"&& req.method=="POST"){
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            const user = JSON.parse(body);
            users.push(user);
            res.writeHead(201, {"Content-Type": "application/json"});
            res.write(JSON.stringify(user));
            res.end();
        });
    }else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("<h1>Page Not Found</h1>");
        res.write("Page Not Found")
    }
    
})
server.listen(3000, () => { 
    console.log("Server is running on port 3000");
});