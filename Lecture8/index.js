const http = require("http");
const users=[
    {id:101, name:"Alex", email:"GZD1@example.com"},
    {id:102, name:"ravi", email:"ravi@.com"},
    {id:103, name:"sachin", email:"sachin@.com"},

]

const server=http.createServer((req, res) => {
    // console.log(req.url);
    // console.log(req.headers);
    if(req.url=="/" && req.method=="GET"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Welcome to Home Page</h1>");
        res.end();
    }else if(req.url=="/users" && req.method=="GET"){
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify(users));
        res.end();
    }
    else if(req.url=="/users" && req.method=="POST"){
        let body="";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            const newUser = JSON.parse(body);
            users.push(newUser);
            res.writeHead(201, {"Content-Type": "application/json"});
            res.write(JSON.stringify(newUser));
            res.end();
        });
    }
    else if(req.url=="/users" && req.method=="PUT"){
        let body="";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            const updatedUser = JSON.parse(body);
            const userIndex = users.findIndex(user => user.id === updatedUser.id);
            if (userIndex !== -1) {
                users[userIndex] = updatedUser;
                res.writeHead(200, {"Content-Type": "application/json"});
                res.write(JSON.stringify(updatedUser));
                res.end();
            } else {
                res.writeHead(404, {"Content-Type": "application/json"});
                res.write(JSON.stringify({error: "User not found"}));
                res.end();
            }
        });
    }
    else if(req.url=="/users" && req.method=="DELETE"){
        let body="";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            const deletedUser = JSON.parse(body);
            const userIndex = users.findIndex(user => user.id === deletedUser.id);
            if (userIndex !== -1) {
                users.splice(userIndex, 1);
                res.writeHead(200, {"Content-Type": "application/json"});
                res.write(JSON.stringify(deletedUser));
                res.end();
            } else {
                res.writeHead(404, {"Content-Type": "application/json"});
                res.write(JSON.stringify({error: "User not found"}));
                res.end();
            }
        });
    }
    else if(req.url=="/services" && req.method=="GET"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Welcome to Services Page</h1>");
        res.end();
    }
    else if(req.url=="/about" && req.method=="GET"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Welcome to About Page</h1>");
        res.end();
    }else if(req.url=="/contact" && req.method=="GET"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Welcome to Contact Page</h1>");
        res.end();
    }else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("<h1>404 Page Not Found</h1>");
        res.write("Page not found")
    }  
})

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
