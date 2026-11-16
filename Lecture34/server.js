const jwt=require('jsonwebtoken');
const data={
    _id:"123456"
}

const token=jwt.sign(data,"mysecret",{expiresIn:"1h"});
console.log(token);