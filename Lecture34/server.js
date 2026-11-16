const jwt=require('jsonwebtoken');
const data={
    _id:"123456"
}

//const token=jwt.sign(data,"mysecret",{expiresIn:"1h"});
//console.log(token);

const generatedToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTYiLCJpYXQiOjE3OTQ4MDU2NzYsImV4cCI6MTc5NDgwOTI3Nn0.MyA6zcLyTJweIuRU7KBZ-boEuZ5z8Nk1RB0uNC-Hb8Q"

const result=jwt.verify(generatedToken,"mysecret");
console.log(result);
{}